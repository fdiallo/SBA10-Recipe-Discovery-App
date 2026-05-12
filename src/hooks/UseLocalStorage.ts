import { useState, useEffect } from 'react';

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T>(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
};


// import { useState, useEffect } from 'react';

// export const useLocalStorage = <T>(key: string, initialValue: T) => {
//   const [storedValue, setStoredValue] = useState<T>(() => {
//     try {
//       const item = window.localStorage.getItem(key);
//       return item ? JSON.parse(item) : initialValue;
//     } catch (error) {
//       return initialValue;
//     }
//   });

//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(storedValue));
//   }, [key, storedValue]);

//   return [storedValue, setStoredValue] as const;
// };
