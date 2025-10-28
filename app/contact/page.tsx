'use client';

import { FormEvent, useState } from 'react';

export default function Contact() {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const isDisabled =
    formData.email === '' ||
    formData.firstName === '' ||
    formData.lastName === '' ||
    formData.message === '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

  /*
    - Uraditi disable button ukoliko validacija nije prosle i obojiti ga u sivo
    - Kontakt formu poslati na mail - istraziti node.js mailer
    - Iskoristiti postojecu komponentu Formu
    - Istraziti biblioteku za forme pod imenom Formik i slicno
  */

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-200">
      <form
        className="flex flex-col border-2 rounded-md p-2 w-70"
        onSubmit={handleSubmit}
      >
        <label className="mx-2">First Name:</label>
        <input
          type="text"
          className="my-2 mx-2 border-1"
          name="firstName"
          onChange={handleChange}
          value={formData.firstName}
        />
        <label className="mx-2">Last Name:</label>
        <input
          type="text"
          className="my-2 mx-2 border-1"
          name="lastName"
          onChange={handleChange}
          value={formData.lastName}
        />
        <label className="mx-2">Email:</label>
        <input
          type="email"
          className="my-2 mx-2 border-1"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <label className="mx-2">Message:</label>
        <textarea
          className="mx-2 my-2 border-1 border-black"
          name="message"
          onChange={handleChange}
          value={formData.message}
        ></textarea>
        <button
          type="submit"
          className={`rounded-lg ${
            isDisabled
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600 text-white cursor-pointer'
          }`}
          disabled={isDisabled}
        >
          Submit
        </button>
        <p
          className={`text-center ${
            isDisabled ? 'text-red-500' : 'text-green-500'
          }`}
        >
          {errorMessage}
        </p>
      </form>
    </div>
  );
}
