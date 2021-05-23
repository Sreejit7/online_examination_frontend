import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [questions, setQuestions] = useState([]);
  const [questionCount, setQuestionCount] = useState(1);

  return (
    <AppContext.Provider
      value = {{
        questions,
        setQuestions,
        questionCount,
        setQuestionCount
      }}
    >
      {children}
    </AppContext.Provider>
  );
};


export const useGlobalContext = () => {
  return useContext(AppContext); 
}