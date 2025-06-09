import React from 'react'

const MapObjectExam = () => {

    let members = [
        {id : 1,name : '박수현', age : 25, gender:'W'},
        {id : 2,name : '류이수', age : 30, gender:'M'},
        {id : 3,name : '임명진', age : 35, gender:'M'},
    ]

    // script 위치에서는 화살표인자를 사용할때 {}(중괄호)를 사용한다
    let result =members.map ((member)=>{
        return(<div key={member.id}>
                {member.id}.{member.name} - {member.age}({member.gender === "M"?"남자":"여자"})
            </div>)
    })

    return (
    <div>
        {members.map((member)=>(
            <div key={member.id}>
                {member.id}.{member.name} - {member.age}({member.gender === "M"?"남자":"여자"})
            </div>
        ))}
        <hr/>
        {result}
    </div>
  )
}

export default MapObjectExam