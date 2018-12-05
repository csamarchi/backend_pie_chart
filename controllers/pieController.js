const express = require('express');
const router = express.Router();
const Pie = require('../models/pie');


//index route
 router.get('/', async (req, res, next) => {
  console.log(req.body, ' this is get all')
     try  {
      const allPie = await Pie.find();
      res.json({
        status: 200,
        data: allPie
      });
    } catch (err){
      res.send(err)
    }
});

//post route
router.post('/', async (req, res) => {
  try {
    console.log(req.body, ' this is req.body');
    const createdPie = await Pie.create(req.body);
    console.log('response happening?', createdPie)
    res.json({
      status: 200,
      data: createdPie
    });

  } catch(err){
    console.log(err);
    res.send(err);
  }
});

//find and get
router.get('/:id', async (req, res, next) => {
   try  {
      const foundPie = await Pie.findById(req.params.id);
      console.log(foundPie, 'MIRZA');
      res.json({
        status: 200,
        data: foundPie
      });
    } catch (err){
      res.send(err);
    }
});

//update route
router.put('/:id', async (req, res) => {
  try {
    const updatedPie = await Pie.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json({
      status: 200,
      data: updatedPie
    });
  } catch(err){
    res.send(err)
  }
});


// Delete route
router.delete('/:id', async (req, res) => {
  try {
     const deletedPie = await Pie.findByIdAndRemove(req.params.id);
      res.json({
        status: 200,
        data: deletedPie
      });
  } catch(err){
    res.send(err);
  }
});



module.exports = router;
