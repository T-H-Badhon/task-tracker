
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../redux/hook';

const ProtectedRoute = ({
  children
}: {
  children: ReactNode;
}) => {
  const user = useAppSelector((state) => state.auth);

  // const user = JSON.parse(localStorage.getItem('user') || '{}');

  if (user?.email) {
    return children;
  } else {
    return <Navigate to={`/login`} replace />;
  }
};

export default ProtectedRoute;