import React from 'react';
import CardHolder from "@/widgets/CardHolder/CardHolder";
import Article from "@/shared/Article";

const Home = () => {
    return (
        <div className={'flex flex-col justify-center items-center gap-9'}>
            <Article title={'Welcome to Buy something'} />
            <CardHolder />
        </div>
    );
}

export default Home;
