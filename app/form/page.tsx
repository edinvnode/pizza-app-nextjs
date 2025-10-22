'use client';

import { useState, ChangeEvent } from 'react';

interface PizzaProps {
  name: string;
  price: number;
  image: string | File;
}

export default function PizzaForm() {
  /*
  const [pizzaName, setPizzaName] = useState('');
  const [pizzaPrice, setPizzaPrice] = useState<number>(0);
  const [imageFile, setImageFile] = useState('');
  */

  const [formData, setFormData] = useState<PizzaProps>({
    name: '',
    price: 0.0,
    image: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files?.[0] ?? '' : value,
    });
  };

  const isDisabled = !formData.name || !formData.price || !formData.image;

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <form className="flex flex-col gap-3 justify-center items-center border border-red-500 bg-gray-50 p-6 rounded-lg shadow-md">
        <label>Pizza name</label>
        <input
          type="text"
          name="name"
          placeholder="Name..."
          className="border border-gray-300 rounded px-2 py-1"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label>Pizza price</label>
        <input
          type="number"
          name="price"
          placeholder="Price..."
          className="border border-gray-300 rounded px-2 py-1"
          value={formData.price}
          onChange={handleChange}
          step="0.01"
          min="0"
          required
        />
        <label>Pizza image</label>
        <input
          type="file"
          name="image"
          className="border border-gray-300 rounded px-2 py-1"
          onChange={handleChange}
          required
        />
        <button
          disabled={isDisabled}
          className={`rounded-lg w-24 mt-4 py-1 ${
            isDisabled
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
