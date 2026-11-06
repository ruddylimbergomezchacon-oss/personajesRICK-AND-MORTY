import { useState } from 'react';
import PersonajeCard from './PersonajeCard';

function PersonajeList({ personajes }) {
  const [favoritos, setFavoritos] = useState([]);

  function toggleFavorito(id) {
    setFavoritos((actuales) =>
      actuales.includes(id)
        ? actuales.filter((favorito) => favorito !== id)
        : [...actuales, id]
    );
  }

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
            onToggleFavorito={toggleFavorito}
          />
        ))}
      </div>
    </section>
  );
}

export default PersonajeList;