
const express = require('express');
const router = express.Router();
const books = require('../schemas/book')
const want = require('../schemas/want')

router.get('/',async (req,res)=>{
    try {
        const book = await books.find()
var bookn = [];
        for(let i = 0;i<book.length;i++){

if(book[i].isRented==false){
  bookn.push(book[i]);
}



}
res.json(bookn); 
  } 
  catch (err) {
        res.status(500).json({ message: err.message })
      }
})

router.post('/', async (req, res) => {
  const buk = new want({
    name: req.body.name,
    author:req.body.author,
    image:req.body.image,
    isRented:req.body.isRented
  })
  
try {
  const p = await want.find({name : req.body.name});
  console.log(p);
  if(p==req.body.name)
     {
      const nfpa = await buk.save()
      res.status(201).json(nfpa)
     } 
     else{
         return res.json({message:'User already exists'});
     }
     
  } catch (err) {
    res.status(400).json({ message: err.message })
  } 
})






module.exports = router
