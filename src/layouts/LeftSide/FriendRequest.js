import styles from "src/layouts/LeftSide/left-side-bar.module.css";
import {callGetFriendRequest, callGetNickname, callPostApproval, callPostRefusal} from "src/api/MainAPICalls";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

export const FriendRequest = (FriendData, onRequest) =>{

    useEffect(() => {
        dispatch( callGetFriendRequest() )
    }, []);


    const dispatch =  useDispatch()
    const onClickApproval = (friendId) =>{
        dispatch(callPostApproval(friendId))
    }
    const onClickRefusal = (friendId) =>{
        dispatch(callPostRefusal(friendId))
    }

    return (
        <div style={
            onRequest ?
                { width:"400px", height:"500px", top:"65%" ,left:"13%", border:"1px solid black", background:"whitesmoke",
                    transform: "translate(-50%, -50%)", position: "absolute", overflow: "auto", zIndex:"1"}
                :
                {display : "none"} }>
            <div className={styles.request}>
                {FriendData.length > 0 && FriendData.map(friend =>(
                    <div style={{display:"flex"}}>
                        <div className="mr-20">
                            {friend.name}
                        </div>
                        <div>
                            {friend.userEmail}
                        </div>
                        <button onClick={() => onClickApproval({friendId: friend.userId})} className={ styles.approval}>
                            수락
                        </button>
                        <button onClick={() => onClickRefusal({friendId: friend.userId})} className={ styles.refusal}>
                            삭제
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}