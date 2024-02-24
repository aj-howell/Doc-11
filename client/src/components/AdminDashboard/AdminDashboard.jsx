import Navbar from "../Navbar/Navbar";
import Table from '../Table/Table';

const AdminDashboard=()=>
{
    return (
        <>
            <div className='container'>
                <Navbar/>
            </div>
            <div className="title">
                <h2>Welcome to the COVID-19 X-Ray Analysis Tool Database [Admin]</h2>
            </div>
            <div> 
                <Table TableType={'Admin'}/>
            </div>
        </>
    );
}
export default AdminDashboard