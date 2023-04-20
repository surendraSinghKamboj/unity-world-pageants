import { configureStore } from '@reduxjs/toolkit'
import updateImages from "./Features/Images"

const Store = configureStore({
    reducer: {
        updateImages
    }
})


export default Store