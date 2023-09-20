// crea las url para agregar , editar oeliminar , una para caada una
const express=require('express');
const router=express.Router();

const Task= require('../models/task');


router.get('/', async (req, res)=>{

  const tasks= await  Task.find();
    console.log(tasks);
   
});

router.get('/:id', async (req,res)=>{
 const task= await Task.findById(req.params.id);
 res.json(task);
})


router.post('/',async(req,res)=>{
   const {title, description}=req.body;
   const task= new Task({title,description});
   await task.save();
    res.json({status:'Task saved'});
});


// editar tarea
router.put('/:id',async(req,res)=>{
  const {title,description}=req.body;
  const newTask={title,description};
  Task.findByIdAndUpdate(req.params.id, newTask);
 res.json({status:'Task Updated'});

})

// eliminar tarea
router.delete('/:id', async(req,res)=>{
  await  Task.findByIdAndRemove(req.params.id);
  res.json({status:'Task deleted'})
});

module.exports = router;