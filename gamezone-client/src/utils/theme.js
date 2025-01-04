
export const setTheme = (theme) => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  };
  
  export const getTheme = () => {
    return localStorage.getItem('theme') || 'light'; 
  };
  