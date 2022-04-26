import { PayloadAction } from '@reduxjs/toolkit'
import { call, delay, put, takeLatest} from 'redux-saga/effects'
import { boardActions } from '../reducers/boardReducer'
import { postBoard } from '../api/boardApi'

interface BoardAddArticleType{
    type: string;
    payload: {
        title: string, name: string, team: string, subject: string
    }
}

interface BoardAddArticleSuccessType{
    type: string;
    payload: {
        title: string
    }
}

function* board(board: BoardAddArticleType){
    try{
        alert(' 진행 3: saga내부 join 성공  '+ JSON.stringify(board))
        const response : BoardAddArticleSuccessType = yield postBoard(board.payload)
        yield put(boardActions.addArticleSuccess(response))
    }catch(error){
         alert('진행 3: saga내부 join 실패  ')
         yield put(boardActions.addArticleFailure(error)) 
    }
}

export function* watchAdd(){
    yield takeLatest(boardActions.addArticleRequest, board)
}
