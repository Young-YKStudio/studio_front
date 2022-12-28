import { YellowBackSmallButton } from "../../../../../../components/buttons/Buttons";

const Restaurant_Start = (props) => {
  return (
    <div className="bg-white py-16 sm:py-24 h-screen lg:py-32 flex flex-col justify-center align-middle">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base font-semibold uppercase tracking-wider text-yellow-600">Restaurant package Features</h2>
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Get Your Restaurant Website Today
        </p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          Enter required information in the contact form in less than a minute, and we will contact you at your convenience. 
        </p>
        <div className='mt-8'>
          <YellowBackSmallButton link='/contact/form' text='Get Started' />
        </div>
      </div>
    </div>
  );
}
export default Restaurant_Start;