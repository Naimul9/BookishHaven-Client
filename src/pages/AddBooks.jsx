import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

const AddBooks = () => {
    const { user } = useContext(AuthContext);

    const handleAddBook = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get("name");
        const image = formData.get("image");
        const quantity = formData.get("quantity");
        const authorName = formData.get("authorName");
        const Category = formData.get("Category");
        const shortDescription = formData.get("short-description");
        const rating = formData.get("rating");
        const detail = formData.get("detail");
        const email = user.email;

        const info ={ name,image,
            quantity,
            authorName,
            Category,
            shortDescription,
            rating,
            detail,
            email}
        console.log(info);

        fetch(`${import.meta.env.VITE_API_URL}/addBook`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                toast.success('Book Added Successfully');
            }
        })
        .catch(error => {
            console.error('Error adding book:', error);
            toast.error('Failed to add book');
        });

    };

    return (
        <div className="container px-4 py-10 mx-auto">
            <h1 className="text-4xl text-center font-semibold mt-10">Add Your Book</h1>
            <form onSubmit={handleAddBook} className="mt-10">
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <label htmlFor="name" className="block mb-2">Name</label>
                        <input type="text" id="name" name="name" className="w-full p-2 border rounded-md focus:outline-slate-400" placeholder="Name" />

                        <label htmlFor="image" className="block mt-4 mb-2">Image</label>
                        <input type="text" id="image" name="image" className="w-full p-2 border rounded-md focus:outline-slate-400" placeholder="Image URL" />

                        <label htmlFor="quantity" className="block mt-4 mb-2">Quantity</label>
                        <input type="number" id="quantity" name="quantity" className="w-full p-2 border rounded-md focus:outline-slate-400" placeholder="Quantity" />

                        
                        <label htmlFor="short-description" className="block mt-4 mb-2">Short Description</label>
                        <textarea id="short-description" name="short-description" className="w-full p-2 border rounded-md focus:outline-slate-400" placeholder="short-description" />

                       
                    </div>
                    <div>
                        <label htmlFor="Category" className="block mb-2">Category</label>
                        <select
                        name="Category"
                        id="Category"
                        className="w-full p-2 border rounded-md focus:outline-slate-400"
                        type="text"
                       
                        placeholder="Select Category"
                    >
                        <option value="Art and Music" selected>
                        Art and Music
                        </option>
                        <option value="History" selected>
                        History
                        </option>
                        <option value="Entertainment" selected>
                        Entertainment
                        </option>
                        <option value="Sci-Fi and Fantasy" selected>
                        Sci-Fi and Fantasy
                        </option>
                    </select>

                        <label htmlFor="rating" className="block mt-4 mb-2">Rating</label>
                        <input type="number" id="rating" name="rating" className="w-full p-2 border rounded-md focus:outline-slate-400" min="1" max="5" step="0.1" placeholder="Rating" />


                        <label htmlFor="authorName" className="block mt-4 mb-2">Author Name</label>
                        <input type="text" id="authorName" name="authorName" className="w-full p-2 border rounded-md focus:outline-slate-400" placeholder="Author Name" />

                        <label htmlFor="detail" className="block mt-4 mb-2">More Detail</label>
                        <textarea id="detail" name="detail" className="w-full p-2 border rounded-md focus:outline-slate-400" placeholder="Write More About The Book" />

                    </div>
                </div>

                <button type="submit" className="btn-block px-4  py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600">Add Book</button>
            </form>
        </div>
    );
};

export default AddBooks;
