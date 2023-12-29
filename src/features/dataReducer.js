import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import DataEmployee from '../../data/MOCK_DATA.json'

// export const getEmploys = createAsyncThunk('data/getEmploys', async()=>{//créer une réflexion asynchrone
//     const res = await fetch('../../data/MOCK_DATA.json')
//     const DataEmployee = await res.json()
//     return  DataEmployee
// })

export const dataSlice = createSlice({
    name: 'data',
    initialState : {employs : DataEmployee},
    reducers:{
        AddEmploys: (state, action)=>{
            console.log(action)
            state.employs.push(action.payload)
        }
    },  
    // extraReducers:(builder) =>{
    //     builder.addCase(getEmploys.pending,(state, action)=>{
    //         // console.log(action)
    //     })
    //     builder.addCase(getEmploys.fulfilled,(state, action)=>{
    //         //console.log(action)//contient le type en fullfield et les données en payload
    //         state.employs = action.payload
    //     })
    //     builder.addCase(getEmploys.rejected,(state,action)=>{
    //         console.log(action)
    //     })
    // },
})
export const {AddEmploys} = dataSlice.actions
export default dataSlice.reducer;