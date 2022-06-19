import { Link } from 'react-router-dom'

const EmployeeHeader = (props) => {
  return (
    <div className='header_container'>
      <div>logo here</div>
      <ul className='header_items'>
        <li>Private Route - Employee</li>
        <li><Link to='/projects'>Projects</Link></li>
        <li><Link to='/login'>Sign In</Link></li>
      </ul>
    </div>
  );
}
export default EmployeeHeader;