import { configureStore } from '@reduxjs/toolkit'
import updateImages from "./Features/Images"
import title from './Features/Title'
import hobbies from './Features/hobbies'
import awards from './Features/awards'

const Store = configureStore({
    reducer: {
        updateImages,
        title,
        hobbies,
        awards
    },
    // devTools:false
})


export default Store