
// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import { ClientData } from './layout/account';
// import { Lead } from './layout/lead';
// import { Contact } from './layout/contact';
// import { Services } from './layout/services';
// import HomePage from './layout/home';
// import { Call } from './layout/call';
// import { Meeting } from './layout/meeting';
// import { NavBar } from './components/nav';
// import { AuthForm } from './components/LoginForm';
// import { SignUpForm } from './components/SignUpForm';

// interface AppRoutesProps {
//   isAuthenticated: boolean;
//   setIsAuthenticated: (value: boolean) => void;
//   onLogin: (username: string, password: string) => void;
//   handleLogout: () => void;
//   isSignUp: boolean;
//   setIsSignUp: (signUp: boolean) => void;
// }

// export const AppRoutes: React.FC<AppRoutesProps> = ({
//   isAuthenticated,
//   setIsAuthenticated,
//   onLogin,
//   handleLogout,
//   isSignUp,
//   setIsSignUp,
// }) => {
//   return (
//     <>
//       {isAuthenticated && <NavBar handleLogout={handleLogout} />}
//       <Routes>
//         <Route
//           path="/"
//           element={
//             isAuthenticated ? (
//               <Navigate to="/HomePage" />
//             ) : (
//               <AuthForm
//                 onLogin={onLogin}
//                 isSignUp={isSignUp}
//                 setIsSignUp={setIsSignUp}
//               />
//             )
//           }
//         />
//         <Route path="/HomePage" element={isAuthenticated ? <HomePage /> : <Navigate to="/" />} />
//         <Route path="/contact" element={isAuthenticated ? <Contact /> : <Navigate to="/" />} />
//         <Route path="/services" element={isAuthenticated ? <Services /> : <Navigate to="/" />} />
//         <Route path="/account" element={isAuthenticated ? <ClientData editable={true} /> : <Navigate to="/" />} />
//         <Route path="/call" element={isAuthenticated ? <Call /> : <Navigate to="/" />} />
//         <Route path="/meeting" element={isAuthenticated ? <Meeting /> : <Navigate to="/" />} />
//         <Route path="/lead" element={isAuthenticated ? <Lead /> : <Navigate to="/" />} />
//         <Route
//           path="/signup"
//           element={
//             !isAuthenticated ? (
//               <SignUpForm onSignUp={onLogin} setIsSignUp={setIsSignUp} />
//             ) : (
//               <Navigate to="/HomePage" />
//             )
//           }
//         />
//         <Route path="*" element={<Navigate to={isAuthenticated ? "/HomePage" : "/"} />} />
//       </Routes>
//     </>
//   );
// };
import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ClientData } from './layout/account';
import { Lead } from './layout/lead';
import { Contact } from './layout/contact';
import { Services } from './layout/services';
import HomePage from './layout/home';
import { Call } from './layout/call';
import { Meeting } from './layout/meeting';
import { NavBar } from './components/nav';
import { AuthForm } from './components/LoginForm';
import { SignUpForm } from './components/SignUpForm';

interface AppRoutesProps {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  onLogin: (username: string, password: string) => void;
  handleLogout: () => void;
  isSignUp: boolean;
  setIsSignUp: (signUp: boolean) => void;
}

export const AppRoutes: React.FC<AppRoutesProps> = ({
  isAuthenticated,
  setIsAuthenticated,
  onLogin,
  handleLogout,
  isSignUp,
  setIsSignUp,
}) => {
  const location = useLocation(); // Get the location for redirect purposes

  return (
    <>
      {isAuthenticated && <NavBar handleLogout={handleLogout} />}
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/HomePage" />
            ) : (
              <AuthForm
                onLogin={onLogin}
                isSignUp={isSignUp}
                setIsSignUp={setIsSignUp}
              />
            )
          }
        />
        <Route
          path="/HomePage"
          element={isAuthenticated ? <HomePage /> : <Navigate to="/" />}
        />
        <Route
          path="/contact"
          element={isAuthenticated ? <Contact /> : <Navigate to="/" state={{ from: location }} />}
        />
        <Route
          path="/services"
          element={isAuthenticated ? <Services /> : <Navigate to="/" state={{ from: location }} />}
        />
        <Route
          path="/account"
          element={isAuthenticated ? <ClientData editable={true} /> : <Navigate to="/" state={{ from: location }} />}
        />
        <Route
          path="/call"
          element={isAuthenticated ? <Call /> : <Navigate to="/" state={{ from: location }} />}
        />
        <Route
          path="/meeting"
          element={isAuthenticated ? <Meeting /> : <Navigate to="/" state={{ from: location }} />}
        />
        <Route
          path="/lead"
          element={isAuthenticated ? <Lead /> : <Navigate to="/" state={{ from: location }} />}
        />
        <Route
          path="/signup"
          element={
            !isAuthenticated ? (
              <SignUpForm onSignUp={onLogin} setIsSignUp={setIsSignUp} />
            ) : (
              <Navigate to="/HomePage" />
            )
          }
        />
        <Route
          path="*"
          element={<Navigate to={isAuthenticated ? '/HomePage' : '/'} />}
        />
      </Routes>
    </>
  );
};
