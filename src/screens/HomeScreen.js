import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }) => {

    

  return (
    <View style = {styles.container}>
      <Button style = {styles.margin} title='Login'/>
      <Button onPress = {navigation.navigate("Register")} style = {styles.margin} title = "Register"/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
})