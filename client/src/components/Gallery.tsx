export default function Gallery() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Vehículo de transporte azul"
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Conductor profesional"
    },
    {
      src: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Interior de vehículo cómodo"
    },
    {
      src: "https://images.unsplash.com/photo-1594736797933-d0b22d3734d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Conductora profesional"
    }
  ];

  return (
    <div id="galeria" data-testid="gallery-section">
      <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6 md:mb-8" data-testid="gallery-title">
        Galería
      </h2>
      <div className="max-w-md mx-auto lg:mx-0">
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg shadow-md"
              data-testid={`gallery-image-${index}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-28 md:h-32 lg:h-36 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}