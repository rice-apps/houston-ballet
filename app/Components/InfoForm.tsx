"use client";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function InfoForm() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [submitted, setSubmitted] = React.useState(false);

    const recaptchaRef = React.useRef<ReCAPTCHA | null>(null);

    type UserData = {
        name: string;
        emailString: string;
        phoneNumberString: string;
        token: string;
    };

    // fetching csvwrite api endpoint to send the phone number to the server side
    async function postData(url: string, userInput: UserData, type: string) {
        // Formulate API request.
        const request = {
            method: type,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(userInput),
        };
        // Make call to API endpoint.
        console.log("url", url);
        const response = await fetch(url, request);
        if (response.ok) {
            return response.json();
        }
    }

    // Store phone number from input textbox.
    const handleSubmit = async () => {
        // If inputs are non-empty
        if (
            email != "" &&
            phoneNumber != "" &&
            email.match("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,20}") &&
            phoneNumber.length == 14
        ) {
            const recaptchaToken = await recaptchaRef?.current?.executeAsync();
            const userInput: UserData = {
                name: name,
                emailString: email,
                phoneNumberString: phoneNumber,
                token: recaptchaToken,
            };

            // await postData("/api/csvwrite", userInput, "PUT").then(() => {
            //     console.log("logged");
            //     // Display notification toast
            //     toast.success("Submitted successfully!", {
            //         position: "top-right",
            //         autoClose: 3000,
            //         hideProgressBar: true,
            //         closeOnClick: true,
            //         pauseOnHover: true,
            //         draggable: true,
            //         progress: undefined,
            //         theme: "light",
            //     });
            // });

            await postData(
                "https://hb-strapi-production.up.railway.app/api/form-process",
                userInput,
                "POST",
            ).then(() => {
                toast.success("Submitted successfully!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            });

            setSubmitted(true);
        } else {
            // If email or phone number is empty
            if (email == "" || phoneNumber == "") {
                toast.error("Please fill in all fields.", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } else if (phoneNumber.length != 14) {
                toast.error("Please enter a valid US phone number.", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } else if (
                email.match("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,20}")
            ) {
                toast.error("Please enter a valid email.", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        }
    };

    const handlePhoneChange = (event) => {
        const { value } = event.target;
        const onlyNums = value.replace(/[^\d]/g, "");
        let number = "";

        if (onlyNums.length < 4) {
            number = onlyNums;
        } else if (onlyNums.length < 7) {
            number = `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3)}`;
        } else {
            number = `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 6)} ${onlyNums.slice(6, 10)}`;
        }

        setPhoneNumber(number);
    };

    return (
        <>
            <div className="relative flex flex-col items-center justify-center text-center">
                <form
                    className=" dark:text-black-400 z-10 mt-20 flex w-full max-w-72 flex-col rounded-3xl border border-black bg-white p-6  text-left font-bold tracking-wide outline-4 dark:border-gray-600 md:max-w-md md:p-8"
                    aria-label="Notification Sign Up"
                >
                    <ReCAPTCHA
                        ref={recaptchaRef}
                        size="invisible"
                        sitekey="6LdjedspAAAAAOSI0BupgJbODmdYfzG4eV4uwdIL"
                    />
                    <span className="flex flex-col gap-y-10">
                        {!submitted ? (
                            <TextField
                                required
                                label="Full Name"
                                placeholder="John Doe"
                                id="full_name"
                                className="focus:outline-none"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                inputProps={{
                                    style: {
                                        padding: "16.5px 14px 16.5px 0px",
                                        "--tw-ring-offset-width": "0",
                                    },
                                    "aria-label": "Full Name",
                                }}
                                aria-label="Full Name"
                                role="textbox"
                            />
                        ) : (
                            <></>
                        )}

                        {!submitted ? (
                            <TextField
                                required
                                type="email"
                                label="Email"
                                placeholder="example@gmail.com"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                inputProps={{
                                    style: {
                                        padding: "16.5px 14px 16.5px 0px",
                                        // HACK: remove double focus bars by setting tailwind's ring-offset-width to 0 explicitly
                                        "--tw-ring-offset-width": "0",
                                    },
                                    pattern:
                                        "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,20}",
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <EmailIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                aria-label="Email Address"
                                role="textbox"
                                error={
                                    email != "" &&
                                    !email.match(
                                        "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,20}",
                                    )
                                }
                            />
                        ) : (
                            <>
                                <h1 className="font-normal">
                                    You are now subscribed to our notifications
                                    at the email address{" "}
                                    <span className="text-medium text-indigo-500">
                                        {email}
                                    </span>{" "}
                                    and phone number{" "}
                                    <span className="text-medium text-indigo-500">
                                        {phoneNumber}
                                    </span>
                                    !
                                </h1>
                            </>
                        )}

                        {!submitted ? (
                            <TextField
                                required
                                type="tel"
                                label="Phone Number"
                                placeholder="(123) 456 7890"
                                id="phone_number"
                                className="focus:outline-none"
                                value={phoneNumber}
                                onChange={handlePhoneChange}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PhoneIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                inputProps={{
                                    style: {
                                        padding: "16.5px 14px 16.5px 0px",
                                        "--tw-ring-offset-width": "0",
                                    },
                                    "aria-label": "Phone Number",
                                }}
                                aria-label="Phone Number"
                                role="textbox"
                                error={
                                    phoneNumber.length > 0 &&
                                    phoneNumber.length < 14
                                }
                            />
                        ) : (
                            <></>
                        )}
                    </span>
                </form>

                {!submitted ? (
                    <Button
                        onClick={handleSubmit}
                        variant="contained"
                        className="top -top-3 z-10 flex w-1/4 rounded-lg bg-ballet bg-cover bg-no-repeat dark:hover:bg-gray-800 dark:focus:ring-gray-900  md:-top-5 md:w-1/6"
                        style={{
                            textTransform: "none",
                        }}
                        aria-label="Submit Form"
                    >
                        Submit
                    </Button>
                ) : (
                    <></>
                )}
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
}
