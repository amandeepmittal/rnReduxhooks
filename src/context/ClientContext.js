import createDataContext from './createDataContext'


export const ADD_CLIENT = 'ADD_CLIENT'
export const DELETE_CLIENT = 'DELETE_CLIENT'


const initialState = []

const noteReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_CLIENT:
            return [...state, action.payload]

        case DELETE_CLIENT:
            return state.filter (note => note.id !== action.payload)
        
        default:
            return state
    }
}

const addclient = dispatch => async(client) => {
    dispatch({ type: ADD_CLIENT, payload: client})
}

const deleteclient = dispatch => async(id) => {
    dispatch({type: DELETE_CLIENT, payload: id})
}
 
export const {Provider, Context} = createDataContext(
    noteReducer, {addclient, deleteclient},
    []
);