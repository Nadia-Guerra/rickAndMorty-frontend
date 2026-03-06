import { Character } from '../interfaces/character.interface';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  character: Character;
}

export default function CharacterCard({ character }: Props) {
  return (
    
    <Link href={`/characters/${character.id}`}>
      <div className="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform cursor-pointer">
        <Image
          src={character.image}
          alt={character.name}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="p-3">
          <h2 className="text-white font-semibold text-center">{character.name}</h2>
        </div>
      </div>
    </Link>
  );
}