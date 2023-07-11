//import React from 'react'
import { ProductTableRow } from './ProductTableRow'

export const ProductsTable = ({loaded , data, setDataForm, deleteProduct}) => {

  return (
    <div>
         <table>
          <thead>
            <tr>
              <th className="n">N°</th>
              <th>Id</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Imagen</th>
              <th>Categoría</th>
              <th>Fecha Creación</th>
              <th className="editar">Editar</th>
            </tr>
          </thead>
          <tbody>
            { 
            loaded===false? <tr><td>Sin Datos</td></tr>: data.map((d)=> <ProductTableRow key={d.id} product={d} setDataForm={setDataForm} deleteUser={deleteProduct}/>)    }

          </tbody>
        </table>
    </div>
  )
}
