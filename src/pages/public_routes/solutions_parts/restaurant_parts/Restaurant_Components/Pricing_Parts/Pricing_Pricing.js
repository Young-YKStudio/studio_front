import { HiCheck } from 'react-icons/hi'
import { pricing } from '../../../../../../Data/Restaurant_Pricing_Pricing'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Pricing_Pricing = (props) => {
  return (
    <div className="mx-auto max-w-7xl bg-white py-24 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-5xl sm:leading-none lg:text-6xl">
        Pricing plans for restaurants and cafes
      </h2>
      <p className="mt-6 max-w-2xl text-xl text-gray-500 text-center mx-auto">
        Choose a package that best fits your restaurants or cafes
      </p>

      {/* Tiers */}
      <div className="mt-24 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
        {pricing.tiers.map((tier) => (
          <div
            key={tier.title}
            className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">{tier.title}</h3>
              {tier.mostPopular ? (
                <p className="absolute top-0 -translate-y-1/2 transform rounded-full bg-yellow-600 py-1.5 px-4 text-sm font-semibold text-white">
                  Most popular
                </p>
              ) : null}
              <p className="mt-4 flex items-baseline text-gray-900">
                {tier.price === 'Custom Rate' ?
                <span className="text-5xl font-bold tracking-tight">{tier.price}</span>
                :
                <span className="text-5xl font-bold tracking-tight">${tier.price}</span>
                }
                <span className="ml-1 text-xl font-semibold">{tier.frequency}</span>
              </p>
              {tier.title === 'Pro' ?
                <p className='ml-1 text-gray-500 mt-1'>$249/mo per additional location</p>
              :
                null
              }
              <p className="mt-6 text-gray-500">{tier.description}</p>

              {/* Feature list */}
              <ul role="list" className="mt-6 space-y-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex">
                    <HiCheck className="h-6 w-6 flex-shrink-0 text-green-500" aria-hidden="true" />
                    <span className="ml-3 text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={tier.link}
              className={classNames(
                tier.mostPopular
                  ? 'bg-yellow-600 text-white hover:bg-white hover:text-yellow-600 hover:border-yellow-600'
                  : 'bg-white text-yellow-600 border-yellow-600 hover:bg-yellow-600 hover:text-white',
                'mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium'
              )}
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Pricing_Pricing;