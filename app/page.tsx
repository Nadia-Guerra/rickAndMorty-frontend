'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">

      <h1 className="text-4xl font-bold mb-10 text-center">
        Rick and Morty Explorer
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-xl">

        <Link
          href="/characters"
          className="bg-gray-800 hover:bg-gray-700 transition p-6 rounded-xl text-center shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Personajes</h2>
          <p className="text-gray-400 text-sm">
            Explora todos los personajes
          </p>
        </Link>

        <Link
          href="/episodes"
          className="bg-gray-800 hover:bg-gray-700 transition p-6 rounded-xl text-center shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Episodios</h2>
          <p className="text-gray-400 text-sm">
            Ver lista de episodios
          </p>
        </Link>

        <Link
          href="/locations"
          className="bg-gray-800 hover:bg-gray-700 transition p-6 rounded-xl text-center shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Locaciones</h2>
          <p className="text-gray-400 text-sm">
            Descubre los lugares del universo
          </p>
        </Link>

      </div>

    </main>
  );
}