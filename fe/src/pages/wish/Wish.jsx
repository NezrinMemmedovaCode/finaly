import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { WishListContext } from '../../context/WishListProvider'
import "../wish/Wish.scss"

function Wish() {
  const { removewishlist,isExistWishList, WishList }=useContext(WishListContext)
  return (
    <div>
        <Helmet>
        <title>Wish</title>
        
      </Helmet>

      <div className='wish'>
          
          <div className='cards'>

          
          {WishList.map((x)=><div className='card'> 
            <div className="card1">
            <h3>{x.name}</h3>
            <h2>{x.price} AZN</h2>


            </div>
            <div className="buttons">
            
            
            <button onClick={()=>removewishlist(x)}><i class="fa-solid fa-trash"></i></button>
           
           
            </div>
            
          
          </div>)}
          </div>


        </div>
    </div>
  )
}

export default Wish