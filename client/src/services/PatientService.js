import axios from 'axios'; //imports before requires

const uri=process.env.REACT_APP_API_URL;

export const getPatientById=async(id)=>
{
    try
    {
        const customer = await axios.get(`${uri}/patients/${id}`);
        return customer;
    }
    catch(err)
    {
        console.log(err);
    }
}

export const getPatients=async()=>
{
    try
    {
        const customers = await axios.get(`${uri}/patients`);
        return customers;
    }
    catch(err)
    {
        console.log(err);
    }
}

export const deletePatientById=async(id)=>
{
    try
    {
        await axios.delete(`${uri}/patients/${id}`);
    }
    catch(err)
    {
        console.log(err);
    }
}

// doesn't work
/*
export const createPatient = async (patientData) => {
    //const patientData = {age, sex, zip, weight, bmi, icu_admits, icu_admit, exam_type_id, png_filename, mortality};
    try
    {
    axios.post(`${uri}/patients/`, patientData);
    }
    catch(err)
    {
        console.log(err);
    }
}
*/