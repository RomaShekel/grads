import React, { useState } from 'react';
import GradientForm from '../GradientForm/GradientForm';
import GradientCard from '../GradientCard/GradientCard';

function App() {
  const [gradient, setGradient] = useState(null);

  const handleCreateGradient = (gradient) => {
    setGradient(gradient);
  };

  return (
    <div>
      <h1>СТВОРИ СВІЙ ГРАДІЄНТ</h1>
      <GradientForm onSubmit={handleCreateGradient} />
      {gradient && <GradientCard {...gradient} />}
    </div>
  );
}

export default App;
