export default function updateTodos(value,editId){
    

    fetch(`http://localhost:6800/todo/edittodos/${editId}`,{
        method:'PUT',
        body:JSON.stringify({value}),
        headers:{
            'Content-Type':'application/json'
        }


    })


    

}