import { createContext } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";


export const WishListContext = createContext();
function WishListProvider({ children }) {
  const [WishList, setWishList] = useLocalStorage("WishList",[]);
  function addWishList(item) {
    let index = WishList.findIndex((x) => x._id === item._id);
    if (index !== -1) {
     
        setWishList(WishList.filter((x) => x._id !== item._id));
    } else {
      setWishList([...WishList, {...item }]);
    }
  }
  function isExistWishList(item){
    return WishList.findIndex((x)=>x._id===item._id) !==-1
  }

  function removewishlist(item) {
    setWishList(WishList.filter((x) => x._id !== item._id));
  }
  return (
    <WishListContext.Provider value={{ WishList,isExistWishList, addWishList ,removewishlist}}>
      {children}
    </WishListContext.Provider>
  );
}

export default WishListProvider;