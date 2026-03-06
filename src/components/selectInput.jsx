export default function SelectInput({ label, value, onchange, options }) {
    return (
        <div className="field">
            <label className="label">{label}</label>
            <select
                value={value}
                onchange={(e) => onChange(e.target.value)}
                className="input">
                {options.map((opt) => (
                    <option key={opt} value={opt}>
                        {opt}
                    </option>
                ))
                }
            </select>
        </div>
    )
}