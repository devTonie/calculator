import React, { useState, useEffect, useMemo, Fragment } from "react";
import Dropdown from "../../components/Dropdown";
import CInput from "../../components/Input";
import {
  getCurrenciesRate,
  getListOfCurrenciesForDropdown,
} from "../../services/currencies.service";
import CustomWrapper from "../../components/CustomWrapper";
import FlipButton from "../../components/FlipButton";

interface Currency {
  name: string;
  code: string;
}

const CurrencyConverter: React.FC = () => {
  const [fromCurrency, setFromCurrency] = useState<Currency>({
    name: "United States Dollar",
    code: "USD",
  });
  const [toCurrency, setToCurrency] = useState<Currency>({
    name: "Euro",
    code: "EUR",
  });
  const [fromAmount, setFromAmount] = useState<number>(1);
  const [toAmount, setToAmount] = useState<number>(1);
  const [currentRate, setCurrentRate] = useState<number>(1);
  const [listOfCurrencies, setListOfCurrencies] = useState<Currency[]>([]);
  
  useEffect(() => {
    const fetchListOfCurrencies = async () => {
      const currencies = await getListOfCurrenciesForDropdown();
      setListOfCurrencies(currencies.map((currency) => ({ name: currency.split(", ")[0], code: currency.split(", ")[1] })));
    };
    const fetchCurrentRates = async () => {
      setCurrentRate(await getCurrenciesRate(fromCurrency.code, toCurrency.code));
    };
    fetchCurrentRates();
    fetchListOfCurrencies();
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    setToAmount(+fromAmount * +currentRate);
  }, [fromAmount, currentRate]);

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const handleChangeFromCurrency = (event: string) => {
    const currency = listOfCurrencies.find((c) => c.name === event);
    if (currency) {
      if (currency.code === toCurrency.code) {
        swapCurrencies();
      } else {
        setFromCurrency(currency);
      }
    }
  };

  const handleChangeToCurrency = (event: string) => {
    const currency = listOfCurrencies.find((c) => c.name === event);
    if (currency) {
      if (currency.code === fromCurrency.code) {
        swapCurrencies();
      } else {
        setToCurrency(currency);
      }
    }
  };

  const handleChangeFromAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!isNaN(+value)) {
      setFromAmount(+value);
    }
  };

  const handleChangeToAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!isNaN(+value)) {
      setToAmount(+value);
    }
  };
  
  const currencyOptions = useMemo(() => listOfCurrencies.map(c => c.name), [listOfCurrencies]);

  return (
    <Fragment>
        <CustomWrapper className="mx-auto mt-40">
        <div className="w-1/3">
            <Dropdown
            value={fromCurrency.name}
            onChange={handleChangeFromCurrency}
            data={currencyOptions}
            label="From"
            />
            <CInput value={fromAmount.toString()} onChange={handleChangeFromAmount} />
        </div>
        <FlipButton onClick={swapCurrencies} />
        <div className="w-1/3">
            <Dropdown
            value={toCurrency.name}
            onChange={handleChangeToCurrency}
            data={currencyOptions}
            label="To"
            />
            <CInput value={toAmount.toString()} onChange={handleChangeToAmount} />
        </div>
        </CustomWrapper>
        
    </Fragment>
  );
};

export default CurrencyConverter;
