import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export function UserProvider({ children }) {
  const [userEmail, setUserEmail] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verificar se o usuário está logado (por exemplo, verificando um token no localStorage)
    const userToken = localStorage.getItem('userToken');
    if (userToken) {
      setUserEmail(userToken); // Defina o email do usuário a partir do token, por exemplo
      setIsAuthenticated(true);
    }
  }, []);

  const login = (email, senha) => {
    // Autenticar o usuário (por exemplo, fazendo uma solicitação ao servidor)
    // Se a autenticação for bem-sucedida, defina o email e autenticação como verdadeiros
    setUserEmail(email);
    setIsAuthenticated(true);
    // Salvar o token, se aplicável
    localStorage.setItem('userToken', email);
  };

  const logout = () => {
    // Limpar os dados do usuário e token
    setUserEmail(null);
    setIsAuthenticated(false);
    localStorage.removeItem('userToken');
  };

  return (
    <UserContext.Provider value={{ userEmail, isAuthenticated, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
