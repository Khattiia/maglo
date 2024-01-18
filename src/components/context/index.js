import React, { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    uid: localStorage.getItem('uid'),
    name: localStorage.getItem('name'),
  });

  useEffect(() => {
    const handleStorageChange = () => {
      setUser({
        uid: localStorage.getItem('uid'),
        name: localStorage.getItem('name'),
      });
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
