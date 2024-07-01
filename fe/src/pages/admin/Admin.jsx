
import { useEffect, useState } from "react";
import "./Admin.scss"
import { Helmet } from "react-helmet-async";
function Admin() {
    const [admin, setadmin] = useState([]);









    useEffect(() => {
        fetch("http://localhost:3000/products")
            .then(res => res.json())
            .then(data => setadmin(data))

    }, []);
    function deleteadmin(id) {
        fetch("http://localhost:3000/products/" + id, {
            method: "delete",
        })
            .then(res => res.json())
            .then(data => setadmin([...admin.filter((x) => x._id !== data._id)]))



    }
    return (
        <div className="admin">
            <>
                <Helmet>
                    <title> Admin</title>

                </Helmet>
                
            </>





            <div className="table-container">
          <table>
            <thead>

            <tr>
              <th>№</th>
              <th>Name</th>
              <th>Profession</th>
              <th>Pictures</th>
            </tr>
            </thead>
            <tbody>

           
            {admin
                    .map((x) => <tr key={x._id}>
                     
                        <td>{x.name}</td>
                        <td>{x.price}AZN</td>
                        <td>{x.category}</td>

                        <td><button onClick={() => deleteadmin(x._id)}><i className="fa-solid fa-trash"></i></button></td>



                    </tr>)}
         
         
          
           
           
            

            </tbody>
          </table>

      
       
       
       
        </div>

        </div>
    )
}

export default Admin