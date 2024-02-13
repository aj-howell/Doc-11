import Navbar from "../Navbar/Navbar";
import Table from '../Table/Table';

const Dashboard = ()=>
{
    return (
        <>
            <div className='container'>
                <Navbar/>
            </div>
            <div> 
                <Table/>
            </div>
        </>
    );
}

export default Dashboard