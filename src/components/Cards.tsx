'use client'
import Card from './Card'

export default function Cards() {
  return (
    <div className="flex flex-wrap items-center">
      <div className="mr-2">
        <Card />
      </div>
      <div className="m-2">
        <Card />
      </div>
      <div className="m-2">
        <Card />
      </div>
    </div>
  )
}
