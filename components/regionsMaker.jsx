import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import {useDispatch} from 'react-redux'
import {country} from '../redux/countrySlice'

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

function WatchProviderRegion({...data}) {
 const [selected, setSelected] = useState(data.results[0])
  const dispatch = useDispatch();

    
  return (
    <Listbox value={selected} onChange={e => (
      setSelected(e),
      dispatch(country(e.iso_3166_1))
    )}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium text-gray-700">Select your region:</Listbox.Label>
          <div className="mt-1 relative">
            <Listbox.Button className="relative w-10/12 bg-gray-200 border border-gray-500 rounded-md shadow-sm pl-3 pr-10 py-2 mb-1 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-darkBlue focus:border-darkBlue sm:text-sm">
              <span className="flex items-center">
                <Image  src={`https://countryflagsapi.com/svg/${selected.iso_3166_1}`} alt="" height={50} width={50} className="flex-shrink-0 h-6 w-6 rounded-full"  />
                <span className="ml-3 block truncate">{selected.native_name}</span>
              </span>
              <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 ml-7  w-11/12 bg-gray-200 shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {data.results.map(person => (
                  <Listbox.Option
                    key={person.iso_3166_1}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-3 pr-9'
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <Image src={`https://countryflagsapi.com/svg/${person.iso_3166_1}`} alt="flag" height={40} width={40} className="flex-shrink-0 h-6 w-6 rounded-full"  placeholder='blur' blurDataURL={`https://countryflagsapi.com/svg/${person.iso_3166_1}`} />
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal truncate', 'ml-3 block')}
                          >
                            {person.native_name}
                          </span>
                        </div>

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
  )
}

export default WatchProviderRegion

