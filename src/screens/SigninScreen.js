import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { AuthForm } from '../components/AuthForm';
import { AuthContext } from '../context/authProvider';
import { NavLink } from '../components/NavLink';
import { NavigationEvents } from 'react-navigation';

const SigninScreen = ({navigation}) => {
    const {state, signin, clearErrorMessage} = useContext(AuthContext);
    const { errorMessage } = state;
    return (
        <View style={styles.container}>
            <NavigationEvents 
                onWillBlur={clearErrorMessage}
            />
            <AuthForm 
                headerText={'Sign In For Tracker'}
                errorMessage={errorMessage}
                onSubmit={signin}
                submitButtonText={'Sign In'}
            />
            <NavLink
                text={"Don't have an account? Sign Up instead"} 
                onNavigate={() => navigation.navigate('Signup')}
            />
        </View>
    )
}

SigninScreen.navigationOptions = () => { 
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

export { SigninScreen }