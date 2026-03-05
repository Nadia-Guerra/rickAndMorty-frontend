const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getEpisodes = async (page = 1) => {
  const response = await fetch(`${API_URL}/episode?page=${page}`);
  if (!response.ok) throw new Error(`Error: ${response.status}`);
  return await response.json();
};

export const getCharacters = async (page = 1) => {
  const response = await fetch(`${API_URL}/character?page=${page}`);
  if (!response.ok) throw new Error(`Error: ${response.status}`);
  return await response.json();
};

export const getCharacterById = async (id: number) => {
  const response = await fetch(`${API_URL}/character/${id}`);
  if (!response.ok) throw new Error(`Error: ${response.status}`);
  return await response.json();
};

export const getLocations = async (page = 1) => {
  const response = await fetch(`${API_URL}/location?page=${page}`);
  if (!response.ok) throw new Error(`Error: ${response.status}`);
  return await response.json();
};