import { Navigation } from "./routes/Navigation";

// En esta sección vamos a llevar nuestro sistema de rutas a otro nivel, el objetivo principal sera:

// Aplicar Lazy Load en cada Componente

// Aplicar Lazy Load por módulo

// La idea del módulo es que nos permita cargarlo y todas sus dependencias en conjunto.

function App() {
  return (
    <>
      <Navigation />
    </>
  );
}

export default App;
