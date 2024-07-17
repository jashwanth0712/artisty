import { useState } from 'react';

export function ArtworksList({ artworksData }) {
  const [artworks, setArtworks] = useState(artworksData);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6">
      {artworks.map((artwork) => (
        <div key={artwork.id} className="bg-background rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
          <img src={artwork.image} alt={artwork.title} width={400} height={300} className="w-full h-60 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{artwork.title}</h3>
            <p className="text-sm text-muted-foreground">{artwork.timestamp}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
