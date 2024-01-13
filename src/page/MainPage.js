import LeftSideBar from "src/layouts/LeftSide/left-side-bar";
import ServerSideBar from "src/layouts/LeftSide/server-side-bar";
import Chat from "../layouts/chat/Chat";

function MainPage() {
    return (
        <>
            <div className="flex h-full bg-[#0b1725]">
                <LeftSideBar />
                <ServerSideBar />
                <Chat />
            </div>
        </>
    );
}

export default MainPage;
