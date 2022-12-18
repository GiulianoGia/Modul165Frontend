import axios from "axios";
import store from "@/store";
import { getCookie } from "./cookie";

export function setQuiz(): void{
    axios.post(`http://localhost:8081/post/quiz?fails=${store.state.fails}&username=${getCookie("username")}&time=${store.state.time}&points=${store.state.points}`);
}