import React, {useEffect} from 'react'
import NewAnecdote from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { initializeAnecdotes } from './reducers/ReduceAnectode'
import { useDispatch } from 'react-redux'
const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])
  return (
    <div>
      <h2>New Creation</h2>
      <NewAnecdote />
      <h2>Anecdotes using React</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
    </div>
  )
}
export default App