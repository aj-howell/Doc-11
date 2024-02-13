const express = require('express');
const router = express.Router();

const PatientController = require('../controllers/patient-controller');

router.get('/', PatientController.getPatients);

router.post("/", PatientController.createPatient);
router.get('/:patient_id', PatientController.getPatient); 
router.delete('/:patient_id', PatientController.deletePatient);
router.put('/:patient_id', PatientController.updatePatient);  

module.exports = router;