import Starter_Online from "./FB_Starter_Parts/Starter_Online";
import Starter_Reservation from "./FB_Starter_Parts/Starter_Reservation";
import Starter_Menu from "./FB_Starter_Parts/Starter_Menu";
import Starter_Email from "./FB_Starter_Parts/Starter_Email";    
import Starter_Hosting from "./FB_Starter_Parts/Stater_Hosting";
import Starter_Demo from "./FB_Starter_Parts/Starter_Demo";
import Starter_Statement from "./FB_Starter_Parts/Starter_Statement"; 

const FB_Starter = (props) => {

  return (
    <>
    {/* TODO: parallax? */}
      <Starter_Statement />
      <Starter_Online />
      <Starter_Reservation />
      <Starter_Menu />
      <Starter_Email />
      <Starter_Hosting />
      <Starter_Demo />
    </>
  );
}
export default FB_Starter;