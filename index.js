const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT  || 9000
//use middleware

app.use(cors())
app.use(express.json())

app.get('/', (req,res)=>{
  res.send('Running')
})
 app.listen(port, () =>{
   console.log('crup server is running');
 })