import type { NextPage } from 'next';
import { SelfIntroduction } from '../components/SelfIntroduction';
import { Header } from '../components/Header';
import { PreciseInformation } from '../components/PreciseInformation';

const Home: NextPage = () => {
    return (
        <div className='h-screen flex items-center justify-center bg-gray-50'>
            <div className='border p-5 md:p-7 rounded-lg shadow-md space-y-6 max-w-md bg-white'>
                <Header />
                <SelfIntroduction />
                <PreciseInformation />
            </div>
        </div>
    );
};

export default Home;
