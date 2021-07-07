import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {Link} from '@react-navigation/native'
import { Input, Button } from 'react-native-elements'
import { StackActions } from '@react-navigation/native';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <SafeAreaProvider>

            <View>
                <Input value={email} onChangeText={text => setEmail(text)} placeholder="Email"  />
                <Input value={password} onChangeText={(text)=> setPassword(text)} placeholder="Password" secureTextEntry={true} />
                
                <Button type='solid' onPress={()=> navigation.push('Dashboard')} title='login' />
                <View>
                    <Text>New to Savers, 
                        <Link to='/signup'
                            action={StackActions.replace('SignUp')}
                        >Create an account</Link>
                    </Text>
                </View>
                
            </View>
        </SafeAreaProvider>

    )
}

export default LoginScreen

const styles = StyleSheet.create({})
