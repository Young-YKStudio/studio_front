import { Demo_Button_Black } from "../Button/button";

const DemoFBStarter_Landing2 = (props) => {
  return (
      // move down pics = 5(bbq6), 6(bbq7), 1(bbq2)
    <div className="bg-red-700 w-full flex flex-col md:flex-row text-white">
      <div className="p-20 md:w-1/2 lg:w-5/12 w-full">
        <h1 className="font-black mb-8 text-2xl">MENU</h1>
        <p className="leading-6 mb-2">We’re craft American BBQ made in-house (always). Get traditions and favorites from all over the world — all on one plate. The classic BBQ traditions you’d find at the most elite cookout and the elevated flavors you’d find at a true fine dining spot..</p>
        <p className="leading-6 mb-8">Everything we serve is house-made and prepared by a staff that cares. You could spend a lifetime sampling every flavor combination, and we hope you do.</p>
        <Demo_Button_Black link="#" text="View Full Menu" />
      </div>
      <div className="h-96 bg-red-200 bg-bbq6 bg-center bg-cover md:w-1/2 lg:w-7/12 w-full md:h-auto"></div>
    </div>
  );
}
export default DemoFBStarter_Landing2;