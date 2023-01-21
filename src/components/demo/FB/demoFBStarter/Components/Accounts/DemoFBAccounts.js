import DemoFBStarter_Header from "../DemoFBStarter_Header";
import DemoFBStarter_Footer from "../DemoFBStarter_Footer";

const DemoFBAccounts = (props) => {
  return (
    <div className="h-screen font-arvo">
      <DemoFBStarter_Header />
      <div className="h-3/4 w-full bg-red-700 text-white flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Login</h1>
        <div className="flex flex-col justify-center items-end mt-12">
          <div className="mb-4">
            <label htmlFor="id" className="pr-4 font-bold">
              Email:
            </label>
            <input type='text' placeholder="Disabled for Demo" disabled name='id' className="w-72 border-none" />
          </div>
          <div>
            <label htmlFor="password" className="pr-4 font-bold">
              Password:
            </label>
            <input type='text' placeholder="Disabled for Demo" disabled name='password' className="w-72 border-none" />
          </div>
        </div>
        <div className="mt-8 flex flex-row justify-center text-sm">
          <a href="#" className="mr-4">Register</a>
          <a href="#">Forgot Password?</a>
        </div>
        <div className="mt-8 flex flex-row justify-center text-lg">
          <a href="dashboard" className="block mr-4 py-2 px-8 border-white border-2 bg-red-800 hover:bg-white hover:text-red-800">Go To Dashbord Sample</a>
        </div>
      </div>
      <DemoFBStarter_Footer />
    </div>
  );
}
export default DemoFBAccounts;