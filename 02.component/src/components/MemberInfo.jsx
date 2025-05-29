import React from 'react'

const MemberInfo = ({teamNm,memberNm}) => {
  
  const display ={
    display : "inline-block",
    float: "left",
    margin : "10px",
    backgroundColor : "aqua",
    borderRadius:"10px",
    textAlign:"center",
    // height:"200px",
    width :"120px",
    // text-align : center;
  padding : "70px 0",
  border: "1px solid black"
  }
    return (
    //  style="display: inline-block;float: left;"
    <div className='team-info'>
        <h4>{teamNm}</h4>
        <span>{memberNm}</span>
    </div>
  )
}

export default MemberInfo