import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const DemoFBStarter_Footer = (props) => {
  return (
    <div className="bg-black text-yellow-400 h-24 flex flex-row justify-between items-center px-10">
      {/* icons */}
      <div className="w-1/2">
        <ul className="flex flex-row">
          <li className="mr-5"><BsTwitter className="w-6 h-6"/></li>
          <li className="mr-5"><BsFacebook className="w-6 h-6" /></li>
          <li className="mr-5"><BsInstagram className="w-6 h-6" /></li>
        </ul>
      </div>
      {/* menus */}
      <div className="w-1/2">
        <ul className="flex flex-row justify-end">
          <li className="ml-5"><a href="#">Careers</a></li>
          <li className="ml-5"><a href="#">Contact</a></li>
          <li className="ml-5"><button>Email Signup</button></li>
        </ul>
      </div>
    </div>
  );
}
export default DemoFBStarter_Footer;