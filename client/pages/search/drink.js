import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import { fadeOutPage } from '../../animations/navigation';

import Layout from '../../components/Layout';
import allDrinksData from '../../data/allDrinks';

const DrinkSearch = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredDrinksData, setFilteredDrinksData] = useState([]);
  const [drinksData, setDrinksData] = useState(allDrinksData);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    router.push(`/search/results?search=${searchText}`);
  };

  useEffect(() => {
    let matches = drinksData.filter((drink) => {
      const regex = new RegExp(`${searchText}`, 'gi');
      return drink.productName.match(regex);
    });

    if (searchText.length < 2) {
      matches = [];
    }

    setFilteredDrinksData(matches);
  }, [searchText]);

  return (
    <Layout title='Search by Drink'>
      <motion.section
        variants={fadeOutPage}
        exit='exit'
        initial='initial'
        animate='animate'
        className='text-gray-700 body-font bg-hero-blend'
      >
        <div className=''>
          <div className=''>
            <div className='container mx-auto flex flex-col px-5 py-24 justify-center items-center'>
              <div className='w-full md:w-2/3 flex flex-col mb-16 items-center text-center'>
                <h1 className='font-heading sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
                  Search by Drink
                </h1>
                <p className='mb-8 leading-relaxed'>
                  Have a specific drink in mind? Want to compare UK supermarket
                  prices on it? No trouble at all. Just type it in the box below
                  and click search.
                </p>
                <div className='w-full'>
                  <form
                    onSubmit={handleSubmit}
                    className='flex w-full justify-center'
                  >
                    <input
                      className='shadow-inner rounded-md mr-4 transition duration-150 ease-in-out text-gray-800 focus:ring-green-500 focus:border-green-500 focus:outline-none focus:ring-2 px-4 lg:w-full xl:w-1/2 w-2/4 md:w-full'
                      placeholder='The drink I want is...'
                      type='text'
                      onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                      type='submit'
                      className='inline-flex text-gray-700 border-0 py-2 px-2 -ml-16 hover:text-green-500 focus:outline-none transition duration-150 ease-in-out'
                    >
                      <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                        ></path>
                      </svg>
                    </button>
                  </form>
                </div>
                <ul className='z-10 shadow-md'>
                  {filteredDrinksData.map((drink) => {
                    return (
                      <Link
                        href='/products/[item]'
                        as={`/products/${drink.productID}`}
                        key={drink.productID}
                      >
                        <a>
                          <li className='px-5 py-10 cursor-pointer list-none w-96 h-16 flex flex-col justify-center text-left bg-white border-gray-200 hover:bg-gray-200 hover:text-gray-800'>
                            <h2 className='text-sm font-semibold tracking-wider'>
                              {drink.productName}
                            </h2>
                            <h2 className='text-xs'>{drink.volume}</h2>
                            <h2 className='text-xs'>
                              {drink.drinkType} || {drink.drinkSubtype}
                            </h2>
                          </li>
                        </a>
                      </Link>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <svg
          className='-mt-10 z-0'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
        >
          <path
            fill='#55BA82'
            fillOpacity='1'
            d='M0,192L48,186.7C96,181,192,171,288,149.3C384,128,480,96,576,122.7C672,149,768,235,864,240C960,245,1056,171,1152,122.7C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
          ></path>
        </svg>
      </motion.section>
    </Layout>
  );
};

export default DrinkSearch;
