import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { Text, FAB, List } from 'react-native-paper'
import { useSelector, useDispatch } from 'react-redux'
import { addnote, deletenote } from '../redux/notesApp'

import Header from '../components/Header'

function ViewNotes({ navigation }) {
  const notes = useSelector(state => state)
  const dispatch = useDispatch()
  const addNote = note => dispatch(addnote(note))
  const deleteNote = id => dispatch(deletenote(id))

  return (
    <>
      <Header titleText='Simple Note Taker' />
      <View style={styles.container}>
        {notes.length === 0 ? (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>You do not have any notes</Text>
          </View>
        ) : (
          <FlatList
            data={notes}
            renderItem={({ item }) => (
              <List.Item
                title={item.note.noteTitle}
                description={item.note.noteValue}
                descriptionNumberOfLines={1}
                titleStyle={styles.listTitle}
                onPress={() => deleteNote(item.id)}
              />
            )}
            keyExtractor={item => item.id.toString()}
          />
        )}
        <FAB
          style={styles.fab}
          small
          icon='plus'
          label='Add new note'
          onPress={() =>
            navigation.navigate('AddNotes', {
              addNote
            })
          }
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 20
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
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 10
  },
  listTitle: {
    fontSize: 20
  }
})

export default ViewNotes
