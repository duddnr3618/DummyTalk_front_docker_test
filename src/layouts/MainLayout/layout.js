import { ModalProvider } from "src/components/providers/modal-provider";
import { SocketProvider } from "src/components/providers/socket-provider";
import MainPage from "../../page/MainPage";

function Layout() {
    return (
        <SocketProvider>
            <div className="h-full relative">
                <ModalProvider />
                {/* <Header /> */}
                <MainPage />
            </div>
        </SocketProvider>
    );
}

export default Layout;
