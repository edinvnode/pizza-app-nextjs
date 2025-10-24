import { useState, useRef, FormEvent, ChangeEvent } from "react";

interface FormData {
  name: string;
  price: number;
  image: string | File;
}

export default function PizzaForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    price: 0.0,
    image: "",
  });

  const [submitting, setSubmitting] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files?.[0] ?? "" : value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    if (!formData.image || !(formData.image instanceof File)) return;
    const data = new FormData();
    data.append("name", formData.name);
    data.append("price", formData.price.toString());
    data.append("file", formData.image);

    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pizzas`, {
        method: "POST",
        body: data
      });
      setTimeout(() => {
        setFormData({ name: "", price: 0.0, image: "" });
        if (fileInputRef.current) fileInputRef.current.value = "";
        alert("New pizza added!");
        setSubmitting(false);
      }, 1000);
    } catch (e) {
      console.error("Error submitting form:", e);
      console.error(
        `Failed to add pizza: ${e instanceof Error ? e.message : e}`
      );
    }
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
          Price (BAM):
        </label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="border rounded p-2 w-full"
          id="price"
          min="1"
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
          ref={fileInputRef}
          className="border rounded p-2 w-full"
          id="image"
          required
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="px-4 py-2 rounded text-white bg-[#1B2533] hover:bg-[#2a3546] disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
      >
        {submitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
