'use client';

import { useEpisodes } from '../hooks/useEpisodes';
import EpisodeCard from '../../components/EpisodeCard';
import Spinner from '../../components/Spinner';
import ErrorMessage from '../../components/ErrorMessage';

export default function EpisodesPage() {
  const { episodes, loading, error } = useEpisodes();

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
    </main>
  );
}