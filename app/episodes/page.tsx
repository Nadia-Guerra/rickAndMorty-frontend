'use client';

import { useEpisodes } from '../hooks/useEpisodes';
import EpisodeCard from '../../components/EpisodeCard';
import Spinner from '../../components/Spinner';
import ErrorMessage from '../../components/ErrorMessage';

export default function EpisodesPage() {
  const { episodes, loading, error, page, totalPages, nextPage, prevPage } = useEpisodes();

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Episodios</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>


      <div className="flex justify-center items-center gap-6 mt-8">
        <button
          onClick={prevPage}
          disabled={page === 1}  // ← deshabilitado en la primera página
          className="px-4 py-2 bg-green-500 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed"
        >
          ← Anterior
        </button>

        <span className="text-white">
          Página {page} de {totalPages}
        </span>

        <button
          onClick={nextPage}
          disabled={page === totalPages}  // ← deshabilitado en la última
          className="px-4 py-2 bg-green-500 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Siguiente →
        </button>
      </div>

    </main>
  );
}