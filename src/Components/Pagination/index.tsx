import React from 'react'
import { getBooksByPage } from '../../Services/api'

interface PaginationProps {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  books: any[]
  setBooks: any
}

const Pagination = (props: PaginationProps) => {
  const { page, setPage, books, setBooks } = props

  const handleNextPage = async () => {
    const { results } = await getBooksByPage(page + 1)
    setBooks(results)
    setPage(page + 1)
  }

  const handlePrevPage = async () => {
    const { results } = await getBooksByPage(page - 1)
    setBooks(results)
    setPage(page - 1)
  }

  const handlePreviousClick = () => {
    if (page > 1) {
      handlePrevPage()
    }
  }
  const handleNextClick = () => {
    if (books.length > 0) {
      handleNextPage()
    }
  }

  return (
    <nav
      className='bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6'
      aria-label='Pagination'
    >
      <div className='hidden sm:block'>
        <p className='text-sm text-gray-700'>
          Showing Page <span className='font-medium'>{page}</span>
        </p>
      </div>
      <div className='flex-1 flex justify-between sm:justify-end'>
        <button
          onClick={handlePreviousClick}
          className='relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
        >
          Previous
        </button>
        <button
          onClick={handleNextClick}
          className='relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
        >
          Next
        </button>
      </div>
    </nav>
  )
}

export default Pagination
