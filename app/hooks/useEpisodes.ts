import { useState, useEffect } from 'react';
import { getEpisodes } from '../services/rickandmorty.service';
import { Episode, EpisodesResponse } from '../../interfaces/episode.interface';

export const useEpisodes = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);           // ← página actual
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        setLoading(true);
        const data: EpisodesResponse = await getEpisodes();
        setEpisodes(data.results);
        setTotalPages(data.info.pages);

      } catch (error) {
        setError('No se pudieron cargar los episodios.');

      } finally {
        setLoading(false);
      }
    };

    fetchEpisodes();
  }, [page]);

  return { episodes, loading, error };

  const nextPage = () => {
    if (page < totalPages) setPage(p => p + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage(p => p - 1);
  };

  
  return { episodes, loading, error, page, totalPages, nextPage, prevPage };
};


