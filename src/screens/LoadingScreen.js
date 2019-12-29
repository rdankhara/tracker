import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/authProvider';

const LoadingScreen = () => { 
    const { tryLocalSignIn } = useContext(AuthContext);
    useEffect(() => { 
        tryLocalSignIn();
    },[])
    return null;
}

export { LoadingScreen }