import { configureStore } from '@reduxjs/toolkit'
import updateImages from "./Features/Images"
import title from './Features/Title'

const Store = configureStore({
    reducer: {
        updateImages,
        title
    },
    // devTools:false
})


export default Store