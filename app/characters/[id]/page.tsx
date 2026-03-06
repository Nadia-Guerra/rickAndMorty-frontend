'use client';

import { useParams, useRouter } from 'next/navigation';
import { useCharacterById } from '../../hooks/useCharacterById';
import Spinner from '../../../components/Spinner';
import ErrorMessage from '../../../components/ErrorMessage';
import Image from 'next/image';

export default function CharacterDetailPage() {
  const { id } = useParams();           
  const router = useRouter();
  const { character, loading, error } = useCharacterById(Number(id));

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!character) return null;

  return (
    <main className="p-6 max-w-lg mx-auto">
      <button
        onClick={() => router.back()} // ← regresa a la lista
        className="text-green-400 mb-4 hover:underline"
      >
        ← Volver
      </button>

      <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg text-white">
        <Image src={character.image} alt={character.name} className="w-full" />
        <div className="p-6 space-y-2">
          <h1 className="text-2xl font-bold">{character.name}</h1>
          <p><span className="text-gray-400">Estado:</span> {character.status}</p>
          <p><span className="text-gray-400">Especie:</span> {character.species}</p>
          <p><span className="text-gray-400">Género:</span> {character.gender}</p>
          <p><span className="text-gray-400">Origen:</span> {character.origin.name}</p>
          <p><span className="text-gray-400">Ubicación:</span> {character.location.name}</p>
        </div>
      </div>
    </main>
  );
}