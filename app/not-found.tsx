import React from 'react';
import Article from "@/shared/Article";

const NotFound = () => {
    return (
        <main className={'flex flex-col justify-center items-center '}>
            <Article title={'404 - not found'} style={'*:text-4xl'}/>
        </main>
    );
}

export default NotFound;