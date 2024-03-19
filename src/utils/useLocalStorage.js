import { useState, useEffect } from 'react';

const getStorageValue = (key, defaultValue) => {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : defaultValue;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error getting value for key "${key}" from localStorage:`, error);
    return defaultValue;
  }
};

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => getStorageValue(key, defaultValue));

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`Error setting value for key "${key}" in localStorage:`, error);
    }
  }, [key, value]);

  return [value, setValue];
};
