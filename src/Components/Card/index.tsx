/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react'

interface cardDataProps {
  title: string
  authors: string
  image: string
}

const Card = (props: cardDataProps) => {
  const { title, authors, image } = props
  return (
    <ul role='list' className='mt-4 p-2'>
      <li>
        <div className='space-y-4'>
          <div className='aspect-w-3 aspect-h-2'>
            <img
              className='object-cover shadow-lg rounded-lg w-56 h-56'
              src={image}
              alt=''
            />
          </div>
          <div className='text-lg leading-6 font-medium space-y-1'>
            <h3 className='w-auto truncate hover:whitespace-normal'>{title}</h3>
            <p className='text-indigo-600 truncate hover:whitespace-normal'>
              {authors}
            </p>
          </div>
        </div>
      </li>
    </ul>
  )
}

export default Card
