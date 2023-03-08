import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// Components
import InputForm from '../../UI/InputForm';
import ButtonForm from '../../UI/ButtonForm';
import { Context } from '../../../App';

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
        marginRight: 'auto',
        marginTop: 15
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
})

const LogIn = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { store } = useContext(Context);

    return (
        <View style={styles.page}>
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={{ marginBottom: 40 }} onPress={() => navigation.goBack()}>
                    <Image source={require('../../../assets/Back-arrow.png')} />
                </TouchableOpacity>

                <Image style={{ marginBottom: 35 }} source={require('../../../assets/Logo-LogIn.png')} />

                <InputForm
                    type="text"
                    value={email}
                    onChangeText={(e: any) => setEmail(e)}
                    placeholder='User name'
                />

                <InputForm
                    type="password"
                    value={password}
                    onChangeText={(e: any) => setPassword(e)}
                    placeholder='Password'
                />

                <View style={styles.textBlock}>
                    <Text style={styles.mainText}>Forgot your <Text style={styles.textLinks}>User name</Text> or <Text style={styles.textLinks}>Password</Text>?</Text>
                </View>
            </View>
            <ButtonForm
                onPress={() => store.login(email, password)}
            >Log In</ButtonForm>
        </View>
    )
}

export default LogIn;