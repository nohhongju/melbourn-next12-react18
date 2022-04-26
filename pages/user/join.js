import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { userActions } from '../../redux/reducers/userReducer.ts';
import tableStyles from '@/styles/Table.module.css'
export default function  Join(){
    const [user, setUser] = useState({
        userid:'', password:'', email:'', name:'', phone:'', birth:'', address:''
    })
    const dispatch = useDispatch()
    const handleChange = e =>{
        e.preventDefault()
        const{name, value} = e.target;
        setUser({...user,[name]: value})
    }

    return <form onSubmit={
        e => {
            e.preventDefault()
            alert(' 진행 1: 회원가입 클릭 ');
            dispatch(userActions.joinRequest(user))
            setUser({
                userid:'', password:'', email:'', name:'', phone:'', birth:'', address:''
            })
            window.location.href = "./login"
        }
    }>
        <table className={tableStyles.table}>
            <thead>
                <tr>
                    <th colSpan={2}><h1>회원가입</h1></th>
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
                    <td htmlFor=""><b>이메일</b></td>
                    <td><input type="text" name='email' onChange={handleChange}/></td>
                </tr>
                <tr>
                    <td htmlFor=""><b>이름</b></td>
                    <td><input type="text" name='name' onChange={handleChange}/></td>
                </tr>
                <tr>
                    <td><b>전화번호</b></td>
                    <td><input type="text" name='phone' onChange={handleChange}/></td>
                </tr>
                <tr>
                    <td><b>생년월일</b></td>
                    <td><input type="text" name='birth' onChange={handleChange}/></td>
                </tr>
                <tr>
                    <td><b>주소</b></td>
                    <td><input type="text" name='address' onChange={handleChange}/></td>
                </tr>
                <tr>
                    <td colSpan={2}><button type="submit" >회원가입</button><br /></td>
                </tr>
            </tbody>
        </table>
    </form>
}