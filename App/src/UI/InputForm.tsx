import React, { useState } from 'react';

// Components
import { TextInput, StyleSheet, View } from 'react-native';

const InputForm = (props: {
    placeholder: string,
    value: string,
    onChangeText: any,
    type: string
}) => {
    const [isFocused, setIsFocused] = useState(false);

    // TODO: Если символов больше чем 1, то сделать border

    return (
        <View style={{
            flexDirection: 'row',
        }}>
            <TextInput
                style={[styles.input, isFocused && styles.inputFocus]}
                placeholder={props.placeholder}
                placeholderTextColor='#828BC9'
                onFocus={ () => {setIsFocused(true)} }
                onBlur={ () => {setIsFocused(false)} }
                onChangeText={props.onChangeText}
            />
        </View>
    )
}

// Styles
const styles = StyleSheet.create({
    input: {
        flex: 1,
        height: 60,
        backgroundColor: '#C8E0F4',
        borderRadius: 24,
        paddingLeft: 20,
        color: '#5561A7',
        fontSize: 20,
        marginBottom: 15,
        fontFamily: 'Overpass-Medium',
        
    },
    
    inputFocus: {
        borderWidth: 2,
        borderColor: '#495AC9'
    }
});

export default InputForm;