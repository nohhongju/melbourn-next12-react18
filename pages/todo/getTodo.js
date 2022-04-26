import axios from 'axios';
import React, { useEffect, useState } from "react";
import Head from "next/head";
import tableStyles from "../common/style/table.module.css"

const Table = ({ columns, colspan, data }) => {
    return(
        <table className={tableStyles.table}>
            <thead>
                <tr>
                {columns.map((column) => (
                    <th key={column.title}>{column}</th>))}
                </tr>
            </thead>
            <tbody>
                {data.length == 0 ? 
                    <tr>
                        <td colSpan={colspan}>일정이 없습니다</td>
                    </tr>
                :data.map((todo) => (
                    <tr key={todo.context}>
                        <td key={todo.context}></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )}
export default function TodoList(){
    const columns = ["TO DO"];
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/todo/get').then(res=>{
            setData(res.data.todos)
        }).catch(err=>{})
    },[])
    return(<>
        <Head>
            <title>Todo | 할일목록</title>
        </Head>
        <h1>할 일 목록</h1>
        <div>
        <Table columns={columns} data={data}/>
        </div>
        </>)
    }