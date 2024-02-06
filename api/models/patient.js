const mongoose = require('mongoose');
const{Schema, model} = mongoose;

//this is like setting up the query of the collection "fields" of a record/document
const patientSchema = new Schema(
{
    patient_id: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    zip: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    bmi: {
        type: Number,
        required: true
    },
    icu_admits: {
        type: Number,
        required: false
    },
    icu_admit: {
        type: Boolean,
        required: true
    },
    exam_type_id: {
        type: String,
        required: false
    },
    png_filename: {
        type: String,
        required: false
    },
    mortality: {
        type: Boolean,
        required: true
    }
});

const patientModel=model('Patient-Exams',patientSchema); // let the mongoose create the collection

module.exports=
{ 
   patientModel //exporting the schema which can be used to instantiate a record/document
};

//Change to schema -> delete the collection and then restart the api
