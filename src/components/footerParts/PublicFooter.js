import { ArrowUpIcon, PhoneIcon, MailIcon } from '@heroicons/react/solid';

const navigation = {
  custom: [
    { name: 'Consulting', href: '/solutions/solutions' },
    { name: 'Brand Identity', href: '/solutions/solutions' },
    { name: 'Development', href: '/solutions/solutions' },
    { name: 'Marketing', href: '/solutions/solutions' },
    { name: 'Continuing Support', href: '/solutions/solutions' },
  ],
  package: [
    { name: 'Restaurant & Cafe', href: '/solutions/restaurants/intro'},
    { name: 'Nail & Hair salon', href: '/construction'},
    { name: 'eCommerce', href: '/construction'},
    { name: 'Individual Practice', href: '/construction'},
  ],
  resources: [
    { name: 'Sign in', href: '/login' },
    { name: 'About', href: '/construction' },
    { name: 'Contact', href: '/contact/form' },
    { name: 'Disclaimer', href: '/construction' },
    { name: 'Privacy Policy', href: '/construction' },
    { name: 'Terms of Service', href: '/construction' },
  ],
}

const backToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

const PublicFooter = (props) => {
  return (
    <footer className="bg-white">
      <div className="max-w-5xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div>
          <div className='flex flex-row flex-wrap justify-center'>
            
            {/* Solutions */}
            <div className='px-8 py-4 w-1/2 md:w-48'>
              <h3 className='text-base font-semibold text-yellow-600 tracking-wide uppercase mb-2'>Solutions</h3>
              <ul>
                {navigation.custom.map((links) => (
                  <li key={links.name} className='text-sm text-gray-500 hover:text-yellow-600 mb-2'><a href={links.href}>{links.name}</a></li>
                ))}
              </ul>
            </div>

            {/* Packages */}
            <div className='px-8 py-4  w-1/2 md:w-48'>
              <h3 className='font-semibold text-yellow-600 tracking-wide uppercase mb-2'>Packages</h3>
              <ul>
                {navigation.package.map((links) => (
                  <li key={links.name} className='text-sm text-gray-500 hover:text-yellow-600 mb-2'><a href={links.href}>{links.name}</a></li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className='px-8 py-4 w-1/2 md:w-48'>
              <h3 className='font-semibold text-yellow-600 tracking-wide uppercase mb-2'>Solutions</h3>
              <ul>
                {navigation.resources.map((links) => (
                  <li key={links.name} className='text-sm text-gray-500 hover:text-yellow-600 mb-2'><a href={links.href}>{links.name}</a></li>
                ))}
              </ul>
            </div>

            {/* Button */}
              {/* LOGO */}
            <div className='px-4 py-4 w-1/2 md:w-48'>
              <div className='flex flex-row'>
                <img
                className="h-8 w-auto sm:h-10"
                src="/img/YKlogo.png"
                alt="yk logo"
                />
                <span className="logo-title">Studio</span>
              </div>
              {/* contact info */}
              <div>
                <ul className='my-2'>
                  <li className='flex flex-row text-sm text-gray-500 mb-1'>973-987-7800</li>
                  <li className='flex flex-row text-sm text-gray-500'>service@ykstudio.dev</li>
                </ul>
              </div>
              <button className="px-4 py-3 text-base font-medium rounded-md bg-black text-white hover:bg-yellow-600 flex mt-4" onClick={backToTop} >Back to Top <ArrowUpIcon className='w-5 h-5 mt-0.5 ml-1' /></button>
            </div>
          </div>
          <div>
            <p className="mt-8 text-center text-sm text-gray-300">&copy; 2022 YK Technology Corp. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default PublicFooter;