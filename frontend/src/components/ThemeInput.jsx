import { useState } from "react";

function ThemeInput({ onSubmit }) {
  const [theme, setTheme] = useState(""); // State to hold the current input value
  const [error, setError] = useState(""); // State to hold error messages

  const handleSubmit= (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (!theme.trim()) { // Check if the input is not empty
      setError("Please enter a theme name"); // Clear any previous error messages
      return
    }
    onSubmit(theme); // Call the onSubmit prop with the current theme
  };

  return <div className="theme-input-container">
   <h2>Generate Your Adventure</h2>
   <p>Enter a theme for your interactive story</p>

   <form onSubmit={handleSubmit}>
    <div className="input-group">
     <input 
      type="text" 
      value={theme} 
      onChange={(e => setTheme(e.target.value))}
      placeholder="Enter a theme: (e.g. Space Exploration, Medieval Fantasy, Cyberpunk Dystopia)"
      className={error ? "error" : ""}
     />
     {error && <p className="error-message">{error}</p>}
    </div>
    <button type="submit" className="generate-btn">Generate Story</button>
   </form>
  </div>  
}

export default ThemeInput;
      