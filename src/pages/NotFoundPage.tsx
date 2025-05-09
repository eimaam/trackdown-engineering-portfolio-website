import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { Button } from '../components/ui/Button';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 py-20">
      <div className="container px-4 lg:px-8 text-center">
        <h1 className="text-9xl font-bold text-primary-700 dark:text-primary-400">404</h1>
        <h2 className="text-3xl font-semibold text-neutral-800 dark:text-neutral-200 mt-4 mb-6">
          Page Not Found
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-md mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button variant="default" size="lg" asChild>
          <Link to="/">
            <Home className="mr-2 h-5 w-5" /> Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;