import { useState, useEffect } from 'react';
import { getLocations } from '../services/rickandmorty.service';
import { Location, LocationResponse } from '../../interfaces/location.interface';

export const useLocations = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        setLoading(true);
        const data: LocationResponse = await getLocations();
        setLocations(data.results);
      } catch (error) {
        
        setError('No se pudieron cargar las ubicaciones.');
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  return { locations, loading, error };
};