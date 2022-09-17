import React from 'react'
import { useGlobalContext } from './Context'
const Stories = () => {
const {hits,isLoading}=useGlobalContext();

if(isLoading){
    return  (
        <>
        <h1>Loading ............</h1>
        </>
    );
}
  return (
    <>
          <h4>Wlcome Stories</h4>
          {
            hits.map((currPost,index)=>{
                return <h3 key={index}>{currPost.title}</h3>
            }) 
          }


    </>
  )
}

export default Stories
