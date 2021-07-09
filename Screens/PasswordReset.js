import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Input, Button } from 'react-native-elements'

const PasswordReset = ({navigation}) => {
    const [email, setEmail] = useState('');

    return (
        <View>
            <Input value={email} onChangeText={text => setEmail(text)} placeholder='Enter your email address.' />
            <Button type='solid' title ='Verify email' onPress={() => navigation.navigate('NewPassword')} />
            
        </View>
    )
}

export default PasswordReset

const styles = StyleSheet.create({})
