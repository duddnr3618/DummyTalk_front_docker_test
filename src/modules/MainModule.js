import { handleActions } from 'redux-actions';


//초기값
const initialState = {
    data: [],
    pageInfo: {}
};

// 액션
export const GET_USER = 'main/GET_USER';
export const GET_FRIEND = 'main/GET_PRIEND';
export const GET_FRIEND_REQUEST = 'main/GET_FRIEND_REQUEST';
export const POST_ADD_FRIEND = "main/POST_ADD_FRIEND";
export const POST_CHANGE_USER = "main/POST_CHANGE_USER"
export const POST_APPROVAL = "main/POST_APPROVAL"
export const POST_REFUSAL = "main/POST_REFUSAL"
export const GET_FETCH_CHAT = "chat/GET_FETCH_CHAT"
export const POST_SEARCH = "main/POST_SEARCH"
export const userReducer = handleActions(
    {
        [GET_USER] : (state, { payload }) =>{
            return payload
        },
    },
    initialState
);

export const friendReducer = handleActions(
    {
        [GET_FRIEND] : (state, { payload }) =>{
            return payload
        },
    },
    initialState
);

export const addFriendReducer = handleActions(
    {
        [POST_ADD_FRIEND] : (state, { payload }) =>{
            return payload
        },
    },
    initialState
);

export const chageUserReducer = handleActions(
    {
        [POST_CHANGE_USER] : (state, { payload }) =>{
            return payload
        },
    },
    initialState
);

export const requestReducer = handleActions(
    {
        [GET_FRIEND_REQUEST] : (state, { payload }) =>{
            return payload
        },
    },
    initialState
);
export const approvalReducer = handleActions(
    {
        [POST_APPROVAL] : (state, { payload }) =>{
            return payload
        },
    },
    initialState
);
export const refusalReducer = handleActions(
    {
        [POST_REFUSAL] : (state, { payload }) =>{
            return payload
        },
    },
    initialState
);

export const chatReducer = handleActions(
    {
        [GET_FETCH_CHAT] : (state, { payload }) =>{
            return payload
        },
    },
    initialState
);


export const searchReducer = handleActions(
    {
        [POST_SEARCH] : (state, { payload }) =>{
            return payload
        },
    },
    initialState
);




