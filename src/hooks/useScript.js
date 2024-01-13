import { useEffect } from 'react';

const useScript = (url, onload) => {
    useEffect(() => {
        const script = document.createElement('script');

        // script의 src 속성에 주어진 url을 설정합니다. 이로써 외부 스크립트를 로드할 수 있습니다.
        script.src = url;

        // 스크립트가 로드된 후 실행할 콜백 함수를 설정합니다.
        script.onload = onload;

        // 생성한 script 엘리먼트를 document의 head에 추가합니다.
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, [url, onload]);
};

export default useScript;