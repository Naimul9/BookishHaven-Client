import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";



const BorrowedBooks = () => {
const {user} =useContext(AuthContext)
const [books, setBooks] = useState([])

useEffect(
   ()=>{
const getData = async() =>{
    const {data} = await axios(`${import.meta.env.VITE_API_URL}/borrowed-books/${user.email}`)
    setBooks(data)
}
getData()
   }, [user] 
)

const handleReturn = async (bookId) => {
    try {
        await axios.post(`${import.meta.env.VITE_API_URL}/return-book/${bookId}`);
        setBooks(books.filter(book => book._id !== bookId)); 
        toast.success('Book Returned Successfully')
    } catch (error) {
        console.error('Error returning book:', error);
    }
};




    return (
        <div className='container mx-auto py-10 px-4 '>
          
      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
        {books.map((book) => (
          <div key={book._id} className=" items-center p-4 border sm:p-6 rounded-xl">
            <img className="object-cover w-full rounded-xl aspect-square h-96" src={book.image} alt={book.name} />
            <h2 className="mt-4 text-xl font-semibold text-black h-14">{book.name}</h2>
         <div className="space-y-2 font-medium" >
         <p className="flex justify-between"> <span>Author :</span>  {book.authorName}</p>
           
           <p className="flex justify-between"> <span>Borrowed Date:</span> {book.borrowedDate.slice(0,10)}</p>
           <p className="flex justify-between"> <span>Return Date:</span> {book.returnDate} </p>
       
       <p className="flex justify-between"> <span>Category:</span> {book.Category}</p>
       </div>
          <div className="text-center flex justify-between mt-2 font-medium">
               Rating : <Rating initialRating={book.rating} readonly />
          </div>
           <Link > <button onClick={()=> handleReturn(book._id) } className="btn btn-block mt-2 p-2  bg-slate-300 rounded">Return</button></Link>
          </div>
        ))}
      </div>
    </div>
    );
};

export default BorrowedBooks;