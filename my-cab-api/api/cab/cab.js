const router = require('express').Router();
const Cab = require('../../models/Cab')

console.log("cab api")
router.get('/:start/:end', function (req, res) {
  console.log(req.params.start)
 
    Cab.find({}, (err, cab) => {
        if (err) {
          res.status(500).send(err);
        }
        res.status(200).json(cab);
      });
  

})

router.post('/', function (req, res) {
  
    let newCabEntry= new Cab(req.body);
    newCabEntry.save((err, cab) => {
    if (err) {
      res.status(500).send(err);
    }
    
  });

})


module.exports = router;