import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const DashboardScreen = () => {
    return (
        <View>
            <Text>Welcome User</Text>
            <View style={styles.main}>
                <View>
                    <Text>Account Balance</Text>
                    <View>
                        <Button>Add Money</Button>
                        <Button>Withdrawal</Button>
                    </View>
                </View>
                <View>2</View>
                <View>3</View>


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
