'use client';

import { FormEvent, useState } from 'react';
import Spinner from '@/components/Spinner/Spinner';

export default function Contact() {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    temaTorte: '',
    brojKomada: '',
    bojaKomada: '',
    preuzimanje: '',
    podaciZaDostavu: '',
    email: '',
    brojTelefona: '',
    datumPreuzimanja: '',
    dodatniOpis: '',
    vrstePlacanja: '',
  });

  const isDisabled =
    formData.temaTorte === '' ||
    formData.brojKomada === '' ||
    formData.bojaKomada === '' ||
    formData.preuzimanje === '' ||
    formData.podaciZaDostavu === '' ||
    formData.email === '' ||
    formData.brojTelefona === '' ||
    formData.datumPreuzimanja === '' ||
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
        brojKomada: '',
        bojaKomada: '',
        preuzimanje: '',
        podaciZaDostavu: '',
        email: '',
        brojTelefona: '',
        datumPreuzimanja: '',
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
  /*
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!result.success) {
        alert('Došlo je do greške pri slanju.');
        return;
      }

      alert('Narudžba uspješno poslana!');
    } catch (error) {
      alert('Greška pri povezivanju sa serverom.');
    }
  };*/

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-pink-200 ">
      <form
        className="form-styled flex flex-col border-2 rounded-md p-4 w-full max-w-lg bg-white my-3"
        onSubmit={handleSubmit}
      >
        <label className="">Tema torte:</label>
        <select
          className="my-2 border border-black"
          name="temaTorte"
          onChange={handleChange}
          value={formData.temaTorte}
        >
          <option value=""></option>
          <option value="Bez naljepnica (1.5KM/komadu)">
            Bez naljepnica (1.5KM/komadu)
          </option>
          <option value="A je to (3KM/kriški)">A je to (3KM/kriški)</option>
          <option value="Ariel mala sirena (3KM/kriški)">
            Ariel mala sirena (3KM/kriški)
          </option>
          <option value="Batman (3KM/kriški)">Batman (3KM/kriški)</option>
          <option value="Uzorak po Vašem izboru (3KM/kriški)">
            Uzorak po Vašem izboru (3KM/kriški)
          </option>
        </select>

        <label className="">Broj komada:</label>
        <select
          className="my-2 border border-black"
          name="brojKomada"
          onChange={handleChange}
          value={formData.brojKomada}
        >
          <option value=""></option>
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="14">14</option>
          <option value="20">20</option>
        </select>

        <label className="">Boja komada:</label>
        <select
          className="my-2 border border-black"
          name="bojaKomada"
          onChange={handleChange}
          value={formData.bojaKomada}
        >
          <option value=""></option>
          <option value="Šarena - sve boje">Šarena - sve boje</option>
          <option value="Bijela">Bijela</option>
          <option value="Žuta">Žuta</option>
        </select>

        <label>Preuzimanje:</label>
        <select
          className="my-2 border border-black"
          name="preuzimanje"
          onChange={handleChange}
          value={formData.preuzimanje}
        >
          <option value=""></option>
          <option value="Osobno preuzimanje trgovina">
            Osobno preuzimanje (plaćanje gotovinom)
          </option>
        </select>

        <label className="">Podaci za dostavu:</label>
        <textarea
          className="my-2 border border-black"
          name="podaciZaDostavu"
          onChange={handleChange}
          value={formData.podaciZaDostavu}
        />

        <label className="">E-mail adresa:</label>
        <input
          type="email"
          className="my-2 border border-black"
          placeholder="Email adresa"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />

        <label className="">Broj telefona za kontakt:</label>
        <input
          type="text"
          className="my-2 border border-black"
          placeholder="Broj telefona:"
          name="brojTelefona"
          onChange={handleChange}
          value={formData.brojTelefona}
        />

        <label className="">Datum preuzimanja torte:</label>
        <div className="text-sm text-gray-600">
          Datum kada bi došli po tortu ako je osobno preuzimate u trgovini
          Paketić.
        </div>
        <input
          type="date"
          className="my-2 border border-black"
          name="datumPreuzimanja"
          onChange={handleChange}
          value={formData.datumPreuzimanja}
        />

        <label className="">Dodatni opis:</label>
        <textarea
          className="my-2 border border-black"
          name="dodatniOpis"
          onChange={handleChange}
          value={formData.dodatniOpis}
        />

        <label className="">Vrste plaćanja:</label>
        <select
          className="my-2 border border-black"
          name="vrstePlacanja"
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
