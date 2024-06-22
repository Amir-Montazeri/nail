export const setLSItem = (key: string, value: any) => {
  if (typeof window === 'undefined') {
    throw Error('localStorage would not work on server!');
  }

  localStorage.setItem(key, JSON.stringify(value));
};

export const getLSItem = (key: string) => {
  if (typeof window === 'undefined') {
    throw Error('localStorage would not work on server!');
  }

  const value = localStorage.getItem(key);
  if (!value) return null;
  const parsedValue = JSON.parse(value as string);

  return parsedValue;
};

export const deleteLSItem = (key: string) => {
  if (typeof window === 'undefined') {
    throw Error('localStorage would not work on server!');
  }

  localStorage.removeItem(key);
};

export const forceDeleteAllLSItems = () => {
  if (typeof window === 'undefined') {
    throw Error('localStorage would not work on server!');
  }

  localStorage.clear();
};
