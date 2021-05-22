import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [questions, setQuestions] = useState([]);

  return (
    <AppContext.Provider
      value = {{
        questions,
        setQuestions
      }}
    >
      {children}
    </AppContext.Provider>
  );
};


export const useGlobalContext = () => {
  return useContext(AppContext); 
}