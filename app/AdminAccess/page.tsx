"use client";
import React from 'react';

const Page = () => {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('in progress');

        const formData = new FormData(event.currentTarget);

        try {
            const response = await fetch('/api/adminAccess', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                alert('Written successfully.');
            } else {
                alert('Error occurred.');
            }

        } catch (error) {
            console.log(`Error: ${error} - ${new Date().toISOString()}`);
        }
    }

    return (
        <div className="flex flex-col justify-center items-center ">
            <form className={'flex flex-col justify-center items-center text-textCol text uniPadding uniBorder w-fit gap-5'}
                  onSubmit={handleSubmit}>
                <label className={'text-2xl '}>Password</label>
                <input type={'password'} name={'password'} required className={'text-xl '} placeholder={'Enter password...'}/>
                <button type="submit" className={'bg-accentCol rounded-full w-full px-7 py-2 '}>Submit</button>
            </form>
        </div>
    );
}

export default Page;