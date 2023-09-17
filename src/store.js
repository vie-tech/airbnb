import {configureStore} from '@reduxjs/toolkit'
import  changeModeSlice from './reducer';


export default configureStore({

    reducer:{
        mode: changeModeSlice
    }
})