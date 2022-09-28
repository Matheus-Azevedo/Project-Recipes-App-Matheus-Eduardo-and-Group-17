import { useEffect, useState } from 'react';

function useLocalStorage(key) {
  const [user, setUser] = useState({ email: '' });
  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem(key));
    if (storage === null) {
      return;
    }
    setUser(storage);
  }, []);
  return user.email;
}

export default useLocalStorage;
