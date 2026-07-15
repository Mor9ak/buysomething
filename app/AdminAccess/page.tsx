"use client";
import React from 'react';

const Page = () => {
    const [password, setPassword] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        console.log('in progress');
    }

    return (
        <div className="flex flex-col justify-center items-center ">
            <form className={'flex flex-col justify-center items-center text-textCol text uniPadding uniBorder w-fit'}
                  onSubmit={handleSubmit}>
                <label className={'text-2xl '}>Password</label>
                <input type={'password'} className={'text-xl '} placeholder={'Enter password...'}
                       onChange={handleChange}/>
            </form>
        </div>
    );
}

export default Page;