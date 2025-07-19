import type { JSX } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/hook';

interface ProtectedRouteProps {
  element: JSX.Element;
}

const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  const { jwt } = useAppSelector((state) => state.user);
  const token = jwt;

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return element;
};

export default ProtectedRoute;
