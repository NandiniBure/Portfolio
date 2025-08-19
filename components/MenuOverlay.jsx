import React from 'react'
import { Navlink } from './Navlink'
import Link from 'next/link'
export const MenuOverlay = ({links}) => {
    console.log(links)
  return (
    <ul className=' flex flex-col py-4 items-center'>
        {links.map((links,index)=>(
            <li key={index}>
            <Navlink
             href={links.path}
             title={links.title} />
            </li>
        ))
        }
    </ul>
  )
}
