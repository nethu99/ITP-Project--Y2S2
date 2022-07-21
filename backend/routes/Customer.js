const router = require('express').Router();
let Customer = require('../models/Customer.model');

router.route('/').get((req, res) => {
    Customer.find()
        .then(Customer => res.json(Customer))
        .catch(err => res.status(400).json('Error: ' + err));
});


//Add Function

router.route('/add').post((req, res) => {

    const NIC = req.body.NIC;
    const Name = req.body.Name;
    const Email = req.body.Email;
    const Phone = req.body.Phone;
    const Address = req.body.Address;
    const CID = req.body.CID;

    



    const newCustomer = new Customer({

        NIC,
        Name,
        Email,
        Phone,
        Address,
        CID,
       

    });



    newCustomer.save()
        .then(() => res.json('Customer added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Get Data 
router.route('/:id').get((req, res) => {
    Customer.findById(req.params.id)
        .then(Customer => res.json(Customer))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete Data

router.route('/:id').delete((req, res) => {
    Customer.findByIdAndDelete(req.params.id)
        .then(() => res.json('Customer deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Update data
router.route('/update/:id').post((req, res) => {
    Customer.findById(req.params.id)
        .then(Customer => {
            Customer.NIC = req.body.NIC;
            Customer.Name = req.body.Name;
            Customer.Email = req.body.Email;
            Customer.Phone = req.body.Phone;
            Customer.Address = req.body.Address;
            Customer.CID = req.body.CID;


            
            Customer.save()
                .then(() => res.json('Customer updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;