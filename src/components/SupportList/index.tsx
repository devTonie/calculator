import React from 'react';

interface IProps {
    data: string[];
}
const SupportList: React.FC<IProps> = ({
    data,
}) => {
    return <div className='w-full mt-10 h-fit bg-gray-200/40 rounded-md font-Lobster'>
        <div className='flex justify-between'>
            <p className='p-5 text-2xl font-semibold'>Auxiliary table</p>
        </div>
        <ul className='p-5 list-disc list-inside columns-3'>
            {data.map((value) => {
                return <li key={value} className='mb-5 w-full break-inside-avoid'>{value}</li>
            })}
        </ul>
    </div>
};

export default SupportList;