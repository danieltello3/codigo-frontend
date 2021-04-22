import React, {useState} from "react";
import { url } from "../../utils/utils";
import { v4 as id } from 'uuid';
import { Form, Input, InputNumber, Button } from 'antd';
import "antd/dist/antd.css"

const layout = {
   labelCol: {
     span: 8,
   },
   wrapperCol: {
     span: 16,
   },
 };
 /* eslint-disable no-template-curly-in-string */
 
 const validateMessages = {
   required: '${label} is required!',
   types: {
     email: '${label} is not a valid email!',
     number: '${label} is not a valid number!',
   },
   number: {
     range: '${label} must be between ${min} and ${max}',
   },
 };


const Create = () => {
   const [titulo, setTitulo] = useState("");
   const [body, setBody] = useState("");
   const [autor, setAutor] = useState("");

   const enviarInfo = (event)=> {
        event.preventDefault();
        const blog = {titulo, body, autor, id} 

        fetch(url, {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blog)
        }).then(() => alert("blog agregado!!"));
   }
   
   return (
      
      <div>
         {/* <h2>Agregar un nuevo blog</h2>
         <form onSubmit={enviarInfo}>
            <div>
               <label htmlFor="">titulo del blog: </label>
               <input type="text" required value={titulo} onChange={(element)=> setTitulo(element.target.value)} />
            </div>
            <div>
               <label htmlFor="">Autor: </label>
               <input type="text" required value={autor} onChange={(element)=> setAutor(element.target.value)} />
            </div>
            <div>
               <label htmlFor="">Contenido: </label>
               <input type="text" required value={body} onChange={(element)=> setBody(element.target.value)} />
            </div>
            <button>Post</button>
         </form> */}
         <Form {...layout} name="nest-messages" validateMessages={validateMessages}>
            <Form.Item
            name={['user', 'titulo']}
            label="Titulo del blog"
            rules={[
               {
                  required: true,
               },
            ]}
            value={titulo} 
            onChange={(element)=> setTitulo(element.target.value)}
            >
            <Input />
            </Form.Item>
            <Form.Item
            name={['user', 'autor']}
            label="Autor"
            rules={[
               {
                  required: true,
               },
            ]}
            value={autor} 
            onChange={(element)=> setAutor(element.target.value)}
            >
            <Input />
            </Form.Item>
            <Form.Item 
            name={['user', 'contenido']} 
            label="Contenido"
            rules={[
               {
                  required: true,
               },
            ]}
            value={body} 
            onChange={(element)=> setBody(element.target.value)}
            >
            <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
               <Button type="primary" htmlType="submit" onClick={enviarInfo}>
                  Submit
               </Button>
            </Form.Item>
         </Form>
      </div>
   );
};

export default Create;
