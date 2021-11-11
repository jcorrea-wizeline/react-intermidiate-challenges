import React from "react"

const MediaSnippet = ({mediaType, url}) => {
   if(mediaType==="image"){
     return<img src={url} alt="nasas potd"/>}
    return <div>heehee</div>
}

export default MediaSnippet