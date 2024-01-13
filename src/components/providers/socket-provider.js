import { useEffect } from "react";
import SockJS from "sockjs-client";
import Stomp from "webstomp-client";
import { useSocket } from "../hooks/use-socket";

export const SocketProvider = ({ children }) => {
    // const [socket, setSocket] = useState(null);
    // const [isConnected, setIsConnected] = useState(false);
    const { socket, setSocket } = useSocket();
    const accessToken = localStorage.getItem("accessToken");

    useEffect(() => {
        if (!accessToken) return;

        const sockJs = new SockJS(`${process.env.REACT_APP_API_URL}/websocket`);
        const stomp = Stomp.over(sockJs, { debug: false });

        stomp.connect({}, function (frame) {
            console.log("Connected: " + frame);
            let url = stomp.ws._transport.url;
            url = url.replace("ws://localhost:9999", "");
            url = url.replaceAll("/websocket", "");
            url = url.replace(/^\/[0-9]+\//, "");
            stomp.id = url;

            setSocket(stomp);
        });

        return () => {
            if (socket) stomp.disconnect(() => {});
        };
    }, [accessToken]);

    return <>{children}</>;
};
