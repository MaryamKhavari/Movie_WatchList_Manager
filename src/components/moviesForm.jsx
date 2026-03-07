import { useState } from "react"
import TextInput from "./textInput";

const categories = ["Action","Drama","Comedy"]
export default function MoviesForm ({onAddMovie}){
    const [title, setTitle]= useState("");
    const [amount, setAmount]= useState("");
    const [category, setCategory]= useState("Drama");
    const [error, setError]= useState("");
    
    function Submit (){
        setError("");
        const cleanTitle= title.trim();
        const numberAmount = Number(amount)
        if(!cleanTitle ){
            return setError ("Title is required");
        }
        if (!Number.isFinite(numberAmount) || numberAmount <=0 ){
            return setError("Amount must be > 0 ");
        }
        onAddMovie({title:cleanTitle, amount:numberAmount, category});
        setTitle ("");
        setAmount("");
        setCategory("Drama");
    }
    return (
        <div>
            <div className="row">
                <TextInput
                label={"Title"}
                value={title}
                onChange={setTitle}
                placeholder={"Action, Drama, Comedy e.g.."}
                > </TextInput>
            </div>
            {error ? <p className="error">{error}</p> : null}
            <button className="btn Primary" onClick={Submit}> Add</button>
        </div>
    )
}