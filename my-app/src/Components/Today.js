// import { React,  useState } from 'react';

// function Today() {

// const arr = [
//   {FirstName:"Rajat",LastName:"Pant",Age:"50"},
//   {FirstName:"Mahesh",LastName:"Singh",Age:"18"},
//   {FirstName:"Suresh",LastName:"das",Age:"25"},
//   {FirstName:"Tulsi",LastName:"Das",Age:"35"},
//   {FirstName:"Baabu",LastName:"Rao",Age:"12"},
//   {FirstName:"Raju",LastName:"Singh",Age:"65"},
//   {FirstName:"Himanshu",LastName:"yadav",Age:"70"}
// ]

//   return (
//     <div>

//       {arr.map((item)=>{
//         if(item.Age>20){
//           return(
//             <p>{item.FirstName} {item.LastName}</p>
//           )
//         }
//       })}
//     </div>
//   )
// }

// export default Today;




import { React, useState } from 'react';

function Today() {
  const arr = [
    { FirstName: "Rajat", LastName: "Pant", Age: "50" },
    { FirstName: "Mahesh", LastName: "Singh", Age: "18" },
    { FirstName: "Suresh", LastName: "das", Age: "25" },
    { FirstName: "Tulsi", LastName: "Das", Age: "35" },
    { FirstName: "Baabu", LastName: "Rao", Age: "12" },
    { FirstName: "Raju", LastName: "Singh", Age: "65" },
    { FirstName: "Himanshu", LastName: "yadav", Age: "70" }
  ];

  const [filteredArr, setFilteredArr] = useState([]);

  const handleButtonClick = () => {
    const filteredItems = arr.filter(item => item.Age > 30);
    setFilteredArr(filteredItems);
  };


  return (
    <div>
      <button onClick={handleButtonClick}>Show Results above Age</button>

      {filteredArr.length > 0 && (
        
        <div>
          {filteredArr.map((item, index) => (
            <p key={index}>
              {item.FirstName} {item.LastName}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Today;
