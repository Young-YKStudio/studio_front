const Intro = (props) => {
  return (
    <div className="flex flex-row justify-center align-middle">
      <div className="max-w-7xl mx-auto w-full">
        <div className="lg:grid lg:grid-cols-2 lg:items-center">
          <div className="flex flex-end place-content-center pt-16 sm:pt-16 lg:pt-0 lg:place-content-end">
            <img src='/img/YKlogo.png' alt='logo' className="max-w-xs w-1/4 block lg:pr-2"/>
          </div>
          <div className="bg-black w-full flex flex-col h-60 sm:h-72 sm:justify-start lg:justify-center lg:h-custom">
            <h2 className="font-extrabold text-white text-6xl text-center md:text-8xl lg:text-left lg:pl-2 lg:pt-4 lg:text-8xl">
              Studio
            </h2>
            <p className="text-center lg:text-center text-white pt-36 lg:pt-0 lg:tracking-wide tracking-widest">Design | Develop | Marketing</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Intro;