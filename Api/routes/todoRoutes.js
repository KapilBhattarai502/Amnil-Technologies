import express from 'express'
import { todos } from '../Model/todoModel.js';

const  router=express.Router()

router.post('/add',async(req,res)=>{
    const {task}=req.body;
    try {
       const todoTask= await todos.create({task})
       return res.status(200).json(todoTask)
     
    } catch (error) {
        throw new Error(error.message)
        
    }
})
router.get('/gettodos',async(req,res)=>{
    try {
        const alltodos = await todos.find()
        return res.status(200).json(alltodos)
    } catch (error) {
        throw new Error(error.message)
        
    }
})
router.delete('/deletetodos/:id',async(req,res)=>{
    const deleteId=req.params.id;
    try {
        await todos.deleteOne({_id:deleteId});
        return res.status(200).send({message:"Deleted Successfully"});
    } catch (error) {

        throw new Error(error.message)
        
    }


})
router.put('/edittodos/:id',async(req,res)=>{
    const editId=req.params.id;
   
    try {
        const {value}=req.body
        await todos.findOneAndUpdate({_id:editId}, { $set: { completed: value } })
        
    } catch (error) {
        throw new Error(error.message)
        
    }

})
export default router;