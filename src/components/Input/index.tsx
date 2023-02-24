import React from 'react';

interface IProps {
    value: string;
    onChange: (event: any) => void;

}
const CInput: React.FC<IProps> = ({
    value,
    onChange,
}) => {
    return <div className="mt-5 border-b border-gray-300 focus-within:border-indigo-600">
        <input
          type="text"
          pattern="[0-9]*"
          className="block w-full bg-gray-300/40 text-2xl px-2 border-0 border-b-1 border-transparent focus:border-indigo-600 focus:ring-0 outline-none"
          value={value}
          onChange={onChange}
        />
      </div>
};

export default CInput;