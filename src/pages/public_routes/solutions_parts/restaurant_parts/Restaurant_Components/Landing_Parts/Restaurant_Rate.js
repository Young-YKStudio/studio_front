import { BlackBackButton } from "../../../../../../components/buttons/Buttons";

const Restaurant_Rate = (props) => {
  return (
    <main className="lg:relative">
      <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span className="block">Flat monthly rate</span>{' '}
            <span className="block text-yellow-600">No hidden fees</span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            Operating and marketing your business online shouldn't have to be complicated or expensive. The price you decide today is the one you keep.
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <BlackBackButton link='/solutions/restaurants/pricing' text='Pricing Information' />
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2 lg:rounded-xl lg:bg-slate-300">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/img/woman_looking.jpg"
          alt="woman_looking"
        />
      </div>
    </main>
  );
}
export default Restaurant_Rate;