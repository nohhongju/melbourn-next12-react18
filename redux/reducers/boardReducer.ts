import { createSlice } from "@reduxjs/toolkit";

export interface BoardType{
    title: string;
    name: string;
    team: string;
    subject: string;
}
    
export interface BoardState{
    loading: boolean;
    data: BoardType[];
    error: any;
}

const initialState: BoardState = {
    loading: false,
    data: [],
    error: null
}

export const boardSlice = createSlice({
    name: 'boards',
    initialState,
    reducers:{
        addArticleRequest:(state: BoardState, payload) => {
            alert('진행 2: 리듀서 내부')
            state.loading = true;
        },
        addArticleSuccess(state: BoardState, {payload}){
            state.data = [...state.data, payload]
            state.loading = false;
        },
        addArticleFailure(state: BoardState, {payload}){
            state.data = payload;
            state.loading = false;
        }
    }
})

export const { reducer, actions } = boardSlice
export const boardActions = actions
export default reducer
