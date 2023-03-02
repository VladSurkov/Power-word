import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// Components
import { StatusBar } from 'expo-status-bar';

const FirstScreen = () => {
  const navigation = useNavigation();

  const pressSignUpHandler = () => {
    navigation.navigate('SignUp');
  }

  const pressLogInHandler = () => {
    navigation.navigate('LogIn');
  }

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Image 
          style={styles.image} 
          source={require('../../../assets/girl-with-books.png')} 
          resizeMode='contain'
        />
        <Image style={styles.logo} source={require('../../../assets/Logo.png')}/>
        <StatusBar style="auto" />
      </View>
      <View style={styles.buttons}>
          <TouchableOpacity style={styles.buttons__up} onPress={pressSignUpHandler}>
              <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={styles.buttons__text}>Or</Text>

          <TouchableOpacity style={styles.buttons__in} onPress={pressLogInHandler}>
              <Text style={styles.logInText}>Log In</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

// Styles
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FDF59D',
    paddingTop: hp('10%'), // 130
    paddingBottom: hp('10%'), // 113
  }, 

  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  image: {
    width: wp('65%'), // 251
    height: hp('35%'), // 308
    marginBottom: 30
  },

  logo: {
    width: 238,
    height: 86
  },

  buttons: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 153
  },

  buttons__text: {
    fontSize: 18,
    color: '#5E80DB',
    fontFamily: 'Overpass-SemiBold'
  },

  buttons__up: {
    width: 258,
    height: 55,
    backgroundColor: '#4960E6',
    borderRadius: 24,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  signUpText: {
    color: 'white',
    fontSize: 19,
    fontFamily: 'Overpass-SemiBold'
  }, 

  buttons__in: {
    width: 258,
    height: 55,
    borderWidth: 2,
    borderColor: '#4960E6',
    borderRadius: 24,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  logInText: {
    fontSize: 19,
    color: '#4960E6',
    fontFamily: 'Overpass-SemiBold'
  }
});

export default FirstScreen;