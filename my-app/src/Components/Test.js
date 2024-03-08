import React from 'react'

const Test = () => {

    let a = "Rajat"  //veriable
    let b = "Pant"

    let list = ["Preeti", "Tulsi", "Shimpi", "Rajat"]           //arrry
    list.push("12345")

    let fruits = [                         //object
        { first: "Apple" },
        { second: "Mango" },
        { third: "Banana" }
    ]

    return (
        <div>
            <h1>{a + " " + b}</h1>

            <ul>
                {fruits.length > 0 ?
                    fruits.map((item) => {
                        return (
                            <li>{item.first}</li>


                        )
                    }) : "No Fruits Found!"}


                {list.length > 0 ?
                    list.map((abc, index) => {
                        if (index === 2)
                            return (
                                <li>{abc}</li>
                            )
                    }) : "No Fruits Found"}



                {list.length > 0 &&
                    list.map((abc) => {
                        return (
                            <li>{abc}</li>
                        )
                    })}

            </ul>
        </div>
    )
}

export default Test;




// import React from 'react'
// import { useState } from 'react'

// function Reacttest() {

//     const arr = [

//     { Firstname: "Rajat", Lastname: "Pant", Age: "22" },
//     { Firstname: "Tathagat", Lastname: "Tulsi", Age: "20" },
//     { Firstname: "Juvaid", Lastname: "Ahmad", Age: "22" },
//     { Firstname: "Mahesh", Lastname: "Jain", Age: "25" }

//     ]

//     const [Person, setPerson] = useState([]);

//     const handleButtonClick = () => {
//         const filteredAndModifiedPersons = arr
//             .filter(person => parseInt(person.Age) > 20)
//             .map(person => ({
//                 ...person,
//                 Fullname: person.Firstname + ' ' + person.Lastname,
//                 Full name Length: person.Firstname.length + person.Lastname.length,
//                 ReversedName: (person.Lastname + ' ' + person.Firstname.split('').reverse().join('')
//             }));
        
//         setPerson(filteredAndModifiedPersons);
//     };

//     return (
 
//         <div>
//             <button onClick={handleButtonClick}>Process Data</button>

//             {Person && Person.map((person, index) => (
//                 <div key={index}>
//                     <p>Full Name: {person.Fullname}</p>
//                     <p>Full Name Length: {person.FullnameLength}</p>
//                     <p>Reversed Name: {person.ReversedName}</p>
//                 </div>
//             ))}
//         </div>
 
 
 
//         )
// }

// export default Reacttest;
