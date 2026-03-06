import { useState, useEffect } from 'react';
import { getLocations } from '../services/rickandmorty.service';
import { Location, LocationResponse } from '../../interfaces/location.interface';

export const useLocations = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        setLoading(true);

        const data: LocationResponse = await getLocations(page);
        
        setLocations(data.results);
        setTotalPages(data.info.pages);
      } catch{
        
        setError('No se pudieron cargar las ubicaciones');

      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, [page]);

  const nextPage = () => {
    if(page < totalPages) setPage(p => p + 1);
  };

  const prevPage = () => {
    if(page > 1) setPage(p => p - 1);
  };

  return { locations, loading, error, page, totalPages, nextPage, prevPage };
};