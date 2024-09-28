import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export const useGetCodeSnippetHook = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [codeSnippets, setCodeSnippets] = useState([]);
    const navigate = useNavigate();

    const getCodeSnippets = useCallback(async (userId) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch(`http://localhost:5000/api/auth/code-snippets/${userId}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(json.error);
        }
        if (response.ok) {
            setIsLoading(false);
            setCodeSnippets(json);
        }
    }, [navigate]); 

    return { getCodeSnippets, isLoading, error, codeSnippets };
};
