import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

function MyRadioGroup() {
  let [plan, setPlan] = useState('startup')

  return (
   
    <RadioGroup value={plan} onChange={setPlan} className="ml-3" >
      <RadioGroup.Label>Plan</RadioGroup.Label>
      <RadioGroup.Option value="startup" className=''>
        {/*
          Use both `active` and `checked` to differentiate between the
          active and checked states.
        */}
        {({ active, checked }) => (
         console.log(plan),
          <div className='bg-red-500'>
            <span
              className={`
                ${checked ? 'bg-indigo-600 ' : ''}
                ${active ? 'ring-2 ring-indigo-500' : ''}
              w-4 h-4 rounded-full `}
            />
            Startup
          </div>
          
        )
        }
      </RadioGroup.Option>
      {/* ... */}
      <RadioGroup.Option value="demo">
        {/*
          Use both `active` and `checked` to differentiate between the
          active and checked states.
        */}
        {({ active, checked }) => (
        
          <>
            <span
              className={'w-4 h-4 font-bold rounded-full bg-gray-600'}
            />
            demo
          </>
          
        )
        }
      </RadioGroup.Option>
    </RadioGroup>
  )
}

export default MyRadioGroup