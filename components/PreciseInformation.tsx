import { BsBriefcase, BsHouseDoor } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';

export function PreciseInformation() {
    return (
        <div className='space-y-2 px-2'>
            <div className='flex space-x-4 items-center'>
                <BsBriefcase className='text-gray-600' size={20} />
                <p>
                    Works at <span className='font-semibold'>MAQ Software</span>
                </p>
            </div>
            <div className='flex space-x-4 items-center'>
                <BsHouseDoor className='text-gray-600' size={20} />
                <p>
                    Lives in{' '}
                    <span className='font-semibold'>Hyderabad, Telangana</span>
                </p>
            </div>
            <div className='flex space-x-4 items-center'>
                <GoLocation className='text-gray-600' size={20} />
                <p>
                    From{' '}
                    <span className='font-semibold'>
                        Kullu, Himachal Pradesh
                    </span>
                </p>
            </div>
        </div>
    );
}
