
import Shimmer from "./Shimmercard";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useRestaurantMenu from "./utilitise/useRestaurantMenu";
import ResCategory from "./ResCategory";
const Restaurantmenu = () => {

    const {redId} =useParams();

    const restInfo =useRestaurantMenu(redId);
    const[showIndex,setshowIndex]=useState(-1);

    if (restInfo==null)   return <Shimmer/>;

    const{name,cuisines,avgRating}=restInfo?.cards[2]?.card?.card?.info;

     const{itemCards}=
     restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

   
   
     const Categories =restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.
     filter(c=> c.card?.card?.["@type"]==
     "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
     

    return(
       
        <div>
            <nav className="pl-[23.5%] text-xl m-6 flex justify-between " >
                <div>
                    <h1 className="font-bold ">{name}</h1> 
                    <h2>{cuisines.join(", ")}</h2>
                </div>    
                <div className=" pr-[355px]">
                    ⭐{avgRating}star
                    
                    
                </div>
                
            </nav>
            {Categories.map((Categories,index)=>(
                <ResCategory 
                key={Categories?.card?.card?.title} 
                data={Categories?.card?.card}
                showless={index==showIndex && true}
                setshowIndex={()=> setshowIndex(index)}
                showIndex={index==showIndex}
               
                />
            ))}
        
        </div>
    );
};
export default Restaurantmenu;