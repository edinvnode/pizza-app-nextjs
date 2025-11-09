'use client';

import { FormEvent, useState } from 'react';

export default function Contact() {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [formData, setFormData] = useState({
    temaTorte: 'Crvena',
    brojKriskica: '',
    bojaKriskica: '',
    bojaMasnice: '',
    slaganjeTorte: '',
    preuzimanje: '',
    podaciZaDostavu: '',
    email: '',
    brojTelefona: '',
    datumPreuzimanja: '',
    dodatniOpis: '',
    vrstePlacanja: '',
  });

  const isDisabled = false;

  /*
  const isDisabled =
    formData.email === '' ||
    formData.firstName === '' ||
    formData.lastName === '' ||
    formData.message === '';*/

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
      ? setErrorMessage('⚠️ Please fill in the required fields.')
      : setErrorMessage('🚀 Form ready to submit.');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert('Form submitted!');
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-200 ">
      <form
        className="form-styled flex flex-col border-2 rounded-md p-4 w-full max-w-lg bg-white my-3"
        onSubmit={handleSubmit}
      >
        <label className="">Tema torte:</label>
        <select
          className="my-2 border border-black"
          name="temaTorte"
          onChange={handleChange}
        >
          <option value="Bez naljepnica (0,56eur/kriški)">
            Bez naljepnica (0,56eur/kriški)
          </option>
          <option value="A je to (0,72€/kriški)">A je to (0,72€/kriški)</option>
          <option value="Ariel mala sirena (0,72€/kriški)">
            Ariel mala sirena (0,72€/kriški)
          </option>
          <option value="Batman (0,72€/kriški)">Batman (0,72€/kriški)</option>
          <option value="Uzorak po Vašem izboru (0,72€/kriški)">
            Uzorak po Vašem izboru (0,72€/kriški)
          </option>
        </select>

        <label className="">Broj kriškica:</label>
        <select
          className="my-2 border border-black"
          name="brojKriskica"
          onChange={handleChange}
        >
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="14">14</option>
          <option value="20">20</option>
        </select>

        <label className="">Boja kriškica:</label>
        <select
          className="my-2 border border-black"
          name="bojaKriskica"
          onChange={handleChange}
        >
          <option value="Šarena - sve boje">Šarena - sve boje</option>
          <option value="Bijela">Bijela</option>
          <option value="Žuta">Žuta</option>
        </select>

        <label className="">Boja mašnice:</label>
        <select
          className="my-2 border border-black"
          name="bojaMasnice"
          onChange={handleChange}
        >
          <option value="Crvena">Crvena</option>
          <option value="Žuta">Žuta</option>
        </select>

        <label className="">Slaganje torte:</label>
        <select
          className="my-2 border border-black"
          name="slaganjeTorte"
          onChange={handleChange}
        >
          <option value="Da (0,08€/kriški)">Da (0,08€/kriški)</option>
          <option value="Ne">Ne</option>
        </select>

        <label>Preuzimanje:</label>
        <select
          className="my-2 border border-black"
          name="preuzimanje"
          onChange={handleChange}
        >
          <option value="Osobno preuzimanje trgovina Paketić (plaćanje gotovinom)">
            Osobno preuzimanje trgovina Paketić (plaćanje gotovinom)
          </option>
        </select>

        <label className="">Podaci za dostavu:</label>
        <textarea
          className="my-2 border border-black"
          name="podaciZaDostavu"
          onChange={handleChange}
        />

        <label className="">E-mail adresa:</label>
        <input
          type="email"
          className="my-2 border border-black"
          placeholder="Email adresa"
          name="email"
          onChange={handleChange}
        />

        <label className="">Broj telefona za kontakt:</label>
        <input
          type="text"
          className="my-2 border border-black"
          placeholder="Broj telefona:"
          name="brojTelefona"
          onChange={handleChange}
        />

        <label className="">Datum preuzimanja torte:</label>
        <div className="text-sm text-gray-600">
          Datum kada bi došli po tortu ako je osobno preuzimate u trgovini
          Paketić.
        </div>
        <input
          type="text"
          className="my-2 border border-black"
          name="datumPreuzimanja"
          onChange={handleChange}
        />

        <label className="">Dodatni opis:</label>
        <textarea
          className="my-2 border border-black"
          name="dodatniOpis"
          onChange={handleChange}
        />

        <label className="">Vrste plaćanja:</label>
        <select
          className="my-2 border border-black"
          name="vrstePlacanja"
          onChange={handleChange}
        >
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
          Pošalji
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
