import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { API_URL } from "../../constants/constants";
import axios from "axios";


export interface Data {
    isloading:boolean,
    data:any,
    isError:boolean,
}

const initialState:Data = {
    isloading: false,
    data: null,
    isError: false,
}


export const image = createAsyncThunk('fetchImage', async()=>{
   return fetch(`${API_URL}/image/getAllImages`).then(res => res.json())
})

const imageSlice = createSlice({
    name: 'ImageCall',
    initialState ,
    extraReducers: (builder) => {
        builder.addCase(image.pending, (state) => {
            state.isloading = true;
        });
        builder.addCase(image.rejected, (state, _action:PayloadAction<any>) => {
            console.log("error");
                state.isError = true;
        });
        builder.addCase(image.fulfilled, (state, action) => {
            state.isloading = false;
            state.data = action.payload;
        });
    },
    reducers:{}
})

export default imageSlice.reducer;
