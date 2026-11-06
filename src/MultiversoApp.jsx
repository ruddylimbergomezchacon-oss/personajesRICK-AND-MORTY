import { useState } from 'react';
import { usePersonajes } from './hooks/usePersonajes';
import PersonajeList from './components/PersonajeList';
import FavoritesPanel from './components/FavoritesPanel';

function MultiversoApp() {
  const { personajes, loading, error } = usePersonajes();
  const [favoritos, setFavoritos] = useState([]);

  function toggleFavorito(id) {
    setFavoritos((actuales) =>
      actuales.includes(id)
        ? actuales.filter((favorito) => favorito !== id)
        : [...actuales, id]
    );
  }

  return (
    <main className="container">
      <h1>Rick and Morty Multiverso</h1>

      {loading && <p className="loading">Cargando personajes...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <div className="layout">
          <PersonajeList
            personajes={personajes}
            favoritos={favoritos}
            onToggleFavorito={toggleFavorito}
          />

          <FavoritesPanel
            personajes={personajes}
            favoritos={favoritos}
            onToggleFavorito={toggleFavorito}
          />
        </div>
      )}
    </main>
  );
}

export default MultiversoApp;
