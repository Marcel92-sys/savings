import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Input, Button } from 'react-native-elements'

const NewPasswordScreen = () => {
    const [newPassword, setNewPassword] = useState('')
    return (
        <View style={styles.container}>
            <Input value={newPassword} placeholder ='Enter new password'  onChangeText={text => setNewPassword(text)}  />
            <Input value={newPassword} placeholder ='Confirm new password' onChangeText={text => setNewPassword(text)} />
            <Button style={styles.Button} type='solid' title='Change Password' onPress={''} />
        </View>
    )
}

export default NewPasswordScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        padding: 200,
        
    },
    Button: {
        color: 'green'
    }

})
