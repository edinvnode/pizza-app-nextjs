export default function PizzaForm() {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <form className="flex flex-col gap-3 justify-center items-center border border-red-500 bg-gray-50 p-6 rounded-lg shadow-md">
        <label>Pizza name</label>
        <input
          type="text"
          placeholder="Name..."
          className="border border-gray-300 rounded px-2 py-1"
        />
        <label>Pizza price</label>
        <input
          type="text"
          placeholder="Price..."
          className="border border-gray-300 rounded px-2 py-1"
        />
        <label>Pizza image</label>
        <input
          type="file"
          className="border border-gray-300 rounded px-2 py-1"
        />
        <button className="bg-blue-400 text-white rounded-lg w-24 mt-4 py-1 hover:bg-blue-500">
          Submit
        </button>
      </form>
    </div>
  );
}
