function FavoritesPanel({ personajes, favoritos, onToggleFavorito }) {
  const personajesFavoritos = personajes.filter((personaje) =>
    favoritos.includes(personaje.id)
  );

  return (
    <aside className="favoritos">
      <h3>Mis favoritos ({favoritos.length})</h3>

      {personajesFavoritos.length === 0 ? (
        <p>Aún no tienes favoritos.</p>
      ) : (
        <ul>
          {personajesFavoritos.map((personaje) => (
            <li key={personaje.id}>
              <img src={personaje.image} alt={personaje.name} />
              <span>{personaje.name}</span>
              <button onClick={() => onToggleFavorito(personaje.id)}>
                Quitar
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}

export default FavoritesPanel;
