import React from 'react';

function GradientCard({ color1, color2, type, direction }) {
let bac;
if (type === "linear"){
    bac=`${type}-gradient(${direction}, ${color1}, ${color2})`
}else {
    bac=`radial-gradient( ${color1}, ${color2})`
}
  const gradientStyle = {
    background: bac,
    width: '300px',
    height: '150px',
    margin: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontWeight: 'bold',
    borderRadius: '8px'
  };

  return (
    <div style={gradientStyle}>

    </div>
  );
}

export default GradientCard;
