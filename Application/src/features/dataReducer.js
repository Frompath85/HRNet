import {createSlice} from '@reduxjs/toolkit'
import DataEmployee from '../../data/MOCK_DATA.json'

export const dataSlice = createSlice({
    name: 'data',
    initialState : {employs : DataEmployee},
    reducers:{
        AddEmploys: (state, action)=>{
            state.employs.push(action.payload)
        }
    },  
})
export const {AddEmploys} = dataSlice.actions
export default dataSlice.reducer;