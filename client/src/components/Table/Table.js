import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-alpine.css"; // Theme
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { AgGridReact } from 'ag-grid-react'; // React Grid Logic
import React, { useEffect, useState } from 'react';
import { getPatients } from "../../services/PatientService";
    
const Table = () => {


    // const hi = 'hi';

    const [data, setData] = useState([]); 
    const [quickFilterText, setQuickFilterText] = useState('');

    const getRows = async ()=>
    {
        await getPatients()
        .then((res)=>
        {
            console.log(res.data);
            setData(res.data);
        })
        .catch((err)=>
        {
            console.log(err);// TODO: err handlers
        })
    };

    useEffect(() => {
        getRows();
    }, []);

    /* { headerName: "Key Findings", field: "keyFindings", sortable: true, filter: 'agTextColumnFilter', lockVisible:true, resizable:true }, is this needed?
    { headerName: "Brixia Scores", field: "brixiaScores", sortable: true, filter: 'agTextColumnFilter', lockVisible:true, resizable:true },*/
    const columns = [
        { headerName: 'Patient ID', field: 'patient_id', sortable: true, filter: 'agTextColumnFilter', lockVisible:true, resizable:true },
        { headerName: "Exam ID", field: " exam_type_id", sortable: true, filter: 'agTextColumnFilter', lockVisible:true, resizable:true },
        { headerName: "Age", field: "age", sortable: true, filter: 'agTextColumnFilter', lockVisible:true, resizable:true },
        { headerName: "Sex", field: "sex", sortable: true, filter: 'agTextColumnFilter', lockVisible:true, resizable:true },
        { headerName: "Image", field: "png_filename", sortable: true, filter: 'agTextColumnFilter', lockVisible:true, resizable:true },
        { headerName: "Weight", field: "weight", sortable: true, filter: 'agTextColumnFilter', lockVisible:true, resizable:true },
        { headerName: "BMI", field: "bmi", sortable: true, filter: 'agTextColumnFilter', lockVisible:true, resizable:true },
        { headerName: "Zip Code", field: "zip", sortable: true, filter: 'agTextColumnFilter', lockVisible:true, resizable:true },
        { headerName: "Mortality", field: "mortality", sortable: true, filter: 'agTextColumnFilter', lockVisible:true, resizable:true },
        { headerName: "Icu Admits", field: "icu_admits", sortable: true, filter: 'agTextColumnFilter', lockVisible:true, resizable:true },
        { headerName: "Icu Admit", field: "icu_admit", sortable: true, filter: 'agTextColumnFilter', lockVisible:true, resizable:true },
    ];
    return (
      <>
        <div className='search-filter-div'>
            <label htmlFor="quickFilter">Quick Search: </label>
            <input
            className='search-filter'
            type="text"
            placeholder="Search all columns"
            onChange={(e) => setQuickFilterText(e.target.value)}
            />

        </div>

        <div className="ag-theme-alpine" style={{ height: 500, width: 1400 }}>
            <AgGridReact
                rowData={data}
                columnDefs={columns}
                quickFilterText={quickFilterText}
                pagination={true}>
                
            </AgGridReact>
        </div>

    </>
        
    );
};

export default Table;