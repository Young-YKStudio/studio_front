export const WhiteBackButton = ({link, text}) => {
  return (
    <a
    href={link}
    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-yellow-600 bg-white hover:bg-yellow-600 hover:text-white sm:px-8"
  >
    {text}
  </a>
  )  
}

export const YellowBackButton = ({link, text}) => {
  return (
    <a
    href={link}
    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-white hover:text-black sm:px-8"
  >
    {text}
  </a>
  )  
}

export const YellowBackSmallButton = ({link, text}) => {
  return (
    <a
    href={link}
    className="px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-black sm:px-8"
  >
    {text}
  </a>
  )  
}

export const BlackBackButton = ({link, text}) => {
  return (
    <a
    href={link}
    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-black hover:bg-yellow-600 hover:text-white sm:px-8"
  >
    {text}
  </a>
  )  
}
