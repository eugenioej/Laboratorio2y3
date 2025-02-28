export const PokemonCard = ({ id, name, sprites = '', song }) => {
    return (
      <div className="card bg-secondary bg-opacity-25 text-white mb-3" style={{ maxWidth: '720px', margin: '0 auto' }}>
        <div className="row g-0">
          {/* Imagen del álbum */}
          <div className="col-md-4 d-flex align-items-center">
            {/* Ajusta la altura con un style si deseas */}
            <img 
              src={sprites} 
              alt={name} 
              className="img-fluid rounded-start w-100"
              style={{ objectFit: 'cover', height: '100%' }}
            />
          </div>
          
          {/* Info de la canción */}
          <div className="col-md-8">
            <div className="card-body d-flex flex-column justify-content-center">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">
                <small className="text-muted">{id}</small>
              </p>
              {/* Reproductor de audio */}
              {song && (
                <audio
                  controls
                  src={song}
                  className="w-100 mt-3"
                >
                  Tu navegador no soporta audio HTML5.
                </audio>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };