'use client';

import { useCharacters } from '../hooks/useCharacters';
import CharacterCard from '../../components/CharacterCard';
import Spinner from '../../components/Spinner';
import ErrorMessage from '../../components/ErrorMessage';

export default function CharactersPage() {
  const { characters, loading, error, page, totalPages, nextPage, prevPage } = useCharacters();

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Personajes</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>

      <div className="flex justify-center items-center gap-6 mt-8">
        <button onClick={prevPage} disabled={page === 1}
          className="px-4 py-2 bg-green-500 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed">
          ← Anterior
        </button>
        <span className="text-white">Página {page} de {totalPages}</span>
        <button onClick={nextPage} disabled={page === totalPages}
          className="px-4 py-2 bg-green-500 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed">
          Siguiente →
        </button>
      </div>
    </main>
  );
}