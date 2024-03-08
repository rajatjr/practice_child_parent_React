import React, { useState } from 'react'
import Child from './Child';

function Ab() {

    const user = [
        { FirstName: "rajat", LastName: "pant", Age: "10" },
        { FirstName: "abc", LastName: "www", Age: "23" },
        { FirstName: "xyz", LastName: "singh", Age: "26" },
        { FirstName: "mahesh", LastName: "yy", Age: "24" }
    ]

const [data, setData] = useState(user)
const [search, setSearch] = useState('')

const handleSearch = (e) =>{
    const value = e.target.value.toLowerCase();
    setSearch(value);

const filtered = user.filter(item=>
    item.FirstName.toLocaleLowerCase().includes(value) ||
    item.LastName.toLocaleLowerCase().includes(value)
    );

    setData(filtered)

} 


const handleDelete = (item) =>{
    const Delete = data.filter(e=>e  !==item)
    setData(Delete)
}

    return (
        <div>

           <input type="text" onChange={handleSearch} value={search} placeholder="Search" />

            <ul>
                {data.length > 0 ? (
                    data.map((item, index) => (
                        <p key={index}>
                            {item.FirstName} {item.LastName} {item.Age}

                            <button onClick={() => handleDelete(item)}>Delete</button>
                        </p>
                    ))
                ) : (
                    <p>No matching data.</p>
                )}
            </ul>

<Child  data= {data} search={search} handleDelete={handleDelete} handleSearch={handleSearch} />


        </div>

    )}

export default Ab;


