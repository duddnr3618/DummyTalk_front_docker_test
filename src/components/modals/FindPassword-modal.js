import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "src/components/ui/dialog";
import {Button} from "../../components/ui/button";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useModal} from "src/components/hooks/use-modal";
import {callPostCheck, callPostEmail, callPostMail, callPostPassword, callPostPasswordMail} from "src/api/UserAPICalls";

export const FindPasswordModal = () =>{

    const { isOpen, onClose, type } = useModal();
    const [userEmail, setUserEmail] = useState('');
    const [userSubmit, setUserSubmit] = useState('');
    const [password, setPassword] = useState('');
    const [check, setCheck] = useState('');
    const [click, setClick] = useState(false);
    const [equals, setEquals] = useState(false);
    const data = useSelector(state => state.checkReducer);

    const isModalOpen = isOpen && type === "findPassword";
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const onClickPostEmail = () =>{
        dispatch(callPostEmail({
            email:email
        }))
    }

    const onClick = () =>{
        setClick(prev => !prev)
    }

    const onClickMail = () =>{
        dispatch(callPostPasswordMail({userEmail : userEmail}))
    }

    const onClickCheck = () =>{
        dispatch(callPostCheck(userSubmit))
        onClick()
    }

    const handleEmailChange = (e) => {
        setUserEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if(e.target.value == check){
            setEquals(true);
        } else{
            setEquals(false);
        }
    };

    const handleCheckdChange = (e) => {
        setCheck(e.target.value);
        if(e.target.value == password){
            setEquals(true);
        } else{
            setEquals(false);
        }
    };


    const handleSubmitChange = (e) => {
        const regex =
            /^[0-9]+$/
        if (regex.test(e.target.value) || e.target.value === '')
            setUserSubmit(e.target.value);
    };


    const onClickPasswordChange = () =>{
        if(equals == true){
            dispatch(callPostPassword({
                email : userEmail,
                password : password
            }))
        } else if(data.status == 200){
            alert("비밀번호를 확인해주시길 바랍니다.")
        } else{
            alert("이메일 인증을 해주시길 바랍니다.")
        }
    }
    const onClickTest = () =>{
        console.log(data)
    }


    return(
        <Dialog
            open={isModalOpen}
            onOpenChange={onClose}
        >
            <DialogContent className="bg-white text-black overflow-hidden">
                <DialogHeader className="px-6">
                    <DialogTitle className="text-2xl text-center font-bold">
                        비밀번호 찾기
                    </DialogTitle>
                    <DialogDescription className="text-center text-zinc-500">
                        <div>
                            <div onClick={ onClickTest }>이메일 주소를 입력해주시길 바랍니다.</div>
                            <div className={"flex"}>
                                <input type="text" value={userEmail}
                                       onChange={handleEmailChange}
                                       className='w-[85%] border-2 h-[30px] font-normal mb-3'/>
                                <button onClick={onClickMail} className='w-[15%]'> 전송 </button>
                            </div>
                            <div>인증번호 확인 </div>
                            <div className={"flex"}>
                                <input type="text" value={userSubmit}
                                      onChange={handleSubmitChange}
                                      className='w-[85%] border-2 h-[30px] font-normal mb-3'/>
                                <button onClick={onClickCheck} className={'w-[15%]'}> 확인 </button>
                            </div>
                            <div style={ data.status == 200 ? {display : "block"} : {display:"none"}}>
                                <div>변경하실 비밀번호를 입력해주시길 바랍니다.</div>
                                <div className={"flex"}>
                                    <input type="password" value={password}
                                           onChange={handlePasswordChange}
                                           className='w-[100%] border-2 h-[30px] font-normal'/>
                                </div>
                                <div>비밀번호 확인</div>
                                <div className={"flex"}>
                                    <input type="password" value={check}
                                           onChange={handleCheckdChange}
                                           className='w-[100%] border-2 h-[30px] font-normal'/>
                                </div>
                                <div style={ check == '' ? {display:"none"}  : {display:"block"}}>
                                    {check && check== password ?
                                        <div style={ {color:"green"} }>
                                            일치합니다
                                        </div>:
                                        <div style={ {color:"red"} }>
                                            불일치합니다.
                                        </div>
                                    }
                                </div>
                                <Button onClick={onClickPasswordChange} className='hover:bg-amber-500 bg-amber-400 font-semibold text-sm text-black'>
                                    확인
                                </Button>
                                <Button className='bg-red-400 hover:bg-red-500 font-semibold text-sm text-black' onClick={onClose}>
                                    취소
                                </Button>
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

