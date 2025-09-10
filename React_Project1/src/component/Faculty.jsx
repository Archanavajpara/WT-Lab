import React from 'react'

export default function Faculty(props) {
    const faculties=[{name:'Archana',subject:'DS'},{name:'Rucha',subject:'DBMS'},{name:'Dhruv',subject:'Drawing'}]
    return(
    <>
         <ul>
            {
                faculties.map((faculties,index)=>
                {
                    return(

                        <li key={index}>{faculties.name} teaches {faculties.subject} </li>
                    );
                })
            }
        </ul>
    </>
    );
}

function Faculty1()
{
    return(
        <div>
            <Faculty/>
        </div>
    )
}