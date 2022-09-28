import { HiCheck, HiX } from 'react-icons/hi';
import { useState } from 'react';
import { plans, webHosting, OnlineOrdering, marketings, enhancements } from '../../../../../../Data/Restaurant_Pricing_Details';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Pricing_Detail = (props) => {
  const [ DetailOpen, setDetailOpen ] = useState(false);

  return (
    <>
    {/* Small screen */}
      <section aria-labelledby="mobile-comparison-heading" className="lg:hidden">
        <h2 id="mobile-comparison-heading" className="sr-only">
          Feature comparison
        </h2>

        <div className="mx-auto mt-16 max-w-2xl space-y-16 px-4 sm:px-6">
          {plans.map((plan, planIndex) => (
            <div key={plan.title} className="border-t border-gray-200">
              <div
                className={classNames(
                  plan.featured ? 'border-indigo-600' : 'border-transparent',
                  '-mt-px pt-6 border-t-2 sm:w-1/2'
                )}
              >
                <h3
                  className={classNames(plan.featured ? 'text-yellow-600' : 'text-gray-900', 'text-md font-bold')}
                >
                  {plan.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
              </div>
              <h4 className="mt-10 text-sm font-bold text-gray-900">Catered for business</h4>

              <div className="relative mt-6">
                {/* Fake card background */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
                  <div
                    className={classNames(
                      plan.featured ? 'shadow-md' : 'shadow',
                      'absolute right-0 w-1/2 h-full bg-white rounded-lg'
                    )}
                  />
                </div>

                <div
                  className={classNames(
                    plan.featured ? 'ring-2 ring-indigo-600 shadow-md' : 'ring-1 ring-black ring-opacity-5 shadow',
                    'relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none'
                  )}
                >
                  <dl className="divide-y divide-gray-200">
                    {webHosting.map((feature) => (
                      <div
                        key={feature.title}
                        className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2"
                      >
                        <dt className="pr-4 text-sm font-medium text-gray-600">{feature.title}</dt>
                        <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                          {typeof feature.tiers[planIndex].value === 'string' ? (
                            <span
                              className={classNames(
                                feature.tiers[planIndex].featured ? 'text-indigo-600' : 'text-gray-900',
                                'text-sm font-medium'
                              )}
                            >
                              {feature.tiers[planIndex].value}
                            </span>
                          ) : (
                            <>
                              {feature.tiers[planIndex].value === true ? (
                                <HiCheck className="mx-auto h-5 w-5 text-indigo-600" aria-hidden="true" />
                              ) : (
                                <HiX className="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                              )}

                              <span className="sr-only">
                                {feature.tiers[planIndex].value === true ? 'Yes' : 'No'}
                              </span>
                            </>
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Fake card border */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
                  <div
                    className={classNames(
                      plan.featured ? 'ring-2 ring-indigo-600' : 'ring-1 ring-black ring-opacity-5',
                      'absolute right-0 w-1/2 h-full rounded-lg'
                    )}
                  />
                </div>
              </div>

              <h4 className="mt-10 text-sm font-bold text-gray-900">Other perks</h4>

              <div className="relative mt-6">
                {/* Fake card background */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
                  <div
                    className={classNames(
                      plan.featured ? 'shadow-md' : 'shadow',
                      'absolute right-0 w-1/2 h-full bg-white rounded-lg'
                    )}
                  />
                </div>

                <div
                  className={classNames(
                    plan.featured ? 'ring-2 ring-indigo-600 shadow-md' : 'ring-1 ring-black ring-opacity-5 shadow',
                    'relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none'
                  )}
                >
                  <dl className="divide-y divide-gray-200">
                    {OnlineOrdering.map((perk) => (
                      <div key={perk.title} className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                        <dt className="text-sm font-medium text-gray-600 sm:pr-4">{perk.title}</dt>
                        <dd className="text-center sm:px-4">
                          {perk.tiers[planIndex].value === true ? (
                            <HiCheck className="mx-auto h-5 w-5 text-indigo-600" aria-hidden="true" />
                          ) : (
                            <HiX className="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                          )}

                          <span className="sr-only">{perk.tiers[planIndex].value === true ? 'Yes' : 'No'}</span>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Fake card border */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
                  <div
                    className={classNames(
                      plan.featured ? 'ring-2 ring-indigo-600' : 'ring-1 ring-black ring-opacity-5',
                      'absolute right-0 w-1/2 h-full rounded-lg'
                    )}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    {/* ------------- Large screen */}
      <section aria-labelledby="comparison-heading" className="hidden lg:block">
        <div>
          <h2 id="comparison-heading" className="sr-only">
            Feature comparison
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-8">
          <div className="flex w-full items-stretch">
            <div className="-mt-px flex w-1/4 items-end py-6 pr-4">
              <h3 className="mt-auto text-lg font-bold text-gray-900">Web Hosting</h3>
            </div>
            {plans.map((plan, index) => (
              <div
                key={plan.title}
                aria-hidden="true"
                className={classNames(index === plans.length - 1 ? '' : 'pr-4', '-mt-px pl-4 w-1/4')}
              >
                <div
                  className={classNames(
                    plan.featured ? 'border-yellow-600' : 'border-transparent',
                    'py-6'
                  )}
                >
                  <p
                    className={classNames(plan.featured ? 'text-yellow-600' : 'text-gray-900', 'text-lg font-bold')}
                  >
                    {plan.title}
                  </p>
                  <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            {/* Fake card backgrounds */}
            <div className="pointer-events-none absolute inset-0 flex items-stretch" aria-hidden="true">
              <div className="w-1/4 pr-4" />
              <div className="w-1/4 px-4">
                <div className="h-full w-full rounded-lg bg-white shadow" />
              </div>
              <div className="w-1/4 px-4">
                <div className="h-full w-full rounded-lg bg-white shadow-md" />
              </div>
              <div className="w-1/4 pl-4">
                <div className="h-full w-full rounded-lg bg-white shadow" />
              </div>
            </div>

            <table className="relative w-full">
              <caption className="sr-only">Business feature comparison</caption>
              <thead>
                <tr className="text-left">
                  <th scope="col">
                    <span className="sr-only">Feature</span>
                  </th>
                  {plans.map((plan) => (
                    <th key={plan.title} scope="col">
                      <span className="sr-only">{plan.title} plan</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {webHosting.map((feature) => (
                  <tr key={feature.title}>
                    <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">
                      {feature.title}
                    </th>
                    {feature.tiers.map((tier, index) => (
                      <td
                        key={tier.title}
                        className={classNames(
                          index === feature.tiers.length - 1 ? 'pl-4' : 'px-4',
                          'relative w-1/4 py-0 text-center'
                        )}
                      >
                        <span className="relative h-full w-full py-3">
                          {typeof tier.value === 'string' ? (
                            <span
                              className={classNames(
                                tier.featured ? 'text-yellow-600' : 'text-gray-900',
                                'text-sm font-medium'
                              )}
                            >
                              {tier.value}
                            </span>
                          ) : (
                            <>
                              {tier.value === true ? (
                                <HiCheck className="mx-auto h-5 w-5 text-green-500" aria-hidden="true" />
                              ) : (
                                <HiX className="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                              )}

                              <span className="sr-only">{tier.value === true ? 'Yes' : 'No'}</span>
                            </>
                          )}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Fake card borders */}
            <div className="pointer-events-none absolute inset-0 flex items-stretch" aria-hidden="true">
              <div className="w-1/4 pr-4" />
              <div className="w-1/4 px-4">
                <div className="h-full w-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
              <div className="w-1/4 px-4">
                <div className="h-full w-full rounded-lg ring-2 ring-yellow-600 ring-opacity-100" />
              </div>
              <div className="w-1/4 pl-4">
                <div className="h-full w-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
            </div>
          </div>

          {/* Online Ordering */}

          <h3 className="mt-10 text-lg font-bold text-gray-900">Main Features</h3>

          <div className="relative mt-6">
            {/* Fake card backgrounds */}
            <div className="pointer-events-none absolute inset-0 flex items-stretch" aria-hidden="true">
              <div className="w-1/4 pr-4" />
              <div className="w-1/4 px-4">
                <div className="h-full w-full rounded-lg bg-white shadow" />
              </div>
              <div className="w-1/4 px-4">
                <div className="h-full w-full rounded-lg bg-white shadow-md" />
              </div>
              <div className="w-1/4 pl-4">
                <div className="h-full w-full rounded-lg bg-white shadow" />
              </div>
            </div>

            <table className="relative w-full">
              <caption className="sr-only">Online order comparison</caption>
              <thead>
                <tr className="text-left">
                  <th scope="col">
                    <span className="sr-only">Online Ordering</span>
                  </th>
                  {plans.map((plan) => (
                    <th key={plan.title} scope="col">
                      <span className="sr-only">{plan.title} plan</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {OnlineOrdering.map((feature) => (
                  <tr key={feature.title}>
                    <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">
                      {feature.title}
                    </th>
                    {feature.tiers.map((tier, index) => (
                      <td
                        key={tier.title}
                        className={classNames(
                          index === feature.tiers.length - 1 ? 'pl-4' : 'px-4',
                          'relative w-1/4 py-0 text-center'
                        )}
                      >
                        <span className="relative h-full w-full py-3">
                          {typeof tier.value === 'string' ? (
                            <span
                              className={classNames(
                                tier.featured ? 'text-yellow-600' : 'text-gray-900',
                                'text-sm font-medium'
                              )}
                            >
                              {tier.value}
                            </span>
                          ) : (
                            <>
                              {tier.value === true ? (
                                <HiCheck className="mx-auto h-5 w-5 text-green-500" aria-hidden="true" />
                              ) : (
                                <HiX className="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                              )}

                              <span className="sr-only">{tier.value === true ? 'Yes' : 'No'}</span>
                            </>
                          )}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Fake card borders */}
            <div className="pointer-events-none absolute inset-0 flex items-stretch" aria-hidden="true">
              <div className="w-1/4 pr-4" />
              <div className="w-1/4 px-4">
                <div className="h-full w-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
              <div className="w-1/4 px-4">
                <div className="h-full w-full rounded-lg ring-2 ring-yellow-600 ring-opacity-100" />
              </div>
              <div className="w-1/4 pl-4">
                <div className="h-full w-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
            </div>
          </div>

          {/* marketings */}
          <h3 className='mt-10 text-lg font-bold text-gray-900'>Marketing</h3>

          <div className="relative mt-6">
            {/* Fake card backgrounds */}
            <div className="pointer-events-none absolute inset-0 flex items-stretch" aria-hidden="true">
              <div className="w-1/4 pr-4" />
              <div className="w-1/4 px-4">
                <div className="h-full w-full rounded-lg bg-white shadow" />
              </div>
              <div className="w-1/4 px-4">
                <div className="h-full w-full rounded-lg bg-white shadow-md" />
              </div>
              <div className="w-1/4 pl-4">
                <div className="h-full w-full rounded-lg bg-white shadow" />
              </div>
            </div>

            <table className="relative w-full">
              <caption className="sr-only">Marketing comparison</caption>
              <thead>
                <tr className="text-left">
                  <th scope="col">
                    <span className="sr-only">Marketing</span>
                  </th>
                  {plans.map((plan) => (
                    <th key={plan.title} scope="col">
                      <span className="sr-only">{plan.title} plan</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {marketings.map((feature) => (
                  <tr key={feature.title}>
                    <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">
                      {feature.title}
                    </th>
                    {feature.tiers.map((tier, index) => (
                      <td
                        key={tier.title}
                        className={classNames(
                          index === feature.tiers.length - 1 ? 'pl-4' : 'px-4',
                          'relative w-1/4 py-0 text-center'
                        )}
                      >
                        <span className="relative h-full w-full py-3">
                          {typeof tier.value === 'string' ? (
                            <span
                              className={classNames(
                                tier.featured ? 'text-yellow-600' : 'text-gray-900',
                                'text-sm font-medium'
                              )}
                            >
                              {tier.value}
                            </span>
                          ) : (
                            <>
                              {tier.value === true ? (
                                <HiCheck className="mx-auto h-5 w-5 text-green-500" aria-hidden="true" />
                              ) : (
                                <HiX className="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                              )}

                              <span className="sr-only">{tier.value === true ? 'Yes' : 'No'}</span>
                            </>
                          )}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Fake card borders */}
            <div className="pointer-events-none absolute inset-0 flex items-stretch" aria-hidden="true">
              <div className="w-1/4 pr-4" />
              <div className="w-1/4 px-4">
                <div className="h-full w-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
              <div className="w-1/4 px-4">
                <div className="h-full w-full rounded-lg ring-2 ring-yellow-600 ring-opacity-100" />
              </div>
              <div className="w-1/4 pl-4">
                <div className="h-full w-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
            </div>
          </div>

          {/* enhancements */}
          <h3 className='mt-10 text-lg font-bold text-gray-900'>Enhancements</h3>
          <div className="relative mt-6">
            {/* Fake card backgrounds */}
            <div className="pointer-events-none absolute inset-0 flex items-stretch" aria-hidden="true">
              <div className="w-1/4 pr-4" />
              <div className="w-1/4 px-4">
                <div className="h-full w-full rounded-lg bg-white shadow" />
              </div>
              <div className="w-1/4 px-4">
                <div className="h-full w-full rounded-lg bg-white shadow-md" />
              </div>
              <div className="w-1/4 pl-4">
                <div className="h-full w-full rounded-lg bg-white shadow" />
              </div>
            </div>

            <table className="relative w-full">
              <caption className="sr-only">Marketing comparison</caption>
              <thead>
                <tr className="text-left">
                  <th scope="col">
                    <span className="sr-only">Marketing</span>
                  </th>
                  {plans.map((plan) => (
                    <th key={plan.title} scope="col">
                      <span className="sr-only">{plan.title} plan</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {enhancements.map((feature) => (
                  <tr key={feature.title}>
                    <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">
                      {feature.title}
                    </th>
                    {feature.tiers.map((tier, index) => (
                      <td
                        key={tier.title}
                        className={classNames(
                          index === feature.tiers.length - 1 ? 'pl-4' : 'px-4',
                          'relative w-1/4 py-0 text-center'
                        )}
                      >
                        <span className="relative h-full w-full py-3">
                          {typeof tier.value === 'string' ? (
                            <span
                              className={classNames(
                                tier.featured ? 'text-yellow-600' : 'text-gray-900',
                                'text-sm font-medium'
                              )}
                            >
                              {tier.value}
                            </span>
                          ) : (
                            <>
                              {tier.value === true ? (
                                <HiCheck className="mx-auto h-5 w-5 text-green-500" aria-hidden="true" />
                              ) : (
                                <HiX className="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                              )}

                              <span className="sr-only">{tier.value === true ? 'Yes' : 'No'}</span>
                            </>
                          )}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Fake card borders */}
            <div className="pointer-events-none absolute inset-0 flex items-stretch" aria-hidden="true">
              <div className="w-1/4 pr-4" />
              <div className="w-1/4 px-4">
                <div className="h-full w-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
              <div className="w-1/4 px-4">
                <div className="h-full w-full rounded-lg ring-2 ring-yellow-600 ring-opacity-100" />
              </div>
              <div className="w-1/4 pl-4">
                <div className="h-full w-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Pricing_Detail;