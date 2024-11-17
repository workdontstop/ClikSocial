import React, { useEffect } from "react";
import { Typography, Box, Container } from "@material-ui/core";

import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { useSpring, animated } from "react-spring";


function Privacyx({ setCurrentPage }: any) {
    useEffect(() => {
        setCurrentPage("privacy");
    }, [setCurrentPage]);





    ///
    ///
    ///
    /// INTERFACE/TYPES FOR SCREENHEIGHT AND DARKMODE
    interface RootStateGlobalReducer {
        GlobalReducer: {
            snapStart: boolean;
            darkmode: boolean;
            screenHeight: number;
            activateLoader: boolean;
            historyscroll: number;
            interactContent: any;
            interact: number;
            MenuData: String;
            pagenum: number;
            SignIn: boolean,
            Guest: number
        };
    }



    ///
    ///
    ///
    /// GET SCREENHEIGHT FROM REDUX STORE
    const { screenHeight, darkmode, snapStart, activateLoader, historyscroll, interactContent, interact, MenuData, pagenum, SignIn, Guest } =
        useSelector((state: RootStateGlobalReducer) => ({
            ...state.GlobalReducer,
        }));
    const screenHeightReducer = screenHeight;
    const darkmodeReducer = darkmode;
    const snapStartReducer = snapStart;
    const activateLoaderReducer = activateLoader;
    const historyscrollReducer = historyscroll;
    const interactContentReducer: any = interactContent;
    const interactReducer = interact;
    const MenuDataReducer = MenuData
    const pagenumReducer = pagenum;
    const SignInReducer = SignIn;
    const GuestReducer = Guest;


    ///
    return (
        <Container
            maxWidth="md"
            style={{
                padding: "40px",
                backgroundColor: darkmodeReducer ? 'rgb(100,100,100,0.6)' : "#ffffff",
                borderRadius: "10px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            }}
        >
            <Typography
                variant="h4"
                gutterBottom
                style={{
                    color: darkmodeReducer ? '#ffffff' : "#0b1728",
                    fontWeight: "bold",
                    textAlign: "center",
                    marginBottom: "20px",
                }}
            >
                Privacy Policy for ClikBate
            </Typography>
            <Typography
                variant="body2"
                gutterBottom
                style={{
                    color: darkmodeReducer ? '#ffffff' : "#0b1728",
                    textAlign: "center",
                    marginBottom: "30px",
                }}
            >
                Effective Date:{" "}
                <span style={{ color: "#ff6f61", fontWeight: "bold" }}>October 10, 2024</span>
            </Typography>

            <Box mt={3}>
                <Typography
                    variant="h6"
                    gutterBottom
                    style={{ color: darkmodeReducer ? '#ffffff' : "#0b1728", fontWeight: "bold" }}
                >
                    Introduction
                </Typography>
                <Typography paragraph style={{ color: darkmodeReducer ? '#ffffff' : "#0b1728", lineHeight: "1.8" }}>
                    At <span style={{ color: "#ff6f61" }}>ClikBate</span>, operated by{" "}
                    <span style={{ color: "#4caf50" }}>Clik IT (Startup)</span>, we value your privacy and are
                    committed to protecting your personal data. This Privacy Policy outlines how we collect,
                    use, and safeguard your information when you use{" "}
                    <span style={{ color: "#2196f3" }}>www.clikbate.com</span> (the “App”) and related
                    services. By accessing or using the App, you agree to the terms of this Privacy Policy.
                </Typography>
            </Box>

            <Box mt={3}>
                <Typography
                    variant="h6"
                    gutterBottom
                    style={{ color: darkmodeReducer ? '#ffffff' : "#0b1728", fontWeight: "bold" }}
                >
                    1. Data We Collect
                </Typography>
                <Typography paragraph style={{ color: darkmodeReducer ? '#ffffff' : "#0b1728", lineHeight: "1.8" }}>
                    We only collect the following personal data:
                </Typography>
                <ul>
                    <li style={{ color: darkmodeReducer ? '#ffffff' : "#0b1728", }}>
                        Email Address: <span style={{ color: "#f9a825" }}>example@example.com</span>
                    </li>
                    <li style={{ color: darkmodeReducer ? '#ffffff' : "#0b1728", }}>
                        Name: <span style={{ color: "#ab47bc" }}>John Doe</span>
                    </li>
                </ul>
                <Typography paragraph style={{ color: darkmodeReducer ? '#ffffff' : "#0b1728", lineHeight: "1.8" }}>
                    We do not collect any device-specific information such as IP addresses, device types,
                    operating systems, or browser types.
                </Typography>
            </Box>

            <Box mt={3}>
                <Typography
                    variant="h6"
                    gutterBottom
                    style={{ color: darkmodeReducer ? '#ffffff' : "#0b1728", fontWeight: "bold" }}
                >
                    2. How We Use Your Data
                </Typography>
                <Typography paragraph style={{ color: darkmodeReducer ? '#ffffff' : "#0b1728", lineHeight: "1.8" }}>
                    We use your personal data to:
                </Typography>
                <ul>
                    <li style={{ color: darkmodeReducer ? '#ffffff' : "#0b1728", }}>
                        Authenticate your account and manage your session securely using{" "}
                        <span style={{ color: "#ff9800" }}>JWT-encrypted cookies</span>.
                    </li>
                    <li style={{ color: darkmodeReducer ? '#ffffff' : "#0b1728", }}>
                        Provide app services, interactive features, and facilitate{" "}
                        <span style={{ color: "#4caf50" }}>AI-generated content</span> for sale.
                    </li>
                    <li style={{ color: darkmodeReducer ? '#ffffff' : "#0b1728", }}>
                        Communicate with you about updates, services, and other notifications relevant to your
                        use of the App.
                    </li>
                </ul>
            </Box>

            <Box mt={3}>
                <Typography
                    variant="h6"
                    gutterBottom
                    style={{ color: darkmodeReducer ? '#ffffff' : "#0b1728", fontWeight: "bold" }}
                >
                    3. Community Flagging and Content Moderation
                </Typography>
                <Typography paragraph style={{ color: darkmodeReducer ? '#ffffff' : "#0b1728", lineHeight: "1.8" }}>
                    We employ a community-based system where users can flag high-risk, illegal, or sensitive
                    content. This system is supplemented by an internal flagging system, which serves as an
                    initial checkpoint (<span style={{ color: "#f44336" }}>icebreaker</span>) to filter out
                    inappropriate content. Paid community moderators may review flagged content for accuracy.
                </Typography>
            </Box>

            <Box mt={3}>
                <Typography
                    variant="h6"
                    gutterBottom
                    style={{ color: darkmodeReducer ? '#ffffff' : "#0b1728", fontWeight: "bold" }}
                >
                    11. Contact Information
                </Typography>
                <Typography paragraph style={{ color: darkmodeReducer ? '#ffffff' : "#0b1728", lineHeight: "1.8" }}>
                    If you have any questions or concerns about this Privacy Policy, please contact us at:
                </Typography>
                <ul>
                    <li style={{ color: darkmodeReducer ? '#ffffff' : "#0b1728", }}>
                        Email: <span style={{ color: "#ff6f61" }}>clikbateskywalker@gmail.com</span>
                    </li>
                    <li style={{ color: darkmodeReducer ? '#ffffff' : "#0b1728", }}>
                        Parent Company: <span style={{ color: "#4caf50" }}>Clik IT</span>
                    </li>
                </ul>
            </Box>
        </Container>
    );
}

export const Privacy = React.memo(Privacyx);
