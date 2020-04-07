import  React, {useContext, useState, useEffect} from 'react'
import {StyleSheet, View, FlatList} from 'react-native';
import {Text, FAB, List} from 'react-native-paper';
import {Context as ClientContext} from '../context/ClientContext'
import Header from '../components/Header'
import ClientCard from '../components/ClientCard'
import clientAPI from '../apis/Clients'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function ViewClients({navigation}){

	const [clients, setClients] = useState([]);

	useEffect(() => {
		getClientsFromAPI()
	}, [])

	function getClientsFromAPI() {
		clientAPI.get('/api/clients')
			.then(async function (response) {
				setClients(response.data);
			})
			.catch(function(error) {
				console.log(error)
			})
	}

	if (!clients) {
		return (
			<View style={styles.container}>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>You do not have any clients</Text>
				</View>
			</View>
		)
	} else {
		return (
			<>
			<Header titleText='Yetu Client Pictures' />
			<View style={styles.container}>
					<FlatList
						data={clients}
						keyExtractor={(item, index) => 'key' +index}
						renderItem={({item}) => {
							return <TouchableWithoutFeedback 
								onPress={() => navigation.navigate('AddClientPic', {clientDetails: item.ClientID})} >
										<ClientCard item={item} />
									</TouchableWithoutFeedback>	
						}}
					/>
				
				<FAB style={styles.fab2}
					small
					icon='plus'
					label='SignUp'
					onPress={() => navigation.navigate('AddClient')}
				/>
				<FAB style={styles.fab}
					small
					icon='plus'
					label='CheckStatus'
					// add separate screen fro account details
					onPress={() => navigation.navigate('AddClient')}
				/>
			</View>
			</>
		)
	}
    
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
		marginLeft: -10,
        right: -15,
        bottom: 10
	},
	fab2: {
		backgroundColor: '#219678',
		position: 'absolute',
		margin: 20,
		left: 0,
		bottom: 10
	},
    listTitle: {
        fontSize: 20
    }
})

export default ViewClients;