import React, { createContext, useState } from 'react';

// Create the UserContext
const UserContext = createContext();

// Create a provider component
const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('');

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};

// Export the UserContext and UserProvider
export { UserContext, UserProvider };
