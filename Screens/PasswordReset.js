import React, {useState} from 'react'
import { StyleSheet,KeyboardAvoidingView, Text, View } from 'react-native'

import { Input, Button } from 'react-native-elements'

const PasswordReset = ({navigation}) => {
    const [email, setEmail] = useState('');

    return (
        <KeyboardAvoidingView style={styles.container}>
            <Input value={email} onChangeText={text => setEmail(text)} placeholder='Enter your email address.' />
            <Button style={styles.Button} type='solid' title ='Verify email' onPress={() => navigation.navigate('NewPassword')} />
            
        </KeyboardAvoidingView>
    )
}

export default PasswordReset

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
