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
import Solutions from './pages/public_routes/Solutions';
import NotFound from './pages/NotFound';
import LogIn from './pages/account/LogIn';
import Register from './pages/account/Register';
import ForgotPassword from './pages/account/ForgotPassword';
import ResetPassword from './pages/account/ResetPassword';
import Construction from './pages/Contruction';
import ContactForm from './pages/public_routes/contact_parts/ContactForm';
import ContactSuccess from './pages/public_routes/contact_parts/ContactSuccess';
import Privacy from './pages/public_routes/Privacy';

// Pages-solution
import Solution from './pages/public_routes/solutions_parts/Solution';
import Restaurant from './pages/public_routes/solutions_parts/Restaurant';
import Nail from './pages/public_routes/solutions_parts/Nail';
import Commerce from './pages/public_routes/solutions_parts/Commerce';
import Practices from './pages/public_routes/solutions_parts/Practices';
import Customized from './pages/public_routes/solutions_parts/Customized';
import Consulting from './pages/public_routes/solutions_parts/Consulting';
import Brand from './pages/public_routes/solutions_parts/Brand';
import Development from './pages/public_routes/solutions_parts/Development';
import Marketing from './pages/public_routes/solutions_parts/Marketing';
import Support from './pages/public_routes/solutions_parts/Support';

// Pages-Restaurants
import Restaurant_Landing from './pages/public_routes/solutions_parts/restaurant_parts/Restaurant_Pages/Restaurant_Landing';
import Restaurant_Pricing from './pages/public_routes/solutions_parts/restaurant_parts/Restaurant_Pages/Restaurant_Pricing';
import FB_Starter from './pages/public_routes/solutions_parts/restaurant_parts/Restaurant_Pages/FB_Starter';

// PrivateRoutes
import Dashboard from './pages/employee_routes/Dashboard';
import CreditCardPortal from './pages/employee_routes/sections/CreditCardPortal';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Demo
import DemoFBStarter from './components/demo/FB/demoFBStarter/DemoFBStarter.js';
import DemoFBMenuLanding from './components/demo/FB/demoFBStarter/Components/Menu/MenuLanding';

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
            <Route path='privacy' element={<Privacy />} />
            <Route path='projects' element={<Projects />} />
            <Route path='contact' element={<Contact />} >
              <Route path='form' element={<ContactForm />} />
              <Route path='success' element={<ContactSuccess />} />
            </Route>
            <Route path='solutions' element={<Solutions />} >
              <Route path='solutions' element={<Solution />} />
              <Route path='restaurants' element={<Restaurant />} >
                <Route path='intro' element={<Restaurant_Landing />} />
                <Route path='pricing' element={<Restaurant_Pricing />} />
                <Route path='fb_starter' element={<FB_Starter />} />
              </Route>
              <Route path='nail&Hair' element={<Nail />} >

              </Route>
              <Route path='eCommerces' element={<Commerce />} >

              </Route>
              <Route path='practices' element={<Practices />} >

              </Route>
              <Route path='customized' element={<Customized />} >

              </Route>
              <Route path='consulting' element={<Consulting />} >

              </Route>
              <Route path='brand_identity' element={<Brand />} >

              </Route>
              <Route path='development' element={<Development />} >

              </Route>
              <Route path='marketing' element={<Marketing />} >

              </Route>
              <Route path='support' element={<Support />} >

              </Route>
            </Route>
            <Route path='login' element={<LogIn />} />
            <Route path='register' element={<Register />} />
            <Route path='forgotpassword' element={<ForgotPassword />} />
            <Route path='resetpassword/:resetToken' element={<ResetPassword />} />
            <Route path='*' element={<NotFound />} />
            <Route path='construction' element={<Construction />} />

            {/* Demo pages */}
              {/* F&B Starter */}
              <Route path='demo_fb_starter' element={<DemoFBStarter />} >
              </Route>
              <Route path='demo_fb_starter/menu' element={<DemoFBMenuLanding />} />
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
