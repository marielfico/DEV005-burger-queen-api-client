//import React from 'react'
// import '../assets/icons/all.min.js'
// //import '../assets/icons/all.min.css'


export const ProductTableRow = ({product, setDataForm, deleteProduct}) => {
    
    const {id, name , price, image, type, dataEntry}=product;
    //console.log(user)
  return (
    <tr>
        <td>{id}</td>
        <td>{id}</td>
        <td>[Nombre]</td>
        <td>{price}</td>
        <td>{image}</td>
        <td>{type}</td>
        <td>{dataEntry}</td>
        <td>
            <button onClick={()=>setDataForm(product)}><i className="fa pen-to-square"></i></button>
            <button onClick={()=>deleteProduct(id)}><i className="fa fa-trash-can"></i></button> 
        </td>
    </tr>
    
  )
}
