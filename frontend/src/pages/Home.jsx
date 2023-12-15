import React from 'react'
import { Button, Card } from 'flowbite-react';
import TableComp from '../components/TableComp';

const Home = () => {
    return (
        <div >
            <section className='flex flex-col justify-center text-center my-5'>
                <br />
                <h1 className=" mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Today's Special</h1>
                <div className='py-10 pt-2 flex md:flex-row flex-col justify-center'>
                    <Card className="md:max-w-2xl max-w-sm mx-2 flex justify-center mt-5">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Boys
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            <TableComp />
                        </p>
                    </Card>
                    <Card className="md:max-w-2xl max-w-sm mx-2 flex justify-center mt-5">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Girls
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            <TableComp />
                        </p>
                    </Card>
                </div>
            </section>
            <section className="bg-white dark:bg-gray-800 rounded pt-16 mx-3 md:mx-0 mb-5 border-slate-700 border text-center">
                <div className=" md:flex-row py-8 px-4 mx-auto max-w-screen-xl lg:py-16 md:flex">
                    <div className='md:flex-col text-center' >
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Subscribe Now!</h1>
                        <p className=" text-center mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                            Subscribe for a daily mess menu updates. From breakfast to dinner, our ever-changing menu is a journey through flavors. Don't miss out— Enter your email and click "Subscribe Now" for your daily udpates!
                        </p>
                        <div className="">
                            <div className="mb-6 max-w-sm mx-auto">
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                            </div>
                            <button type="button" className="max-w-md text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Subscribe Now !</button>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Home