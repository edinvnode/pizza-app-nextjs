import { useState, useRef, FormEvent, ChangeEvent, useEffect } from "react";
import {
  useAddPizzaMutation,
  useEditPizzaMutation,
} from "@/redux/api/pizzaApi";
import Spinner from "../Spinner/Spinner";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useLoginAdminMutation } from "@/redux/api/adminApi";
import { useGetAdminQuery } from "@/redux/api/adminApi";

interface FormData {
  name?: string;
  price?: number;
  image?: string | File;
  description?: string;
  email?: string;
  password?: string;
}

export default function PizzaForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    price: 0.0,
    image: "",
    description: "",
    email: "",
    password: "",
  });

  // --- Local state ---
const [submitting, setSubmitting] = useState(false);
const fileInputRef = useRef<HTMLInputElement>(null);
const numberRef = useRef<HTMLInputElement>(null);

// --- API hooks ---
const [addPizza] = useAddPizzaMutation();
const [editPizza] = useEditPizzaMutation();
const [loginAdmin, { error: loginError, isError }] = useLoginAdminMutation();
const { data: adminData } = useGetAdminQuery();

// --- Redux selector ---
const modalType = useSelector((state: RootState) => state.modalType);

// --- Form data ---
const { name, price, image, description, email, password } = formData;

// --- Mode flags ---
const isAddMode = modalType.value === "pizzaOrder";
const isEditMode = modalType.value === "pizzaEdit";
const isLoginMode = !adminData;

// --- Validation flags ---
const isAddInvalid = isAddMode && (!name || !price || !image || !description);
const isEditInvalid = isEditMode && !name && !price && !image && !description;
const isLoginInvalid = !email || !password;

// --- Button disabled state ---
const btnDisabled = submitting || (isLoginMode ? isLoginInvalid : isAddInvalid || isEditInvalid);

// --- Error message helper ---
const errorMessage = (() => {
  if (isError && loginError && "data" in loginError) {
    return (loginError.data as { message?: string }).message || "Invalid credentials";
  }
  return null;
})();


  type InputElements =
    | HTMLInputElement
    | HTMLTextAreaElement
    | HTMLSelectElement;

  const handleChange = (e: ChangeEvent<InputElements>) => {
    const target = e.target;
    const { name, value, type } = target;
    const newValue =
      type === "file" && target instanceof HTMLInputElement
        ? target.files?.[0] ?? ""
        : value;
    setFormData((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitting(true);

    const data = Object.entries({
      name,
      price: price?.toString(),
      description,
      email,
      password,
    }).reduce((formData, [key, value]) => {
      if (value) formData.append(key, value);
      return formData;
    }, new FormData());

    if (image instanceof File) data.append("file", image);

    try {
      if (isLoginMode) {
        await loginAdmin({ email: email ?? "", password: password ?? "" });
        return;
      }

      const pizzaAction = isAddMode
        ? addPizza(data).unwrap()
        : editPizza({ id: modalType.selectedPizza!.id, data }).unwrap();
      await pizzaAction;

      if (isAddMode) {
        setFormData({ name: "", price: 0.0, image: "", description: "" });
      }

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      setTimeout(() => setSubmitting(false), 1000);
    } catch (err) {
      const action = isLoginMode ? "login" : isAddMode ? "add" : "edit";
      console.error(
        `Failed to ${action} pizza: ${err instanceof Error ? err.message : err}`
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-6 text-gray-900 -mt-4 text-center"
    >
      {!isLoginMode ? (
        <>
          <div>
            <label htmlFor="name" className="block">
              Name:
            </label>
            <input
              type="text"
              name="name"
              defaultValue={modalType.selectedPizza?.name}
              onChange={handleChange}
              className="border rounded p-2 w-full"
              id="name"
              placeholder="Margherita"
              required={isAddMode}
            />
          </div>

          <div>
            <label htmlFor="price" className="block">
              Price (USD):
            </label>
            <input
              type="number"
              name="price"
              defaultValue={modalType.selectedPizza?.price}
              onChange={handleChange}
              ref={numberRef}
              className="border rounded p-2 w-full"
              id="price"
              min="1"
              max="200"
              step="0.01"
              placeholder="11.50"
              required={isAddMode}
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
              required={isAddMode}
            />
          </div>

          <div>
            <label htmlFor="description" className="block">
              Description:
            </label>
            <textarea
              name="description"
              placeholder="An Italian dish consisting of a flat, leavened dough base topped with ingredients such as..."
              onChange={handleChange}
              rows={4}
              cols={40}
              className="border rounded p-2 w-full"
              defaultValue={modalType.selectedPizza?.description}
              required={isAddMode}
            />
          </div>
        </>
      ) : (
        <>
          <div>
            <label htmlFor="email" className="block">
              E-mail:
            </label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="border rounded p-2 w-full"
              defaultValue={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="password" className="block">
              Password:
            </label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="border rounded p-2 w-full"
              defaultValue={formData.password}
              onChange={handleChange}
            />
          </div>
        </>
      )}
      <button
        type="submit"
        className={`bg-[#1B2533] text-white px-4 py-2 rounded w-32 h-12 ${
          btnDisabled
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-[#1B2533] cursor-pointer"
        }`}
        disabled={btnDisabled}
      >
        {submitting ? <Spinner size={30} /> : isLoginMode ? "Login" : "Submit"}
      </button>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </form>
  );
}
