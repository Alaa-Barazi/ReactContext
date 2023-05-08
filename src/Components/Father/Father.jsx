import { useContext, useState } from "react";
import { GiftContext } from "../../GiftContexts";

export default function Father(){
    const {gift,updateGifts} = useContext(GiftContext);
    const [name,setName] = useState("");
    const [price,setPrice] = useState(0);
    const addGifts = (e)=>{
       e.preventDefault();
        updateGifts(name,price);
        setName("");
        setPrice(0)
       
    }
    return (
        <>
          <div> 
      <h2>New Gift</h2>
      <form onSubmit={addGifts}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <button type="submit">Add Gifts</button>
      </form>
    </div>

    <h3>Existing gifts:</h3>
            {
                gift.map((element, index) => (
                    <div key={index}>
                        <p>{element.name} == {element.price}$</p>

                    </div>
                ))
            }
        </>
    )
}