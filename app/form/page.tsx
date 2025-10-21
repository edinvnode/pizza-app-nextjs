export default function PizzaForm() {
  return (
    <div>
      <form className="flex flex-col justify-center items-center h-full border border-black-500">
        <label>Pizza name</label>
        <input type="text" placeholder="Name..." />
        <label>Pizza price</label>
        <input type="text" placeholder="Price..." />
        <label>Pizza image</label>
        <input type="file" />
        <button className="bg-blue-400 rounded-lg w-20">Submit</button>
      </form>
    </div>
  );
}
