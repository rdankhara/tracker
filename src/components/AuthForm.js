import React, { useState } from 'react';
import { Spacer } from './Spacer';
import { Text, Button, Input } from 'react-native-elements';
import { StyleSheet } from 'react-native';

const AuthForm = ({headerText, errorMessage, onSubmit, submitButtonText}) => { 
    const {email, setEmail} = useState('');
    const {password, setPassword} = useState('');
    return (
        <>
            <Spacer>
                <Text h3>{headerText}</Text>
            </Spacer>
            <Spacer>
                <Input label='Email' 
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                />
            </Spacer>
            <Spacer>
                <Input label='Password'
                    secureTextEntry 
                    autoCorrect={false}
                    autoCapitalize={'none'}
                    value={password}
                    onChangeText={setPassword}
                />
            </Spacer>
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <Spacer>
                <Button title={submitButtonText} onPress={() => onSubmit({email, password}) } />
            </Spacer>

        </>
    )
}

const styles = StyleSheet.create({
    errorMessage: { 
        fontSize: 16, 
        color: 'red',
        margin: 15
    }
})
export { AuthForm }