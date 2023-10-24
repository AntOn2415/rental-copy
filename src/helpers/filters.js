import { fetchCarAll } from "../service/CatalogCarsApi";

export async function fetchCarMakes() {
  try {
    const allCars = await fetchCarAll();
    const allMakes = allCars.map(advertisement => advertisement.make);
    const uniqueMakes = [...new Set(allMakes)].sort();

    return uniqueMakes;
  } catch (error) {
    throw error;
  }
}

export async function fetchCarPrices() {
  try {
    const allCars = await fetchCarAll();
    const allPrices = allCars.map(advertisement => {
      const price = parseInt(advertisement.rentalPrice.replace("$", ""), 10);
      return Math.floor(price / 10) * 10;
    });

    const uniquePrices = [...new Set(allPrices)].sort((a, b) => a - b);

    return uniquePrices;
  } catch (error) {
    throw error;
  }
}
