import React from 'react'
import {StyleSheet, View, Flatlist} from 'react-native'
import {Text, FAB, List} from 'react-native-paper'
import Header from '../components/Header'


function AddClientPic({route, navigation}){

    const { clientDetails } = navigation.state.params;

    return (
        <>
        <Header titleText="Client Picture Upload" />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{JSON.stringify(clientDetails)}</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    title: {
        fontSize: 20
    },
    listTitle: {
        fontSize: 20
    }
})

export default AddClientPic;