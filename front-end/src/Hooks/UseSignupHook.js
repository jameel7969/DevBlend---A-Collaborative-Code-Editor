import { useState } from 'react'
import { useAuthContext } from './UseAuthContext'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

export const useSignupHook = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const navigate = useNavigate()

    const signup = async (fullname, username, email, phoneNumber, password, confirmPassword) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('http://localhost:5000/api/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fullname, username, email, phoneNumber, password, confirmPassword })
        })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            // update the auth context
            dispatch({ type: 'LOGIN', payload: json })

            // update loading state
            setIsLoading(false)

            toast.success('Signup successful')

            //navigate
            navigate('/login')
        }
    }

    return { signup, isLoading, error }
}