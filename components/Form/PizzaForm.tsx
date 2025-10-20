import { useState, FormEvent, ChangeEvent } from "react";
import { useModal } from "../Modal/ModalContext";

interface FormData {
  name: string;
  price: string;
  image: string | File;
}

export default function PizzaForm() {
  const { close } = useModal();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    price: "",
    image: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? (files?.[0] ?? "") : value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
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
        />
      </div>

      <div>
        <label htmlFor="price" className="block">
          Price:
        </label>
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="border rounded p-2 w-full"
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
        />
      </div>

      <button
        type="submit"
        className="bg-[#1B2533] text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}
