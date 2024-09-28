import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import SnippetContext from '../Context/SnippetContext';

export const useSaveCodeSnippetHook = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { setSelectedSnippet, trigger, setTrigger } = useContext(SnippetContext);


    const saveCodeSnippet = async (userId, html, css, js, title, description, timestamp) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch('http://localhost:5000/api/auth/code-snippets', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId, html, css, js, title, description, timestamp })
        });
        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(json.error);
        }
        if (response.ok) {
            setIsLoading(false);
            setSelectedSnippet(json._id)
            console.log(json._id)
            toast.success('Code snippet saved successfully');
            // navigate('/'); // Navigate to a success page or update the UI as needed
        }
    };

    return { saveCodeSnippet, isLoading, error };
};
