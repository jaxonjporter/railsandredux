import axios from 'axios';

export const getNotes = () => {
  return(dispatch) => {
    axios.get('/api/notes')
      .then( res => dispatch({ type: "NOTES", notes: res.data }))
  }
}

export const addNote = (note) => {
  return(dispatch) => {
    axios.post('/api/notes', {note})
      .then( res => {
        dispatch({type: 'ADD_NOTE', note: res.data })
      })
  }
}

export const delNote = (id) => {
  return(dispatch) => {
    axios.delete(`/api/notes/${id}`)
      .then( () => dispatch({type: "DELETE_NOTE", id}))
  }
}

export const editNote = (note) => {
  return(dispatch) => {
    axios.put(`/api/notes/${note.id}`, {note})
      .then( res => dispatch({type: "EDIT_NOTE", note: res.data}))
  }
}



export default ( state = [], action ) => {
  switch(action.type) {
    case 'NOTES':
      return action.notes
    case 'ADD_NOTE':
      return [action.note, ...state];
    case 'DELETE_NOTE':
      return state.filter( note => {
        if (note.id !== action.id )
          return note
      })
    case 'EDIT_NOTE':
      return state.map( note => {
        if (note.id === action.note.id ) {
          return action.note
        }
        else {return note}
      })
    default:
      return state
  }
}