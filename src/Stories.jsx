import React, { useEffect } from 'react'

const Stories = () => {
    let API ="http://hn.algolia.com/api/v1/search?query=foo&tags=story"

    const fetchApiData=async(url)=>{
        try {
            const res=await fetch(url);
            const data=await res.json();
            console.log(data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchApiData(API)
    },[]);

  return (
    <>
          <h4>Wlcome Stories</h4>

    </>
  )
}

export default Stories
