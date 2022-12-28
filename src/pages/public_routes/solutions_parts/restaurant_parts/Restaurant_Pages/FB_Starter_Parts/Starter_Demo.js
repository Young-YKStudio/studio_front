const Starter_Demo = (props) => {

  const buttonHandler = () => {
    window.open('/demo_fb_starter', 'status=no', 'toolbar=no', 'menubar=no', 'location=no')
  }

  return (
    <div className="bg-white py-16 sm:py-24 h-screen lg:py-32 flex flex-col justify-center align-middle">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        {/* <h2 className="text-base font-semibold uppercase tracking-wider text-yellow-600">Demo Website</h2> */}
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Demo Website
        </p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          Click to see F&B Starter package demo website.
        </p>
        <div className='mt-8'>
          <button 
            className="px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-black sm:px-8"
            onClick={buttonHandler}
          >F&B Starter Demo</button>
        </div>
      </div>
    </div>
  );
}
export default Starter_Demo;