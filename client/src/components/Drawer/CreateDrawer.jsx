import React from 'react'

// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'

import { useState } from "react";
import axios from 'axios';
const uri=process.env.REACT_APP_API_URL;


//import PatientModel from '../../services/PatientService';

const PatientDrawer = ({buttonTitle}) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
    const [zip, setZip] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBMI] = useState('');
    const [icu_admit, set_icu_Admit] = useState('');
    const [icu_admits, set_icu_Admits] = useState('0'); // in case no icu admits, default is 0
    const [exam_type_id, setExamType] = useState('');
    const [png_filename, setFilename] = useState('patient_mri_scan_001.png'); // in case no patient img, default filename
    const [mortality, setMortality] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        const patientData = {age, sex, zip, weight, bmi, icu_admits, icu_admit, exam_type_id, png_filename, mortality};
        axios.post(`${uri}/patients/`, patientData)
        .then(console.log(patientData))
        .catch((err) => console.log(err));
    }

    return (
        <>
            <button onClick={toggleDrawer}>{buttonTitle}</button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla'
            >
                            <form className="form-patient" onSubmit={handleSubmit}>
                    <h1>Enter Patient Details: </h1>
                    <div>Age: 
                        <input type="text" required
                        onChange={(e) => setAge(e.target.value)}
                        /> 
                    </div>
                    <div>Sex: 
                        <input type="text" required
                        onChange={(e) => setSex(e.target.value)}
                        /> 
                    </div>
                    <div>Zip: 
                        <input type="text" required
                        onChange={(e) => setZip(e.target.value)}/>
                    </div>
                    <div>Weight: 
                        <input type="text" required
                        onChange={(e) => setWeight(e.target.value)}/>
                    </div>
                    <div>BMI: 
                        <input type="text" required
                        onChange={(e) => setBMI(e.target.value)}/>
                    </div>
                    <div>The patient has been admitted to the ICU?: 
                        <input type="text" required
                        onChange={(e) => set_icu_Admit(e.target.value)}
                        /> 
                    </div>
                    <div>If so, how many times?: 
                        <input type="text"
                        onChange={(e) => set_icu_Admits(e.target.value)}/> 
                    </div>
                    <div>Exam Type: 
                        <input type="text" required
                        onChange={(e) => setExamType(e.target.value)}
                        /> 
                    </div>
                    <div>png_filename:
                        <input type="text"
                        onChange={(e) => setFilename(e.target.value)}
                        />
                    </div>
                    <div>Mortality: 
                        <input type="text" required
                        onChange={(e) => setMortality(e.target.value)}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </Drawer>
        </>
    )
}

export default PatientDrawer;