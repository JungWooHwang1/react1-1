
import { useState } from "react"
import TemperatureInput from "./TemperatureInput"

export default function Calculator(props) {
    const [temperature, setTemperature] = useState();
    const [scale, setScale] = useState('C');

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature)
        setScale('C')
    }
    const handleFahreheitChange = (temperature) => {
        setTemperature(temperature)
        setScale('F')
    }

    const celsius = scale === 'F' ? tryConvert(temperature, toCelsius) : temperature
    const fahreheit = scale === 'C' ? tryConvert(temperature, toFahreheit) : temperature
    
        return (
        <div>
            <TemperatureInput scale='C' temperature ={celsius} onTemperatureChage = {handleCelsiusChange}/>
            <TemperatureInput scale='F'  temperature ={fahreheit} onTemperatureChage = {handleFahreheitChange}/>
            <BoilingVerdict celsius = {temperature}></BoilingVerdict>
        </div>

    )
}

const toCelsius = (fahreheit) => {
    return (
        (fahreheit -32) * 5/9
    )
}

const toFahreheit = (celsius) => {
    return (
        (celsius * 9/5) + 32 
    )
}

const tryConvert = (temperature, convert) => {
    const input =parseFloat(temperature)
    if (Number.isNaN(input)) {
        return ('')
    }
    const output = convert(input)
    const rounded = Math.round(output * 1000)/1000  
    return (
        rounded.toString()
    )
    
}
const BoilingVerdict = (props) => {
    if (props.celsius >= 100) {
        return <p>기화되었습니다.</p>
    }
    return <p>물이 끓지않습니다.</p>
}