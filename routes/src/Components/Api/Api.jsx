import React, { useEffect, useState } from 'react'

function Api() {
 
      const [data ,setData] = useState([])
      useEffect(()=>{
          fetch('https://api.github.com/users/hiteshchoudhary')
          .then((data)=>{
            return data.json()
          })
          .then((data)=>{
             console.log(data)
            setData(data)})
        
      },[])
    
  return (
    <div>Api : {data.followers}</div>
  )
}

export default Api

// export const apiVAL = async ()=>{
 
//  const value =  await fetch('https://api.github.com/users/hiteshchoudhary')
//   return value.json()
// }