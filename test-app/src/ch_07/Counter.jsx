// import React, {useState, useEffect} from "react"


// export default function Counter(props) {
//     const [count, setCount] = useState(0)
    
//     const [isOnline, setIsOnline] = useState(0)  

//     function handleStaeusChange(state) {
//         setIsOnline(state.setIsOnline)
//     }

//     useEffect(() => {
//         ServerAPI.subscribeUserStatus(props.user.id, handleStaeusChange)
//         return () => {
//             ServerAPI.subscribeUserStatetus(props.user.id, handleStaeusChange)
//         }
//         document.title = `${count} 번 클릭했습니다`
//     })

//     if (isOnline == null){
//         return '대기중.....'
//     }
//     return isOnline ? '온라인' : '오프라인' (
        
//         <div>
//             <p>총 {count}번 클릭했습니다.</p>
//             <button onClick={() => setCount(count+1)}>클릭</button>
//         </div>
//     )
// }
