import React, { useState } from 'react';
import EqualButton from '../../components/CalculatorComponents/EqualButton';
import NumericButton from '../../components/CalculatorComponents/NumericButton';
import OperationButton from '../../components/CalculatorComponents/OperationButton';
import * as math from 'mathjs';
import CustomWrapper from '../../components/CustomWrapper';

const Calculator: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [answer, setAnswer] = useState('');
    const [historyOfOperations, setHistoryOfOperations] = useState<string[]>([]);
    const onButtonClickHandler = (event: any) => {
        switch(event.target.textContent) {
            case '√': {
                setInputValue((prev) => prev + 'sqrt(');
                break;
            }
            case 'cos': {
                setInputValue((prev) => prev + 'cos(');
                break;
            }
            case 'sin': {
                setInputValue((prev) => prev + 'sin(');
                break;
            }
            case 'log': {
                setInputValue((prev) => prev + 'log(');
                break;
            }
            case 'tan': {
                setInputValue((prev) => prev + 'tan(');
                break;
            }
            case 'тт': {
                setInputValue((prev) => prev + 'pi');
                break;
            }
            case 'AC': {
                setInputValue("");
                break;
            }
            case 'x!': {
                setInputValue((prev) => prev + '!');
                break;
            }
            case 'Ans': {
                setInputValue((prev) => prev + answer);
                break;
            }
            case 'x²': {
                setInputValue((prev) => prev + '^')
                break;
            }
            case 'EXP': {
                setInputValue((prev) => prev + 'eps')
                break;
            }
            case 'Max': {
                setInputValue((prev) => prev + 'max(')
                break;
            }
            case 'ln': {
                setInputValue((prev) => prev + 'log10(')
                break;
            }
            default: {
                setInputValue((prev) => prev + event.target.textContent);
                break;
            }
        }
    }
    const onChangeInput = (event: any) => {
        setInputValue(event.target.value);
    }
    const equalButtonHandler = () => {
        try {
          const result = math.evaluate(inputValue.toString());
          setAnswer(result.toString());
          setInputValue(result.toString());
          setHistoryOfOperations((prev) => [...prev, `${inputValue}=${result}`]);
        } catch (error) {
            setInputValue('Error');
        }
      }
    return <div className='w-full h-fit bottom-10 mx-auto'>
        <CustomWrapper isHistory className='w-full my-5 mt-10 max-h-[24rem] min-h-[22rem] relative'>
            <p className='font-Lobster text-2xl font-semibold tracking-widest'>History</p>
            <ol className='list-decimal text-2xl list-inside overflow-scroll w-full'>
                {historyOfOperations.map((operation) => {
                    return <li key={operation} className='my-5'>{operation}<hr /></li>
                })}
            </ol>
        </CustomWrapper>
        <div>
            <input 
                className='w-full text-[34px] text-left pl-4 rounded-md'
                onChange={onChangeInput}
                value={inputValue}
            />
            <div className='grid grid-cols-7 gap-2 mt-2'>
                <OperationButton onClick={onButtonClickHandler}>&lt;</OperationButton>
                <OperationButton onClick={onButtonClickHandler}>&gt;</OperationButton>
                <OperationButton onClick={onButtonClickHandler}>x!</OperationButton>
                <OperationButton onClick={onButtonClickHandler}>(</OperationButton>
                <OperationButton onClick={onButtonClickHandler}>)</OperationButton>
                <OperationButton onClick={onButtonClickHandler}>%</OperationButton>
                <OperationButton onClick={onButtonClickHandler}>AC</OperationButton>
                <OperationButton onClick={onButtonClickHandler}>Max</OperationButton>
                <OperationButton onClick={onButtonClickHandler}>sin</OperationButton>
                <OperationButton onClick={onButtonClickHandler}>ln</OperationButton>
                <NumericButton onClick={onButtonClickHandler}>7</NumericButton>
                <NumericButton onClick={onButtonClickHandler}>8</NumericButton>
                <NumericButton onClick={onButtonClickHandler}>9</NumericButton>
                <OperationButton onClick={onButtonClickHandler}>/</OperationButton>
                <OperationButton onClick={onButtonClickHandler}>тт</OperationButton>
                <OperationButton onClick={onButtonClickHandler}>cos</OperationButton>
                <OperationButton onClick={onButtonClickHandler}>log</OperationButton>
                <NumericButton onClick={onButtonClickHandler}>4</NumericButton>
                <NumericButton onClick={onButtonClickHandler}>5</NumericButton>
                <NumericButton onClick={onButtonClickHandler}>6</NumericButton>
                <OperationButton onClick={onButtonClickHandler}>*</OperationButton>
                <OperationButton onClick={onButtonClickHandler}>e</OperationButton>
                <OperationButton onClick={onButtonClickHandler}>tan</OperationButton>
                <OperationButton onClick={onButtonClickHandler}>√</OperationButton>
                <NumericButton onClick={onButtonClickHandler}>1</NumericButton>
                <NumericButton onClick={onButtonClickHandler}>2</NumericButton>
                <NumericButton onClick={onButtonClickHandler}>3</NumericButton>
                <OperationButton onClick={onButtonClickHandler}>-</OperationButton>
                <OperationButton onClick={onButtonClickHandler}>Ans</OperationButton>
                <OperationButton onClick={onButtonClickHandler}>,</OperationButton>
                <OperationButton onClick={onButtonClickHandler}>x²</OperationButton>
                <NumericButton onClick={onButtonClickHandler}>0</NumericButton>
                <NumericButton onClick={onButtonClickHandler}>.</NumericButton>
                <EqualButton onClick={equalButtonHandler}>=</EqualButton>
                <OperationButton onClick={onButtonClickHandler}>+</OperationButton>
            </div>
        </div>
    </div>
};

export default Calculator;