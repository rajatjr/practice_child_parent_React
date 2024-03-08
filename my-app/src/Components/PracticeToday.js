import React, { useState } from 'react'

function PracticeToday() {

    const arr = [
        { FirstName: "Rajat",  LastName: "Pant",  Age: 25 },
        { FirstName: "Thathu", LastName: "Tulsi", Age: 19 },
        { FirstName: "Juvaid", LastName: "Ahmad", Age: 24 },
        { FirstName: "Mahesh", LastName: "Singh", Age: 32 },
    ]

    const [Rajat, setRajat] = useState(arr)

    const Find = () => {
        let abc = [];

        for (let i = 0 ; i < arr.length; i++) {
            if (arr[i].Age > 20) {
                abc.push(arr[i])

            }
        }

        setRajat(abc)

    }


    return (

        <div>

            <button onClick={Find}>FIND</button>

            <ol>
                {
                    Rajat.map((item) => {
                        {
                            return (
                                <p>{item.FirstName} {item.LastName} {item.Age}</p>
                            )
                        }

                    })
                }
            </ol>
        </div>
    );

}

export default PracticeToday;