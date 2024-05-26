import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";

const UpdateBook = () => {
  const book = useLoaderData();
  const { user } = useContext(AuthContext);

  const {
    name,
    image,
    authorName,
    Category,
    rating,
    _id
  } = book;

  const handleUpdateBook = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const image = formData.get("image");
    const authorName = formData.get("authorName");
    const Category = formData.get("Category");
    const rating = formData.get("rating");
    const email = user.email;

    const updatedInfo = {
      name,
      image,
      authorName,
      Category,
      rating,
      email,
    };

    fetch(`${import.meta.env.VITE_API_URL}/books/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedInfo)
    })
    .then(res => res.json())
    .then(data => {
      if (data.modifiedCount > 0) {
        toast.success('Book Updated Successfully');
      } else {
        toast.error('Failed to update book');
      }
    })
    .catch(error => {
      console.error('Error updating book:', error);
      toast.error('Failed to update book');
    });
  };

  return (
    <div className="container px-4 py-10 mx-auto">
      <h1 className="text-4xl text-center font-semibold mt-10">Update Your Book</h1>
      <form onSubmit={handleUpdateBook} className="mt-10">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">Name</label>
            <input type="text" defaultValue={name} id="name" name="name" className="w-full p-2 border rounded-md focus:outline-slate-400" placeholder="Name" />

            <label htmlFor="image" className="block mt-4 mb-2 font-medium">Image</label>
            <input type="text" defaultValue={image} id="image" name="image" className="w-full p-2 border rounded-md focus:outline-slate-400" placeholder="Image URL" />

            <label htmlFor="authorName" className="block mt-4 mb-2 font-medium">Author Name</label>
            <input type="text" id="authorName" defaultValue={authorName} name="authorName" className="w-full p-2 border rounded-md focus:outline-slate-400" placeholder="Author Name" />
          </div>
          <div>
            <label htmlFor="category" className="block mb-2 font-medium">Category</label>
            <select
                        name="Category"
                        id="Category"
                        className="w-full p-2 border rounded-md focus:outline-slate-400"
                        type="text"
                        defaultValue={Category}
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
                        <option value="Sci-Fi and Fiction" selected>
                        Sci-Fi and Fiction
                        </option>
                    </select>

            <label htmlFor="rating" className="block mt-4 mb-2 font-medium">Rating</label>
            <input type="number" id="rating" defaultValue={rating} name="rating" className="w-full p-2 border rounded-md focus:outline-slate-400" min="1" max="5" step="0.1" placeholder="Rating" />
          </div>
        </div>

        <button type="submit" className="btn-block px-4 py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600">Update Book</button>
      </form>
    </div>
  );
};

export default UpdateBook;
