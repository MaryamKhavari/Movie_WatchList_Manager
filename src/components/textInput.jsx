export default function TextInput({label, value, onchange, placeholder, type="text"}){
    return(
        <div className="field">
            <label for="htmlFor">{label}</label>
            <input 
            type={type}
            value={value}
            onchange={(e)=>(e.target.value)}
            placeholder={placeholder}
            
            className="input" />
        </div>
    )
}