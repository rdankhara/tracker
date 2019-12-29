import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { Spacer } from './Spacer';

const NavLink = ({text, onNavigate}) => {
    return (
        <TouchableOpacity onPress={onNavigate}>
            <Spacer>
                <Text style={styles.link}>{text}</Text>
            </Spacer>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    link: { 
        color: 'blue'
    }
})
export { NavLink }