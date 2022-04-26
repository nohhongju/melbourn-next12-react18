import { PayloadAction } from '@reduxjs/toolkit'
import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { todoActions } from '../reducers/todoReducer.ts'
import { postTodo } from '../api/todoApi.ts'

interface TodoType{
    type: string;
    payload: {
        task: string, completed: string
    }
}
interface TodoSuccessType{
    type: string;
    payload: {
        task: string
    }
}

function* todo(todo: TodoType){
    try{
        alert(' 진행 3: saga내부 join 성공  '+ JSON.stringify(todo))
        const response : TodoSuccessType = yield postTodo(todo.payload)
        yield put(todoActions.todoSuccess(response))
    }catch(error){
         alert('진행 3: saga내부 join 실패  ')
         yield put(todoActions.todoFailure(error)) 
    }
}
export function* watchTodo(){
    yield takeLatest(todoActions.todoRequest, todo)
}