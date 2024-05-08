"use client";
import React, { useState } from "react";
import { Carousel, FlowbiteCarouselTheme, Modal, FlowbiteModalTheme } from "flowbite-react";

const hiddenTheme: FlowbiteCarouselTheme = {
    indicators: {
        active: {
            off: "bg-gray-800/50 hover:bg-gray-800",
            on: "bg-gray-800 dark:bg-gray-800",
        },
        base: "h-3 w-3 rounded-full",
        wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
    },
    control: {
        base: "hidden",
        icon: "hidden",
    },
    scrollContainer: {
        base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
        snap: "snap-x",
    },
};

const visibleTheme: FlowbiteCarouselTheme = {
  indicators: {
    active: {
      off: "bg-gray-800/80 hover:bg-gray-800",
      on: "bg-gray-800 dark:bg-gray-800",
    },
    base: "h-3 w-3 rounded-full",
    wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
  },
  control: {
    base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-800/65 group-hover:bg-gray-800/80 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
    icon: "h-5 w-5 text-grat-800 dark:text-gray-800 sm:h-6 sm:w-6",
  },
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
    snap: "snap-x",
  },
};

const modalTheme: FlowbiteModalTheme = {
  "root": {
    "base": "fixed inset-x-0 top-0 z-50 h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
    "show": {
      "on": "flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80",
      "off": "hidden"
    },
    "sizes": {
      "sm": "max-w-sm",
      "md": "max-w-md",
      "lg": "max-w-lg",
      "xl": "max-w-xl",
      "2xl": "max-w-2xl",
      "3xl": "max-w-3xl",
      "4xl": "max-w-4xl",
      "5xl": "max-w-5xl",
      "6xl": "max-w-6xl",
      "7xl": "max-w-7xl"
    },
    "positions": {
      "top-left": "items-start justify-start",
      "top-center": "items-start justify-center",
      "top-right": "items-start justify-end",
      "center-left": "items-center justify-start",
      "center": "items-center justify-center",
      "center-right": "items-center justify-end",
      "bottom-right": "items-end justify-end",
      "bottom-center": "items-end justify-center",
      "bottom-left": "items-end justify-start"
    }
  },
  "content": {
    "base": "relative h-full w-full p-4 md:h-auto",
    "inner": "relative flex max-h-[90dvh] flex-col rounded-lg dark:bg-gray-700 items-end"
  },
  "body": {
    "base": "flex-1 overflow-auto p-6 mx-auto text-center",
    "popup": "pt-0"
  },
  "header": {
    "base": "flex items-center justify-between rounded-t p-5 dark:border-gray-600",
    "popup": "border-b-0 p-2",
    "title": "text-xl font-medium text-gray-900 dark:text-white text-center",
    "close": {
      "base": "ml-auto inline-flex items-center rounded-full bg-transparent p-1.5 text-lg text-white hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white border border-2 antialiased",
      "icon": "h-10 w-10"
    }
  },
  "footer": {
    "base": "flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600",
    "popup": "border-t"
  }
};

export default function VendorImages(props: { images: string[] }) {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => setShowModal(!showModal);
    if (props.images.length == 0) {
        return (
            <>
            </>
        );
    } else {
        return (
            <>
            <button className="relative z-0" onClick={toggleModal}>
                <div className="text-wider absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform text-center text-5xl font-semibold text-white">
                    SEE MORE...
                </div>
                <Carousel
                    className="h-72 w-72"
                    slideInterval={5000}
                    theme={hiddenTheme}
                    leftControl={false}
                    rightControl={false}
                    indicators={false}
                    draggable={false}
                >
                    {props.images.map((image, index) => (
                        <div
                            key={index}
                            className="relative h-72 overflow-hidden rounded-xl"
                        >
                            <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
                            {/* Overlay with semi-transparent black */}
                            <img
                                className="h-72 w-72 object-fill"
                                src={image}
                                alt={`Gallery image ${index + 1}`}
                            />
                        </div>
                    ))}
                </Carousel>
            </button>
            <Modal
                    show={showModal}
                    onClose={toggleModal}
                    size="4xl"
                    theme={modalTheme}
                >
                    <Modal.Header>
                    </Modal.Header>
                    <Modal.Body>
                        <Carousel
                            className="h-96 w-96"
                            theme={visibleTheme}
                            slideInterval={1000000}
                        >
                            {props.images.map((image, index) => (
                                <img
                                className="h-96 w-96 object-cover"
                                src={image}
                                alt={`Item ${index + 1}`}
                            />
                            ))}
                        </Carousel>
                        <>
                          <h1 className="text-wider text-4xl font-semibold text-white m-3">
                              ITEM NAME
                          </h1>
                          <h2 className="text-lg text-gray-300 m-2 italic">
                              ITEM PRICE
                          </h2>
                          <h2 className="text-lg text-gray-200 m-2">
                              ITEM DESCRIPTION
                          </h2>
                        </>
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}
