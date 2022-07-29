import { motion } from 'framer-motion'

import Catchy from "./landing_parts/Catchy";
import Contact from './landing_parts/Contact';
import Projects from "./landing_parts/Projects";
import Intro from "./landing_parts/Intro";
import Solutions from "./landing_parts/Solutions";
import Experts from './landing_parts/Experts';

const Landing = (props) => {
  return (
    <motion.div key='motion1' exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: .5 }}>
      <Intro />
      <Catchy />
      <Solutions />
      <Experts />
      {/* <Projects /> */}
      <Contact />
    </motion.div>
  );
}
export default Landing;