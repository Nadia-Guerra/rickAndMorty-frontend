import { useState, useEffect } from 'react';
import { getEpisodes } from '../services/rickandmorty.service';
import { Episode, EpisodesResponse } from '../../interfaces/episode.interface';

export const useEpisodes = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        setLoading(true);
        const data: EpisodesResponse = await getEpisodes();
        setEpisodes(data.results);
      } catch (error) {
        setError('No se pudieron cargar los episodios.');
      } finally {
        setLoading(false);
      }
    };

    fetchEpisodes();
  }, []);

  return { episodes, loading, error };
};