import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home } from './components/Home';
import { Projects } from './components/Projects';

function Navigation() {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl tracking-wider">
          JV
        </Link>
        <div className="flex gap-8">
          <Link 
            to="/" 
            className="hover:text-gray-300 transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/projects" 
            className="hover:text-gray-300 transition-colors"
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
}

function AppContent() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
