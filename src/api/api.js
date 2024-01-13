import axios from 'axios';

const instance = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`, // 스프링 애플리케이션의 주소로 변경
    withCredentials: true, // 필요에 따라 설정
});

export default instance;