import React from 'react';

// import component 👇
import Drawer from 'react-modern-drawer';

//import styles 👇
import 'react-modern-drawer/dist/index.css';

import { createPatient, updatePatientById } from '../../services/PatientService';


import { useState } from "react";

const PatientDrawer =({buttonTitle, id, patientData, fetchPatientDetails, getRows}) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    } 

    const [age, setAge] = useState(buttonTitle==='update'? `${patientData.age}`:'');
    const [sex, setSex] = useState(buttonTitle==='update'? `${patientData.sex}`:'');
    const [zip, setZip] = useState(buttonTitle==='update'? `${patientData.zip}`:'');
    const [weight, setWeight] = useState(buttonTitle==='update'? `${patientData.weight}`:'');
    const [bmi, setBMI] = useState(buttonTitle==='update'? `${patientData.bmi}`:'');
    const [icu_admit, set_icu_Admit] = useState(buttonTitle==='update'? `${patientData.icu_admit}`:'');
    const [icu_admits, set_icu_Admits] = useState(buttonTitle==='update'? `${patientData.icu_admits}`:''); // in case no icu admits, default is 0
    const [exam_type_id, setExamType] = useState(buttonTitle==='update'? `${patientData.exam_type_id}`:'');
    const [png_filename, setFilename] = useState(buttonTitle==='update'? `${patientData.png_filename}`:''); // in case no patient img, default filename
    const [mortality, setMortality] = useState(buttonTitle==='update'? `${patientData.mortality}`:'');


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const patientData = {
            age: parseInt(age),
            sex: sex.toString(),
            zip: parseInt(zip),
            weight: parseFloat(weight),
            bmi: parseFloat(bmi),
            icu_admits: parseInt(icu_admits),
            icu_admit: (icu_admit === 'true'),
            exam_type_id: exam_type_id.toString(),
            png_filename: png_filename.toString(),
            mortality: (mortality === 'true')
        };
        
        
        if(buttonTitle==='create')
        {
           try {
                await createPatient(patientData);
                await getRows();
                toggleDrawer();
           } catch (error) {
                throw error;
           }
        }

        else
        {
           const patientId=id;
           
            try {
                await updatePatientById(patientId,patientData);
                await fetchPatientDetails(patientId);
                toggleDrawer();
           } catch (error) {
                throw error;
           }
        }
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
                        <input type="text" required={buttonTitle!=='update'}
                        onChange={(e) => setAge(e.target.value)}
                        /> 
                    </div>
                    <div>Sex: 
                        <input type="text" required={buttonTitle!=='update'}
                        onChange={(e) => setSex(e.target.value)}
                        /> 
                    </div>
                    <div>Zip: 
                        <input type="text" required={buttonTitle!=='update'}
                        onChange={(e) => setZip(e.target.value)}/>
                    </div>
                    <div>Weight: 
                        <input type="text" required={buttonTitle!=='update'}
                        onChange={(e) => setWeight(e.target.value)}/>
                    </div>
                    <div>BMI: 
                        <input type="text" required={buttonTitle!=='update'}
                        onChange={(e) => setBMI(e.target.value)}/>
                    </div>
                    <div>The patient has been admitted to the ICU?: 
                        <input type="text" required={buttonTitle!=='update'}
                        onChange={(e) => set_icu_Admit(e.target.value)}
                        /> 
                    </div>
                    <div>If so, how many times?: 
                        <input type="text"
                        onChange={(e) => set_icu_Admits(e.target.value)}/> 
                    </div>
                    <div>Exam Type: 
                        <input type="text" required={buttonTitle!=='update'}
                        onChange={(e) => setExamType(e.target.value)}
                        /> 
                    </div>
                    <div>png_filename:
                        <input type="text"
                        onChange={(e) => setFilename(e.target.value)}
                        />
                    </div>
                    <div>Mortality: 
                        <input type="text" required={buttonTitle!=='update'}
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