import React from 'react'

const page = ({ params }: { params: { type: string } }) => {
  return (
    <div>
      <h1>This is :
      {params.type} Category
      </h1>
    </div>
  )
}

export default page
