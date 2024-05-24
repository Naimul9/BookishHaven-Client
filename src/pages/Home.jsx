import { useLoaderData } from "react-router-dom";
import BookCategories from "../components/BookCategories";
import Slider from "../components/Slider";


const Home = () => {
    const books = useLoaderData()
    // console.log(books);
    return (
        <div>
        <Slider></Slider>
        <BookCategories books={books}></BookCategories>
        </div>
    );
};

export default Home;