import React from 'react';
import NavBar from './components/NavBar'; // Importa el componente NavBar
import './App.css'; // Importa tu archivo CSS si lo tienes
import ItemListContainer from './components/ItemListContainer'; // Importa ItemListContainer


function App() {
  // Función para conectar a MetaMask
  const connectToMetaMask = async () => { 
    // ... (código de la función connectToMetaMask) ...
  };

  return (
    <div>
      <NavBar connectToMetaMask={connectToMetaMask} />  {/* Llamada al componente Navbar */}

      <main>
        <ItemListContainer greeting="¡Bienvenidos a nuestra tienda!" /> 
        {/*  Más contenido de la landing page */}
      </main>

      {/* Resto del contenido de tu página, como el footer */}
    </div>
  );
}

export default App;
