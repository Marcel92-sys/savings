import { StatusBar } from 'expo-status-bar';
import React , {useState}  from 'react'
import { StyleSheet,KeyboardAvoidingView, View } from 'react-native'
import {Link} from '@react-navigation/native'
import { Input, Button, Text } from 'react-native-elements'
import { StackActions } from '@react-navigation/native';

const SignUpScreen = ({navigation}) => {
        const [fullName, setFullName] = useState('')
        const [email, setEmail] = useState('')
        const [phoneNumber, setPhoneNumber] = useState('')
        const [password, setPassword] = useState('')
    


    return (
        <KeyboardAvoidingView style={styles.container}>
            <StatusBar style="auto" />
            <View>
                
                <Input style={styles.input} value={fullName} onChangeText={text => setFullName(text)} placeholder="FullName"  />
                <Input style={styles.input} value={email} onChangeText={text => setEmail(text)} placeholder="Email"  />
                <Input style={styles.input} value={phoneNumber} onChangeText={text => setPhoneNumber(text)} placeholder="Phone Number"  />
                <Input style={styles.input} value={password} onSubmitEditing={() => navigation.navigate('Login')} onChangeText={(text)=> setPassword(text)} placeholder="Password" secureTextEntry={true} />
                
                <Button  title='Sign Up' onPress={() => navigation.navigate('Login')} />
            
           
            <View>
                <Text h5>Already have an account ? 
                    <Link 
                        to='/login'
                        action={StackActions.replace('Login')}
                         style={styles.link} > Sign In
                    </Link>
                </Text>
            </View>
             </View>

        </KeyboardAvoidingView>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({ 
    container: {
        justifyContent: 'center'

        },
        input: {
            width:300,
        },
    link: {
        color: "green"
    }
})
