import { useRef } from 'react';
import useScript from '../hooks/useScript';
import {useDispatch} from "react-redux";
import {callPostGoogleLogin} from "../api/UserAPICalls";

// https://github.com/anthonyjgrove/react-google-login/issues/502
// https://developers.google.com/identity/gsi/web/reference/js-reference#CredentialResponse
export default function GoogleLogin() {

    const dispatch = useDispatch();

    const googleSignInButton = useRef(null);

    const onGoogleSignIn= (res) =>{
        dispatch(callPostGoogleLogin({credential : res.credential}))
    }

    useScript('https://accounts.google.com/gsi/client', () => {
        // https://developers.google.com/identity/gsi/web/reference/js-reference#google.accounts.id.initialize
        window.google.accounts.id.initialize({
            client_id: `${process.env.REACT_APP_GOOGLE_CLIENT_ID}`,
            callback: onGoogleSignIn,
        });
        // https://developers.google.com/identity/gsi/web/reference/js-reference#google.accounts.id.renderButton
        window.google.accounts.id.renderButton(
            googleSignInButton.current,
            { theme: 'fulfilled', size: 'large', width: '400', shape:'circle'}, // customization attributes
        );
    });

    return <div ref={googleSignInButton}></div>;

}