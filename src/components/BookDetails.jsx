import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Modal from "./Modal";


const BookDetails = () => {
    const {loading, setLoading} = useContext(AuthContext)
    const { id } = useParams(); 
    const [book, setBook] = useState([]);

    const { name, author, category, description, rating, imageUrl } = book;




    const [showModal, setShowModal] = useState(false);
    const [returnDate, setReturnDate] = useState("");
    const [borrowError, setBorrowError] = useState(null);

    const handleBorrow = () => {
        setShowModal(true);
    };

    const handleSubmitBorrow = () => {
        // Validate return date
        if (!returnDate) {
            setBorrowError("Return date is required");
            return;
        }

        // Implement borrowing logic here
        console.log(`Book borrowed with return date: ${returnDate}`);

        // Close modal and reset state
        setShowModal(false);
        setReturnDate("");
        setBorrowError(null);


    }



    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true); // Set loading to true when fetching data
                const response = await fetch(`${import.meta.env.VITE_API_URL}/books/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch item details');
                }
                const data = await response.json();
                setBook(data);
            } catch (error) {
                console.error('Error fetching item details:', error);
            } finally {
                setLoading(false); // Set loading to false when data fetching is complete
            }
        };

        fetchData(); 
    }, [id, setLoading]);


    if (loading) {
        return <div>Loading...</div>; // Render loading indicator if data is being fetched
    }


    return (
        <div>
         <h2>{name}</h2>
            <p>Author: {author}</p>
            <p>Category: {category}</p>
            <p>Description: {description}</p>
            <p>Rating: {rating}</p>
             <img src={book.imageUrl} alt={book.name} />
            <button onClick={handleBorrow} disabled={book.quantity === 0}>
                Borrow
            </button>

            {/* Borrow modal */}
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <h2>Borrow Book</h2>
                    {borrowError && <p style={{ color: "red" }}>{borrowError}</p>}
                    <form onSubmit={handleSubmitBorrow}>
                        <label htmlFor="returnDate">Return Date:</label>
                        <input
                            type="date"
                            id="returnDate"
                            value={returnDate}
                            onChange={(e) => setReturnDate(e.target.value)}
                        />
                        <button type="submit">Submit</button>
                    </form>
                </Modal>
            )}
        </div>
    );
};
export default BookDetails;