import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { AuthContext } from '../context/authProvider';
import { AuthForm } from '../components/AuthForm';
import { NavLink } from '../components/NavLink';
import { NavigationEvents } from 'react-navigation';

const SignupScreen = ({navigation}) => {
    const {state, signup, clearErrorMessage} = useContext(AuthContext);
    const { errorMessage } = state;

    return (
        <View style={styles.container}>
            <NavigationEvents onWillBlur={clearErrorMessage} />
            <AuthForm 
                headerText={'Sign Up For Tracker'}
                errorMessage={errorMessage}
                onSubmit={signup}
                submitButtonText={'Sign Up'}
            />
            {/* <Button title="Main flow" onPress={() => navigation.navigate('mainFlow')} /> */}
            <NavLink 
                text={'Already have an account? Sing in instead'} 
                onNavigate={() => navigation.navigate('Signin')}
            />
        </View>
    )
}

SignupScreen.navigationOptions = () => { 
    return { 
        header: null
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        marginBottom: 200
    },
    errorMessage: { 
        fontSize: 16, 
        color: 'red',
        margin: 15
    }
})

export { SignupScreen }