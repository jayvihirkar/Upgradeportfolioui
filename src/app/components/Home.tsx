import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Jay Vihirkar
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full-stack developer crafting beautiful digital experiences with modern web technologies.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link 
              to="/projects"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 hover:bg-gray-200 transition-colors"
            >
              View My Work
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div>
            <h3 className="text-4xl mb-2">5+</h3>
            <p className="text-gray-400">Years Experience</p>
          </div>
          <div>
            <h3 className="text-4xl mb-2">50+</h3>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          <div>
            <h3 className="text-4xl mb-2">30+</h3>
            <p className="text-gray-400">Happy Clients</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
