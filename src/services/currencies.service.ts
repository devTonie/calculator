import axios from 'axios';

const apiKey = "f110c2e151126d3e1263"; // your API key
const baseUrl = "https://free.currconv.com/api/v7";

export const getListOfCurrencies = async () => {
  const response = await axios.get(`${baseUrl}/currencies`, {
    params: {
      apiKey
    }
  });
  return response.data.results;
};

export const getListOfCurrenciesForDropdown = async () => {
  const listOfCurrencies = await getListOfCurrencies();
  const arrayOfCurrencies = Object.keys(listOfCurrencies).map(key => `${listOfCurrencies[key].currencyName}, ${listOfCurrencies[key].id}`);
  return arrayOfCurrencies;
}

export const getCurrenciesRate = async (fromCurrency: string, toCurrency: string) => {
  const response = await axios.get(`${baseUrl}/convert`, {
    params: {
      q: `${fromCurrency}_${toCurrency}`,
      compact: "ultra",
      apiKey
    }
  });
  return response.data[`${fromCurrency}_${toCurrency}`];
};

export const getCurrencyRateHistory = async (currencies: string, startDate: string, endDate: string) => {
    const response = await axios.get(`${baseUrl}/convert?q=${currencies}&compact=ultra&date=${startDate}&endDate=${endDate}&apiKey=${apiKey}`)
    return response.data;
};