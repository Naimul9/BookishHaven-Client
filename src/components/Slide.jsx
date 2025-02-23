/* eslint-disable react/prop-types */




const Slide = ({ image, text, button }) => {

  return (
    <div
      className='w-full bg-center bg-cover h-[34rem]'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-900/40'>
        <div className='text-center'>
          <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
            {text}
          </h1>
          <br />
          <button
            className='w-2/4 px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-indigo-400 rounded-md lg:w-auto hover:bg-indigo-500 focus:outline-none focus:bg-gray-500'
          >
            {button}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Slide