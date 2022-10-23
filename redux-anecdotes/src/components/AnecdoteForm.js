import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/ReduceAnectode'
import { setNotification } from '../reducers/notificationReducer'
const NewAnecdote = () => {
  const dropdown = useDispatch()
  const AnectodeAdd = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dropdown(createAnecdote(content))
    dropdown(setNotification(`Anecdote '${content}' successfully added`, 5))
  }
  return (
    <form onSubmit={AnectodeAdd}>
      <input name="anecdote" />
      <button type="submit">add</button>
    </form>
  )
}
export default NewAnecdote