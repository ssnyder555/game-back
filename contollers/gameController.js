const express = require('express');
// Next we set up the Router
const router = express.Router();

// require Our Model - Remember Model is
// a representation of our data
// The model should capitalized
const Game = require('../models/game');
// Creating the index route
// index route should show all the fruits
 router.get('/', async (req, res, next) => {
  // req.body this is from the fetch request
  console.log(req.body, ' this is get all')
     try  {

      const allGames = await Game.find();

      // This is the response to react
      res.json({
        status: 200,
        data: allGames
      });

    } catch (err){

      res.send(err)

    }
});


router.post('/', async (req, res) => {

  try {
    console.log(req.body, ' this is req.body');
    const createdGame = await Game.create(req.body);
    console.log('response happening?')
    res.json({
      status: 200,
      data: createdGame
    });

  } catch(err){
    console.log(err);
    res.send(err);
  }
});





router.get('/:id', async (req, res, next) => {


     try  {

        const foundGame = await Game.findById(req.params.id);
        res.json({
          status: 200,
          data: foundGame
        });

      } catch (err){
        res.send(err);
      }



});

router.put('/:id', async (req, res) => {

  try {
    const updatedGame = await Game.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json({
      status: 200,
      data: updatedGame
    });
  } catch(err){
    res.send(err)
  }
});


// Delete route
router.delete('/:id', async (req, res) => {

  try {
     const deletedGame = await Game.findByIdAndRemove(req.params.id);
      res.json({
        status: 200,
        data: deletedGame
      });
  } catch(err){
    res.send(err);
  }
});



module.exports = router;
