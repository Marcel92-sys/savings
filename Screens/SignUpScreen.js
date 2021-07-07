import React , {useState}  from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Link} from '@react-navigation/native'
import { Input, Button } from 'react-native-elements'
import { StackActions } from '@react-navigation/native';

const SignUpScreen = ({navigation}) => {
        const [fullName, setFullName] = useState('')
        const [email, setEmail] = useState('')
        const [phoneNumber, setPhoneNumber] = useState('')
        const [password, setPassword] = useState('')
    


    return (
        <View>
            <Input value={fullName} onChangeText={text => setFullName(text)} placeholder="FullName"  />
            <Input value={email} onChangeText={text => setEmail(text)} placeholder="Email"  />
            <Input value={phoneNumber} onChangeText={text => setPhoneNumber(text)} placeholder="Phone Number"  />
            <Input value={password} onChangeText={(text)=> setPassword(text)} placeholder="Password" secureTextEntry={true} />
            
            <Button type='solid' title='signUp' onPress={() => navigation.navigate('Login')} />
            <View>
                <Text>Already have an account ?
                    <Link 
                        to='/login'
                        action={StackActions.replace('Login')}>Sign In
                    </Link>
                </Text>
            </View>

        </View>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({})
