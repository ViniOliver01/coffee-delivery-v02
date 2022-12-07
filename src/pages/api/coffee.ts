import { NextApiRequest, NextApiResponse } from "next";
import { fauna } from "./../../services/fauna";
import { query as q } from "faunadb";

const coffeeList = [
  {
    id: 0,
    type: ["tradicional"],
    name: "Expresso Tradicional",
    image: "https://imgur.com/Z1leeFh.png",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
  },
  {
    id: 1,
    type: ["tradicional"],
    name: "Expresso Americano",
    image: "https://imgur.com/O3V4Chj.png",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.9,
  },
  {
    id: 2,
    type: ["tradicional"],
    name: "Expresso Cremoso",
    image: "https://imgur.com/aUM1PTo.png",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
  },
  {
    id: 3,
    type: ["tradicional", "gelado"],
    name: "Expresso Gelado",
    image: "https://imgur.com/jl60LSk.png",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.9,
  },
  {
    id: 4,
    type: ["tradicional", "com leite"],
    name: "Café com Leite",
    image: "https://imgur.com/lHItqCI.png",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.9,
  },
  {
    id: 5,
    type: ["tradicional", "com leite"],
    name: "Latte",
    image: "https://imgur.com/fRW6Jds.png",
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
  },
  {
    id: 6,
    type: ["tradicional", "com leite"],
    name: "Capuccino",
    image: "https://imgur.com/L90mT9p.png",
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
  },
  {
    id: 7,
    type: ["tradicional", "com leite"],
    name: "Macchiato",
    image: "https://imgur.com/qoTrw9B.png",
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.9,
  },
  {
    id: 8,
    type: ["tradicional", "com leite"],
    name: "Mocaccino",
    image: "https://imgur.com/3BIV1ak.png",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.9,
  },
  {
    id: 9,
    type: ["especial", "com leite"],
    name: "Chocolate Quente",
    image: "https://imgur.com/GFrWOfy.png",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.9,
  },
  {
    id: 10,
    type: ["especial", "alcoólico", "gelado"],
    name: "Cubano",
    image: "https://imgur.com/hkseRME.png",
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.9,
  },
  {
    id: 11,
    type: ["especial"],
    name: "Havaiano",
    image: "https://imgur.com/EKbl1pT.png",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.9,
  },
  {
    id: 12,
    type: ["especial"],
    name: "Árabe",
    image: "https://imgur.com/FM5c0U1.png",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.9,
  },
  {
    id: 13,
    type: ["especial", "alcoólico"],
    name: "Irlandês",
    image: "https://imgur.com/6Xt11dd.png",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.9,
  },
];

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("🚀 / req", req);
  return res.status(200).json(coffeeList);
};
