

const WarningBanner = (props) => {
    if(!props.warning){
        return null
    }
    return (
        <>경고!</>
    )
}

export default WarningBanner