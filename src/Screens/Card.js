import React from 'react'

const Card = (props) => {
  const data = props?.data 
  console.log(props?.data)
  return (
    <div className="card">
       <div>
         <b style={{fontSize:"18px"}}>Name : {data.name}</b>
       </div>
       <div>
         <p>Height : {data?.height}</p>
         <p>Mass : {data?.mass}</p>
         <p>Hair Color : {data?.hair_color}</p>
         <p>Skin Color : {data?.skin_color}</p>
         <p>Eye Color : {data?.eye_color}</p>
       </div>
    </div>
  )
}

export default Card
