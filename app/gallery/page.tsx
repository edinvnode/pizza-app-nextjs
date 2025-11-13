import Image from 'next/image';

export default function Gallery() {
  const galleryData = [
    { image: '/images/gallery/torta1.jpg', title: 'Torta 1' },
    { image: '/images/gallery/torta2.jpg', title: 'Torta 2' },
    { image: '/images/gallery/torta3.jpg', title: 'Torta 3' },
    { image: '/images/gallery/torta4.jpg', title: 'Torta 4' },
    { image: '/images/gallery/torta5.jpg', title: 'Torta 5' },
    { image: '/images/gallery/torta6.jpg', title: 'Torta 6' },
    { image: '/images/gallery/torta7.jpg', title: 'Torta 7' },
    { image: '/images/gallery/torta8.jpg', title: 'Torta 8' },
    { image: '/images/gallery/torta9.jpg', title: 'Torta 9' },
    { image: '/images/gallery/torta10.jpg', title: 'Torta 10' },
    { image: '/images/gallery/torta11.jpg', title: 'Torta 11' },
    { image: '/images/gallery/torta12.jpg', title: 'Torta 12' },
    { image: '/images/gallery/torta13.jpg', title: 'Torta 13' },
    { image: '/images/gallery/torta14.jpg', title: 'Torta 14' },
    { image: '/images/gallery/torta15.jpg', title: 'Torta 15' },
    { image: '/images/gallery/torta16.jpg', title: 'Torta 16' },
    { image: '/images/gallery/torta17.jpg', title: 'Torta 17' },
    { image: '/images/gallery/torta18.jpg', title: 'Torta 18' },
    { image: '/images/gallery/torta19.jpg', title: 'Torta 19' },
    { image: '/images/gallery/torta20.jpg', title: 'Torta 20' },
    { image: '/images/gallery/torta21.jpg', title: 'Torta 21' },
    { image: '/images/gallery/torta22.jpg', title: 'Torta 22' },
    { image: '/images/gallery/torta23.jpg', title: 'Torta 23' },
    { image: '/images/gallery/torta24.jpg', title: 'Torta 24' },
    { image: '/images/gallery/torta25.jpg', title: 'Torta 25' },
    { image: '/images/gallery/torta26.jpg', title: 'Torta 26' },
    { image: '/images/gallery/torta27.jpg', title: 'Torta 27' },
    { image: '/images/gallery/torta28.jpg', title: 'Torta 28' },
    { image: '/images/gallery/torta29.jpg', title: 'Torta 29' },
    { image: '/images/gallery/torta30.jpg', title: 'Torta 30' },
    { image: '/images/gallery/torta31.jpg', title: 'Torta 31' },
    { image: '/images/gallery/torta32.jpg', title: 'Torta 32' },
    { image: '/images/gallery/torta33.jpg', title: 'Torta 33' },
    { image: '/images/gallery/torta34.jpg', title: 'Torta 34' },
    { image: '/images/gallery/torta35.jpg', title: 'Torta 35' },
  ];

  return (
    <div className="min-h-screen p-2">
      <div
        className="
          grid gap-1
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3
          lg:grid-cols-4 
          xl:grid-cols-5
        "
      >
        {galleryData.map((item, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-md"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
