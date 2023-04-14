/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { fetchUserData } from '../services/auth';
const { snackbar } = require("tailwind-toast");
export const useAuth = () => {
    return JSON.parse(localStorage.getItem('userData'))
}

//atuny0@sohu.com 9uQFF1Lh

export const useLoginHook = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [user, setUser] = useState({});
    const [registrationData, setRegistrationData] = useState({});
    const [isLogin, setIsLogin] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);

    const allowLogin = () => {
        const existingArray = localStorage.getItem('registrationData') ? JSON.parse(localStorage.getItem('registrationData')) : [];
        const existedObj = existingArray.find(exist => exist.userName === user.userName && exist.password === user.password)
        if (existedObj) {
            localStorage.setItem('userData', existedObj ? JSON.stringify(existedObj) : false);
            setIsLogin(true);
        } else {
            console.log("eeeeeeee")
           setError('No user data');
           snackbar()
           .danger("", "Invalid credentials")
           .with({
             color: "bg-red-600",
             positionX: "end",
             positionY: "bottom",
             fontColor: "blue",
           })
           .show()
           setIsLogin(false);
        }
    }

    const fetchData = async () => {
        let payload = {
            username: user?.userName,
            password: user?.password
        }
        try {
            await setLoading(true);
            await setError('');
            await fetchUserData(payload).then(res => {
               allowLogin()
            })
        } catch (error) {
           allowLogin()
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (user && user.userName && user.password) {
            fetchData();
        } else {
            setError('Please insert username and password');
            setIsLogin(false);
        }
    }, [user])

    const handleSignUp = async (e) => {
        e.preventDefault()
        if (registrationData && registrationData.userName && registrationData.password && registrationData.email && registrationData.phoneNumber) {
            try {
                await setLoading(true);
                await setError('');
                const existingArray = localStorage.getItem('registrationData') ? JSON.parse(localStorage.getItem('registrationData')) : [];
                let nextId = existingArray.length > 0 ? existingArray[existingArray.length - 1].id + 1 : 1;
                registrationData.id = nextId;
                existingArray.push(registrationData)
                localStorage.setItem('registrationData', JSON.stringify(existingArray))
                setIsRegistered(true);
            } catch (error) {
                setError(error.message);
                setIsRegistered(false);
            } finally {
                setLoading(false);
            }
        } else {
            setError('Please insert all data');
            setIsRegistered(false);
        }
    }

    return {
        loading,
        error,
        user,
        isLogin,
        registrationData,
        isRegistered,
        setUser,
        setRegistrationData,
        handleSignUp
    };
}
