import  React, {useContext} from 'react'
import {StyleSheet, View, FlatList} from 'react-native';
import {Text, FAB, List} from 'react-native-paper';
import {Context as ClientContext} from '../context/ClientContext'
import Header from '../components/Header'

function ViewClients({navigation}){

	const {state, addclient, deleteclient} = useContext(ClientContext)

    const addClients = client => {
        client.id = state.length + 1
        addclient(client)
    }

    return (
        <>
        <Header titleText='Yetu Client Sign Up' />
        <View style={styles.container}>
            { state.length === 0 ? (
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>You do not have any notes</Text>
                </View>
            ): (
                <FlatList
                    data={state}
                    renderItem={({ item }) => (
                        <List.Item 
                            title={item.firstName + item.middleName + item.lastName}
                            description={item.id}
                            descriptionNumberOfLines={1}
                            titleStyle={styles.listTitle}
                            onPress={()=> deleteclient(item.id)}
                        />
                    )}
                    keyExtractor={item => item.id.toString()}
                />
            )}
            
            <FAB style={styles.fab}
                small
                icon='plus'
                label='Add a new Client'
                onPress={() => navigation.navigate('AddClient',
                     {addClients})}
            />
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
    fab: {
        backgroundColor: '#219653',
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 10
    },
    listTitle: {
        fontSize: 20
    }
})

export default ViewClients;