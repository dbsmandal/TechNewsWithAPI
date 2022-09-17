import React from 'react'
import { useGlobalContext } from './Context'
const Stories = () => {
  const { hits, isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <>
        <h1>Loading ............</h1>
      </>
    );
  }
  return (
    <>
      <div className="stories-div">
        {
          hits.map((currPost) => {
            const{ title,author,objectId,url,num_comments }=currPost;
            return <>
              <div className="card" key={objectId}>
                <h2>{title}</h2>
                <p>
                  by <span>{author}</span> || <span>{num_comments}</span> Comments
                </p>
                <div className="card-button">
                  <a href={url} target="_blank">Read More</a>
                  <a href="#">Delete</a>
                </div>
              </div>

            
            </>
          })
        }

      </div>
    </>
  )
}

export default Stories
