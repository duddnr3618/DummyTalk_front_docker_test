import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from './modules/rootReducer';


const store = createStore( // 리덕스
    rootReducer,  // 리듀서
    applyMiddleware(thunk)
);

export default store;