const houses = [
  { name: "Atreides", planets: "Calladan" },
  { name: "Corrino", planets: ["Kaitan", "Salusa Secundus"] },
  { name: "Harkonnen", planets: ["Giedi Prime", "Arrakis"] },
];

interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithID extends House {
  id: number;
}

type Filter = (house: House) => boolean;
function findHouses(houses: string, filter: Filter): HouseWithID[];
function findHouses(houses: string): HouseWithID[];
function findHouses(houses: House[]): HouseWithID[];
function findHouses(houses: House[], filter: Filter): HouseWithID[];

function findHouses(houses: House[] | string, filter?: Filter): HouseWithID[] {
  const hs: House[] = typeof houses === "string" ? JSON.parse(houses) : houses;
  const housesWithId = hs.map((house, id) => ({ ...house, id }));
  return filter ? housesWithId.filter(filter) : housesWithId;
}

console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));
console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
);
