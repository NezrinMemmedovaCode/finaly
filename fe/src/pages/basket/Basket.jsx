
      import React, { useContext } from 'react'
import { MainContext } from '../../context/MainProvider'
import { Helmet } from 'react-helmet-async'
import "../basket/Basket.scss"
      
      function Basket() {
          const { basket, addbasket, GetTotal,decreasebasket,removebasket }=useContext(MainContext)
        return (
         <div>

         <Helmet>
        <title>Basket</title>
        
      </Helmet>
         <div className='bask'>

      <div className="cards">
          {basket.map((x)=><div className='card'> 
            <div className="card1">
            <h3>{x.name}</h3>
            <h2>{x.price} AZN</h2>


            </div>
            <div className="buttons">
            <div>count:{x.count}</div>
            <button onClick={()=>removebasket(x)}><i class="fa-solid fa-trash"></i></button>
            <button onClick={()=>addbasket(x)}>+</button>
            <button onClick={()=>decreasebasket(x)}>-</button>
            </div>
            
          
          </div>)}
          

        </div>
              
            </div>
            <div className='count'>Total:{GetTotal()} AZN</div>
            <div className='basket'>
            <button>

Confirm Cart {GetTotal()} AZN <i class="fa-solid fa-arrow-right"></i>
  </button>
            </div>
           
         </div>

        )
      }
      
      export default Basket