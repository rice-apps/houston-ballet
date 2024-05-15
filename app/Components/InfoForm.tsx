"use client";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import { MuiTelInput, matchIsValidTel } from 'mui-tel-input'
import "react-toastify/dist/ReactToastify.css";

export default function InfoForm() {
    const [email, setEmail] = React.useState("");
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [submitted, setSubmitted] = React.useState(false);

    const recaptchaRef = React.useRef<ReCAPTCHA | null>(null);

    type UserData = {
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
        if (email != "" && phoneNumber != "" && matchIsValidTel(phoneNumber, {
            onlyCountryies: ["US"], // optional,
            excludedCountryies: [], // optional
            continents: [] // optional
          }) && email.match("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,20}")) {
            const recaptchaToken = await recaptchaRef?.current?.executeAsync();
            const userInput: UserData = {
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
            } else if (!matchIsValidTel(phoneNumber, {
                onlyCountryies: ["US"], // optional,
                excludedCountryies: [], // optional
                continents: [] // optional
              })) {
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
            } else if (email.match("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,20}")) {
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

    return (
        <>
            <div className="relative flex flex-col items-center justify-center text-center">
                <form className=" dark:text-black-400 z-10 mt-20 flex w-full max-w-72 flex-col rounded-3xl border border-black bg-white p-6  text-left font-bold tracking-wide outline-4 dark:border-gray-600 md:max-w-md md:p-8" aria-label="Notification Sign Up">
                    <ReCAPTCHA
                            ref={recaptchaRef}
                            size="invisible"
                            sitekey="6LdjedspAAAAAOSI0BupgJbODmdYfzG4eV4uwdIL"
                        />
                    <span className="flex flex-col gap-y-10">
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
                                    padding: '16.5px 14px 16.5px 0px',
                                    // HACK: remove double focus bars by setting tailwind's ring-offset-width to 0 explicitly
                                    "--tw-ring-offset-width": '0'
                                },
                                pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,20}",
                            }}
                            InputProps={{
                                "aria-label": 'Vendors search bar', // aria for search bar
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon />
                                    </InputAdornment>
                                ),
                            }}
                            aria-label="Email Address"
                            error={email != "" && !email.match("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,20}")}
                        />) : <>
                        <h1 className="font-normal">
                            You are now subscribed to our notifications at the email address <span className="text-indigo-500 text-medium">{email}</span> and phone number <span className="text-indigo-500 text-medium">{phoneNumber}</span>!
                        </h1>
                        </>}

                        {!submitted ? (<MuiTelInput
                            required
                            type="tel"
                            label="Phone Number"
                            placeholder="123 456 7890"
                            id="phone_number"
                            className="focus:outline-none"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e)}
                            inputProps={{
                                style: {
                                    padding: '16.5px 14px 16.5px 0px',
                                    // HACK: remove double focus bars by setting tailwind's ring-offset-width to 0 explicitly
                                    "--tw-ring-offset-width": '0'
                                }
                            }}
                            InputProps={{
                                "aria-label": 'Vendors search bar', // aria for search bar
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PhoneIcon />
                                    </InputAdornment>
                                ),
                            }}
                            aria-label="Phone Number"
                            forceCallingCode defaultCountry="US"
                            error={phoneNumber.trim() != "" && !matchIsValidTel(phoneNumber, {
                                onlyCountryies: ["US"], // optional,
                                excludedCountryies: [], // optional
                                continents: [] // optional
                              })}
                        />) : <></>}
                    </span>
                </form>

                {!submitted ? (<Button
                    onClick={handleSubmit}
                    variant="contained"
                    className="top -top-3 z-10 flex w-1/4 md:w-1/6 rounded-lg bg-ballet dark:hover:bg-gray-800 dark:focus:ring-gray-900 md:-top-5  bg-no-repeat bg-cover"
                    style={{
                        textTransform: "none",
                    }}
                    aria-label="Submit Form"
                >
                    Submit
                </Button>) : <></>}
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