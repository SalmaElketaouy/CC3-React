import { configureStore} from '@reduxjs/toolkit'
import userSlice from './userSlice';
import CartSlice from './CartSlice';






export const store =configureStore({
    reducer:{
        user:userSlice,
        ListProduits:CartSlice,
    }
})