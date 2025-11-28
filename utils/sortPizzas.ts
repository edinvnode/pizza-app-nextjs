import { PizzaType } from "@/app/page";

export type SortOption =
  | "name-asc"
  | "name-desc"
  | "price-asc"
  | "price-desc"
  | "createdAt-desc"
  | "createdAt-asc"
  | "default";

export const sortPizzas = (
  pizzas: PizzaType[],
  option: SortOption
): PizzaType[] => {
  const sorted = [...pizzas];

  switch (option) {
    case "name-asc":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case "name-desc":
      return sorted.sort((a, b) => b.name.localeCompare(a.name));
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "createdAt-desc":
      return sorted.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    case "createdAt-asc":
      return sorted.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
    case "default":
    default:
      return sorted;
  }
};

export const sortLabels: Record<string, string> = {
  "name-asc": "Naziv A → Z",
  "name-desc": "Naziv Z → A",
  "price-asc": "Cijena Najniža → Najviša",
  "price-desc": "Cijena Najviša → Najniža",
  "createdAt-desc": "Najnovije Prvo",
  "createdAt-asc": "Najstarije Prvo",
};
