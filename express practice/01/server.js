import express from "express"
const app=express();
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>{
  res.render('index.ejs')
})
app.post("/form",(req,res)=>{
  console.log(req.body)
  res.json({
    message:"You can get the daata successfully",
    success:true
  })
})
const PORT=1000;
app.listen(PORT,()=>{
  console.log(`server is running on the port ${PORT}`)
})