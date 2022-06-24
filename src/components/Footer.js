import EmployeeFooter from './footerParts/EmployeeFooter';
import PublicFooter from './footerParts/PublicFooter';

const Footer = (props) => {

  const user = props.authUser

  const footerDetailDistributor = (auth) => {
    if (auth === 'admin' || auth === 'employee') {
      return <EmployeeFooter />
    } else {
      return <PublicFooter />
    }
  }

  return (
    <div>
      {footerDetailDistributor(user)}
    </div>
  );
}
export default Footer;