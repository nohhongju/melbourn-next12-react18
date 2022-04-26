import axios, { AxiosResponse } from "axios"

const SERVER = 'http://127.0.0.1:5000'

const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege...",
}

export interface BoardType{
    title: string;
    name: string;
    team: string;
    subject: string;
}

export const postBoard = async (payload: {
    title: string, name: string, team: string, subject: string}) => {
        try{
            const response : AxiosResponse <unknown, BoardType[]> = await axios.post(`${SERVER}/board/add`, payload, { headers })
            alert(`진행 5: 응답성공${JSON.stringify(response.data)}`)
            return response.data
        }catch(err){
            return err;
        }
    }
