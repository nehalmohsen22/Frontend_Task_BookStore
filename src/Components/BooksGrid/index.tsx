import React, { useEffect } from 'react'
import Card from '../Card'
import { getBooksByPage } from '../../Services/api'
import SearchComponent from '../Search'
import Pagination from '../Pagination'

const BooksGrid = () => {
  const [books, setBooks] = React.useState([])
  const [page, setPage] = React.useState(1)

  const getBooks = async () => {
    const { results } = await getBooksByPage(page)
    console.log(results)
    setBooks(results)
  }

  useEffect(() => {
    getBooks()
  }, [])

  return (
    <div className='mx-auto py-4 px-4 max-w-7xl sm:px-6 my-4'>
      <div className='mx-auto w-96'>
        <SearchComponent setBooks={setBooks} />
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 gap-4 mb-4'>
        {books.map((book: any) => (
          <Card
            key={book.id}
            title={book.title}
            image={book.formats['image/jpeg']}
            authors={book?.authors[0]?.name || 'Unknown'}
          />
        ))}
      </div>
      <Pagination
        page={page}
        setPage={setPage}
        books={books}
        setBooks={setBooks}
      />
    </div>
  )
}

export default BooksGrid
