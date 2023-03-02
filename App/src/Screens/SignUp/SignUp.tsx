import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// Components
import InputForm from '../../UI/InputForm';
import ButtonForm from '../../UI/ButtonForm';

// Styles
const styles = StyleSheet.create({
    page: {
        flex: 1,
        paddingTop: hp('10%'), // 84
        paddingBottom: hp('5%'), // 60
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#FDF59D',
    },

    textBlock: {
        width: 315,
        marginLeft: 'auto',
        marginRight: 'auto'
    },

    mainText: {
        fontSize: 18,
        textAlign: 'center',
        color: '#5E80DB',
        fontFamily: 'Overpass-Medium'
    },

    textLinks: {
        color: '#4960E6', 
        fontFamily: 'Overpass-Medium'
    }
});

const SignUp = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.page}>
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={{ marginBottom: 40 }} onPress={() => navigation.goBack()}>
                    <Image source={require('../../../assets/Back-arrow.png')} />
                </TouchableOpacity>

                <Image style={{ marginBottom: 35 }} source={require('../../../assets/Logo-signUp.png')} />

                <InputForm placeholder='User name' />
                <InputForm placeholder='E-mail' />
                <InputForm placeholder='Password' />

                <View style={styles.textBlock}>
                    <Text style={styles.mainText}>By signing you agree to our <Text style={styles.textLinks}>Terms of Use</Text> and <Text style={styles.textLinks}>Privacy Police</Text></Text>
                </View>

                {/* TODO: Privacy and terms нужно будет сделать ссылками */}
            </View>
            <ButtonForm>Create</ButtonForm>
        </View>
    )
}

export default SignUp;
