import { useLoaderData } from "react-router-dom";
import BookCategories from "../components/BookCategories";
import Slider from "../components/Slider";
import Subscribe from "../components/Subscribe";
import RequestBook from "../components/RequestBook";


const Home = () => {
    const books = useLoaderData()
    // console.log(books);
    return (
        <div className="font-roboto">
        <Slider></Slider>
        <BookCategories books={books}></BookCategories>
        <Subscribe></Subscribe>
        <RequestBook></RequestBook>
        </div>
    );
};

export default Home;