export default function deleteTask(deleteId){
    fetch(`http://localhost:6800/todo/deletetodos/${deleteId}`,{
        method:'DELETE',
    })

}