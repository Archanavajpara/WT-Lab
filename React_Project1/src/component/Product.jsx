import React from 'react'

export default function Product(props) {
    const products=[{name:'Chocolate',cost:'$125'},{name:'Cosmetics',cost:'$225'},{name:'Clothes',cost:'$325'}]
    return(
    <>
         <ul>
            {
                products.map((products,index)=>
                {
                    return(

                        <li key={index}>{products.name} at cost {products.cost} </li>
                    );
                })
            }
        </ul>
    </>
    );
}

function Product1()
{
    return(
        <div>
            <Product/>
        </div>
    )
}