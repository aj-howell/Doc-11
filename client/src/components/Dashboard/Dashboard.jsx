import Navbar from "../Navbar/Navbar";
import Table from '../Table/Table';

const Dashboard = ()=>
{
    return (
        <>
            <div className='container'>
                <Navbar/>
            </div>
            <div className="title">
                <h2>Welcome to the COVID-19 X-Ray Analysis Tool Database</h2>
            </div>
            <div> 
                <Table/>
            </div>
        </>
    );
}

export default Dashboard