import DemoFBStarter_Header from "./Components/DemoFBStarter_Header";
import DemoFBLanding from "./Landing/DemoFBLanding";
import DemoFBStarter_Footer from "./Components/DemoFBStarter_Footer";

const demoFBStarter = (props) => {
  return (
    <div className="flex flex-col justify-start font-arvo">
      <DemoFBStarter_Header />
      <DemoFBLanding />    
      <DemoFBStarter_Footer />
    </div>
  );
}
export default demoFBStarter;