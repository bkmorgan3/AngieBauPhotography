'use client';

import { sendEmail } from "@/lib/api"

export default async function Contact() {
   
    return (
        <div className="container flex justify-center mx-auto px-5">
            <form action={sendEmail} className='rounded-lg shadow-xl flex flex-col px-8 py-8 bg-slate-100'>
                <h1 className="text-2xl font-bold dark:text-gray-500">Send a message</h1>
                
                <label htmlFor="fullname" className="text-gray-500 font-light mt-8 dark:text-gray-500">
                    Full Name<span className='text-red-500'>*</span>
                </label>
                <input required type="text" id="fullname" name="fullname" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />

                <label htmlFor="email" className="text-gray-500 font-light mt-4 dark:text-gray-500">
                    Email<span className="text-red-500">*</span>
                </label>
                <input required type="email" name="email" id="email" className='bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500' />

                <label htmlFor="subject" className='text-gray-500 font-light mt-4 dark:text-gray-500'>
                    Subject<span className='text-red-500'>*</span>
                </label>
                <input type="text" name='subject' className='bg-transparent border-b py-2 pl-4 focus:outline-none  focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500' />

                <label htmlFor="message" className="text-gray-500 font-light mt-4 dark:text-gray-500">
                    Message<span className="text-red-500">*</span>
                </label>
                <textarea name='message' className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" required></textarea>
                <button className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg" type="submit">Send</button>
            </form>
        </div>
    )
}