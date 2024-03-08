import React from 'react'
import { useState } from 'react';

function Reacttest() {

    const arr = [
        { Firstname: "Rajat", Lastname: "Pant", Age: 22 },
        { Firstname: "Tathagat", Lastname: "Tulsi", Age: 18 },
        { Firstname: "Juvaid", Lastname: "Ahmad", Age: 22 },
        { Firstname: "Mahesh", Lastname: "Jain", Age: 95 },
        { Firstname: "Baabu", Lastname: "Rao", Age: 32 },
        { Firstname: "Raju", Lastname: "Singh", Age: 65 },
        { Firstname: "Himanshu", Lastname: "yadav", Age: 70}
    
    ]

    //// REVERSE  FIRST NAME

    const [Name, setName] = useState(arr);

    const [Age, setAge] = useState()

    const reverseFirstName = (index) => {
        const updatedName = [...Name];
        updatedName[index].Firstname = updatedName[index].Firstname.split('').reverse().join('');
        setName(updatedName);
    };


    // total age count 

    const totalAge = () => {
   
        let count = 0;
        for (let i = 0; i < Name.length; i++) {
            count = Name[i].Age + count
        }

        setAge(count)

    }

    return (

        <div>
            <button onClick={totalAge}>total AGE</button>
            <p>total age : {Age}</p>

            <ol>
                <h1>Name Reversal</h1>
                {Name.map((Name, index) => (
                    <div key={index}>
                        <p>Name: {Name.Firstname} {Name.Lastname} {Name.Age}</p>

                        <button onClick={() => reverseFirstName(index)}>Reverse First Name</button>
                    </div>
                ))}


                {/* {arr.map((item) => {
                    if (item.Age > 20) {
                        return (
                            <>
                                <p>{item.Firstname} {item.Lastname}</p>
                                <p>{item.Firstname.length + item.Lastname.length}</p>
                                <p>{item.Firstname.split('').reverse().join('') + " " + item.Lastname.split('').reverse().join('')} </p>


                            </>
                        )

                    }
                })} */}

            </ol>


        </div>
    )
}

export default Reacttest;










// import React, { useState } from 'react';

// function Filter() {

//     const user = [
//         { FirstName: "Rajat", LastName: "Pant", Age: 22 },
//         { FirstName: "Tathagat", LastName: "Tulsi", Age: 18 },
//         { FirstName: "Juvaid", LastName: "Ahmad", Age: 22 },
//         { FirstName: "Mahesh", LastName: "Jain", Age: 95 },
//         { FirstName: "Baabu", LastName: "Rao", Age: 32 },
//         { FirstName: "Raju", LastName: "Singh", Age: 65 },
//         { FirstName: "Himanshu", LastName: "yadav", Age: 70 }

//     ];

//     const [data, setData] = useState(user);
//     const [search, setSearch] = useState('');

//     const minCharsToFilter = 1;

//     const handleInput = (e) => {
//         const value = e.target.value.toLowerCase();
//         setSearch(value);
//         if (value === "") {
//             setData(user)
//         }

//         else if (value.length >= minCharsToFilter) {
//             const filtered = user.filter((item) =>
//                 item.FirstName.toLowerCase().includes(value) ||
//                 item.LastName.toLowerCase().includes(value)
//             );

//             setData(filtered);
//         } else {
//             setData(user);
//         }
//     };

//     const handleDelete = (item) => {
//         const updatedData = data.filter(element => element !== item);
//         setData(updatedData);
//     };

//     return (
//         <div>
//             <input type="text" onChange={handleInput} value={search} />
//             <ul>
//                 {data.length > 0 ?
//                     data.map((item, index) => (
//                         <p key={index}>
//                             {item.FirstName} {item.LastName} {item.Age}
//                             <button onClick={() => handleDelete(item)}> Delete </button>
//                         </p>
//                     ))
//                     :
//                     <p>No data available.</p>
//                 }
//             </ul>
//         </div>
//     );
// }

// export default Filter;
