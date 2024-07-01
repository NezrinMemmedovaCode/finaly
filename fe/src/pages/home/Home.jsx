import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import "./Home.scss"

import img2 from "../../img/WhatsApp Image 2024-06-28 at 02.27.33 (2).jpeg"
import img4 from "../../img/WhatsApp Image 2024-06-28 at 02.27.33.jpeg"
import img5 from "../../img/WhatsApp Image 2024-06-28 at 02.27.34.jpeg"
import img6 from "../../img/WhatsApp Image 2024-06-28 at 02.27.35 (1).jpeg"
import img7 from "../../img/WhatsApp Image 2024-06-28 at 02.27.35.jpeg"
import img8 from "../../img/WhatsApp Image 2024-06-28 at 02.33.00.jpeg"
import img9 from "../../img/WhatsApp Image 2024-06-28 at 02.33.06.jpeg"
import img10 from "../../img/WhatsApp Image 2024-06-29 at 12.33.04 (1).jpeg"
import img12 from "../../img/WhatsApp Image 2024-06-29 at 12.33.04.jpeg"
import video1 from "../../video/2909914-uhd_3840_2024_24fps.mp4"
import img11 from "../../img/Screenshot 2024-06-29 014855.png"
import { MainContext } from '../../context/MainProvider'
import { WishListContext } from '../../context/WishListProvider'

