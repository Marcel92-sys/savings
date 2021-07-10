import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Button, Input } from 'react-native-elements'
const DashboardScreen = ({navigation}) => {
    return (
        <View>
            <Text>Welcome User</Text>
            <View style={styles.main}>
                <View>
                    <Text>Account Balance</Text>
                    <View>
                        <Button onPress={() => navigation.push('Saving')}>Fund Account</Button>
                        <Button>Withdrawal</Button>
                    </View>
                </View>


            </View>
        </View>
    )
}

export default DashboardScreen

const styles = StyleSheet.create({
    main:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    }
})
