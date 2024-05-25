import { Link, useLoaderData } from 'react-router-dom';
import Rating from 'react-rating';

const BookCard = () => {
  const books = useLoaderData();
console.log(books);
  return (
    <div className='container mx-auto py-10 px-4 '>
      
      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
        {books.map((book) => (
          <div key={book._id} className="flex flex-col items-center p-4 border sm:p-6 rounded-xl">
            <img className="object-cover w-full rounded-xl aspect-square h-96" src={book.image} alt={book.name} />
            <h2 className="mt-4 text-xl font-semibold text-black h-14">{book.name}</h2>
            <p>Author: {book.authorName}</p>
            <p>Category: {book.Category}</p>
            <Rating initialRating={book.rating} readonly />
           <Link to={`/book-detail/${book._id}`}> <button className="mt-2 p-2 bg-blue-500 text-white rounded">Details</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCard;
