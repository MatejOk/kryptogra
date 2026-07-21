"use client";

import { useState } from "react";

type Puzzle = {
  title: string;
  content: string;
  image?: string;
  audio?: string;
};

const puzzles: Puzzle[] = [
  {
    title: "WITAJCIE W KRYPTOGRZE!",
    content: "Celem gry jest sprawdzenie waszych umiejętności z kryptografi i kryptoanalizy, ale bez obaw te trudne słowa to tylko przykyrwka na dobrze przez was znane przecież szyfry i sposoby kodowania danych prawda? Zobaczymy, w razie jakich kolwiek problemów zgłaszajcie się prosze od mistrza gry i aby rozpocząć musicie się zautoryzować wpisując podane wam wcześniej hasło"
  },
  {
    title: "1. NA POCZĄTEK...",
    content: "Zaczniemy od czegoś prostego co na pewno znacie - szyfry podstawieniowe czyli te które polegają na podstawianiu liter według pewnego klucza na inne litery lub ustalone znaki. Jest to najpopularniejszy typ szyfrów w naszym środowisku harceskim i skautowym. Są to  między innymi szyfry: czekoladka, gaderypoluki, malinowe buty, szyfr telefonowy czy szyfr cezara. \n" +
    "SZYFOGRAM: ACHTERSZTAG"
  },
  {
    title: "2. Kod a Szyfr?",
    content: "Dla laików tematu jest to to samo, ale czy jest tak na pewno?\n"+
    "Otóż nie zaskoczę was ale NIE, to nie jest to samo.\n"+
    "SZYFROWANIE - jest to czynność polegająca na przekształacaniu tekstu jawnego do postaci nieczytelnej dla osób nie posiadających klucza.\n"+
    "KODOWANIE - zmiana zapisu danych tak żeby mogłby być łatwiej np. przesłane dalej, zapisane lub odczytane\n"+
    "Zatem odpowiedzią jest liczba: 1011010 zakodowana w systemie dziesiętnym :D"
  },
  {
    title: "3. Trochę Teorii",
    content: "Alfabet - Zbiór wszystkich dostępnych znaków (np. litery, cyfry, znaki specjalne), z których zbudowana jest wiadomość przed lub po zaszyfrowaniu.\n"+
    "Tekst jawny - Twoja oryginalna, czytelna wiadomość przed ukryciem. To zrozumiałe dane, które chcesz zabezpieczyć.\n"+
    "Szyfrogram - wynik procesu szyfrowania.\n"+
    "Szyfr - Konkretny algorytm matematyczny lub zbiór ścisłych reguł postępowania, które instruują, w jaki sposób zamienić tekst jawny na szyfrogram (i z powrotem).\n"+
    "Szyfrogram to `tekst jawny` a szyfrem jest szyfr cezara (o 3 litery w prawo ide podczas szyfrowania) z polskim alfabetem.\n"+
    "ps. polski alfabet ma 32 znaki\n"
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
    title: "5. Szyfrowanie symetryczne",
    content:"Polega na tym że do procesu szyforwania i deszyfrowania używa się tego tego samego klucza, zaletą tych szyfrów jest fakt iż mogą szyfrować BARDZO SZYBKO DUŻĄ ilość danych (co jest na przykład niezbędne to szyfrowania zdjęć czy filmów gdzie ilość danych jest ogromna) Problem natomiast polega natomiast na dystrybujcji klucza czyli jak dwie osoby nie posiadającego bezpiecznego sposobu klucza mają go wybrać aby osoba trzecia go nie podsłuchała? ",
    image: "/obrazek_rebus_oboz.png"
  },
   {
    title: "6. A pamiętasz??",
    content:"Zaszyfrowany tekst jawny to:..."
  },
   {
    title: "7. Wracając, szyfrowanie asymetryczne",
    content:"Polega na szyfrowaniu danych za pomocą dwóch kluczy. \n" +
            "Klucza prywatnego - ten klucz zna tylko jego właściciel\n"+
            "Klucz publiczny - ten klucz jest publiczny i znany przez każdego\n"+
            " \n"+
            "Można to prównać do sytuacji kiedy Bob chce Alicji wysłać paczkę i mieć pewność aby nikt nie porządany jej nie otworzył. Sytuacja wygląda tak że ma dwie kłóki: swoją i Alicji, oraz jeden klucz do swojej kłódki. Alicja również ma dwie kłódki: swoją i Boba, ale analogicznie klucz tylko do swojej kłóki. Powiedzmy że `kłódka` to klucz publiczny, a `klucz` to klucz prywatny. Jakiego klucza i do kogo należącego powinien użyć Bob aby Alicja mogła otworzyć wiadomość/paczkę"

  },
   {
    title: "8. Brawo!",
    content:"Zrozumiałeś jak działa szyfrowanie asymetryczne, oczywiście w faktycznych implemantacjach jest do szyfrowania używna arytmetyka modularna i duże liczby pierwsze dzięki czemu nasz klucz publiczny i prywanty jest równocześnie `kłódką i kluczem`. Dzięki matematycze właśnie działa mechanizm że wiadomość zaszyfrowana k. publicznym może być odszyfrowana tylko kluczem prywantym, i na odwrót (po prostu są to do siebie liczby odwrtone)\n" +
    "\n" +
    "Inna sytuacja: Są 4 osoby: Alicja, Bob, Celina i Dariusz. Każdy ma swój klucz prywatny, oraz klucze publiczne reszty. Powiedzmy że Alicja Dariusz i Celina chcą aby Bob potwierdził że zapoznał się z umową którą otrzymał od reszty. Którym kluczem powien Bob zaszyfrować umowę aby wszytskie pozostałe osoby mogły ją odszyfrować i mieć pewność że tylko Bob mógł zaszyfrować tak tę umowę. Jakim kluczem Bob powienien szyfrować?"
  },
   {
    title: "9. Tego na pewno nie pamiętasz",
    content:"Żeby szybko zaszyfrować dużą ilość danych użujesz..."
  },
  {
    title: "10. opis podpisu",
    content:""
  },
   {
    title: "11. funkcje skrótu",
    content:""
  },
   {
    title: "12. uwierzytelnianie i autoryzajca czyli po co to podwójne logowanie w microsoft",
    content:""
  },
   {
    title: "algorytm diffiego-hellmana",
    content:""
  },
   {
    title: "13. a pamiętasz",
    content:""
  },
   {
    title: "14. Osint",
    content:""
  },
   {
    title: "15. Koniec",
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
      
      <p className="text-base sm:text-lg md:text-xl mb-8 mx-auto w-fit text-center text-gray-100 whitespace-pre-line px-4">
        {currentPuzzle.content}
      </p>
      
      {/* NOWE: Jeśli zagadka ma obrazek, wyświetl go */}
      {currentPuzzle.image && (
        <img 
          src={currentPuzzle.image} 
          alt="Podpowiedź do zagadki" 
          className="mb-8 w-full max-w-md rounded-lg shadow-lg border-2 border-[#facc15]"
        />
      )}

      {/* NOWE: Jeśli zagadka ma dźwięk, pokaż odtwarzacz */}
      {currentPuzzle.audio && (
        <audio 
          controls 
          src={currentPuzzle.audio} 
          className="mb-8 w-full max-w-xs"
        />
      )}

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