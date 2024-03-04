import React from 'react'
import { Link } from 'react-router-dom'
import { HomeSectionProps } from './model'

export const HomeSection: React.FC<HomeSectionProps> = ({bgImg, link}) => {
    const chars: string[] = link.split("");
  return (
    <Link to={link} className="aspect-square relative flex flex-1 flex-col items-center justify-around text-6xl z-10 duration-500">
        <div className={`absolute top-0 bottom-0 left-0 right-0 bg-no-repeat bg-cover bg-center -z-10 ${bgImg} rounded-full`}></div>
        {
            chars.map((char) => {
                return <span className="p-1 aspect-square flex items-center justify-center rounded-full border border-white">{char.toUpperCase()}</span>
            })
        }
    </Link>
  )
}