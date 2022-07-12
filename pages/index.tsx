import type { NextPage } from 'next';
import Image from 'next/image';
import { BsBriefcase, BsHouseDoor } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import {
    AiFillLinkedin,
    AiOutlineTwitter,
    AiOutlineGithub,
} from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

const Home: NextPage = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='border p-5 rounded-lg shadow-md space-y-5 max-w-md space-y-4'>
                <div className='flex space-x-5'>
                    <Image
                        alt=''
                        className='bg-gradient-to-br from-cyan-800 via-purple-600 to-blue-600 rounded-full'
                        height={90}
                        objectFit='cover'
                        src='/author.png'
                        width={90}
                    />
                    <div className='flex flex-col justify-between'>
                        <div>
                            <h1 className='font-bold text-xl'>Gaurav Thakur</h1>
                            <p>Frontend Developer</p>
                        </div>
                        <div className='flex space-x-4 items-center'>
                            <MdEmail size={25} />
                            <AiFillLinkedin size={25} />
                            <AiOutlineGithub size={25} />
                            <AiOutlineTwitter size={25} />
                        </div>
                    </div>
                </div>
                <div className='space-y-2'>
                    <p>
                        Hey, I&lsquo;m Gaurav Thakur, a software engineer with a
                        passion for JavaScript. I&lsquo;m a full stack
                        developer, more inclined to frontend development.
                    </p>
                    <p>
                        I love to talk about React, JavaScript, and web
                        development in general, and I occasionally write about
                        them on <a href='#'>my blog</a>.
                    </p>
                </div>
                <div className='space-y-2 px-2'>
                    <div className='flex space-x-4 items-center'>
                        <BsBriefcase size={20} />
                        <p>
                            Works at{' '}
                            <span className='font-semibold'>MAQ Software</span>
                        </p>
                    </div>
                    <div className='flex space-x-4 items-center'>
                        <BsHouseDoor size={20} />
                        <p>
                            Lives in{' '}
                            <span className='font-semibold'>
                                Hyderabad, Telangana
                            </span>
                        </p>
                    </div>
                    <div className='flex space-x-4 items-center'>
                        <GoLocation size={20} />
                        <p>
                            From{' '}
                            <span className='font-semibold'>
                                Kullu, Himachal Pradesh
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
