import React, { useState } from 'react';

function GradientForm({ onSubmit }) {
  const [color1, setColor1] = useState('#ff0000');
  const [color2, setColor2] = useState('#00ff00');
  const [type, setType] = useState('linear');
  const [direction, setDirection] = useState('to right');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ color1, color2, type, direction });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Колір 1:</label>
        <input type="color" value={color1} onChange={(e) => setColor1(e.target.value)} />
      </div>
      <div>
        <label>Колір 2:</label>
        <input type="color" value={color2} onChange={(e) => setColor2(e.target.value)} />
      </div>
      <div>
        <label>Тип:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="linear">Лінійний</option>
          <option value="radial">Радіальний</option>
        </select>
      </div>
      <div>
        <label>Напрям:</label>
        <select value={direction} onChange={(e) => setDirection(e.target.value)}>
          <option value="to right">З ліва на право</option>
          <option value="to left">З права на ліво</option>
          <option value="to bottom">З верху до низу</option>
          <option value="to top">З низу до верху</option>
        </select>
      </div>
      <button type="submit">Створити Градієнт</button>
    </form>
  );
}

export default GradientForm;
