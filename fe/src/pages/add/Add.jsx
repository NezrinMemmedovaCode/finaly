import React from 'react'
import { Helmet } from 'react-helmet-async'
import "../add/Add.scss"
import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';

function Add() {
  return (
    <div  className='formik'>
        <Helmet>
        <title>Add </title>
        
      </Helmet>
  <div>

 
      <Formik
       initialValues={{  name: '', price: '',category:'' }}
       validationSchema={Yup.object({
       
           name: Yup.string()
           .required('Required'),
           price: Yup.string()
           .required('Required'),
           
           category: Yup.string()
          
           .required('Required')
       })}
       onSubmit={(values) => {
     fetch("http://localhost:3000/products" , {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
     })
       }}
     >
       <Form>
        
 
         <label htmlFor="name">Name</label>
         <Field name="name" type="text" />
        
 
         <label htmlFor="price"> Price</label>
         <Field name="price" type="number" />
        

         <label htmlFor="category">Category</label>
         <Field name="category" type="text" />


 
         <button className='add' type="submit">+</button>
       </Form>
     </Formik>

     </div>
    </div>
  )
}

export default Add