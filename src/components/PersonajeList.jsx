import PersonajeCard from './PersonajeCard';

function PersonajeList({ personajes, favoritos, onToggleFavorito }) {
  return (
    <section>
      <h2>Personajes</h2>
      <p>Favoritos seleccionados: {favoritos.length}</p>

      <div className="grid">
        {personajes.map((personaje) => (
          <PersonajeCard
            key={personaje.id}
            personaje={personaje}
            esFavorito={favoritos.includes(personaje.id)}
            onToggleFavorito={onToggleFavorito}
          />
        ))}
      </div>
    </section>
  );
}

export default PersonajeList;