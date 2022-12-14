import { createContext, useState } from 'react';


export const DataContext = createContext();


export const DataProvider = ({ children }) => {

  const [data, setData] = useState(
    0
  );

  return (
    <DataContext.Provider value={{
      data, setData
    }}>
      {children}
    </DataContext.Provider>

  )
}
