import { createContext, useState } from "react";

export const GiftContext = createContext();

export function GiftProvider(props){
    let gift1={name:"gift1",price:123};
    const [gift,setGifts]=useState([
       gift1
    ]);
    const updateGifts=(name,price)=>{
        let newgift={name,price};
        gift.push(newgift);
        setGifts(gift);
        //setGifts([...gift,newgift]);
        console.log(gift);
    }
    
    return (
        <GiftContext.Provider value={{gift,updateGifts}}>
           {props.children}
        </GiftContext.Provider>
    );
}