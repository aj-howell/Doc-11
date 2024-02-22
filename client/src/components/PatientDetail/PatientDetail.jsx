import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPatientById } from "../../services/PatientService"; // Assuming you have this service
import './PatientDetail.css';

const PatientDetail = () => {
    const { id } = useParams(); // This captures the ID from the URL
    const [patientDetails, setPatientDetails] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchPatientDetails(id);
    }, [id]);

    // const fetchPatientDetails = async (id) => {
    //     try {
    //         const response = await getPatientById(id); // Assuming this service returns patient details
    //         setPatientDetails(response.data);
    //     } catch (error) {
    //         console.error("Failed to fetch patient details", error);
    //         // Handle error appropriately
    //     }
    // };

    const fetchPatientDetails = async (id)=>
    {
        await getPatientById(id)
        .then((res)=>
        {
            console.log(res.data);
            setPatientDetails(res.data[0]);
        })
        .catch((err)=>
        {
            console.log(err);// TODO: err handlers
        })
    };

    return (
        <div className="patient-details"> {/* Apply the 'patient-details' class */}
            <button onClick={() => navigate(-1)} className="back-button">Go Back</button>
            <h2>Patient Details</h2>
            {patientDetails ? (
                <div>
                    <div className="detail-item"><strong>Patient ID:</strong> {patientDetails.patient_id}</div>
                    <div className="detail-item"><strong>Exam ID:</strong> {patientDetails.exam_type_id}</div>
                    <div className="detail-item"><strong>Age:</strong> {patientDetails.age}</div>
                    <div className="detail-item"><strong>Sex:</strong> {patientDetails.sex}</div>
                    <div className="detail-item"><strong>Image:</strong> <a href={patientDetails.png_filename} target="_blank" rel="noopener noreferrer">View Image</a></div>
                    <div className="detail-item"><strong>Weight:</strong> {patientDetails.weight}</div>
                    <div className="detail-item"><strong>BMI:</strong> {patientDetails.bmi}</div>
                    <div className="detail-item"><strong>Zip Code:</strong> {patientDetails.zip}</div>
                    <div className="detail-item"><strong>Mortality:</strong> {patientDetails.mortality ? 'Yes' : 'No'}</div>
                    <div className="detail-item"><strong>ICU Admits:</strong> {patientDetails.icu_admits}</div>
                    <div className="detail-item"><strong>ICU Admit:</strong> {patientDetails.icu_admit ? 'Yes' : 'No'}</div>
                    <button>update</button>
                    <button>delete</button>
                </div>
            ) : (
                <p>Loading patient details...</p>
            )}
        </div>
    );
};

export default PatientDetail;
