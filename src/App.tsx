// App.jsx

import React from "react";
import CalculatorForm from "./CalculatorForm";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-center">Simple Calculator</h1>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4">
        <CalculatorForm />
      </main>
      <footer className="bg-blue-500 text-white py-2">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Simple Calculator App</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
