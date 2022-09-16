import { WhiteBackButton } from '../../../../../components/buttons/Buttons';
import Restaurant_Features from '../Restaurant_Components/Landing_Parts/Restaurant_Features';
import Restaurant_Rate from '../Restaurant_Components/Landing_Parts/Restaurant_Rate';
import Restaurant_Start from '../Restaurant_Components/Landing_Parts/Restaurant_Start';

const Restaurant_Landing = (props) => {
  return (
    <>
      {/* Hero section */}
      <div className="relative mt-8">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-white to-slate-100" />
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src="/img/bg-restaurant1.jpeg"
                alt="People working on laptops"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-700 to-yellow-200 mix-blend-multiply" />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white">A restaurant platform</span>
                <span className="block text-yellow-200">built by listening to restaurant owners</span>
              </h1>
              <p className="mt-6 max-w-lg mx-auto text-center text-xl text-yellow-200 sm:max-w-3xl">
                A complete package that you can control your online presence from fitst imporesstion to final transaction. Schedule a presonalized consulting today to find out how we can help you marketings and online experience.
              </p>
              <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
                  <WhiteBackButton link='/contact/form' text='Schedule a free consulting' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Cloud */}
      <div className="bg-gray-100 min-h-[100px]">
        {/* <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
            Trusted by over 5 very average small businesses
          </p>
          <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                alt="StaticKit"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                alt="Transistor"
              />
            </div>
            <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                alt="Workcation"
              />
            </div>
          </div>
        </div> */}
      </div>

      {/* Features */}
      <Restaurant_Features />
      <Restaurant_Rate />
      <Restaurant_Start />
    </>
  );
}
export default Restaurant_Landing;