import { useDispatch } from "react-redux";
import { CDN_URL } from "./utilitise/constants";
import { addItem } from "./utilitise/cartSlice";
const ItemCards=({item})=>{
    console.log(item)

    const dispatch= useDispatch();
    
    const handleaddclick=(item)=>{
        dispatch(addItem(item))
    }
    return (
       <div>
        {item.map((item)=>(
            <div key={item?.card?.info?.id} className="p-4 m-2  border-b-2 flex">
                <div className="w-[555px]">
                    <span>{item?.card?.info?.name} -</span>
                    <span>{item?.card?.info?.price/100||item?.card?.info?.defaultPrice/100} Rs</span>
                    <p className="text-sm p-4">{item?.card?.info?.description}</p>  
                </div>
                <div>
                  <div className="absolute">
                   <button className="p-2 mx-7 rounded-lg bg-black text-white hover:bg-slate-500" onClick={()=>handleaddclick(item)}>Add+</button>
                  </div>
                  
                   <img src={CDN_URL+ item?.card?.info?.imageId} className="w-[112px] h-[112px] rounded-md "></img> 
                </div>
                     
            </div>
        ))}
       </div>
    )
}
export default ItemCards;