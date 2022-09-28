import { HiCheck } from 'react-icons/hi';
import { enhancements } from '../../../../../../Data/Restaurant_Pricing_Enhancements';

const TextAdjustment = (tier) => {
  if (tier.name === 'Marketing Plus') {
    return (
      <span className="text-base font-medium text-gray-500">/mo, per location</span>
    )
  } else if (tier.name === 'Design Plus') {
    return (
      <span className="text-base font-medium text-gray-500"></span>
    )
  } else {
    return (
      <span className="text-base font-medium text-gray-500">/mo</span>
    )
  }
}

const PriceAdjustment = (tier) => {
  if (tier.name === 'Design Plus') {
    return (
      <span className="text-4xl font-bold tracking-tight text-gray-900">$1,999</span>
    )
  } else {
    return (
      <span className="text-4xl font-bold tracking-tight text-gray-900">${tier.priceMonthly}</span>
    )
  }
}

const Pricing_Enhance = (props) => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
        <div className="sm:align-center sm:flex sm:flex-col">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-center">Enhancements</h1>
          <p className="mt-5 text-xl text-gray-500 sm:text-center">
            Unlock the maximum potential for your development by adding enhancements.
          </p>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
          {enhancements.map((tier) => (
            <div key={tier.name} className="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm">
              <div className="p-6">
                <h2 className="text-lg font-medium leading-6 text-gray-900">{tier.name}</h2>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  {PriceAdjustment(tier)}{' '}
                  {TextAdjustment(tier)}
                </p>
                <a
                  href={tier.href}
                  className="mt-8 block w-full rounded-md border border-transparent bg-yellow-600 py-2 text-center text-sm font-semibold text-white hover:bg-white hover:text-yellow-600 hover:border-yellow-600"
                >
                  Learn More
                </a>
              </div>
              <div className="px-6 pt-6 pb-8">
                <h3 className="text-sm font-medium text-gray-900">Details</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <HiCheck className="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Pricing_Enhance;