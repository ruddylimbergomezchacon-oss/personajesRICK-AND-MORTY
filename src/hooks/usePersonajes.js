import { useState, useEffect } from 'react';
import { fetchPersonajes } from '../services/fetchPersonajes';

export function usePersonajes() {
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function cargarPersonajes() {
      try {
        setLoading(true);
        const datos = await fetchPersonajes();
        setPersonajes(datos);
        setError(null);
      } catch (err) {
        setError('No se pudieron cargar los personajes. Verifica tu conexión.');
      } finally {
        setLoading(false);
      }
    }

    cargarPersonajes();
  }, []);

  return { personajes, loading, error };
}