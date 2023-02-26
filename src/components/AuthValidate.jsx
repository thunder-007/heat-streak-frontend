import axios from "axios";
import React from "react";

function AuthValidate() {
    const code = new URLSearchParams(window.location.search).get('code');
    const authUrl = "http://localhost:8000/auth/github/login/";
    React.useEffect(() => {
        axios.get(authUrl, {
            params: {
                code: code
            }
        }).then((response) => {
            localStorage.setItem('access_token','bearer ' + response.data.access_token);
            window.location.href = '/home';
        }).catch((error) => {
           console.log(error);
        });
    }, [code]);


}

export default AuthValidate;