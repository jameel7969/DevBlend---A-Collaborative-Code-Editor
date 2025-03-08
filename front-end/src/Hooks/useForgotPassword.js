// useForgotPassword.js
import { useState } from 'react';

export const useForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('http://localhost:5000/api/auth/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Failed to send password reset email.');
            }

            alert('Check your email for the password reset link.');
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { email, setEmail, error, loading, handleSubmit };
};
