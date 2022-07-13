import Image from 'next/image';
import { AnchorIconButton } from './AnchorIconButton';
import { MdEmail } from 'react-icons/md';
import {
    AiFillLinkedin,
    AiOutlineGithub,
    AiOutlineTwitter,
} from 'react-icons/ai';

export function Header() {
    return (
        <div className='flex space-x-5'>
            <div className='self-center'>
                <Image
                    unoptimized
                    alt='Gaurav Thakur'
                    className='bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full self-center'
                    height={100}
                    objectFit='cover'
                    quality={100}
                    src='/author.png'
                    width={100}
                />
            </div>
            <div className='flex flex-col justify-between'>
                <div>
                    <h1 className='font-bold text-xl bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent'>
                        Gaurav Thakur
                    </h1>
                    <p className='text-gray-600'>Frontend Developer</p>
                </div>
                <div className='flex items-center'>
                    <AnchorIconButton href='mailto:gthakur581@gmail.com'>
                        <MdEmail className='text-gray-600' size={25} />
                    </AnchorIconButton>
                    <AnchorIconButton href='https://linkedin.com/in/gauravcodes'>
                        <AiFillLinkedin className='text-gray-600' size={25} />
                    </AnchorIconButton>

                    <AnchorIconButton href='https://github.com/thegauravthakur'>
                        <AiOutlineGithub className='text-gray-600' size={25} />
                    </AnchorIconButton>
                    <AnchorIconButton href='https://twitter.com/gauravcodes'>
                        <AiOutlineTwitter className='text-gray-600' size={25} />
                    </AnchorIconButton>
                </div>
            </div>
        </div>
    );
}
