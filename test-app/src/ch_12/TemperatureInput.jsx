const scaleName = {
    C: '섭씨',
    F: '화씨',
}

export default function TemperatureInput(props) {
    
    const handleChange = (e) => {
        // setTemperature(e.target.value)
        props.onTemperatureChage(e.target.value)
    }
    
    return (
        <fieldset>
            <legend>섭씨 온도를 입력하세요 {scaleName[props.scale]}</legend>
            {/* <input value={temperature} onChange={handleChange} /> */}
            <input value={props.temperature} onChange={handleChange} />
        </fieldset>
    )
}
