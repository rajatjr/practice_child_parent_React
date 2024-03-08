import React from 'react'
import { useState } from 'react'

const Prictice = () => {

let name =[
    {first :"rajat"},
    {secound :"xxx"},
    {third :"yyy"}
]

const [name1, setName1] = useState("Ankit")

const changeName = () => {
    let newName = "Developer"
    setName1(newName)
}

return(
    
    <div>
<ul>

{name.length > 0 ?
name.map((item) =>{
    return(
        <li>{item.third}</li>
    )
}) : " no user found"}

</ul>

    <h1>{name1}</h1> 
    <button onClick={changeName}>ClickToChangeName</button>
    </div>
 
)}

export default Prictice;
