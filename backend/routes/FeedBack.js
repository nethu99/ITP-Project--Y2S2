const router = require('express').Router();
let FeedBack = require('../models/FeedBack.model');

router.route('/').get((req, res) => {
    FeedBack.find()
        .then(FeedBack => res.json(FeedBack))
        .catch(err => res.status(400).json('Error: ' + err));
});


//Add Function

router.route('/add').post((req, res) => {

    const FID = req.body.FID;
    const Cname = req.body.Cname;
    const ItemName = req.body.ItemName;
    const Description = req.body.Description;
    const Rating = req.body.Rating;
    const Date = req.body.Date;



    const newFeedBack = new FeedBack({
        FID,
        Cname,
        ItemName,
        Description,
        Rating,
        Date,

    });



    newFeedBack.save()
        .then(() => res.json('FeedBack added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Get Data 
router.route('/:id').get((req, res) => {
    FeedBack.findById(req.params.id)
        .then(FeedBack => res.json(FeedBack))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete Data

router.route('/:id').delete((req, res) => {
    FeedBack.findByIdAndDelete(req.params.id)
        .then(() => res.json('FeedBack deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Update data
router.route('/update/:id').post((req, res) => {
    FeedBack.findById(req.params.id)
        .then(FeedBack => {
            FeedBack.FID = req.body.FID;
            FeedBack.Cname = req.body.Cname;
            FeedBack.ItemName = req.body.ItemName;
            FeedBack.Description = req.body.Description;
            FeedBack.Rating = req.body.Rating;
            FeedBack.Date = req.body.Date;



            FeedBack.save()
                .then(() => res.json('FeedBack updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;