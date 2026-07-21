"use client";

import { useState } from "react";

const puzzles = [
  {
    title: "WITAJCIE W KRYPTOGRZE!",
    content: "Celem gry jest sprawdzenie waszych umiejętności z kryptografi i kryptoanalizy, ale bez obaw te trudne słowa to tylko przykyrwka na dobrze przez was znane przecież szyfry i sposoby kodowania danych prawda? Zobaczymy, w razie jakich kolwiek problemów zgłaszajcie się prosze od mistrza gry i aby rozpocząć musicie się zautoryzować wpisując podane wam wcześniej hasło"
  },
  {
    title: "1. NA POCZĄTEK...",
    content: <>Zaczniemy od czegoś prostego co na pewno znacie - szyfry podstawieniowe czyli te które polegają na podstawianiu liter według pewnego klucza na inne litery lub ustalone znaki. Jest to najpopularniejszy typ szyfrów w naszym środowisku harceskim i skautowym. Są to  między innymi szyfry: czekoladka, gaderypoluki, malinowe buty, szyfr telefonowy czy szyfr cezara. <br /><br /> SZYFOGRAM: ACHTERSZTAG </>
  },
  {
    title: "2. Kod a Szyfr?",
    content: <>Dla laików tematu jest to to samo, ale czy jest tak na pewno?<br/><br/> Otóż nie zaskoczę was ale NIE, to nie jest to samo.<br/><br/>SZYFROWANIE - jest to czynność polegająca na przekształacaniu tekstu jawnego do postaci nieczytelnej dla osób nie posiadających klucza.<br/><br/>KODOWANIE - zmiana zapisu danych tak żeby mogłby być łatwiej np. przesłane dalej, zapisane lub odczytane<br/><br/>Zatem odpowiedzią jest liczba: 1011010 zakodowana w systemie dziesiętnym :D </>
  },
  {
    title: "3. Trochę Teorii",
    content: <>Alfabet - Zbiór wszystkich dostępnych znaków (np. litery, cyfry, znaki specjalne), z których zbudowana jest wiadomość przed lub po zaszyfrowaniu.<br/><br/>Tekst jawny - Twoja oryginalna, czytelna wiadomość przed ukryciem. To zrozumiałe dane, które chcesz zabezpieczyć.<br/><br/> Szyfrogram - wynik procesu szyfrowania.<br/><br/>Szyfr - Konkretny algorytm matematyczny lub zbiór ścisłych reguł postępowania, które instruują, w jaki sposób zamienić tekst jawny na szyfrogram (i z powrotem).<br/><br/> Szyfrogram to "tekst jawny" a szyfrem jest szyfr cezara (o 3 litery w prawo ide podczas szyfrowania) z polskim alfabetem. <br/><br/> ps. polski alfabet ma 32 znaki</>
  },
  {
    title: "4. Steganografia",
    content: "Omawiany tu tajny sposób\n" +
         "raczej omija szyfrowanie.\n" +
         "informacja jest widoczna,\n" +
         "ewidentnie, jak na tacy.\n" +
         "nikt jednak nie wie o niej.\n" +
         "To właśnie steganografia!\n" +
         "atrament z soku cytryny,\n" +
         "lub kropka w starym liście.\n" +
         "Inne to ostatnie litery...\n" +
         "Spójrz uważnie na ten tekst ;D"
  },
  {
    title: "5. Za mało mało",
    content:""
  },
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
      
      <p className="text-xs sm:text-sm md:text-lg mb-8 text-left w-full max-w-2xl text-gray-100 whitespace-pre-line px-2">
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