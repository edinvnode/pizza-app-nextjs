import { useState, FormEvent, ChangeEvent } from "react";
import { useModal } from "../Modal/ModalContext";

interface FormData {
  name: string;
  price: number;
  image: string | File;
}

export default function PizzaForm() {
  const { close } = useModal();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    price: 0.0,
    image: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? (files?.[0] ?? "") : value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/pizzas`,
      {
        method: "POST",
        body: JSON.stringify(formData),
      }
    );
    response = await response.json();

    close();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 text-gray-900">
      <div>
        <label htmlFor="name" className="block">
          Name:
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border rounded p-2 w-full"
          id="name"
          placeholder="Margherita"
          required
        />
      </div>

      <div>
        <label htmlFor="price" className="block">
          Price:
        </label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="border rounded p-2 w-full"
          id="price"
          min="0"
          step="0.01"
          required
        />
      </div>

      <div>
        <label htmlFor="image" className="block">
          Image:
        </label>
        <input
          type="file"
          name="image"
          onChange={handleChange}
          className="border rounded p-2 w-full"
          id="image"
          required
        />
      </div>

      <button
        type="submit"
        className={`bg-[#1B2533] text-white px-4 py-2 rounded ${!formData.name || !formData.price || !formData.image ? "bg-gray-400 cursor-not-allowed" : "bg-[#1B2533]"}`}
        disabled={!formData.name || !formData.price || !formData.image}
      >
        Submit
      </button>
    </form>
  );
}
