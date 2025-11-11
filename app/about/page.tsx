import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-b from-yellow-50 to-gray-100 flex flex-col items-center">
      {/* Header */}
      <header className="text-center py-10">
        <h1 className="text-5xl font-extrabold text-gray-800 drop-shadow-md tracking-wide">
          Torte od papira Mery
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          Ručno rađene torte koje donose osmijeh i radost!
        </p>
      </header>

      {/* Main content */}
      <section className="flex flex-col md:flex-row justify-center items-center md:items-start max-w-6xl w-full px-6 md:px-10 py-8 gap-8">
        {/* Pizza Image */}
        <div className="grid grid-cols-2 md:w-1/2">
          <Image
            src="/images/torta1.jpg"
            alt="Pizza Capricciosa"
            height={50}
            width={250}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 object-cover border-white"
          />
          <Image
            src="/images/torta2.jpg"
            alt="Slika torte"
            height={250}
            width={250}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 object-cover border-white"
          />
          <Image
            src="/images/torta3.jpg"
            alt="Slika torte"
            height={250}
            width={250}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 object-cover  border-white"
          />
          <Image
            src="/images/torta4.jpg"
            alt="Slika torte"
            height={250}
            width={250}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 object-cover  border-white"
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
            Dobrodošli u Papirnu čaroliju 🎀 Mjesto gdje pokloni postaju
            uspomene! Izrađujem unikatne papirne torte koje se mogu puniti
            slatkišima, sitnicama i iznenađenjima — savršene za rođendane,
            vrtiće, mature, diplome i sve posebne prilike. Svaka torta dolazi s
            čestitkom i može biti prazna ili puna — po vašoj želji.
          </p>
          <p className="mb-3">
            💝 Poklonite osmijeh uz čaroliju papira! Za sva pitanja, dodatne
            informacije (cijene, adresa, kontakt telefon), sugestije slobodno se
            obratite putem e-mail-a ili FB stranice.
          </p>
        </div>
      </section>

      {/* Google Map */}
      <div className="my-12 w-full flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.1530003242683!2d18.396102176187384!3d43.852657371093215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c9692463b1cb%3A0x4125c306e5d62a6d!2sInternational%20Center%20for%20Children%20and%20Youth%20Novo%20Sarajevo!5e0!3m2!1sen!2sba!4v1761684784737!5m2!1sen!2sba"
          width="600"
          height="450"
          style={{ border: '0' }}
          loading="lazy"
          className="rounded-lg shadow-md"
        ></iframe>
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
            href="https://instagram.com/mypage"
            className="text-gray-800 hover:text-gray-600 transition-colors"
          >
            Instagram
          </Link>
          <Link
            href="https://pinterest.com/mypage"
            className="text-gray-800 hover:text-gray-600 transition-colors"
          >
            Pinterest
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
