import { usePersonajes } from './hooks/usePersonajes';
import PersonajeList from './components/PersonajeList';
import FavoritesPanel from './components/FavoritesPanel';

function MultiversoApp() {
  const { personajes, loading, error } = usePersonajes();

  return (
    <main className="container">
      <h1>Rick and Morty Multiverso</h1>

      {loading && <p className="loading">Cargando personajes...</p>}

      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <div className="layout">
          <PersonajeList personajes={personajes} />
          <FavoritesPanel />
        </div>
      )}
    </main>
  );
}

export default MultiversoApp;