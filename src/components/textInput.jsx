export default function TextInput({label, value, onchange, placeholder, type="text"}){
    return(
        <div className="field">
            <label htmlFor="for">{label}</label>
            <input 
            type={type}
            value={value}
            onChange={(e)=>(e.target.value)}
            placeholder={placeholder}
            
            className="input" />
        </div>
    )
}