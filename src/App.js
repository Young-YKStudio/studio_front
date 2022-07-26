import * as React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

// Pages
import Landing from "./pages/public_routes/Landing";
import About from './pages/public_routes/About';
import TOC from './pages/public_routes/TOC';
import Projects from './pages/public_routes/Projects';
import Contact from './pages/public_routes/Contact';
import Services from './pages/public_routes/Services';
import NotFound from './pages/NotFound';
import LogIn from './pages/account/LogIn';
import Register from './pages/account/Register';
import ForgotPassword from './pages/account/ForgotPassword';
import ResetPassword from './pages/account/ResetPassword';
import Construction from './pages/Contruction';
import ContactForm from './pages/public_routes/contact_parts/ContactForm';
import ContactSuccess from './pages/public_routes/contact_parts/ContactSuccess';

// PrivateRoutes
import Dashboard from './pages/employee_routes/Dashboard';
import CreditCardPortal from './pages/employee_routes/sections/CreditCardPortal';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  // States
  const [ authUser, setAuthUser ] = useState('');
  const { user } = useSelector((state) => state.auth)

  // useEffect
  useEffect(() => {
    const setUser = (role) => {
      if (role === 'admin') {
        setAuthUser('admin')
      } else if (role === 'employee') {
        setAuthUser('employee')
      } else if (role === 'client') {
        setAuthUser('client')
      } else {
        setAuthUser('public')
      }
    }
    if (!!user) {
      const role = user.user.role
      setUser(role);
    }
  },[user])

  // Private Routes

  const AdminRoute = () => {
    if (sessionStorage.role === 'admin') {
      return <Outlet />
    } else {
      return <Navigate to='/login' />
    }
  }

  const EmployeeRoute = () => {
    if (sessionStorage.role === 'employee' || sessionStorage.role === 'admin') {
      return <Outlet />
    } else {
      return <Navigate to='/login' />
    }
  }

  const ClientRoute = () => {
    if (sessionStorage.role === 'client' || sessionStorage.role === 'employee' || sessionStorage.role === 'admin') {
      return <Outlet />
    } else {
      return <Navigate to='/login' />
    }
  }


  return (
    <>
      <Router>
        <Header authUser={authUser} />
        <AnimatePresence>
          <Routes>
              {/* Public Route */}
              <Route path='/' element={<Landing />} />
              <Route path='about' element={<About />} />
              <Route path='terms' element={<TOC />} />
              <Route path='projects' element={<Projects />} />
              <Route path='contact' element={<Contact />} >
                <Route path='form' element={<ContactForm />} />
                <Route path='success' element={<ContactSuccess />} />
              </Route>
              <Route path='services' element={<Services />} >
                
              </Route>
              <Route path='login' element={<LogIn />} />
              <Route path='register' element={<Register />} />
              <Route path='forgotpassword' element={<ForgotPassword />} />
              <Route path='resetpassword/:resetToken' element={<ResetPassword />} />
              <Route path='*' element={<NotFound />} />
              <Route path='construction' element={<Construction />} />
              {/* Client Route */}
              <Route element={<ClientRoute />}>

              </Route>
              {/* Employee Route */}
              <Route element={<EmployeeRoute />}>
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='cardportal' element={<CreditCardPortal />} />
              </Route>
              {/* Admin Route */}
              <Route element={<AdminRoute />}>

              </Route>
          </Routes>
        </AnimatePresence>
        <Footer authUser={authUser}/>
      </Router>
      <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
