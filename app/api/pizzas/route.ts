import { pizzas } from "@/data/pizzas";

export async function GET() {
  return new Response(JSON.stringify(pizzas), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, price, image } = body;
  const newPizza = { id: pizzas[pizzas.length - 1].id + 1, name, price, image };

  return new Response(JSON.stringify(newPizza), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
