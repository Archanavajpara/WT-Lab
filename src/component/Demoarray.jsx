import React from 'react'

export default function Demoarry() {
    const arr=["apple","banana","orange","mango"];
    return(
    <>
        <ul>
            {
                arr.map((value,index)=>
                {
                    return(

                        <li key={index}>{value}</li>
                    );
                })
            }
        </ul>
    </>
    );
}
  