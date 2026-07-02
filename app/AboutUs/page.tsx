import React from 'react';
import Article from "@/shared/Article";
import data from './data/data.json'

const AboutUs = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <Article title={data.title} text={data.text} />
        </div>
    );
}

export default AboutUs;