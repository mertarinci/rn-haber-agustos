import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



const RegisterScreen = () => {

    const auth = getAuth();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    

    const onPress = () => {

        createUserWithEmailAndPassword(auth,email,password).then(userCredential => {console.log(userCredential.user.email)}).catch(error => {console.log(error)})
        
    }


  return (
    <View style={styles.container}>
        
        {/* form group for login */}

        <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Email</Text>
            <TextInput
            onChangeText = {(text) => setEmail(text)}
            value = {email}

             style={styles.formInput} />
            <Text style={styles.formLabel}>Password</Text>
            <TextInput
            onChangeText = {(text) => setPassword(text)}
            value = {password}
            secureTextEntry={true}
            style={styles.formInput}
             />
            <Button onPress={onPress} title='Login' />
            </View>

    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    formGroup : {
        justifyContent : 'space-between',
        alignItems : 'center',
        width : '100%',
        marginBottom : 20,
    },
    formLabel : {
        fontSize : 18,
        fontWeight : 'bold',
        color : '#000'
    },
    formInput : {
        width : '80%',
        height : 40,
        borderColor : '#000',
        borderWidth : 1,
        borderRadius : 5,
        paddingLeft : 10,
        marginBottom : 10
    }


})