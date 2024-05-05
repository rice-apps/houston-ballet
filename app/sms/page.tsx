"use client";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function InfoForm() {
    const [email, setEmail] = React.useState("");
    const [phoneNumber, setPhoneNumber] = React.useState("");
    // const [name, setName] = React.useState('');

    const [csvContents, setCsvContents] = React.useState("");

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
            console.log("phone number from input box: " + phoneNumber);
            console.log("email from input box: " + email);

            const userInput: UserData = {
                emailString: email,
                phoneNumberString: phoneNumber,
            };
            console.log("new email: " + userInput["emailString"]);
            console.log("new number: " + userInput["phoneNumberString"]);

            await postData("/api/csvwrite", userInput, "PUT").then(() => {
                console.log("logged");
                // Display notification toast
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

            await postData(
                "https://hb-strapi-production.up.railway.app/api/form-process",
                userInput,
                "POST",
            ).then(() => {
                console.log("pushed to strapi");
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
        <div className="flex items-center justify-center" role="main">
            <div
                style={{
                    backgroundPosition: "center top",
                    backgroundImage: 'url("/background.png")',
                    backgroundSize: "cover",
                    filter: "brightness(75%)",
                    height: "65vh",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    zIndex: "0",
                }}
                aria-hidden="true" // tells screen reader to IGNORE decorative background
            ></div>
            <div className="relative mt-44 flex flex-col items-center justify-center text-center">
                <h1 className="font-sans text-center text-4xl font-bold tracking-[.15em] text-white md:text-7xl">
                    CONNECT
                </h1>

                <h3 className="font-sans mx-3 mt-4 pt-3 text-center text-lg font-medium tracking-[.15em] text-white md:text-xl">
                    GET NOTIFIED ABOUT OUR RAFFLE, PROMOTIONS, AND SPECIAL
                    EVENTS HAPPENING AT THE MARKET!
                </h3>
                <form className=" dark:text-black-400 z-10 mt-20 flex w-full max-w-72 flex-col rounded-3xl border border-black bg-white p-4  text-left font-bold tracking-wide outline-4 dark:border-gray-600 md:max-w-md md:p-8" aria-label="Notification Sign Up">
                    <span className="flex flex-col">
                        <div className="mb-1 flex flex-row items-center">
                            <img src="/email.png"></img> Email
                        </div>
                        <TextField
                            required
                            InputProps={{
                                style: {
                                    marginBottom: "5%",
                                    backgroundColor: "#dddddd",
                                    borderRadius: "10px",
                                },
                            }}
                            id="email"
                            label="Insert email here"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            aria-label="Email"
                        />

                        <div className="mb-1 flex flex-row items-center">
                            <img src="/phone.png"></img> Phone Number
                        </div>
                        <TextField
                            required
                            id="phone_number"
                            InputProps={{
                                style: {
                                    marginBottom: "5%",
                                    backgroundColor: "#dddddd",
                                    borderRadius: "10px",
                                },
                            }}
                            label="Add phone number here"
                            variant="outlined"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
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
        </div>
    );
}

export default function Page() {
    return (
        <div className=" flex flex-col justify-between bg-white">
            <div className="relative">
                <InfoForm />
            </div>
        </div>
    );
}
