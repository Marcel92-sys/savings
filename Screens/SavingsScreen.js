import React from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input } from 'react-native-elements'

const SavingsScreen = () => {
    const [amount, setAmount] = useState('')
    const [depositor, setDepositor] = useState('')
    const [accountNumber, setAccountNumber] = useState('')

    return (
        <View>
            <Text>Hello, User</Text>
                <Input autoFocus={true} value={amount} onChangeText={text => setAmount(text)} placeholder="Enter the amount"  />
                <Input  value={depositor} onChangeText={text => setDepositor(text)} placeholder="Enter your name"  />
                <Input  value={accountNumber} onChangeText={text => setAccountNumber(text)} placeholder="Enter the account number"  />
                <Button title='Post Money' />
        </View>
    )
}

export default SavingsScreen

const styles = StyleSheet.create({})
