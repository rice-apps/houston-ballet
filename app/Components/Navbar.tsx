"use client";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Drawer, IconButton, Link, ListItemButton } from "@mui/material";
import { List } from "flowbite-react";
import { useRouter } from "next/navigation";
import React from "react";
export default function NavBar() {
    const [state, setState] = React.useState({
        right: false,
    });
    const router = useRouter();

    const handleClick = (path: string) => {
        router.push(path);
    };

    type Anchor = "right";
    const anchor = "right";

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === "keydown" &&
                ((event as React.KeyboardEvent).key === "Tab" ||
                    (event as React.KeyboardEvent).key === "Shift")
            ) {
                return;
            }

            setState({ ...state, [anchor]: open });
        };

    type Link = {
        displayText: string;
        path: string;
    };

    const navigationLinks: Array<Link> = [
        {
            displayText: "VENDORS",
            path: "/vendors",
        },
        {
            displayText: "CATEGORIES",
            path: "/categories",
        },
        {
            displayText: "MAP",
            path: "/map",
        },
        {
            displayText: "NOTIFICATIONS",
            path: "/sms",
        },
    ];

    const list = (anchor: Anchor) => (
        <Box
            sx={{
                width: 250,
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className="flex">
                <IconButton
                    onClick={toggleDrawer(anchor, true)}
                    className="ml-auto"
                >
                    <CloseIcon className="text-white" />
                </IconButton>
            </div>
            <List>
                {navigationLinks.map((link: Link, index) => (
                    <ListItemButton
                        className="font-sans text-lg font-bold tracking-[.15em] text-white"
                        onClick={(event) => {
                            handleClick(link.path);
                        }}
                    >
                        {link.displayText}
                    </ListItemButton>
                ))}
            </List>
        </Box>
    );

    return (
        <nav className="flex w-full items-center justify-between bg-ballet p-2">
            {/* Logo in the top left corner */}
            <Link href="/" className="shrink-0">
                <img
                    src="/nutcrackerLogo.png"
                    alt="Company Logo"
                    className="h-10 w-auto"
                />
            </Link>

            <div className="flex-grow s:invisible md:visible">
                <div className="items-left justify-left hidden md:flex ">
                    <ul className="justify-left items-left mt-4 flex flex-wrap gap-4 md:mt-0">
                        {navigationLinks.map((link: Link, idx) => (
                            <li>
                                <Link
                                    href={link.path}
                                    className="ml-5 block px-4 py-2 text-white hover:bg-gray-200 md:hover:bg-transparent md:hover:underline"
                                >
                                    {link.displayText}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="ml-auto md:invisible s:visible">
                <React.Fragment key={anchor}>
                    <IconButton onClick={toggleDrawer(anchor, true)}>
                        <MenuIcon className="text-white" />
                    </IconButton>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        PaperProps={{ sx: { backgroundColor: "#33323c" } }}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            </div>
        </nav>
    );
}
