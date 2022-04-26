import React, { useState } from "react";
import axios from "axios";

export default function Calc(){
    const [inputs, setInputs] = useState({})

    const handleChange = (e) =>{
        e.preventDefault()
        const{value, name} = e.target;
        setInputs({...inputs, [name]: value})
    }
    const handleClick = (e) => {
        e.preventDefault()
        alert(`데이터셋 출력 : ${JSON.stringify(inputs)}`)
        axios.post('http://localhost:5000/api/basic/calc',inputs)
        .then(res => {
            const calc = res.data
            document.getElementById('result-span').innerHTML =`
            <h3>첫번쨰 숫자 : ${calc.num1}<h3/>
            <h3>연산자 : ${calc.opcode}</h3>
            <h3>두번째 숫자 : ${calc.num2}</h3>
            <h3>계산결과 : ${calc.calc}</h3>
            `
        })
        .catch(err => alert(err))
    }

    return <div>
        <form action="" onSubmit={handleClick}>
        <h1>Calc</h1>
            <label htmlFor=""><b>Num1 </b></label>
            <input type="text" name="num1" onChange={handleChange}/><br />
            <label htmlFor=""><b>Opcode </b></label>
            <select name="opcode" id="" onChange={handleChange}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
            <option value="%">%</option>
            </select>
            <br />
            <label htmlFor=""><b>Num2 </b></label>
            <input type="text" name="num2" onChange={handleChange}/><br />
            <input type="submit" value="계산결과"/><br/>
        </form>
            <div>결과 : <span id="result-span"></span></div>
    </div>
} 