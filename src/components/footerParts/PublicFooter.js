const navigation = {
  main: [
    { name: 'Services', href: '/construction' },
    { name: 'Projects', href: '/construction' },
    { name: 'Contact', href: '/contact' },
    { name: 'About', href: '/construction' },
    // { name: 'Privacy Policy', href: '#' },
    { name: 'Sign in', href: '/login' },
  ]
}

const PublicFooter = (props) => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a href={item.href} className="text-base text-gray-400 hover:text-yellow-600">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-8 text-center text-sm text-gray-300">&copy; 2022 YK Technology Corp. All rights reserved.</p>
      </div>
    </footer>
  );
}
export default PublicFooter;