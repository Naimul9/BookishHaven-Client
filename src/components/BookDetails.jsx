import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Modal from "./Modal";
import Rating from "react-rating";


const BookDetails = () => {
    const {loading, setLoading} = useContext(AuthContext)
    const { id } = useParams(); 
    const [book, setBook] = useState([]);

    const { name, authorName, Category, description, rating, image } = book;




    const [showModal, setShowModal] = useState(false);

    const handleBorrow = () => {
        setShowModal(true);
    };

   


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
         {/* <h2>{name}</h2>
            <p>Author: {author}</p>
            <p>Category: {category}</p>
            <p>Description: {description}</p>
            <p>Rating: {rating}</p>
             <img src={book.imageUrl} alt={book.name} />
            <button onClick={handleBorrow} disabled={book.quantity === 0}>
                Borrow
            </button> */}

<section className="py-10 lg:px-0 px-4 bg-base-200 lg:py-0 container mx-auto my-20  font-roboto rounded-xl">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl border border-dashed border-gray-200 rounded-lg ">
        <div className="grid items-stretch grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 xl:gap-x-24">
            <div className="h-full pr-12 lg:order-2 lg:mb-40">
                <div className="relative h-full lg:h-auto">
                    <div className="absolute w-full h-full -mb-12 overflow-hidden bg-gradient-to-r from-slate-300 to-gray-200 top-12 left-12 xl:left-16 lg:top-0 lg:scale-y-105 lg:origin-top">
                        <img className="object-cover object-right w-full h-full scale-150" src="https://cdn.rareblocks.xyz/collection/celebration/images/content/2/lines.svg" alt="" />
                    </div>
                    <div className="relative lg:-top-12">
                        <img className="lg:w-[512px]  w-332px lg:h-[720px] h-[500px]" src={image} alt="" />
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-start py-10 lg:order-1 sm:py-16 lg:py-24 xl:py-48">
                <div>
                    <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase"> {authorName} </p>
                    <h2 className="mt-4  text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">{name}</h2>
                    <p className="text-xl leading-relaxed text-black mt-4"> {description} </p>

                 <div className="lg:flex justify-between mt-10 text-xl ">
                    <p> <span className="font-semibold">Category</span>   : {Category}</p>
                   <p className="flex lg:mt-0 mt-4"> <span className="font-semibold">Rating</span> : <Rating initialRating={rating} readonly /> </p>
                 </div>

                   
                    <button onClick={handleBorrow}  className="btn btn-block inline-flex items-center justify-center mt-12 text-base font-semibold text-white transition-all duration-200 bg-slate-400 rounded-md hover:bg-slate-600 focus:bg-gray-800" > Borrow </button>
                </div>
            </div>
        </div>
    </div>
</section>




            {/* Borrow modal */}
            {showModal && (
                <Modal onClose={() => setShowModal(false)}> </Modal>
            )}
        </div>
    );
};
export default BookDetails;