import DemoFBStarter_Landing1 from "../Components/Landing/DemoFBStarter_Landing1";
import DemoFBStarter_Landing2 from "../Components/Landing/DemoFBStarter_Landing2";
import DemoFBStarter_Landing3 from "../Components/Landing/DemoDBStarter_Landing3";
import DemoFBStarter_Landing4 from "../Components/Landing/DemoFBStarter_Landing4";

const DemoFBLanding = (props) => {
  return (
    <div className="flex flex-col justify-start font-arvo">
      <DemoFBStarter_Landing1 />
      <DemoFBStarter_Landing2 />
      <DemoFBStarter_Landing3 />
      <DemoFBStarter_Landing4 />
    </div>
  );
}
export default DemoFBLanding;