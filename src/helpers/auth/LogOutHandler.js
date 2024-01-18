
export const LogOutHandler = () => {
  localStorage.removeItem("uid");
  localStorage.removeItem('name')
};
