const router = require("express").Router();
let Paymnet = require("../models/Paymnet.model");

router.route("/").get((req, res) => {
    Paymnet.find()
        .then((Paymnet) => res.json(Paymnet))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const Cname = req.body.Cname;
    const CID = req.body.CID;
    const BID = req.body.BID;
    const Date = req.body.Date;
    const ItemCode = req.body.ItemCode;
    const Qty = req.body.Qty;
    const Price = req.body.Price;
  

    const newPaymnet = new Paymnet({
        Cname,
        CID,
        BID,
        Date,
        ItemCode,
        Qty,
        Price,
        
      
    });

    newPaymnet
        .save()
        .then(() => res.json("Paymnet Added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
    Paymnet.findById(req.params.id)
        .then((Paymnet) => res.json(Paymnet))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
    Paymnet.findById(req.params.id)
        .then((Paymnet) => {
            Paymnet.Cname = req.body.Cname;
            Paymnet.CID = req.body.CID;
            Paymnet.BID = req.body.BID;
            Paymnet.Date = req.body.Date;
            Paymnet.ItemCode = req.body.ItemCode;
            Paymnet.Qty = req.body.Qty;
            Paymnet.Price = req.body.Price;
            
           

            Paymnet.save()
                .then(() => res.json("Paymnet updated!"))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
    Paymnet.findByIdAndDelete(req.params.id)
        .then(() => res.json("Paymnet deleted."))
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;