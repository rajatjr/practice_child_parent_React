import React, { useState } from 'react';

function App() {

  const user = [{ firstName: "Mohit", lastName: "kumar", age: 25 }, { firstName: "Ramesh", lastName: "Jain", age: 21 }]

  // ADD TO LIST 
  
  const [list2, setList2] = useState(user)

  const handleAdd = () => {
    setList2(prevState => [
      ...prevState,
      {
        firstName: 'Aman',
        lastName: 'Rai',
        age: 25
      }
    ]);
  }

  const handleDelete = (index) => {
    setList2(prevState => prevState.filter((_, a) => a !== index));
  }

  return (
    <div>


      {list2.length > 0 && list2.map((dataObj, index) => (

        <ul key={index}>
          <div>
            <li>position {index} First name: {dataObj.firstName}</li>
            <li>Last name: {dataObj.lastName}</li>
            <li>Age: {dataObj.age}</li>

            <button onClick={() => handleDelete(index)}>Delete</button> <hr />
          </div>
        </ul>
      ))}

      <button onClick={handleAdd}>Adding to list</button>

    </div>
  );
}

export default App;