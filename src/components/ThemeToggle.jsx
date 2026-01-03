import useTheme from "../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
      aria-label="Toggle Dark Mode"
    >
      {theme === "light" ? (
        // Icon Bulan (Saat mode Light, tampilkan bulan untuk switch ke Dark)
        <span className="text-xl">🌙</span>
      ) : (
        // Icon Matahari (Saat mode Dark, tampilkan matahari untuk switch ke Light)
        <span className="text-xl">☀️</span>
      )}
    </button>
  );
};

export default ThemeToggle;
