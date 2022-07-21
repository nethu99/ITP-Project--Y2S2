const router = require("express").Router();
let Delivery = require("../models/Delivery.model");

router.route("/").get((req, res) => {
    Delivery.find()
        .then((Delivery) => res.json(Delivery))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const VID = req.body.VID;
    const RNO = req.body.RNO;
    const Cat = req.body.Cat;
    const FType = req.body.FType;
    const Capacity = req.body.Capacity;
    const Description = req.body.Description;
    const Date = req.body.Date;
    

    const newDelivery = new Delivery({
        VID,
        RNO,
        Cat,
        FType,
        Capacity,
        Description,
        Date,
       
      
    });

    newDelivery
        .save()
        .then(() => res.json("Delivery Added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
    Delivery.findById(req.params.id)
        .then((Delivery) => res.json(Delivery))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
    Delivery.findById(req.params.id)
        .then((Delivery) => {
            Delivery.VID = req.body.VID;
            Delivery.RNO = req.body.RNO;
            Delivery.Cat = req.body.Cat;
            Delivery.FType = req.body.FType;
            Delivery.Capacity = req.body.Capacity;
            Delivery.Description = req.body.Description;
            Delivery.Date = req.body.Date;
           

            Delivery.save()
                .then(() => res.json("Delivery updated!"))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
    Delivery.findByIdAndDelete(req.params.id)
        .then(() => res.json("Delivery deleted."))
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;