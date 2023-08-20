import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  return (
    <UserContext.Provider value={{ userEmail, setUserEmail, userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
}
export function useUser() {
  return useContext(UserContext);
}
