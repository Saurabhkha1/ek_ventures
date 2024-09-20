import {combineReducers} from '@reduxjs/toolkit'
import videoReducer from './videoReducer'
const rootReducer=combineReducers({
    videoReducer:videoReducer
})

export default rootReducer