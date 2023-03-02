import React from 'react';

// Components
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

// Styles
const styles = StyleSheet.create({
    button: {
        height: 60,
        backgroundColor: '#4960E6',
        borderRadius: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {
        color: '#FFF',
        fontSize: 20,
        fontFamily: 'Overpass-SemiBold'
    }
})

const ButtonForm = (props: any) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>{props.children}</Text>
        </TouchableOpacity>
    )
}

export default ButtonForm;