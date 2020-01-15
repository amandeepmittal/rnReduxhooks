import remove from 'lodash.remove'

// Action Types

export const ADD_NOTE = 'ADD_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'

// Action Creators

let noteID = 0

export function addnote(note) {
  return {
    type: ADD_NOTE,
    id: noteID++,
    note
  }
}

export function deletenote(id) {
  return {
    type: DELETE_NOTE,
    payload: id
  }
}

// reducer

const initialState = []

function notesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state,
        {
          id: action.id,
          note: action.note
        }
      ]

    case DELETE_NOTE:
      const deletedNewArray = remove(state, obj => {
        return obj.id != action.payload
      })
      return deletedNewArray

    default:
      return state
  }
}

export default notesReducer
