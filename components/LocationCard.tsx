import { Location } from '../interfaces/location.interface';

interface Props {
  location: Location;
}

export default function LocationCard({ location }: Props) {
  return (
    <div className="bg-gray-800 rounded-xl p-4 text-white shadow-md">
        
      <span className="text-green-400 text-sm font-bold">{location.name}</span>
      <h2 className="text-lg font-semibold mt-1">{location.type}</h2>
      <p className="text-gray-400 text-sm">{location.dimension}</p>
      <p className="text-gray-400 text-sm">{location.residents}</p>
    </div>
  );
}