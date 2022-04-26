import { createSlice } from "@reduxjs/toolkit";

export interface TaskType{
    task: string;
    completed: string;  // value is T or F
}

export interface TodoState{
    loading: boolean;
    data: TaskType[];
    error: any;
}

const initialState: TodoState = {
    loading: false,
    data: [],
    error: null
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        todoRequest:(state: TodoState, payload) => {
            alert('진행 2: 리듀서 내부')
            state.loading = true;
        },
        todoSuccess(state: TodoState, {payload}){
            state.data = [...state.data, payload]
            state.loading = false;
        },
        todoFailure(state: TodoState, {payload}){
            state.data = payload;
            state.loading = false;
        }
    }
})
const { reducer, actions } = todoSlice
export const todoActions = actions
export default reducer