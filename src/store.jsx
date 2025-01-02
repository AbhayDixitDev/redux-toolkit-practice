import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './counterSlice'
import colorSlice from './colorSlice'
const store = configureStore({
    reducer:{
        count:counterSlice,
        color:colorSlice
    }
})

export default store