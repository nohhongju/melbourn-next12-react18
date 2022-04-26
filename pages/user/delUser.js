import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '../../redux/reducers/userReducer.ts';
import tableStyles from '../../styles/Table.module.css'
export default function DelUser(){
    const [delUser, setDelUser] =useState({
        userid:'', password:''
    })
    const dispatch = useDispatch()
    const handleChange = e=>{
        e.preventDefault()
        const{name, value} = e.target;
        setLogin({...delUser,[name]: value})
    }
    return <form onSubmit={
        e => {
            e.preventDefault()
            dispatch(userActions.loginRequest(login))
            setLogin({
                userid:'', password:''
            })
        }
    }
    >
        <table className={tableStyles.table}>
            <thead>
                <tr>
                    <th colSpan={2}><h1>회원탈퇴 확인</h1></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>사용자ID</b></td>
                    <td><input type="text" name='userid' onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td><b>비밀번호</b></td>
                    <td><input type="text" name='password' onChange={handleChange}/></td>
                </tr>
                <tr>
                    <td colSpan={2}><button type="submit">회원탈퇴</button></td>
                </tr>
            </tbody>
        </table>
    </form>
    
    
}    
   