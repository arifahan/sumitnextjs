'use client' 
import React from 'react'

export default function Button() {

  return (
    <div>
        <button className="px-4 py-2 rounded-full bg-green-500" onClick={()=> {console.log("Silgle Blog Click Me")}}>Click here</button>
    </div>
  )
}
