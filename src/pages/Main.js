import { useState, React } from "react"
import Form from "../componest/Form"
import Footer from "../componest/Footer"
function Main(){
    const [title,setTitle] = useState("")
    const [image,setImage] = useState(null)
    const [content,setContent] = useState([])

    const handlePost =(event) =>{
        event.preventDefault()
        if(title && image){
            const newData = {title, image}
            setContent([newData, ...content ])
            console.log(newData)
            setTitle('')
            
        }
        else{
            alert('wax soo gali')
        }
    }
    


    return <div>
        <Form/>
       
        <form style={{textAlign:"center", marginTop:"20px"}}>

            <input value={title} className="text" type="text " placeholder="Enter Your name"
            onChange={(event)=>{
                setTitle(event.target.value)

            }
            }

            
            />
            <input className="file" type="file" 
            onChange={(event)=>{
                setImage(event.target.files[0])

            }}
            
            />
            <button onClick={handlePost}>Post</button>
        </form>

        {
            content.map( (post) => {
               return <div style={{textAlign:"center", paddingRight:"160PX"}}>

                <p > {post.title}</p>
                <img width= "500px"src  = {URL.createObjectURL(post.image)} />

                </div>
            })
        }
         <Footer/>
    </div>
}
export default Main
