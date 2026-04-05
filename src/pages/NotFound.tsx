import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col items-center justify-center pt-32 pb-20">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-brand-blue">404</h1>
        <p className="text-2xl text-white/80 mb-8">Oops! Page not found</p>
        <Link to="/" className="inline-block py-3 px-8 bg-brand-blue text-white font-medium rounded-md hover:bg-brand-blue/90 transition-colors">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
