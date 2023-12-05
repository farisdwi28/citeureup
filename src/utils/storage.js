export const getToken = () => {
  return localStorage.getItem('accessToken');
};

export const setToken = (token) => {
  return localStorage.setItem('accessToken', token);
};

export const getUserData = () => {
  return JSON.parse(localStorage.getItem('userLogin'));
};

export const setUserData = (data) => {
  return localStorage.setItem('userLogin', JSON.stringify(data));
};

export const setUserForgetPassword = (data) => {
  return localStorage.setItem('userForgetPassword', JSON.stringify(data));
};

export const clearUserForgetPassword = () => {
  return localStorage.removeItem('userForgetPassword');
};

export const getUserForgetPassword = () => {
  return localStorage.getItem('userForgetPassword');
};

export const setStoreUMKM = (storeID) => {
  return localStorage.setItem("umkm_store", storeID);
}

export const clearDataLogin = () => {
  localStorage.removeItem('userLogin');
  localStorage.removeItem('accessToken');
};