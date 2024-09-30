import renderTask from "./renderTask.js";

export default function fetchTasks(){
    fetch('http://localhost:6800/todo/gettodos').then((response)=>{
        response.json().then((data)=>{
            const taskList=document.getElementById("tasklist")
            taskList.innerHTML='';
            data.map((item)=>{
               renderTask(item)
            })
        })
    })
}