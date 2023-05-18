import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "./useUserContext";

export const useVerify = () => {

    const navigate = useNavigate();
    const [error, setError] = useState('');

    const { dispatch } = useUserContext();

    const verifyCode = async (code) => {

        console.log(code);

        const response = await fetch('/verify-mobile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ code })
        })

        const result = await response.json();

        if (!response.ok) {
            setError(result.mssg);
            localStorage.removeItem('user');
            dispatch({ type: 'notLOGGED' });
            navigate('/');
            return;
        }

        localStorage.setItem('user', JSON.stringify(result.user));
        dispatch({ type: 'LOGGED', payload: result.user });
        navigate('/success')
    }

    return { verifyCode, error, setError }
}