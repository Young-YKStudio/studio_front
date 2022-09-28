import Pricing_Pricing from "../Restaurant_Components/Pricing_Parts/Pricing_Pricing";
import Pricing_Enhance from "../Restaurant_Components/Pricing_Parts/Pricing_Enhance";
import Pricing_Details from "../Restaurant_Components/Pricing_Parts/Pricing_Details";
import Pricing_Statement from "../Restaurant_Components/Pricing_Parts/Pricing_Statement";
import Pricing_FAQ from "../Restaurant_Components/Pricing_Parts/Pricing_FAQ";

const Restaurant_Pricing = (props) => {
  return (
    <div>
      {/* Pricing */}
      <Pricing_Pricing />
      {/* Enhancements */}
      <Pricing_Enhance />
      {/* Pricing Details */}
      <Pricing_Details />
      {/* Statement */}
      <Pricing_Statement />
      {/* FAQ */}
      <Pricing_FAQ />
    </div>
  );
}
export default Restaurant_Pricing;