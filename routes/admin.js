
const express = require('express');
const { findById } = require('../schemas/book');
const router = express.Router();
const books = require('../schemas/book')
const want = require('../schemas/want')

router.get('/',async (req,res)=>{
    try {
        const book = await books.find()
        res.json(book);
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
})

router.post('/', async (req, res) => {
    const buk = new books({
      name: req.body.name,
      author:req.body.author,
      image:req.body.image,
      isRented:req.body.isRented
    })
    console.log(buk);
  try {
    const p = await books.find({name : req.body.name});
    
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


router.delete('/:id',async (req,res)=>{

const x = await books.findById(req.params.id);

try{
    if (x == null) {
        return res.status(404).json({ message: 'Cannot find book' })
      }
      else{
          x.remove();
          res.json({message:'deleted subscriber'});
      }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  
})


router.patch('/:id',async (req,res)=>{


const updated_book = await books.findByIdAndUpdate( req.params.id,req.body);
console.log(updated_book);
res.redirect('/admin');
//console.log(updated_book);


})

router.get('/useradmin',async (req,res)=>{

const x = await want.find();
res.send(x);

})






module.exports = router
