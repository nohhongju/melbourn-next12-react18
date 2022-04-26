import style from "../board/style/board-form.module.css"
import { useState } from "react"

export default function TeamForm(){
    const [inputs, setInputs] = useState({})
    const {TeamId,orgYyyy,stadiumName,address,tel} = inputs;

    const handleChange = e => {
        e.preventDefault()
        const {name, value} = e.target;
        setInputs({...inputs, [name]:value})
    }
    const handleSubmit = e => {
        e.preventDefault()
        const Request = {TeamId,orgYyyy,stadiumName,address,tel}
        alert(`등록할 팀 정보 : ${JSON.stringify(Request)}`)
    }
    return (<>
        <div className={style.container}>
            <form action="">
            <div className={style.row}>
                <div className={style.col25}>
                    <label className={style.label} htmlFor="teamId">팀 ID</label>
                </div>
                <div className={style.col75}>
                    <input type="text" className={style.inputText} id="TeamId"
                     name="TeamId" onChange={handleChange}/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                    <label className={style.label} htmlFor="teamId">팀 ID</label>
                </div>
                <div className={style.col75}>
                    <input type="text" className={style.inputText} id="TeamId"
                     name="TeamId" onChange={handleChange}/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                    <label className={style.label} htmlFor="teamId">연고지</label>
                </div>
                <div className={style.col75}>
                    <input type="text" className={style.inputText} id="TeamId"
                     name="TeamId" onChange={handleChange}/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                    <label className={style.label} htmlFor="teamId">팀명</label>
                </div>
                <div className={style.col75}>
                    <input type="text" className={style.inputText} id="TeamId" 
                    name="TeamId" onChange={handleChange}/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                    <label className={style.label} htmlFor="orgYyyy">창단년도</label>
                </div>
                <div className={style.col75}>
                    <input type="text" className={style.inputText} id="orgYyyy" 
                    name="orgYyyy" onChange={handleChange}/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                    <label className={style.label} htmlFor="stadiumName">스타디움 명칭</label>
                </div>
                <div className={style.col75}>
                    <input type="text" className={style.inputText} id="stadiumName"
                     name="stadiumName" onChange={handleChange}/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                    <label className={style.label} htmlFor="address">주소</label>
                </div>
                <div className={style.col75}>
                    <input type="text" className={style.inputText} id="address" 
                    name="address" onChange={handleChange}/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                    <label className={style.label} htmlFor="tel">전화번호</label>
                </div>
                <div className={style.col75}>
                    <input type="text" className={style.inputText} id="tel" 
                    name="tel" onChange={handleChange}/>
                </div>
            </div>
            <br/>
            <div className={style.row}>
                <input type="submit" className={style.inputSubmit}
                value="Submit"onClick={handleSubmit}/>
            </div>
            </form>
            </div>
    </>)
}