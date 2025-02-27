//import React from 'react'
import { EmployeeTableRow } from './EmployeeTableRow'

export const EmployeesTable = ({loaded , data, setDataForm, deleteUser}) => {

  return (
    <div>
         <table>
          <thead>
            <tr>
              <th className="n">N°</th>
              <th>Id</th>
              {/* <th>Nombre</th> */}
              <th>Rol</th>
              <th>Email</th>
              <th>Password</th>
              <th className="editar">Editar</th>
            </tr>
          </thead>
          <tbody>
            { 
            loaded===false? <tr><td>Sin Datos</td></tr>: data.map((d)=> <EmployeeTableRow key={d.id} user={d} setDataForm={setDataForm} deleteUser={deleteUser}/>)    }
           
          </tbody>
        </table>
    </div>
  )
}
