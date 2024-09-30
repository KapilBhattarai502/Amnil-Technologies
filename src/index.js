
import fetchTasks from "./fetchTasks.js";
import renderTask from "./renderTask.js";
import "./output.css"

const form=document.getElementById("form");


document.addEventListener('DOMContentLoaded',()=>{
    fetchTasks();
})

function handleSubmit(event){

    event.preventDefault()

    const formData=new FormData(event.target)

 

    const formDataobj={};

    formData.forEach((value,key)=>{
        formDataobj[key]=value;
    })
    fetch("http://localhost:6800/todo/add",{
        method:'POST',
        body:JSON.stringify(formDataobj),
        headers:{
            'Content-Type':'application/json'
        }
    }).then((response)=>{
        if(response.status===200){
            alert('Task Entered Successfully')
        }
        response.json().then((newTask)=>{
            renderTask(newTask)
            form.reset()
        })
    })

}


form.addEventListener('submit',handleSubmit)