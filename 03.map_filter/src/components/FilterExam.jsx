import React from 'react'

// filter()
// - 배열 내 요소 중 조건에 부합한 요소를 새로운 
//   배열로 묶어서 반환하는 함수
// - map() 처럼 출력하는 것은 아니기 떄문에 조건을 확인할때 filter()로 처리하고
//   출쳑은 map()을 활용
const FilterExam = () => {
    
    let members = [
        {id : 1,name : '박수현', age : 25, gender:'W'},
        {id : 2,name : '류이수', age : 30, gender:'M'},
        {id : 3,name : '임명진', age : 35, gender:'M'},
    ]

    let resultMembers = members.filter((members)=>members.age >= 30);
    // filter()함수를 쓸때 조건을 걸때 따로 조건을 먼저 실행을 시켜주고
    // 출력할때는 map을 사용해서 출력을 해준다.
    let numbers =[1,2,3,4,5,6,7,8,9,10];
    let result = numbers.filter((number)=> number%2 ===1);

    return (
    <div>
        {result.map((number,index)=>(
            <div key={index}>{number}</div>
        ))}
        {resultMembers.map((member)=>(
            <div key ={member.id}>{member.name}</div>
        ))}
    </div>
  )
}

export default FilterExam