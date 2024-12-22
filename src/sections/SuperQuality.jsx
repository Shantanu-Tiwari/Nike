import React from 'react';
import Button from "../components/Button.jsx";
import {shoe8} from "../assets/images/index.js";

function SuperQuality(props) {
    return (
        <section id="about-us"
        className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
            <div className='flex flex-1 flex-col'>
                <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>We provide you
                <span className='text-coral-red'> Super Quality </span> Shoes
                </h2>
                <p className="mt-4 lg:max-w-lg info-text ">Ensuring quality and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality.
                </p>
                <div className="mt-11">
                    <Button label="View more" />
                </div>

            </div>
            <div className="flex-1 flex justify-center items-center">
                <img src={shoe8}
                     alt="shoe"
                     width={570}
                     height={522}
                     className="object-contain"/>
            </div>
        </section>
    );
}

export default SuperQuality;