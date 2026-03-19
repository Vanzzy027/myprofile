import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="section-padding min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <p className="text-8xl font-extrabold gradient-text mb-4">404</p>
        <h1 className="text-2xl font-bold mb-2">Page not found</h1>
        <p className="text-base-content/50 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn btn-primary gap-2"><Home size={16} /> Back to Home</Link>
      </div>
    </div>
  );
}