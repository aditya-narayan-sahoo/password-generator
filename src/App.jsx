import { useCallback, useState, useEffect, useRef } from "react";
import LengthSlider from "./LengthSlider";
import Checkbox from "./Checkbox";

const App = () => {
  const [length, setLength] = useState(7);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  // Function to generate the password
  const passwordGenerator = useCallback(() => {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) characters += "0123456789";
    if (charAllowed) characters += "!@#$%^&*-_+=[]{}~`";

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters.charAt(randomIndex);
    }
    setPassword(generatedPassword);
  }, [length, numberAllowed, charAllowed]);

  // Function to copy password to clipboard
  const copyPasswordToClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      window.navigator.clipboard.writeText(password);
    }
  }, [password]);

  // Generate password when dependencies change
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <main className="mt-10 w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-6 text-orange-500 bg-gray-700">
      <h1 className="text-white text-center mb-2">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="DogeToTheMoon"
          readOnly
          ref={passwordRef}
        />
        <button
          className="outline-none bg-blue-700 text-white px-3 py-1 shrink-0 hover:bg-blue-800 transition-colors duration-300"
          onClick={copyPasswordToClipboard}
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2 text-nowrap">
        <LengthSlider length={length} setLength={setLength} />
        <Checkbox
          label="Include Numbers"
          checked={numberAllowed}
          onChange={() => setNumberAllowed((prev) => !prev)}
        />
        <Checkbox
          label="Include Characters"
          checked={charAllowed}
          onChange={() => setCharAllowed((prev) => !prev)}
        />
      </div>
    </main>
  );
};
export default App;
