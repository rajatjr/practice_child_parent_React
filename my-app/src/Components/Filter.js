import React, { useState } from 'react';
import Child from './Child';

function Filter() {
    
    const user = [
        { FirstName: "Rajat", LastName: "Pant", Age: 22 },
        { FirstName: "Tathagat", LastName: "Tulsi", Age: 18 },
        { FirstName: "Juvaid", LastName: "Ahmad", Age: 22 },
        { FirstName: "Mahesh", LastName: "Jain", Age: 95 },
        { FirstName: "Baabu", LastName: "Rao", Age: 32 },
        { FirstName: "Raju", LastName: "Singh", Age: 65 },
        { FirstName: "Himanshu", LastName: "yadav", Age: 70 }
    ];

    const [data, setData] = useState(user);
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearch(value);

        const filtered = user.filter(item =>
            item.FirstName.toLowerCase().includes(value) ||
            item.LastName.toLowerCase().includes(value)
        );
        setData(filtered);
    };


    const handleDelete = (item) => {
        const Delete = data.filter(element => element !== item);
        setData(Delete);
    };

    return (
        <>
            <p style={{color:"red"}}> from parent</p>

            <Child data={data} search={search} handleDelete={handleDelete} handleSearch={handleSearch} />
        </>
    );
}

export default Filter;




 
    // const handleSearch =(e)=> {
    //     setSearch(e.target.value)
    //     const value = data.filter((item)=>{
    //         const fullname = item.FirstName + item.LastName
    //         return fullname.toLowerCase().includes(e.target.value.toLowerCase())
            
    //     })
    //     setData(value)
    // }
