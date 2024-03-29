const patientModel = require('../models/patient').patientModel;
const { v4: uuidv4 } = require('uuid');
const auth = require('../models/authorization').checkToken;


//The Get HTTP Methods do not need authentication
const getPatient = async (req, res) => {
  const id = req.params.patient_id;

  patientExists = await patientModel.exists({patient_id: id}) === null;

  if(patientExists===true)
  {
    res.status(404).send(`patient: ${id} does not exist`);
  }

  else
  {
    patientModel.find({patient_id: req.params.patient_id})
    .then((patient) => {
      console.log(patient);
      res.send(patient);
    })
  .catch(error => {
    console.error(error);
    res.status(500).send('Error fetching patient');
  });
  }
}

const getPatients = async (req, res) => {
  patientModel.find({})
    .then((patients) => {
      console.log(patients);
      res.send(patients);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Error fetching patients');
    });
};


//The following HTTP Methods need be authenticated before being able to send
const createPatient=async(req,res)=>
{

  const authHeader = req.headers['authorization'];
  const validRequest = auth(authHeader);

    if(validRequest==false)
    {
        res.status(500).send("This request is not authorized");
    }

    else
    {
        //utilize req body to make request w/ properties
        const reqBody= req.body;
        if (
          reqBody.age === null || reqBody.age === undefined ||
          reqBody.sex === null || reqBody.sex === undefined ||
          reqBody.zip === null || reqBody.zip === undefined ||
          reqBody.weight === null || reqBody.weight === undefined ||
          reqBody.bmi === null || reqBody.bmi === undefined ||
          reqBody.icu_admit === null || reqBody.icu_admit === undefined ||
          reqBody.icu_admit === true && (reqBody.icu_admits === null || reqBody.icu_admits === undefined) ||
          reqBody.exam_type_id === null || reqBody.exam_type_id === undefined ||
          reqBody.png_filename === null || reqBody.png_filename === undefined ||
          reqBody.mortality === null || reqBody.mortality === undefined
      ) {
          return res.status(400).json({ error: "Required fields cannot be null or undefined." });
      }
      
          await patientModel.create({
          patient_id: `COVID-19-AR-${uuidv4()}`,
          age: reqBody.age,
          sex: reqBody.sex,
          zip: reqBody.zip,
          weight: reqBody.weight,
          bmi: reqBody.bmi,
          icu_admits: reqBody.icu_admits,
          icu_admit: reqBody.icu_admit,
          exam_type_id: reqBody.exam_type_id,
          png_filename: reqBody.png_filename,
          mortality: reqBody.mortality
          }).then(()=>
          {
            res.send("your request has been sent");
            console.log('user created');
          })
          .catch(()=>
          {
            res.send("your request has not been sent");
          });
          console.log('sent to the database');
    }
}

const deletePatient=async(req,res)=>
{   
  const authHeader = req.headers['authorization'];
  const validRequest = auth(authHeader);

    if(validRequest==false)
    {
        res.status(500).send("This request is not authorized");
    }

    else
    {
       const id = req.params.patient_id;

    patientExists = await patientModel.exists({patient_id: id}) === null;


    if(patientExists===false)
    {
      patientModel.deleteOne({patient_id: id})
      .then((response)=>
      {
        res.send(`you have deleted User: ${id}`);
      })
      .catch((error)=>
      {
        res.send(`you have not deleted User: ${id}`);
      });
    }

    else
    {
      res.status(404).send(`patient: ${id} does not exist`);
    }

    }
}

const updatePatient = async (req, res) => {
  const authHeader = req.headers['authorization'];
  const validRequest = auth(authHeader); //doesn't need await because it should be returning a boolean

    if(validRequest==false)
    {
      res.status(500).send("This request is not authorized");
      console.log("This request is not authorized");
    }


    else
    {
      try {

        const filter = {patient_id: req.params.patient_id};
        
        const updatedPatientData = req.body;
    
        const updatedPatient = await patientModel.findOneAndUpdate(filter, updatedPatientData, { new: true });
    
        console.log(updatedPatient);
        res.send(updatedPatient);
      }
       catch (error) {
    
        console.error(error);
        res.status(500).send("Internal Server Error");
      }
    }
};


module.exports = {
  getPatient,
  getPatients,
  createPatient,
  deletePatient,
  updatePatient
};
