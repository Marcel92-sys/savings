import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native'
// import {SafeAreaProvider} from 'react-native-safe-area-context'
import {Link} from '@react-navigation/native'
import { Input, Button , Text } from 'react-native-elements'
import { StackActions } from '@react-navigation/native';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <KeyboardAvoidingView style={styles.container}>

            <View >
                <Input  style={styles.input} value={email} type='email' onChangeText={text => setEmail(text)} autoFocus={true} placeholder="Email"  />
                <Input style={styles.input} value={password} type='password' onSubmitEditing={()=> navigation.replace('Dashboard')} onChangeText={(text)=> setPassword(text)} placeholder="Password" secureTextEntry={true} />
                
                <Button style={styles.button} type='solid' onPress={()=> navigation.replace('Dashboard')} title='login' />
                <View style={{alignSelf:"center"}}>
                    <Text >New to Savers, 
                        <Link to='/signup'
                            action={StackActions.replace('SignUp')}
                         style={styles.link}>Create an account</Link>
                    </Text>
                    <Text  > 
                        <Link to='/passwordReset'
                            action={StackActions.replace('PasswordReset')}
                         style={styles.reset}
                        >Forgot password?</Link>
                    </Text>
                </View>
                
            </View>
        </KeyboardAvoidingView>

    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{ 
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        font:'bold'},
        input: {
            width:300,
        },
        link: {
            color: 'green',
            paddingLeft: 5
        },
        button: {
            width: 200,
            alignSelf:'center'
        },
        reset: {
            color: 'red'
        }
})
