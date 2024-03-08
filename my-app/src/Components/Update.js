import React, { useState } from 'react';

function Update() {

const [list, setList] = useState({ firstName: "Rajat", lastName: "Pant", age: 23 })

const [list1, setList1] = useState('Tathagat')

  const handleUpdate = () => {
    setList(prevState => ({
      ...prevState,
      firstName: 'mohit',
      lastName: 'kumar',
      age: 25
    }));
  }

  const handleValue = () => {
    const updatelist = 'Tulsi'
    setList1(updatelist)
  }


  return (
    <div>
       <p>{list.firstName + " " + list.lastName + " and age is " + list.age}</p>
      <button onClick={handleUpdate}>update</button> <hr />


      <p>{list1}</p>
      <button onClick={handleValue}>updates</button><hr />


    </div>
  );
}

export default Update;