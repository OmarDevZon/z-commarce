const setDarkMode = () => {
  document.querySelector(".darkMode")?.setAttribute("data-theme", "dark");
};
const setLightMode = () => {
  document.querySelector(".darkMode")?.setAttribute("data-theme", "light");
};

const toggleTheme = (e) => {
  if (e.target.checked) {
    setDarkMode();
  } else {
    setLightMode();
  }

//   const savedTheme = localStorage.getItem("theme");
//   if (savedTheme === "dark") {
//     setDarkMode();
//   } else {
//     setLightMode();
//   }
};

export const DarkMode: React.FC = () => {
  return (
    <>
      <div>
        <form>
          <input
            type="checkbox"
            id="check-mode-toggle"
            onChange={toggleTheme}
          />
        </form>
      </div>
    </>
  );
};
