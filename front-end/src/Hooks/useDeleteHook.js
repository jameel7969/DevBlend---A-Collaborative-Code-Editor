import { useState } from 'react';
import toast from 'react-hot-toast';

export const useDeleteSnippetHook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteSnippet = async (snippetId) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:5000/api/auth/code-snippets/${snippetId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete snippet');
      }

      setIsLoading(false);
      toast.success('Snippet deleted successfully');
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
      toast.error('An error occurred while deleting the snippet.');
    }
  };

  return { deleteSnippet, isLoading, error };
};
