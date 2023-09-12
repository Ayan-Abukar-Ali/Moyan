import { useState, useEffect } from "react";
import Footer from "../componest/Footer";
import Form from "../componest/Form";
import axios from "axios"

function Products(){
    const [product, setProduct] = useState([])

    const getAllProduct =() =>{
        // axios.get("https://fakestoreapi.com/products").then((response)=>{
        //     setProduct(response.data)
        // }).catch((error) =>{ 
        //     console.log(error)
        // })
        axios.get("https://fakestoreapi.com/products").then((response)=>{
            setProduct(response.data)
        }).catch((error) =>{ 
            console.log(error)
        })
    }

    useEffect(()=>{
        getAllProduct()
    },[])


    return <div>
        <Form/>
        <h1>Producsts go there</h1>
        
        <div style={{display:"grid", gridTemplateColumns:"300px 300px 300px" , justifyContent:"center", marginBottom:"120px", marginTop:"10px"}}>
        {
            product.map((item,index)=>(
                <div style={{margin:"10px", border:"2px solid", textAlign:"center"}} >
            <img width="200px" height="250px" src={item.image} />
            <p>T{item.title}</p>
            <div style={{display:"flex", gap:"20px", justifyContent:"center"}}>
                <h3>{item.price}</h3>
                <h3>item.rating.rate</h3>
                
            </div>
        </div>

            )
            )
        }
        
       
        </div>

        <Footer/>
    </div>
}
export default Products