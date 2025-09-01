import React from 'react'

export default function Student(props) {
    const students=[{name:'Archana',subject:'DS'},{name:'Rucha',subject:'DBMS'},{name:'Dhruv',subject:'Drawing'}]
    return(
    <>
         <ul>
            {
                students.map((students,index)=>
                {
                    return(

                        <li key={index}>{students.name} studies {students.subject} </li>
                    );
                })
            }
        </ul>
    </>
    );
}

function Student1()
{
    return(
        <div>
            <Student/>
        </div>
    )
}