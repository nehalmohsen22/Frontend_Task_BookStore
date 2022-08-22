import React, { useEffect, useState } from 'react'
import { SearchIcon } from '@heroicons/react/solid'
import { searchBook } from '../../Services/api'

interface SearchProps {
  setBooks: any
}

const SearchComponent = (props: SearchProps) => {
  const { setBooks } = props
  const [search, setSearch] = useState('')

  const onUserInput = async () => {
    if (search.length >= 2) {
      const { results } = await searchBook(search)
      if (results) {
        setBooks(results)
      }
    }
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      onUserInput()
    }, 800)
    return () => clearTimeout(timer)
  }, [search])

  return (
    <div className='w-full'>
      <label htmlFor='search' className='sr-only'>
        Search
      </label>
      <div className='relative'>
        <div className='pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center'>
          <SearchIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
        </div>
        <input
          id='search'
          name='search'
          className='block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          placeholder='Search'
          type='search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  )
}

export default SearchComponent
