import { useContext, useEffect } from "react";
import { GiftContext } from "../../GiftContexts";
export default function Grandson(){
    const { gift, updateGifts } = useContext(GiftContext);
    useEffect(()=>{
         
                
                    gift.map((element, index) => (
                        <div key={index}>
                            <p>{element.name} == {element.price}$</p>
                        </div>
                    ))
                
          
        
    },[])
    return (
        <h3>Existing gifts:</h3>
    )
    
   
}