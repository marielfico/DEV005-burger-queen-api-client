import { AsideBar } from "../components/Aside";
import "./Admin.css";
//import { useState, useEffect } from "react";
//import { handleClickEditar } from "../services/users.service";
import { Products } from "../components/admin/Products";
import { Employees } from "../components/Employees";

export const Admin = () => {

  const email=localStorage.getItem('email');
  const role=localStorage.getItem('role');
  //const [columns, setColumns] = useState([]);
  //const [updateUser, setUpdateUser]=useState(-1)
 // const [records, setRecords] = useState([]);

  //
  
  
  // //Eliminar usuario
  // const handleClickEliminar=(id)=>{
  //   //e.preventDefault();
  //   const res=confirm('Esta seguro que desea eliminar al usuario')

  //   if (res){
  //     fetch(`http://localhost:8080/users/${id}` ,{
  //       method:"DELETE",
  //       headers:{
  //         "Content-Type": "application/json",
  //         "authorization": "Bearer "+ token1 ,
  //       }
  //     })
  //     .then(res=>console.log(res))
  //     .catch(err=>console.log(err))
  //   }
  //   //console.log(`http://localhost:8080/users/${id}`)
    
  
  // }
  

  return (
    <>
      <div className="admin-container">
        <header>
          <nav className="nav-header">
            <div className="menu-left">
            <label htmlFor="btn-nav" className="btn-nav"><i className="fas fa-bars"></i></label>
            <input type="checkbox" id="btn-nav"></input>
              {/* <img id="iconM" src="./src/assets/img/icono_menu.png" alt="icono-menu" /> */}
              <img id="logoH" src="./src/assets/img/logo_header.png" alt="logo-burgerqueen" />
            </div>
          
            <div className="dateUser">
              <p>{email}</p>
              <p>{role==='admin'?'Administrador':role==='waiter'?'Mesero':'Cocinero'}</p>
            </div>
          </nav>
        </header>

        <aside className="side-bar">
          <AsideBar />
        </aside>

        <section className="employees">
{/*           
          <Products /> */}
        <Employees />

       
        </section>
      </div>
    </>
  );
};