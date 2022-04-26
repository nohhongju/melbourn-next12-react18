import { combineReducers } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper';
import admins from './adminReducer.ts'
import basics from './basicReducer.ts'
import boards from './boardReducer.ts'
import games from './gameReducer.ts'
import todos from './todoReducer.ts'
import users from './userReducer.ts'

const rootReducer = (state:any, action:any) => {
    if (action.type === HYDRATE) {
        return {
          ...state,
          ...action.payload,
        };
      }
      return combineReducers({
        admins,
        basics,
        boards,
        games,
        todos,
        users
      })(state, action)
}

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
