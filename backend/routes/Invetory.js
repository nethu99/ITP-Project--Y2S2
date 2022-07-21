const router = require('express').Router();
let Invetory = require('../models/Invetory.model');

router.route('/').get((req, res) => {
    Invetory.find()
        .then(Invetory => res.json(Invetory))
        .catch(err => res.status(400).json('Error: ' + err));
});


//Add Function

router.route('/add').post((req, res) => {

    const Itemid = req.body.Itemid;
    const Name = req.body.Name;
    const Brand = req.body.Brand;
    const qty =req.body.qty;
    const Supplier = req.body.Supplier;
    const PDate = req.body.PDate;
    const PPrice = req.body.PPrice;
    const SPrice =req.body.SPrice;
    const TProfit =req.body.TProfit;



    const newInvetory = new Invetory({

        Itemid,
        Name,
        Brand,
        qty,
        Supplier,
        PDate,
        PPrice,
        SPrice,
        TProfit,

    });



    newInvetory.save()
        .then(() => res.json('Invetory added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Get Data 
router.route('/:id').get((req, res) => {
    Invetory.findById(req.params.id)
        .then(Invetory => res.json(Invetory))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete Data

router.route('/:id').delete((req, res) => {
    Invetory.findByIdAndDelete(req.params.id)
        .then(() => res.json('Invetory deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Update data
router.route('/update/:id').post((req, res) => {
    Invetory.findById(req.params.id)
        .then(Invetory => {
            Invetory.Itemid = req.body.Itemid;
            Invetory.Name = req.body.Name;
            Invetory.Brand =req.body.Brand;
            Invetory.qty = req.body.qty;
            Invetory.Supplier = req.body.Supplier;
            Invetory.PDate = req.body.PDate;
            Invetory.PPrice =req.body.PPrice;
            Invetory.SPrice =req.body.SPrice;
            Invetory.TProfit =req.body.TProfit;


            Invetory.save()
                .then(() => res.json('Invetory updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;