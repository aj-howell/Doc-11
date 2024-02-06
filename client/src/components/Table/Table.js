import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-alpine.css"; // Theme
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { AgGridReact } from 'ag-grid-react'; // React Grid Logic
import React, { useEffect, useState } from 'react';
    
const Table = () => {


    // const hi = 'hi';

    const [data, setData] = useState([]); 
    const [quickFilterText, setQuickFilterText] = useState('');

    
    const getRowData = async () => {
        try {
            const response = await fetch('https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams');
            const data = await response.json();
            setData(data.exams);
            //console.log(data.exams);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getRowData();
    }, []);

    const columns = [
        { headerName: 'Patient ID', field: '_id', sortable: true, filter: 'agTextColumnFilter', lockVisible:true, resizable:true },
        { headerName: "Exam ID", field: "examId", sortable: true, filter: 'agTextColumnFilter', lockVisible:true, resizable:true },
        { headerName: "Age", field: "age", sortable: true, filter: 'agTextColumnFilter', lockVisible:true, resizable:true },
        { headerName: "Sex", field: "sex", sortable: true, filter: 'agTextColumnFilter', lockVisible:true, resizable:true },
        { headerName: "Image", field: "imageURL", sortable: true, filter: 'agTextColumnFilter', lockVisible:true, resizable:true },
        { headerName: "Key Findings", field: "keyFindings", sortable: true, filter: 'agTextColumnFilter', lockVisible:true, resizable:true },
        { headerName: "BMI", field: "bmi", sortable: true, filter: 'agTextColumnFilter', lockVisible:true, resizable:true },
        { headerName: "Brixia Scores", field: "brixiaScores", sortable: true, filter: 'agTextColumnFilter', lockVisible:true, resizable:true },
        { headerName: "Zip Code", field: "zipCode", sortable: true, filter: 'agTextColumnFilter', lockVisible:true, resizable:true }
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