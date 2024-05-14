"use client";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function InfoForm() {
    const [email, setEmail] = React.useState("");
    const [phoneNumber, setPhoneNumber] = React.useState("");
    // const [name, setName] = React.useState('');

    const [csvContents, setCsvContents] = React.useState("");
    const recaptchaRef = React.useRef<ReCAPTCHA | null>(null);
    
    const config = {
        delimiter: "", // auto-detect <--------- We don't want this!
        newline: "", // auto-detect
        quoteChar: '"',
        header: false,
        dynamicTyping: false,
        preview: 0,
        encoding: "",
        worker: false,
        comments: false,
        step: undefined,
        complete: undefined,
        error: undefined,
        download: false,
        skipEmptyLines: false,
        chunk: undefined,
        fastMode: undefined,
        beforeFirstChunk: undefined,
        withCredentials: undefined,
    };

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
        if (email != "" && phoneNumber != "") {
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

            // Clear form after submission
            setEmail("");
            setPhoneNumber("");
        } else {
            // If email or phone number is empty
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
        }
    };

    return (
        <>
            <div className="relative flex flex-col items-center justify-center text-center">
                <form className=" dark:text-black-400 z-10 mt-20 flex w-full max-w-72 flex-col rounded-3xl border border-black bg-white p-4  text-left font-bold tracking-wide outline-4 dark:border-gray-600 md:max-w-md md:p-8" aria-label="Notification Sign Up">
                    <ReCAPTCHA
                            ref={recaptchaRef}
                            size="invisible"
                            sitekey="6LdjedspAAAAAOSI0BupgJbODmdYfzG4eV4uwdIL"
                        />
                    <span className="flex flex-col gap-y-10">
                        <TextField
                            type="email"
                            label="Email"
                            placeholder="example@gmail.com"
                            id="email"
                            className="focus:outline-none"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                                        <EmailIcon />
                                    </InputAdornment>
                                ),
                            }}
                            aria-label="Email Address"
                        />

                        <TextField
                            required
                            type="tel"
                            label="Phone Number"
                            placeholder="(123) 456-7890"
                            id="phone_number"
                            className="focus:outline-none"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
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
                        />
                    </span>
                </form>
                <Button
                    onClick={handleSubmit}
                    variant="contained"
                    className="top -top-3 z-10 flex w-1/12 rounded-lg bg-ballet dark:hover:bg-gray-800 dark:focus:ring-gray-900 md:-top-5  bg-no-repeat bg-cover"
                    style={{
                        textTransform: "none",
                    }}
                    aria-label="Submit Form"
                >
                    Submit
                </Button>
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

export default function Page() {
    return (
        <>
            <div className="absolute z-0 h-screen w-full bg-nutcrackerBackground p-5 bg-no-repeat bg-cover" role="banner"></div>
            <div className="relative z-20 flex h-screen flex-col justify-center p-5">
                <h1 className="font-sans top-20 bg-none text-center text-4xl font-bold tracking-[.15em] text-white md:text-7xl" role="main">
                    CONNECT
                </h1>
                <h3 className="pt-3 text-center text-lg md:text-xl font-medium tracking-[.15em] text-white">
                    GET NOTIFIED ABOUT OUR RAFFLE, PROMOTIONS, AND SPECIAL
                    EVENTS HAPPENING AT THE MARKET!
                </h3>
                <InfoForm />
            </div>
        </>
    );
}
