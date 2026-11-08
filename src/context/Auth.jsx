import { createContext, useContext, useEffect, useState } from 'react';

const Auth = createContext();

const initialState = {
 isAuth: false,
 user: {},
 isAppLoading: true,
};

const AuthContext = ({ children }) => {
 const [state, setState] = useState(initialState);

 const readProfile = () => {
   const user = {
     uid: '123',
     email: 'sanakhan50055005@gmail.com',
     name: 'Sana Khan',
   };

   setTimeout(() => {
     setState({ isAuth: true, user, isAppLoading: false });
   }, 2000);
 };

 useEffect(() => {
   readProfile();
 }, []);

 const handleLogout = () => {
   setState({ isAuth: false, user: {}, isAppLoading: false });
 };

 return (
   <Auth.Provider value={{ ...state, handleLogout }}>
     {children}
   </Auth.Provider>
 );
};

export const useAuth = () => useContext(Auth);
export default AuthContext;

