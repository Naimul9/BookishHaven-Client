/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Modal = ({ onClose, onSubmit, book }) => {
    const { user } = useContext(AuthContext);
    const [returnDate, setReturnDate] = useState("");
    const [borrowError, setBorrowError] = useState(null);

    const { name, author, category, description, rating, imageUrl, quantity } = book;

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate return date
        if (!returnDate) {
            setBorrowError("Return date is required");
            return;
        }

        // Prepare borrow data
        const borrowData = {
            name: user.displayName,
            email: user.email,
            returnDate,
            author,
            category,
            description,
            rating,
            imageUrl,
            quantity,
        };

        console.log(borrowData);

        // Call parent component's onSubmit function with form data
        onSubmit(borrowData);

        // Reset form state
        setReturnDate("");
        setBorrowError(null);

        // Close the modal
        onClose();
    };

    return (
        <div>
            <div className="relative flex justify-center">
                <div
                    className="fixed inset-0 z-10 overflow-y-auto"
                    aria-labelledby="modal-title"
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                        <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>

                        <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
                            <h3 className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
                                Borrow Book
                            </h3>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                Please fill in the details to borrow this book.
                            </p>

                            <form className="mt-4" onSubmit={handleSubmit}>
                                <label htmlFor="name" className="text-sm text-gray-700 dark:text-gray-200">
                                    Name
                                </label>
                                <div className="block mb-4">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={user.displayName}
                                        readOnly
                                        className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                    />
                                </div>

                                <label htmlFor="email" className="text-sm text-gray-700 dark:text-gray-200">
                                    Email
                                </label>
                                <div className="block mb-4">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={user.email}
                                        readOnly
                                        className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                    />
                                </div>

                                <label htmlFor="returnDate" className="text-sm text-gray-700 dark:text-gray-200">
                                    Return Date
                                </label>
                                <div className="block mb-4">
                                    <input
                                        type="date"
                                        id="returnDate"
                                        name="returnDate"
                                        value={returnDate}
                                        onChange={(e) => setReturnDate(e.target.value)}
                                        className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                    />
                                </div>

                                {borrowError && <p className="text-sm text-red-600">{borrowError}</p>}

                                <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        type="submit"
                                        className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                    >
                                        Borrow
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
