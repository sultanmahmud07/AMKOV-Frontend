import { ISpecification } from '@/types';

const Specifications = ({specification}:{specification:ISpecification[]}) => {
    
  return (
    <div className=''>
      <ul className="flex flex-col gap-3">
        {specification.map((spec, index) => (
          <li  key={index} className="grid grid-cols-2 border border-[#EFEFEF]  rounded text-[#000000] font-semibold text-sm">
            <p className="bg-[#F9F9F9] px-2 p-2">{spec.key}:</p> 
            <p className="bg-[#FFFFFF] px-2 p-2">{spec.value}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Specifications
