import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useVerify = () => {

    const navigate = useNavigate();
    const [error, setError] = useState('');

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
            return;
        }

        navigate('/success')
    }

    return { verifyCode, error }
}