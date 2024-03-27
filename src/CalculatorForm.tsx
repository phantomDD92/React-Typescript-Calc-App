// CalculatorForm.tsx

import React, { useState } from "react";
import axios from "axios";

const CalculatorForm: React.FC = () => {
  const [numberA, setNumberA] = useState<string>("");
  const [numberB, setNumberB] = useState<string>("");
  const [sum, setSum] = useState<number | null>(null);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidNumber(numberA) || !isValidNumber(numberB)) {
      setError("Please enter valid numbers for A and B");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/calculate", {
        A: parseInt(numberA),
        B: parseInt(numberB),
      });
      setSum(response.data.result);
      setError("");
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred while calculating the sum");
    }
  };

  const isValidNumber = (input: string) => {
    return !isNaN(parseFloat(input)) && isFinite(parseInt(input));
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="numberA"
          >
            Number A
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="numberA"
            type="text"
            placeholder="Enter number A"
            value={numberA}
            onChange={(e) => setNumberA(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="numberB"
          >
            Number B
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="numberB"
            type="text"
            placeholder="Enter number B"
            value={numberB}
            onChange={(e) => setNumberB(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
          {sum !== null && <p className="text-gray-700">Sum: {sum}</p>}
        </div>
      </form>
    </div>
  );
};

export default CalculatorForm;