function Home() {

  
  

  const [products, setproducts] = useState([])
  const [desert, setdesert] = useState([])
  const [salat, setsalat] = useState([])
  const {  addbasket }=useContext(MainContext)
  const { isExistWishList, addWishList }=useContext(WishListContext)



  useEffect(() => {
    fetch("http://localhost:3000/categories/coffee")
    .then(res=>res.json())
    .then(data=>setproducts(data))
  
 
  }, [])
  useEffect(() => {
    fetch("http://localhost:3000/categories/desert")
    .then(res=>res.json())
    .then(data=>setdesert(data))
 
  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/categories/salat")
    .then(res=>res.json())
    .then(data=>setsalat(data))
 
  }, [])

  
  


 
   
  
  
  return (
    <div>      
        <Helmet>
        <title>Home</title>
        
      </Helmet>
      <div className="section1">
        <div className="text">
        <h1>Start your day with Nathcoffee</h1>
        

        </div>
      </div>

      <div className="section">
        <div className="video">
          <video controls> <source src={video1} type='video/mp4'></source> </video>
        {/* <video width="640" height="360" controls>
        <source src={video1} type="video/mp4">
        Your browser does not support the video tag.
    </video> */}
        </div>
        <div className="textt">
        <p>LIVE COFFEE MAKING PROCESS.</p>
        <h1>We Telecast our
        Coffee Making Live</h1>
        <span>We are here to listen from you deliver exellence</span>

        </div>
      </div>
      <div className="section2">
        <h1>Nathcoffee brings you varieties of coffee</h1>
        <div className="cards">
        <div className="cards">
          {products.map((x)=><div className='card'> 
            
            <div className="card1">
            <h3>{x.name}</h3>
            <h2>{x.price} AZN</h2>
           
           
            

            
            


            </div>
            
            <div className="buttons">
            
            
            <button onClick={()=>addbasket(x)}><i class="fa-solid fa-cart-shopping"></i></button>
            <button onClick={()=>addWishList(x)}>{isExistWishList(x)? <i className="fa-solid fa-heart" ></i>:<i className="fa-regular fa-heart" ></i>}</button>
            <div class="coffee-cont">
  <div class="coffee-cup">
   </div>
  <div class="smoke"></div>
    <div class="smallsmoke"></div>
    <div class="coffee-hand"></div>
</div>


           
           
            </div>
            
          
          </div>)}
          

        </div>

        </div>
        <div className='section2'>
          <h1>Nathcoffee brings you varieties of desert</h1>
          <div className='cards'>

          
          {desert.map((x)=><div className='card'> 
            <div className="card1">
            <h3>{x.name}</h3>
            <h2>{x.price} AZN</h2>


            </div>
            <div className="buttons">
            
            
            <button onClick={()=>addbasket(x)}><i class="fa-solid fa-cart-shopping"></i></button>
            <button onClick={()=>addWishList(x)}>{isExistWishList(x)? <i className="fa-solid fa-heart" ></i>:<i className="fa-regular fa-heart" ></i>}</button>
            <div class="coffee-cont">
  <div class="coffee-cup">
   </div>
  <div class="smoke"></div>
    <div class="smallsmoke"></div>
    <div class="coffee-hand"></div>
</div>
            
           
            </div>
            
          
          </div>)}
          </div>


        </div>

        <div className='section2'>
          <h1>Nathcoffee brings you varieties of salat</h1>
          <div className='cards'>

          
          {salat.map((x)=><div className='card'> 
            <div className="card1">
            <h3>{x.name}</h3>
            <h2>{x.price} AZN</h2>


            </div>
            <div className="buttons">
            
            
            <button onClick={()=>addbasket(x)}><i class="fa-solid fa-cart-shopping"></i></button>
            <button onClick={()=>addWishList(x)}>{isExistWishList(x)? <i className="fa-solid fa-heart" ></i>:<i className="fa-regular fa-heart" ></i>}</button>
            <div class="coffee-cont">
  <div class="coffee-cup">
   </div>
  <div class="smoke"></div>
    <div class="smallsmoke"></div>
    <div class="coffee-hand"></div>
</div>
            
           
            </div>
            
          
          </div>)}
          </div>


        </div>



      </div>


      
      <div className="section3">
        <h1>Details of Nathcoffee</h1>

        <div className="images">
          <div className="image12">
            <img src="https://preview.colorlib.com/theme/coffee/img/g1.jpg" alt="" />
            <img src="https://preview.colorlib.com/theme/coffee/img/g2.jpg" alt="" />
          </div>
          <div className="image345">
            <div className="image3">

            <img src="https://preview.colorlib.com/theme/coffee/img/g3.jpg" alt="" />
            </div>
            <div className="image45">
              <img src="https://preview.colorlib.com/theme/coffee/img/g5.jpg" alt="" />
              <img src="https://preview.colorlib.com/theme/coffee/img/g4.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="section5">
        <h1>Information about coffee</h1>
        <p>It is known as coffee in many countries of the world. This drink has a stimulating effect due to the caffeine it contains. For the first time, coffee was discovered in the Gaffa region, which is located in the southwest of Abyssinia. Later, coffee was brought to Central Arabia. Cultivated in the southwestern part of Yemen. To this day, Yemen is the largest producer of coffee in the world. Currently, coffee plant species are cultivated in more than 50 countries in the world.

The Abyssinian method of coffee preparation is considered the oldest method. After roasting, the grains are ground. Ground coffee powder is boiled with water and sugar to make a liquid called Yaban. They drink it in a small cup.

Johann Wolfgang Goethe gives the idea of ​​distilling coffee beans. While implementing this idea, the chemist Friedlib Rung discovered caffeine.

Coffee soon spread to Persia and the Ottoman Empire. In 1517, during the reign of Yavuz Sultan Selim, Özdemir Pasha of Turkish descent went down in history as the first person to bring coffee to Europe by bringing the coffee he drank in Yemen and loved very much to Istanbul. Coffee was brought to Cairo for the first time in 1532. In parallel, coffee spreads to Syria and Asia Minor. The introduction of coffee became stronger after the invasion of Yemen in 1538. In 1554, after the conflicts in the Ottoman Empire, a coffee house was opened in Istanbul. Despite this, the acceptance of coffee as an official drink in the country continued until the reforms carried out by the </p>
<p>Raw coffee beans should not be used to prepare coffee drinks at home. Therefore, the coffee beans are first roasted and then ground in an electric grinder. For this, at home, coffee beans are spread on a pan 2-3 cm thick and roasted until they acquire a dark brown color and a unique aroma. When roasted, the mass of coffee beans decreases by 16-18%, and the volume increases due to the swelling of protein substances. Coffee beans should be washed gradually as they are used, in this case a better quality coffee drink is obtained. It should be noted that currently ground coffee powder is sold in ready-made containers.

Oriental coffee, black coffee, coffee with milk or cream, coffee cooked with milk, coffee with condensed milk and other drinks are prepared from natural coffee.</p>
      </div>
      <div className="section4">
        <h1>Nathcoffe staff</h1>
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

           
            <tr>
              <td>1</td>
              <td>Emil Hacizade 23</td>
              <td>Manager</td>
              <td><img src={img8} alt="" /></td>
            
            </tr>
            <tr>
              <td>2</td>
              <td>Emish  14</td>
              <td>Operator</td>
            <td><img src={img2} alt="" /></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Elmin Nebiyev  19</td>
              <td>Cashier</td>
            <td><img src={img4} alt="" /></td>
            </tr>
            <tr>
              <td>5</td>
              <td>Nezka   21</td>
              <td>Waiter</td>
            <td><img src={img5} alt="" /></td>
            </tr>
            <tr>
              <td>6</td>
              <td>Rufka   65</td>
              <td>Security guard</td>
            <td><img src={img6} alt="" /></td>
            </tr>
            <tr>
              <td>7</td>
              <td>Fidosh  20</td>
              <td> Clown</td>
            <td><img src={img7} alt="" /></td>
            </tr>
            <tr>
              <td>8</td>
              <td>Rufo  19</td>
              <td> Musician</td>
            <td><img src={img10} alt="" /></td>
            </tr>
            <tr>
              <td>9</td>
              <td>Emin  19</td>
              <td> Barmen</td>
            <td><img src={img9} alt="" /></td>
            </tr>
           
            

            </tbody>
          </table>

      
       
       
       
        </div>

         
      </div>

      
    </div>
  )
}

export default Home