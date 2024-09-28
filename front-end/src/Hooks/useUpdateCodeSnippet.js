import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export const useUpdateCodeSnippetHook = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const updateCodeSnippet = async (snippetId, html, css, js) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch(`http://localhost:5000/api/auth/code-snippets/${snippetId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({html, css, js })
        });

        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(json.error);
        }
        if (response.ok) {
            setIsLoading(false);
            toast.success('Snippet updated successfully');
            // navigate('/editor'); // Navigate to the editor or another page as needed
        }
    };

    return { updateCodeSnippet, isLoading, error };
};
