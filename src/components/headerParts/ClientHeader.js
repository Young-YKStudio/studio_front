import { Link } from 'react-router-dom'

const ClientHeader = (props) => {
  return (
    <div className='header_container'>
      <div>logo here</div>
      <ul className='header_items'>
        <li>Private Route - Client</li>
        <li><Link to='/projects'>Projects</Link></li>
        <li><button onClick={props.logoutHandler}>Log Out</button></li>
      </ul>
    </div>
  );
}
export default ClientHeader;