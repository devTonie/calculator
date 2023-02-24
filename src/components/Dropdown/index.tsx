import React, { Fragment } from 'react';
import clsx from 'clsx';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon, ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
interface IProps {
    value: string;
    onChange: (event: any) => void;
    label?: string;
    data: {}[];
    isConverterSelect?: boolean;
    className?: string;
};
const Dropdown: React.FC<IProps> = ({
    value,
    onChange,
    label,
    data,
    className,
    isConverterSelect,
}) => {
    return <Listbox value={value} onChange={(event) => onChange(event)}>
    {({ open }) => (
      <>
        <Listbox.Label className="block text-sm font-medium text-gray-700">{label}</Listbox.Label>
        <div className="relative mt-1">
          <Listbox.Button className={clsx("relative cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm", {'w-fit' : isConverterSelect, 'w-full': !isConverterSelect}, className)}>
            <span className="block truncate text-xl">{value}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              {isConverterSelect ? <ChevronDownIcon className="h-5 w-5 text-gray-800" aria-hidden="true" /> :<ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />}
            </span>
          </Listbox.Button>

          <Transition
            show={open}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className={clsx("absolute z-10 mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm", {'w-fit' : isConverterSelect, 'w-full': !isConverterSelect})}>
              {data.map((currency: any) => (
                <Listbox.Option
                  key={currency}
                  className={({ active }) =>
                    classNames(
                      active ? 'text-white bg-indigo-600' : 'text-gray-900',
                      'relative cursor-default select-none py-2 pl-3 pr-9'
                    )
                  }
                  value={currency}
                >
                  {({ selected, active }) => (
                    <>
                      <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                        {currency}
                      </span>

                      {selected ? (
                        <span
                          className={classNames(
                            active ? 'text-white' : 'text-indigo-600',
                            'absolute inset-y-0 right-0 flex items-center pr-4'
                          )}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </>
    )}
  </Listbox>
};

export default Dropdown;