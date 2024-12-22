import React from 'react';
import {useState} from "react";
import Button from "../components/Button.jsx";
import arrowRight from "../assets/icons/arrow-right.svg"
import {shoes, statistics} from "../constants/index.js";
import {bigShoe1} from "../assets/images/index.js";
import ShoeCard from "../components/ShoeCard.jsx";
function Hero() {
    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
    return (
        <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-6 max-container">
            {/* Left Content */}
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full px-6 pt-20 sm:pt-28">
                <p className="text-lg sm:text-xl font-montserrat text-coral-red">Our Summer Collection</p>
                <h1 className="mt-6 sm:mt-10 font-palanquin text-5xl sm:text-8xl font-bold leading-tight sm:leading-none">
                    <span className="xl-bg-white xl:whitespace-nowrap relative z-10 pr-6 sm:pr-10">The New Arrival</span>
                    <br />
                    <span className="text-coral-red inline-block mt-2 sm:mt-3">Nike</span> Shoes
                </h1>
                <p className="font-montserrat text-slate-gray text-base sm:text-lg leading-6 sm:leading-8 mt-4 sm:mt-6 mb-6 sm:mb-10 sm:max-w-sm">
                    Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
                </p>
                <Button label="Shop now" iconURL={arrowRight} />
                <div className="flex justify-start items-start flex-wrap w-full mt-12 sm:mt-20 gap-8 sm:gap-16">
                    {statistics.map((stat, index) => (
                        <div key={`${stat.label}-${index}`}>
                            <p className="text-2xl sm:text-4xl font-palanquin font-bold">{stat.value}</p>
                            <p className="leading-6 sm:leading-7 font-montserrat text-slate-gray">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Content */}
            <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-20 bg-primary bg-hero bg-cover bg-center">
                <img
                    src={bigShoeImg}
                    alt="shoe collection"
                    width={500}
                    height={400}
                    className="object-contain relative z-10"
                />
                <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-4">
                    {shoes.map((shoe, index) => (
                        <div key={`${shoe}-${index}`}>
                            <ShoeCard
                                imgURL={shoe}
                                changeBigShoeImage={setBigShoeImg}
                                bigShoeImg={bigShoeImg}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


export default Hero;