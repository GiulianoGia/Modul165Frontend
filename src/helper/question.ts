import { Question } from "@/types/Question";
import axios from "axios";

export function getAllQuestions(): Promise<Array<Question>>{
    return axios.get("http://localhost:8081/all/questions").then((response) => {
        return response.data;
    })
}