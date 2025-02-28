import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';
import { LoadingMessage } from './LoadingMessage.jsx';
import { PokemonCard } from './PokemonCard.jsx';

const CLIENT_ID = 'e08c4a0e'; 
const genero = 'rock'; 
// ¡Nunca expongas el CLIENT_SECRET en el frontend en producción!

export const CustomHook = () => {
  const { counter, decrement, increment, reset } = useCounter(1);

  // Llamada a la API de Jamendo para obtener 100 canciones del género rock
  const { data, hasError, isLoading } = useFetch(
    `https://api.jamendo.com/v3.0/tracks/?client_id=${CLIENT_ID}&format=json&search=${genero}&limit=100`
  );

  if (hasError) {
    return <div>Error al cargar los datos: {hasError}</div>;
  }

  const totalTracks = data?.results?.length || 0;

  // Obtiene el track actual de la lista, si existe
  const currentTrack = totalTracks > 0 ? data.results[counter] : null;

  return (
    <div className="bg-dark text-white min-vh-100">
      {/* Contenedor principal */}
      <div className="container py-5">

        {/* Título */}
        <h1 className="text-center mb-4">Listado de Canciones Rock</h1>
        <hr className="border-secondary" />

        {/* Contenido principal */}
        <div>
          {isLoading ? (
            <LoadingMessage />
          ) : totalTracks > 0 && currentTrack ? (
            <div className="mb-5">
              <PokemonCard
                // Enviamos datos de la canción al componente
                id={currentTrack.artist_name}
                name={currentTrack.name}
                sprites={currentTrack.album_image}
                song={currentTrack.audio}
              />
            </div>
          ) : (
            <p className="text-center">No se encontraron canciones.</p>
          )}
        </div>

        {/* Controles de navegación */}
        <div className="d-flex justify-content-center gap-3">
          <button className="btn btn-dark" onClick={() => decrement()}>
            <i className="bi bi-skip-backward-fill me-1"></i> Anterior
          </button>

          <button className="btn btn-secondary" onClick={() => reset()}>
            <i className="bi bi-arrow-repeat me-1"></i> Reset
          </button>

          <button className="btn btn-dark" onClick={() => increment()}>
            Siguiente <i className="bi bi-skip-forward-fill ms-1"></i>
          </button>
        </div>

      </div>
    </div>
  );
};