import { Link } from "react-router-dom";

const BookCategories = () => {
  return (
    <div>
      <section className="bg-white container mx-auto">
        <div className="h-[32rem]">
          <div className="container px-6 py-10 mx-auto">
            <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-black">Book Categories</h1>

            <div className="flex justify-center mx-auto mt-6">
              <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
            </div>

            <p className="max-w-2xl mx-auto mt-6 text-center text-black">
              Book categories include fiction, non-fiction, mystery, romance, and more, catering to diverse interests and providing varied themes and styles for readers to explore and enjoy.
            </p>
          </div>
        </div>

        <div className="container px-6 py-10 mx-auto -mt-72 sm:-mt-80 md:-mt-96">
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            <Link to={`/bookCard/Art and Music`} className="flex flex-col items-center p-4 border sm:p-6 rounded-xl ">
              <img className="object-cover w-full rounded-xl aspect-square h-80" src="https://i.thriftbooks.com/api/imagehandler/m/5851EEA4C5B5B905B05D1DC78E65DE7E23C18888.jpeg" alt=""/>
              <h1 className="mt-4 text-2xl font-semibold text-black">Art & Music</h1>
            </Link>

            <Link to={`/bookCard/History`} className="flex flex-col items-center p-4 border sm:p-6 rounded-xl">
              <img className="object-cover w-full rounded-xl aspect-square h-80" src="https://m.media-amazon.com/images/I/51DkSVlHh4L._SL350_.jpg" alt=""/>
              <h1 className="mt-4 text-2xl font-semibold text-black">History</h1>
            </Link>

            <Link to={`/bookCard/Entertainment`} className="flex flex-col items-center p-4 border sm:p-6 rounded-xl">
              <img className="object-cover w-full rounded-xl aspect-square h-80" src="https://i.thriftbooks.com/api/imagehandler/m/9F7ADEA65D62E01889D9FB69BE07CBFBAD82807F.jpeg" alt=""/>
              <h1 className="mt-4 text-2xl font-semibold text-black">Entertainment</h1>
            </Link>

            <Link to={`/bookCard/Sci-Fi and Fantasy`} className="flex flex-col items-center p-4 border sm:p-6 rounded-xl">
              <img className="object-cover w-full rounded-xl aspect-square h-80" src="https://i.thriftbooks.com/api/imagehandler/m/C1027D2DBD20EA338639FA8B1BFA02E7F797C0A0.jpeg" alt=""/>
              <h1 className="mt-4 text-2xl font-semibold text-black">Sci-Fi & Fantasy</h1>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookCategories;
