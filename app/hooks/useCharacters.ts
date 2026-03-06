import { useState, useEffect } from 'react';
import { getCharacters } from '../services/rickandmorty.service';
import { Character, CharacterResponse } from '../../interfaces/character.interface';

export const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        const data: CharacterResponse = await getCharacters(page);

        setCharacters(data.results);
        setCharacters(data.results);

        setTotalPages(data.info.pages);                     
      } catch (error) {
        
        setError('No se pudieron cargar los personajes');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [page]); // ← dependencia

  const nextPage = () => { if (page < totalPages) setPage(p => p + 1); };
  const prevPage = () => { if (page > 1) setPage(p => p - 1); };

  return { characters, loading, error, page, totalPages, nextPage, prevPage };
};