import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TopNavigation from './components/Navigation'

import Impressum from './screens/Impressum';
import PCB from './screens/PCB';
import Blog from './screens/Blog';
import Panel from './screens/Panel';
import { client_id, getToken, getUsername } from './helper/login';

import tmi from 'tmi.js';
import { ChatProvider } from './context/chat';
import Bottom from './components/Bottom';
import { ToastContainer } from 'react-bootstrap';
import { ChatToastProps } from './components/ChatToast/ChatToast';
import ChatToast from './components/ChatToast';
import Projects from './screens/Projects';

/* TODO: refactor */
const OAuthLogin = () => {
    const nav = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const token_type = new URLSearchParams(location.hash).get("token_type")
        if (token_type === "bearer") {
            const scope = new URLSearchParams(location.hash).get("scope")
            const access_token = new URLSearchParams(location.hash).get("#access_token")
            if (access_token) localStorage.setItem("access_token", access_token);
            if (scope) localStorage.setItem("scope", scope);

            fetch("https://api.twitch.tv/helix/users", {
                headers: [["Authorization", access_token ? "Bearer " + access_token : ""],
                ["Client-Id", client_id]]
            }).then((res) => res.json().then(j => {
                localStorage.setItem("username", j.data[0]['display_name'])
            }))

            nav("/", { replace: true });
        }
    }, [nav, location.hash])
    return (null)
}

const Logout = () => {
    const nav = useNavigate();
    useEffect(() => {

        localStorage.removeItem("access_token");
        localStorage.removeItem("scope");
        nav("/", { replace: true });
    }, [nav]);
    return (null);
}

export default function App() {
    const [chat, setChat] = useState<tmi.Client>();
    const [toasts, setToasts] = useState<Array<ChatToastProps>>([]);

    const hideToast = (ref: HTMLDivElement, key: number) => {
        ref.remove();
    };

    useEffect(() => {
        // Define configuration options
        const opts = {
            identity: {
                username: getUsername(),
                password: getToken(),
            },
            channels: [
                "Platinenmacher",
            ]
        };
        // Create a client with our options
        setChat(new tmi.client(opts));
    }, []);

    useEffect(() => {

        // Called every time a message comes in
        function onMessageHandler(target: any, context: any, msg: any, self: any) {
            //if (self) { return; } // Ignore messages from the bot
            console.log(context);
            let datetime = ""
            if (context["tmi-sent-ts"])
                datetime = new Date(context["tmi-sent-ts"] * 1000).toLocaleDateString("de-DE")
            setToasts(toasts => [...toasts, { username: context["display-name"], message: msg, datetime: datetime, onTimeout: hideToast }]);
        }

        // Called every time the bot connects to Twitch chat
        function onConnectedHandler(addr: any, port: any) {
            console.log(`* Connected to ${addr}:${port}`);
            setToasts(toasts => [...toasts, { username: "Twitch Chat", message: "Connected", datetime: "now", onTimeout: hideToast }]);
        }

        chat?.on('message', onMessageHandler);
        chat?.on('connected', onConnectedHandler);
        chat?.connect();
    }, [chat]);

    return (
        <ChatProvider value={chat}>
            <BrowserRouter>
                <TopNavigation />
                <div style={{ marginTop: "95px" }}>
                    <Routes>
                        <Route path="/impressum" element={<Impressum />} />
                        <Route path="/community" element={<PCB />} />
                        <Route path="/login/twitch/authorized" element={<OAuthLogin />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/panel" element={<Panel />} />
                        <Route path="/projekte" element={<Projects/>} />
                        <Route path="/" element={<Blog />} />
                    </Routes>
                </div>
                <ToastContainer className="p-3" position="bottom-end">
                    {toasts &&
                        toasts.map((toast, key) => <ChatToast {...toast} id={key} key={key} />)
                    }
                </ToastContainer>
                <Bottom />
            </BrowserRouter>
        </ChatProvider>
    );
}