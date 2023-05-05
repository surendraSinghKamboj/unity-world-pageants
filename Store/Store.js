import { configureStore } from '@reduxjs/toolkit'
import updateImages from "./Features/Images"
import title from './Features/Title'
import hobbies from './Features/incrementalStorage'


const Store = configureStore({
    reducer: {
        updateImages,
        title,
        hobbies,
    },
    devTools:false
})


export default Store