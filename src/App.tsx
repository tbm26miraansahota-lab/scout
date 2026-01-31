import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

const Landing = lazy(() => import('./pages/Landing'));
const HowItWorks = lazy(() => import('./pages/HowItWorks'));
const Product = lazy(() => import('./pages/Product'));
const Pricing = lazy(() => import('./pages/Pricing'));
const About = lazy(() => import('./pages/About'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const ScoutSearch = lazy(() => import('./pages/demo/ScoutSearch'));
const PlayerProfile = lazy(() => import('./pages/demo/PlayerProfile'));
const SchoolDashboard = lazy(() => import('./pages/demo/SchoolDashboard'));

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-lime-400 border-t-transparent rounded-full animate-spin" />
        <span className="text-sm text-charcoal-400">Loading...</span>
      </div>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Suspense fallback={<PageLoader />}><Landing /></Suspense>} />
          <Route path="/how-it-works" element={<Suspense fallback={<PageLoader />}><HowItWorks /></Suspense>} />
          <Route path="/product" element={<Suspense fallback={<PageLoader />}><Product /></Suspense>} />
          <Route path="/pricing" element={<Suspense fallback={<PageLoader />}><Pricing /></Suspense>} />
          <Route path="/about" element={<Suspense fallback={<PageLoader />}><About /></Suspense>} />
          <Route path="/faq" element={<Suspense fallback={<PageLoader />}><FAQ /></Suspense>} />
          <Route path="/contact" element={<Suspense fallback={<PageLoader />}><Contact /></Suspense>} />
          <Route path="/privacy" element={<Suspense fallback={<PageLoader />}><Privacy /></Suspense>} />
          <Route path="/terms" element={<Suspense fallback={<PageLoader />}><Terms /></Suspense>} />
          <Route path="/demo" element={<Suspense fallback={<PageLoader />}><ScoutSearch /></Suspense>} />
          <Route path="/demo/scout-search" element={<Suspense fallback={<PageLoader />}><ScoutSearch /></Suspense>} />
          <Route path="/demo/player/:id" element={<Suspense fallback={<PageLoader />}><PlayerProfile /></Suspense>} />
          <Route path="/demo/school-dashboard" element={<Suspense fallback={<PageLoader />}><SchoolDashboard /></Suspense>} />
          <Route path="*" element={
            <div className="flex items-center justify-center min-h-[60vh] text-center">
              <div>
                <h1 className="text-4xl font-bold text-white mb-4">404</h1>
                <p className="text-charcoal-400 mb-6">Page not found</p>
                <a href="/" className="text-lime-400 hover:underline">Back to home</a>
              </div>
            </div>
          } />
        </Route>
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
