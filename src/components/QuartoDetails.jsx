import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';

const QuartoDetails = () => {
  const { quartoId } = useParams();

  console.log(quartoId)

  return (
    <div className="pt-20">
      <h1>Quarto: {quartoId}</h1>
    </div>
  );
};

export default QuartoDetails;
