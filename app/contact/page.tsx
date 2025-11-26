'use client';

import { FormEvent, useState } from 'react';
import Spinner from '@/components/Spinner/Spinner';

export default function Contact() {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    temaTorte: '',
    cijena: '',
    brojKomada: '',
    bojaKomada: '',
    preuzimanje: '',
    podaciZaDostavu: '',
    email: '',
    brojTelefona: '',
    dodatniOpis: '',
    vrstePlacanja: '',
  });

  const isDisabled =
    formData.temaTorte === '' ||
    formData.cijena === '' ||
    formData.brojKomada === '' ||
    formData.bojaKomada === '' ||
    formData.preuzimanje === '' ||
    formData.podaciZaDostavu === '' ||
    formData.email === '' ||
    formData.brojTelefona === '' ||
    formData.dodatniOpis === '' ||
    formData.vrstePlacanja === '' ||
    submitting;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    isDisabled
      ? setErrorMessage('⚠️ Molimo vas ispunite sva polja.')
      : setErrorMessage('🚀 Forma je spremna za slanje.');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      setSubmitting(true);
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      setFormData({
        temaTorte: '',
        cijena: '',
        brojKomada: '',
        bojaKomada: '',
        preuzimanje: '',
        podaciZaDostavu: '',
        email: '',
        brojTelefona: '',

        dodatniOpis: '',
        vrstePlacanja: '',
      });

      alert('✅ Email uspješno poslan!');
      setErrorMessage('');

      if (!res.ok) throw new Error('Greška pri slanju poruke.');
    } catch (err: any) {
      console.error(err);
      setErrorMessage('❌ Greška pri slanju emaila.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-pink-200 ">
      <form
        className="form-styled flex flex-col border-2 rounded-md p-4 w-full max-w-lg bg-white my-3"
        onSubmit={handleSubmit}
      >
        <label htmlFor="temaTorte">Tema torte:</label>
        <select
          id="temaTorte"
          name="temaTorte"
          onChange={handleChange}
          value={formData.temaTorte}
        >
          <option value=""></option>

          <option value="Frozen">Frozen</option>
          <option value="Paw Patrol">Paw Patrol</option>
          <option value="Barbie">Barbie</option>
          <option value="Minnie mouse">Minnie mouse</option>
          <option value="Spiderman">Spiderman</option>
          <option value="Nindža kornjače">Nindža kornjače</option>
          <option value="Cars">Cars</option>
          <option value="Mickey mouse">Mickey mouse</option>
          <option value="Minecraft">Minecraft</option>
          <option value="Ili po drugoj želji">Ili po drugoj želji</option>
        </select>

        <label className="" htmlFor="cijena">
          Cijena:
        </label>
        <select
          className="my-2 border border-black"
          name="cijena"
          id="cijena"
          onChange={handleChange}
          value={formData.cijena}
        >
          <option value=""></option>
          <option value="Bez slatkiša (1.5KM/komad)">
            Bez slatkiša (1.5KM/komad)
          </option>
          <option value="Sa slatkišima (ovisno o vrsti – 3KM / 3.5KM / 4KM komad)">
            Sa slatkišima (ovisno o vrsti – 3KM / 3.5KM / 4KM komad)
          </option>
        </select>

        <label className="" htmlFor="brojKomada">
          Broj komada:
        </label>
        <select
          className="my-2 border border-black"
          name="brojKomada"
          id="brojKomada"
          onChange={handleChange}
          value={formData.brojKomada}
        >
          <option value=""></option>
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="14">14</option>
          <option value="20">20</option>
          <option value="24">24</option>
          <option value="30">30</option>
          <option value="36">36</option>
        </select>
        <label className="" htmlFor="bojaKomada">
          Boja komada:
        </label>
        <select
          className="my-2 border border-black"
          name="bojaKomada"
          id="bojaKomada"
          onChange={handleChange}
          value={formData.bojaKomada}
        >
          <option value=""></option>
          <option value="Šarena - sve boje">Šarena - sve boje</option>
          <option value="Bijela">Bijela</option>
          <option value="Žuta">Žuta</option>
        </select>
        <label htmlFor="preuzimanje">Preuzimanje:</label>
        <select
          className="my-2 border border-black"
          name="preuzimanje"
          id="preuzimanje"
          onChange={handleChange}
          value={formData.preuzimanje}
        >
          <option value=""></option>
          <option value="Osobno preuzimanje trgovina">
            Osobno preuzimanje (plaćanje gotovinom)
          </option>
        </select>
        <label className="" htmlFor="podaciZaDostavu">
          Podaci za dostavu:
        </label>
        <textarea
          className="my-2 border border-black"
          name="podaciZaDostavu"
          id="podaciZaDostavu"
          onChange={handleChange}
          value={formData.podaciZaDostavu}
        />
        <label className="" htmlFor="email">
          E-mail adresa:
        </label>
        <input
          type="email"
          className="my-2 border border-black"
          placeholder="Email adresa"
          name="email"
          id="email"
          onChange={handleChange}
          value={formData.email}
        />
        <label className="" htmlFor="brojTelefona">
          Broj telefona za kontakt:
        </label>
        <input
          type="text"
          className="my-2 border border-black"
          placeholder="Broj telefona:"
          name="brojTelefona"
          id="brojTelefona"
          onChange={handleChange}
          value={formData.brojTelefona}
        />
        <label className="" htmlFor="dodatniOpis">
          Dodatni opis:
        </label>
        <textarea
          className="my-2 border border-black"
          name="dodatniOpis"
          id="dodatniOpis"
          onChange={handleChange}
          value={formData.dodatniOpis}
        />
        <label className="" htmlFor="vrstePlacanja">
          Vrste plaćanja:
        </label>
        <select
          className="my-2 border border-black"
          name="vrstePlacanja"
          id="vrstePlacanja"
          onChange={handleChange}
          value={formData.vrstePlacanja}
        >
          <option value=""></option>
          <option value="Kod osobnog preuzimanja">
            Kod osobnog preuzimanja
          </option>
          <option value="Po pouzeću pošiljke">Po pouzeću pošiljke</option>
          <option value="Transakcijski po ponudi">
            Transakcijski po ponudi
          </option>
        </select>
        <button
          type="submit"
          className={`rounded-lg mt-4 py-2 ${
            isDisabled
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600 text-white cursor-pointer'
          }`}
          disabled={isDisabled}
        >
          {submitting ? <Spinner size={30} /> : 'Pošalji'}
        </button>
        <p
          className={`text-center mt-2 ${
            isDisabled ? 'text-red-500' : 'text-green-500'
          }`}
        >
          {errorMessage}
        </p>
      </form>
    </div>
  );
}
