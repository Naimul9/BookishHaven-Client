import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Modal from "./Modal";

const BookDetails = () => {
    const { loading, setLoading, user } = useContext(AuthContext);
    const { id } = useParams(); 
    const [book, setBook] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleBorrow = () => {
        setShowModal(true);
    };

    const handleSubmitBorrow = async (borrowData) => {
        try {
            const updatedQuantity = book.quantity - 1;
            if (updatedQuantity < 0) return; // Prevent negative quantity

            // Update book quantity in the backend
            const response = await fetch(`${import.meta.env.VITE_API_URL}/borrow`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ ...borrowData, bookId: id })
            });

            if (!response.ok) {
                throw new Error("Failed to borrow book");
            }

            // Update book state
            setBook({ ...book, quantity: updatedQuantity });
        } catch (error) {
            console.error("Error borrowing book:", error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${import.meta.env.VITE_API_URL}/books/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch item details');
                }
                const data = await response.json();
                setBook(data);
            } catch (error) {
                console.error('Error fetching item details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData(); 
    }, [id, setLoading]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!book) {
        return <div>No book found</div>;
    }

    const { name, author, category, description, rating, imageUrl, quantity } = book;

    return (
        <div>
            <h2>{name}</h2>
            <p>Author: {author}</p>
            <p>Category: {category}</p>
            <p>Description: {description}</p>
            <p>Rating: {rating}</p>
            <img src={imageUrl} alt={name} />
            <button onClick={handleBorrow} disabled={quantity === 0}>
                Borrow
            </button>

            {showModal && (
                <Modal
                    onClose={() => setShowModal(false)}
                    onSubmit={handleSubmitBorrow}
                    book={book} // Pass the book data to the Modal
                />
            )}
        </div>
    );
};

export default BookDetails;
