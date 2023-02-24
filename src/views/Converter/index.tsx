import React, { useState, useEffect } from "react";
import CustomWrapper from "../../components/CustomWrapper";
import FlipButton from "../../components/FlipButton";
import Dropdown from "../../components/Dropdown";
import {
  getUnits,
  getWeightRates,
  getSupportTableValues,
  getMeasureList,
} from "../../services/unit-values.service";
import CInput from "../../components/Input";
import { Unit, Measure } from "convert-units";
import SupportList from "../../components/SupportList";

const Converter: React.FC = () => {
  const measures = getMeasureList();
  const [converter, setConverter] = useState<Measure>(measures[0]);
  const units = getUnits(converter);
  const [fromUnit, setFromUnit] = useState<Unit>(units[3]);
  const [toUnit, setToUnit] = useState<Unit>(units[2]);
  const [fromAmount, setFromAmount] = useState(1);
  const [toAmount, setToAmount] = useState(0);
  const [currentRate, setCurrentRate] = useState<number>(1);
  useEffect(() => {
    setCurrentRate(getWeightRates(fromUnit, toUnit));
  }, [fromUnit, toUnit]);

  useEffect(() => {
    currentRate && setToAmount(+fromAmount * +currentRate);
  }, [currentRate, fromAmount]);
  
  useEffect(() => {
    setFromUnit(units[3]);
    setToUnit(units[2]);
  }, [converter]);

  const onFlipButtonHandler = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  const onChangeFromUnitHandler = (event: Unit) => {
    if (event === toUnit) {
      setFromUnit(toUnit);
      setToUnit(fromUnit);
    } else {
      setFromUnit(event);
    }
  };

  const onChangeToUnitHandler = (event: Unit) => {
    if (event === fromUnit) {
      setFromUnit(toUnit);
      setToUnit(fromUnit);
    } else {
      setToUnit(event);
    }
  };

  const onChangeFromAmountHandler = (event: any) => {
    setFromAmount(event.target.value);
  };

  const onChangeToAmountHandler = (event: any) => {
    setToAmount(event.target.value);
  };

  const onChangeConverterHandler = (event: Measure) => {

    setConverter(event);
  };

  const supportTable = getSupportTableValues(converter, units[0]);


  return (
    <div className="w-full justify-center mt-10 mx-auto">
      <Dropdown
        className="bg-white/20 border-0 mt-10"
        isConverterSelect
        value={converter}
        onChange={onChangeConverterHandler}
        data={measures}
      />
      <CustomWrapper className="mt-10">
        <div className="w-1/3">
          <Dropdown
            value={fromUnit}
            onChange={onChangeFromUnitHandler}
            data={units}
            label="From"
          />
          <CInput
            value={fromAmount.toString()}
            onChange={onChangeFromAmountHandler}
          />
        </div>
        <FlipButton onClick={onFlipButtonHandler} />
        <div className="w-1/3">
          <Dropdown
            value={toUnit}
            onChange={onChangeToUnitHandler}
            data={units}
            label="To"
          />
          <CInput
            value={toAmount.toString()}
            onChange={onChangeToAmountHandler}
          />
        </div>
      </CustomWrapper>
      <SupportList data={supportTable} />
    </div>
  );
};

export default Converter;
