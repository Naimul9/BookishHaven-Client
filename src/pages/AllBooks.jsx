import { useState } from "react";
import Rating from "react-rating";
import { Link, useLoaderData } from "react-router-dom";

const AllBooks = () => {
    const books = useLoaderData();
    const [view, setView] = useState("card");
    const [showAvailable, setShowAvailable] = useState(false);

    const handleViewChange = (e) => {
        setView(e.target.value);
    };

    const handleFilterChange = () => {
        setShowAvailable(!showAvailable);
    };

    // Filter books based on availability
    const filteredBooks = showAvailable ? books.filter(book => book.quantity > 0) : books;

    return (
        <div className='container mx-auto py-10 px-4'>
            <div className="flex justify-between mb-4">
                <select onChange={handleViewChange} value={view} className="p-2 border rounded">
                    <option value="card">Card View</option>
                    <option value="table">Table View</option>
                </select>
                <button 
                    onClick={handleFilterChange} 
                    className={`p-2 border rounded ${showAvailable ? 'bg-green-500 text-white' : 'bg-gray-200 text-black'}`}
                >
                    {showAvailable ? 'Show All Books' : 'Show Available Books'}
                </button>
            </div>

            {view === "card" ? (
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
                    {filteredBooks.map((book) => (
                        <div key={book._id} className="flex flex-col items-center p-4 border sm:p-6 rounded-xl">
                            <img 
                                className="object-cover w-full rounded-xl aspect-square h-96" 
                                src={book.image} 
                                alt={book.name} 
                            />
                            <h2 className="mt-4 text-2xl font-semibold text-black">{book.name}</h2>
                            <p>Author: {book.authorName}</p>
                            <p>Category: {book.Category}</p>
                            <Rating 
                                initialRating={book.rating} 
                                readonly 
                            />
                            <Link to={`/book-update/${book._id}`}>
                                <button className="mt-2 p-2 bg-blue-500 text-white rounded">
                                    Update
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="w-1/3 px-4 py-2">Name</th>
                                <th className="w-1/4 px-4 py-2">Author</th>
                                <th className="w-1/4 px-4 py-2">Category</th>
                                <th className="w-1/4 px-4 py-2">Rating</th>
                                <th className="w-1/4 px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredBooks.map((book) => (
                                <tr key={book._id} className="text-center">
                                    <td className="border px-4 py-2">{book.name}</td>
                                    <td className="border px-4 py-2">{book.authorName}</td>
                                    <td className="border px-4 py-2">{book.Category}</td>
                                    <td className="border px-4 py-2">
                                        <Rating initialRating={book.rating} readonly />
                                    </td>
                                    <td className="border px-4 py-2">
                                        <Link to={`/book-update/${book._id}`}>
                                            <button className="p-2 bg-blue-500 text-white rounded">
                                                Details
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AllBooks;
