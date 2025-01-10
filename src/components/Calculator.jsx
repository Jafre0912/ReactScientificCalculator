import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (label) => {
    if (label === 'C') {
      setInput('');
      setResult('');
    } else if (label === '=') {
      try {
        const evalResult = eval(input); 
        setResult(evalResult);
      } catch (error) {
        setResult('Error');
      }
    } else {
      setInput((prev) => prev + label);
    }
  };

  const buttons = [
    '(', ')', 'mc', 'm+', 'm-', 'mr', 'C', '+/-', '%', '/',
    '2nd', 'x²', 'x³', 'xʸ', 'eˣ', '10ˣ', '7', '8', '9', '*',
    '¹/ₓ', '²√x', '³√x', 'ʸ√x', 'ln', 'log₁₀', '4', '5', '6', '-',
    'x!', 'sin', 'cos', 'tan', 'e', 'EE', '1', '2', '3', '+',
    'Rad', 'sinh', 'cosh', 'tanh', 'π', 'Rand', '0', '.', '='
  ];

  return (
    <div className="calculator">
      <Display input={input} result={result} />
      <div className="button-grid">
        {buttons.map((btn, idx) => (
          <Button
            key={idx}
            label={btn}
            onClick={handleButtonClick}
            className={btn === '=' ? 'equals' : ''}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;