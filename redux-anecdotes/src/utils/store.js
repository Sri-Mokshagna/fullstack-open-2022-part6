import { createStore, combineReducers, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import anecdoteReducer from '../reducers/ReduceAnectode'
import notificationReducer from '../reducers/notificationReducer'
import filterReducer from '../reducers/filterReducer'

const decrement = combineReducers({
    notification: notificationReducer,
    anecdotes: anecdoteReducer,
    filter: filterReducer
  })

const store = createStore(
    decrement,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
)

export default store