import React from 'react'
import Card from './Card'

export default function Cards() {
  return (
    <div className="flex flex-wrap items-center">
      <div className="mr-3">
        <Card />
      </div>
      <div className="m-3">
        <Card />
      </div>
      <div className="m-3">
        <Card />
      </div>
    </div>
  )
}
