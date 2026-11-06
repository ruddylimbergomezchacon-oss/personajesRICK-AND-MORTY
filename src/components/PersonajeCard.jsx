function PersonajeCard({ personaje, esFavorito, onToggleFavorito }) {
  return (
    <article className={`card ${esFavorito ? 'fav' : ''}`}>
      <img src={personaje.image} alt={personaje.name} />

      <h3>{personaje.name}</h3>

      <p>Estado: {personaje.status}</p>
      <p>Especie: {personaje.species}</p>
      <p>Género: {personaje.gender}</p>

      <button onClick={() => onToggleFavorito(personaje.id)}>
        {esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}
      </button>
    </article>
  );
}

export default PersonajeCard;