import axios, { formToJSON } from "axios";
 import { useState, useEffect } from "react";
 import { formatPostcssSourceMap } from "vite";
 
 const UpdateItem = ({ item, url }) => {
     // 1. Create a state for the form
     // 2. Create a function to handle the form submission
     // 3. Create a function to handle the form input changes
     const [formdata,setFormdata] = useState({
         ID:"",
         name: "",
         status:""
     });
 
     useEffect(() => {
         const fetchItem = async () => {
             try {
                 const response = await axios.get(`${url}/${id}`);
                 setFormdata(response.data);
             } catch (err) {
                 alert("there was an error fetching!",err)
             }
         };
 
         fetchItem();
     }, []);
     
 
     const handlesubmit = async () => {
         if(!formdata.ID || !formdata.name || !formdata.status){
             return alert("all the fields are required")
         }
 
         try{
             await axios.put(`${url}/${formdata.ID}`, formdata);
             alert("successfully updated!")
         }
         catch(err){
             console.log("an error occured!",err)
         }
        }
 
     // your code here
     
     return(
         <>
         <div>
             <h1>{formdata.name}</h1>
             <p>{formdata.ID}</p>
             <p>{formdata.status}</p>
         </div>
 
         <br />
 
         <form onSubmit={()=>handlesubmit()}>
             <div>
                 <label>ID</label>
                 <input type="text" value={formdata.ID} onChange={(e)=>setFormdata({...formdata,ID:e.target.value})} />
             </div>
 
             <div>
                 <label>Name</label>
                 <input type="text" value={formdata.name} onChange={(e)=>setFormdata({...formdata,name:e.target.value})} />
             </div>
 
             <div>
                 <label>Status</label>
                 <input type="text" value={formdata.status} onChange={(e)=>setFormdata({...formdata,status:e.target.value})} />
             </div>
 
             <div>
                 <input type="submit"/>
             </div>
 
          </form>
         </>
     )
 };

 export default UpdateItem