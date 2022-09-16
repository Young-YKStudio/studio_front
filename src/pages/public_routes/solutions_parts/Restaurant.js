import { Outlet } from 'react-router-dom';
import SecondNavRestaurant from '../../../components/headerParts/SecondNavRestaurant';

const Restaurant = (props) => {
  return (
    <>
      <SecondNavRestaurant />
      <Outlet />
    </>
  );
}
export default Restaurant;