import { useEffect, useState } from "react";

import ProductForm from "./ProductForm";
import { ProductsTable } from './ProductsTable';


const token=localStorage.getItem('token');
  console.log('este es el toke: '+token)

export const Products = () => {

  const [db, setDb]=useState('');
  const [dataForm, setDataForm]=useState([]);
  const [loaded, setLoaded]=useState(false)


  //Listar productos
  useEffect(() => {
    fetch("http://localhost:8080/products", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: "Bearer " + token,
          },
        })
        .then((response) => {
        
          if (response.status === 200) {
            return response.json();
          } else if (response.status >= 400) {
            throw new Error("Datos incorrectos");
          } else {
            throw new Error("Error inesperado");
          }
        })
        .then((data) => {
      
          setLoaded(true)
          setDb(data);
        })
        .catch((error) =>
        console.log(error)
        )
      } , []);

  //crear nuevo producto
  const createProduct=(product)=>{
    console.log(product)
    product.id='';
    fetch("http://localhost:8080/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": "Bearer "+ token ,
      },
      body: JSON.stringify(product)
    })
    .then((res)=>{
      console.log(res)
      if (res.status === 201) {
        return res.json();
      } else if (res.status >= 400) {
        throw new Error("Datos incorrectos");
      } else {
        throw new Error("Error inesperado");
      }
      
    })
    .then((dataJs) => {
      console.log(dataJs.product)
      setDb([...db, dataJs.product])
    })
    .catch((error) =>
    console.log(error)
    ) 
  }

  //actualizar producto
  const updateProduct=(product)=>{ 
    fetch(`http://localhost:8080/products/${product.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "authorization": "Bearer "+ token ,
      },
      body: JSON.stringify(product)
    })
    .then((res)=>{
      console.log(res)
      if (res.status === 200) {
        return res.json();
      } else if (res.status >= 400) {
        throw new Error("Datos incorrectos");
      } else {
        throw new Error("Error inesperado");
      }
      
    })
    .then((dataJs) => {
      console.log(dataJs)
      const newDb=db.map((d)=>(d.id===product.id?product:d));
      setDb(newDb)
    })
    .catch((error) =>
    console.log(error)
    )
  }
  
  //Eliminar producto
  const deleteProduct=(id)=>{  
    const isDelete= confirm(`¿Estas seguro de eliminar el producto con el id '${id}'?`)
    if (isDelete){
      fetch(`http://localhost:8080/products/${id}` ,{
        method:"DELETE",
        headers:{
          "Content-Type": "application/json",
          "authorization": "Bearer "+ token ,
        }
      })
      .then(res=>{
        console.log(res)
        if (res.status === 200) {
          return res.json();
        } else if (res.status >= 400) {
          throw new Error("Datos incorrectos");
        } else {
          throw new Error("Error inesperado");
        }
      })
      .then((dataJs) => {
        console.log(dataJs)
        const newDb=db.filter((d)=>d.id!==id);
        setDb(newDb)
      })
      .catch(err=>console.log(err))
    }else{
      return;
    }
  }

  return (
    <>
    <div>
      <ProductForm createProduct={createProduct} updateProduct={updateProduct} dataForm={dataForm} setDataForm={setDataForm}/>
    </div>
    <div>
      <ProductsTable loaded={loaded} data = {db} setDataForm={setDataForm} deleteProduct={deleteProduct} />
    </div>
    </>
  )
}
