const express = require('express')
const mongoose = require('mongoose')
require('./db/conn');
const path = require('path')
const todo = require('./models/todo');
const app = express()



const port = process.env.PORT || 3000;
const templatePath  = path.join(__dirname, './templates/views')

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.set('view engine', 'hbs');
app.set('views', templatePath);

app.get('/', async (req, res) => {
    try {
      const results = await todo.find({});
      const todoList = results.map((item, index) => {
        return {
          ...item._doc,
          index: index + 1
        };
      });
      res.render('index', { details: todoList });
    } catch (error) {
      console.log(error);
      res.status(500).send('Internal Server Error');
    }
  });

// app.get('/', (req,res)=>{
//     res.render('index')
// })


app.post('/submit', async(req,res)=>{
    try{
        const todoData = new todo({
            title: req.body.title,
            description: req.body.description
        })  
    await todoData.save();
    res.status(201).redirect('/')
    }
    catch(e){
        console.log(e)
    }
})


app.delete('/:id', (req,res)=>{
   todo.findByIdAndDelete(req.params.id)
   .then(result => {
   })

})

app.listen(port, ()=>{
    console.log(`server started on localhost:${port}`)
})