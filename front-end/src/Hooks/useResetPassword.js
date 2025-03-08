// useResetPassword.js
import { useState } from 'react';

export const useResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [token, setToken] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`http://localhost:5000/api/auth/reset-password/${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ newPassword }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Failed to reset password.');
            }

            alert('Password reset successful. You can now log in with your new password.');
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { newPassword, setNewPassword, token, setToken, error, loading, handleSubmit };
};
