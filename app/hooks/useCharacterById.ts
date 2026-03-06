import { useState, useEffect } from 'react';
import { getCharacterById } from '../services/rickandmorty.service';
import { Character } from '../../interfaces/character.interface';

export const useCharacterById = (id: number) => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const data: Character = await getCharacterById(id);
        setCharacter(data);
        
      } catch (err) {
        setError('No se pudo cargar el personaje.');
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [id]);

  return { character, loading, error };
};