export const setItem = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key: string) => {
  const value = localStorage.getItem(key);

  return value;
};

export const deleteItem = (key: string) => {
  localStorage.removeItem(key);
};

export const forceDeleteAllItems = () => {
  localStorage.clear();
};
