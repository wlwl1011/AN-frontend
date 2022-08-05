import { createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'

const reducers = combineReducers({

})

const initialState = {} 

const middleware = [thunk]

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)