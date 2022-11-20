import {Link} from 'react-router-dom';
import './Error.css'

const Error = () => {
   return (
      <div className='error-page d-flex align-items-center justify-content-center flex-column'>
         <h1 className='text-uppercase fw-bold'>404 eror not found</h1>
         <Link to='/' className='btn btn-primary'>Home</Link>
      </div>
   );
};

export default Error;