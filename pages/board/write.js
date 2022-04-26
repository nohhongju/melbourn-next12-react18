import React, {useState} from 'react'
import tableStyles from '../common/style/table.module.css'
import { useDispatch } from 'react-redux'
import { boardActions } from '../../redux/reducers/boardReducer.ts'

export default function Board(){
    const [board, setBoard] = useState({
        title:'',name:'',team:'',subject:''
    })
    const dispatch = useDispatch()

    const handleChange = e => {
        e.preventDefault()
        const {name, value} = e.target 
        setBoard({...board, [name]: value})
    }

    return (<form onSubmit={e => {
        e.preventDefault()
        alert('진행1: 글올리기 클릭');
        dispatch(boardActions.addArticleRequest(board))
        setBoard({title:'',name:'',team:'',subject:''})
    }}>
    <table className={tableStyles.table}>
        <thead>
            <tr>
                <th colSpan={2}><h2>게시판 글쓰기</h2></th>
            </tr>
        </thead>
        <tbody>
            <tr >
                <td><label>제 목</label></td>
                <td><input type="text" onChange={handleChange}
                        id="title" name="title" placeholder="제목 입력"/></td>
            </tr>
            <tr>
                <td> <label>작성자</label></td>
                <td ><input type="text" onChange={handleChange}
                        id="name" name="name" placeholder="게시글 작성자 이름 입력"/></td>
            </tr>
            <tr >
                <td><label htmlFor="team">주제</label></td>
                <td >
                    <select id="team" name="team" onChange={handleChange}>
                        <option value="">주제 선택</option>
                        <option value="K09">영화</option>
                        <option value="K02">도서</option>
                        <option value="K04">여행</option>
                    </select>
                </td>
            </tr>
            <tr >
                <td ><label htmlFor="subject">내용</label></td>
                <td ><input type="textarea"  id="subject" name="subject" onChange={handleChange} style={{height:200 + "px"}}></input></td>
            </tr>
            <tr >
                <td colSpan={2}><input type="submit" value="Submit"/></td >
            </tr>
                </tbody>
            </table>
            </form>)
}