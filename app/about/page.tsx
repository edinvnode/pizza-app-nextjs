'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';

const messages = [
  {
    message: 'Predivna torta, izgleda još ljepše uživo! Sve pohvale!',
    author: 'Amina',
  },
  {
    message:
      'Merisa, hvala ti! Poklon je oduševio moju prijateljicu. Toliko pažnje u svakom detalju.',
    author: 'Selma',
  },
  {
    message: 'Kreativno, uredno, savršeno zapakovano! Topla preporuka svima.',
    author: 'Lejla',
  },
  {
    message:
      'Vi ste jedna divota na ovoj planeti, to nikada nemojte zaboraviti! Hvala Vam puno na predivnoj torti',
    author: 'Dina',
  },
  {
    message:
      'Draga Merisa sve je ispalo perfektno …zaista nisam sumnjala u krajnji ishod.',
    author: 'Dženita',
  },
  {
    message:
      'Precizno urađene torte sa divnim sadržajem. Svaka rijec je suvišna. Moja iskrena preporuka za   kreativnu i maštovitu Mery.',
    author: 'Ilda',
  },
  {
    message:
      'Malo gdje cete naći toliko profesionalnosti i kvalitetno urađene torte , sa toliko ljubavi se rade, , da pored djece oduševe se i stariji.',
    author: 'Amina',
  },
  {
    message:
      'Predivne torte, djevojci sam poklonio tortu za godišnjicu veze i ostala je bez teksta. ',
    author: 'Amar',
  },
];

export default function About() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000); // change every 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen min-h-screen bg-gradient-to-b from-yellow-50 to-gray-100 flex flex-col items-center">
      {/* Header */}
      <header className="text-center py-10">
        <h1 className="text-5xl font-extrabold text-gray-800 drop-shadow-md tracking-wide">
          Papirna čarolija
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          Ručno rađene torte koje donose osmijeh i radost!
        </p>
      </header>

      {/* Main content */}
      <section className="flex flex-col md:flex-row justify-center items-center md:items-start max-w-6xl w-full px-6 md:px-10 py-8 gap-8">
        <div className="grid grid-cols-1 md:w-1/2">
          <Image
            src="/images/torta1.jpeg"
            alt="Tota"
            height={1250}
            width={850}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 object-cover border-white"
          />
        </div>

        {/* Description */}
        <div className="md:w-1/2 bg-white rounded-lg shadow-md p-6 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">O meni</h2>
          <p className="mb-3">
            Zovem se Merisa, i već dugo godina izrađujem torte od papira s puno
            ljubavi i pažnje na detalje. Sve je počelo kao hobi – a pretvorilo
            se u prelijepu priču punu boja, mašte i osmijeha. Svaka torta je
            ručni rad – jedinstvena, vesela i stvorena da obraduje.
          </p>
          <p className="mb-3">
            Inspiraciju nalazim u osmijehu onih koji je poklone i prime i
            najveća nagrada za moj rad je kad mi javite da je nekome torta
            izmamila osmijeh. Vjerujem da svaki poklon treba imati dušu, a moje
            torte upravo to nose – ljubav, pažnju, trud i emociju u svakom sloju
            papira.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            O tortama
          </h2>
          <p className="mb-3">
            Dobrodošli u Papirnu čaroliju. 🎀 <br /> Mjesto gdje pokloni postaju
            uspomene!
          </p>
          <br></br>
          <p className="mb-3">
            Izrađujem unikatne papirne torte koje se mogu puniti slatkišima,
            sitnicama i iznenađenjima — savršene za rođendane, vrtiće, mature,
            diplome i sve posebne prilike. Svaka torta dolazi s čestitkom i može
            biti prazna ili puna — po vašoj želji.
          </p>
          <br></br>
          <p className="mb-3">
            💝 Poklonite osmijeh uz čaroliju papira! <br /> Za sva pitanja,
            dodatne informacije (cijene, adresa, kontakt telefon), sugestije
            slobodno se obratite putem e-mail-a ili FB stranice.
          </p>
        </div>
      </section>

      {/* Google Map */}
      <div className="my-12 w-full flex justify-center">
        <iframe
          src="https://maps.google.com/maps?width=800&height=500&hl=en&q=Adija%20Mulabegovi%C4%87a%206&t=&z=14&ie=UTF8&iwloc=B&output=embed"
          className="rounded-md shadow-2xl"
        ></iframe>
      </div>

      <div className="relative h-24 flex flex-col items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-2xl font-semibold">{messages[index].message}</p>
            <p className="text-sm text-gray-500 mt-2">
              — {messages[index].author}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Contact Section (White Background with Gray Theme) */}
      <footer className="bg-white text-gray-800 w-full py-10 flex flex-col items-center space-y-3 border-t border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800">
          Kontaktirajte nas
        </h2>
        <div className="flex flex-wrap justify-center gap-6 text-lg">
          <Link
            href="/contact"
            className="text-gray-800 hover:text-gray-600 transition-colors"
          >
            Contact
          </Link>
          <Link
            href="https://www.facebook.com/Merisatorte"
            className="text-gray-800 hover:text-gray-600 transition-colors"
          >
            Facebook
          </Link>
          <Link
            href="https://www.facebook.com/TorteodpapiraMery"
            className="text-gray-800 hover:text-gray-600 transition-colors"
          >
            Facebook
          </Link>
          <Link
            href="https://www.instagram.com/pokloni_mery/?igsh=MTVyamtzemMyNnhvYw%3D%3D"
            className="text-gray-800 hover:text-gray-600 transition-colors"
          >
            Instagram
          </Link>
          <Link
            href="mailto:meeriisaa@live.com"
            className="text-gray-800 hover:text-gray-600 transition-colors"
          >
            Email
          </Link>
        </div>
      </footer>
    </div>
  );
}
