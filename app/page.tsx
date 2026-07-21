"use client";

import { useState } from "react";

const puzzles = [
  {
    title: "WITAJCIE W KRYPTOGRZE!",
    content: "Celem gry jest sprawdzenie waszych umiejętności z kryptografi i kryptoanalizy, ale bez obaw te trudne słowa to tylko przykyrwka na dobrze przez was znane przecież szyfry i sposoby kodowania danych prawda? Zobaczymy, w razie jakich kolwiek problemów zgłaszajcie się prosze od mistrza gry i aby rozpocząć musicie się zautoryzować wpisując podane wam wcześniej hasło"
  },
  {
    title: "1. NA POCZĄTEK...",
    content: <>Zaczniemy od czegoś prostego co na pewno znacie - szyfry podstawieniowe czyli te które polegają na podstawianiu liter według pewnego klucza na inne litery<br /><br /> SZYFOGRAM: ACHTERSZTAG </>
  },
  {
    title: "2.",
    content: "Świetnie! Teraz odpowiedzcie: Gdzie zazwyczaj śpimy na biwaku?"
  },
  {
    title: "Koniec Trasy!",
    content: "Gratulacje! Odnaleźliście wszystkie punkty. Zgłoście się do bazy."
  }
];

export default function Home() {
  const [level, setLevel] = useState(0);
  const [guess, setGuess] = useState("");
  const [error, setError] = useState(false);

  const checkPassword = async () => {
    // Jeśli pole jest puste, nie robimy nic
    if (!guess.trim()) return;

    setError(false); 
    
    try {
      const res = await fetch("/api/verify", {
        method: "POST",
        // Dodaliśmy Headers - to ułatwia komunikację z serwerem Next.js
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ level: level, guess: guess }),
      });
      const data = await res.json();

      if (data.success) {
        setLevel(level + 1);
        setGuess("");
      } else {
        setError(true);
      }
    } catch (err) {
      alert("Brak połączenia z serwerem. Odśwież stronę.");
    }
  };

  // Ta funkcja wyłapuje kliknięcie "Enter" / "Gotowe" na klawiaturze telefonu
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      checkPassword();
    }
  };

  const currentPuzzle = puzzles[level];

  if (level >= puzzles.length - 1) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-[#1f4220] text-white p-6">
        <h1 className="text-4xl font-bold mb-6 text-center text-[#facc15]">{currentPuzzle.title}</h1>
        <p className="text-xl text-center max-w-md text-gray-100">{currentPuzzle.content}</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#1f4220] text-white p-6">
      
      <h1 className="text-4xl font-bold mb-6 text-center text-[#facc15]">
        {currentPuzzle.title}
      </h1>
      
      <p className="text-lg mb-8 text-center max-w-md text-gray-100">
        {currentPuzzle.content}
      </p>
      
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <input 
          type="text" 
          placeholder="Hasło..." 
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          onKeyDown={handleKeyDown} // Nasłuchiwanie klawisza Enter
          className="px-4 py-3 rounded-md bg-[#0f2110] text-white placeholder-white font-bold text-center outline-none border-2 border-transparent focus:border-[#facc15] w-full"
        />
        
        {error && (
          <p className="text-red-400 text-sm text-center font-bold">
            Błędne hasło, spróbuj ponownie!
          </p>
        )}
        
        <button 
          type="button" // Upewniamy się, że to zwykły przycisk
          onClick={checkPassword}
          className="bg-[#facc15] hover:bg-[#eab308] text-[#1f4220] px-4 py-3 rounded-md font-bold transition-colors uppercase tracking-widest text-sm"
        >
          Sprawdź
        </button>
      </div>

    </main>
  );
}