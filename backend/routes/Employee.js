const router = require('express').Router();
let Employee = require('../models/Employee.model');

router.route('/').get((req, res) => {
    Employee.find()
        .then(Employee => res.json(Employee))
        .catch(err => res.status(400).json('Error: ' + err));
});


//Add Function

router.route('/add').post((req, res) => {

    const Eid = req.body.Eid;
    const Name = req.body.Name;
    const Department = req.body.Department;
    const Address =req.body.Address;
    const Number = req.body.Number;
    const Email = req.body.Email;
    const Gender = req.body.Gender;
    const DOB =req.body.DOB;



    const newEmployee = new Employee({

        Eid,
        Name,
        Department,
        Address,
        Number,
        Email,
        Gender,
        DOB,

    });



    newEmployee.save()
        .then(() => res.json('Employee added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Get Data 
router.route('/:id').get((req, res) => {
    Employee.findById(req.params.id)
        .then(Employee => res.json(Employee))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete Data

router.route('/:id').delete((req, res) => {
    Employee.findByIdAndDelete(req.params.id)
        .then(() => res.json('Employee deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Update data
router.route('/update/:id').post((req, res) => {
    Employee.findById(req.params.id)
        .then(Employee => {
            Employee.Eid = req.body.Eid;
            Employee.Name = req.body.Name;
            Employee.Department =req.body.Department;
            Employee.Address = req.body.Address;
            Employee.Number = req.body.Number;
            Employee.Email = req.body.Email;
            Employee.Gender =req.body.Gender;
            Employee.DOB =req.body.DOB;


            Employee.save()
                .then(() => res.json('Employee updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;