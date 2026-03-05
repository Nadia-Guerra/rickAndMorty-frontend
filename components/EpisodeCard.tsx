import { Episode } from '../interfaces/episode.interface';

interface Props {
  episode: Episode;
}

export default function EpisodeCard({ episode }: Props) {
  return (
    <div className="bg-gray-800 rounded-xl p-4 text-white shadow-md">
      <span className="text-green-400 text-sm font-bold">{episode.episode}</span>
      <h2 className="text-lg font-semibold mt-1">{episode.name}</h2>
      <p className="text-gray-400 text-sm">{episode.air_date}</p>
    </div>
  );
}