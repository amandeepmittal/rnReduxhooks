import { createStore } from 'redux'
import notesReducer from './notesApp'

const store = createStore(notesReducer)

export default store
