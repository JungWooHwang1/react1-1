export default function BoilingVerdict (props) {
    if (props.celsius >= 100) {
        return <p>기화되었습니다.</p>
    }
    return <p>물이 끓지않습니다.</p>
}
