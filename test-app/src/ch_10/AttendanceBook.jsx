const AttendanceBook = () => {
    return (

        <ul>
            {students.map((student,index) => { 
                return <li key = {index}>{student.name}</li> 
            })}
        </ul>
    )
}

const students = [
    {
        name: "홍길동"
    },
    {
        name: "홍길동"
    },
    {
        name: "홍길동"
    },
    {
        name: "홍길동"
    },
    {
        name: "홍길동"
    },
    {
        name: "홍길동"
    },

]


export default AttendanceBook