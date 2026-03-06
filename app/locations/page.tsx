'use client';

import { useLocations } from '../../hooks/useLocations';
import LocationCard from '../../components/LocationCard';
import Spinner from '../../components/Spinner';
import ErrorMessage from '../../components/ErrorMessage';

export default function LocationsPage() {
  const { locations, loading, error } = useLocations();

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Locations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {locations.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
    </main>
  );
}