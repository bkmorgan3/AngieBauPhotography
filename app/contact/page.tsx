'use client';

import { useRef, useState } from "react";


export default function Contact() {
    const ref = useRef<HTMLFormElement>(null)
    const [isLoading, setIsLoading ] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false)

    function sendEmail(data: FormData) {

        const emailData = {
            name: data.get('fullname'),
            subject: data.get('subject'),
            email: data.get('email'),
            message: data.get('message')
        }

        const apiEndpoint = '/api/email';

        setIsLoading(true)
        fetch(apiEndpoint, {
            method: 'POST',
            body: JSON.stringify(emailData)
        })
        .then(res => res.json())
        .then(resp => {
            setIsLoading(false)
            setDidSubmit(true)

        })
        .catch(err => {
            setIsLoading(false)
            console.error(err.message)
        })
}
   
    return (
        <div className="container flex justify-center mx-auto px-5 mb-10 h-screen grow">
            <div className="w-4/5 max-w-lg">
            <form 
                ref={ref}
                action={async (formData) => {
                    await sendEmail(formData)
                    ref.current?.reset()
                }} 
                
                className='rounded-lg shadow-xl flex flex-col md:w-4/5 px-8 py-8 bg-slate-100 ml-auto mr-auto'
                >
                <h1 className="text-2xl font-bold  text-slate-950">{didSubmit ? 'Your Message Has Been Sent' : 'Send Me a Message'}</h1>
            
                <label htmlFor="fullname" className="text-slate-950 font-light mt-8 ">
                    Full Name<span className='text-red-500'>*</span>
                </label>
                <input disabled={isLoading || didSubmit}  required type="text" id="fullname" name="fullname" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />

                <label htmlFor="email" className="text-slate-950 font-light mt-4 ">
                    Email<span className="text-red-500">*</span>
                </label>
                <input disabled={isLoading || didSubmit}  required type="email" name="email" id="email" className='bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500' />

                <label htmlFor="subject" className='text-slate-950 font-light mt-4'>
                    Subject<span className='text-red-500'>*</span>
                </label>
                <input disabled={isLoading || didSubmit}  type="text" name='subject' className='bg-transparent border-b py-2 pl-4 focus:outline-none  focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500' />

                <label htmlFor="message" className="text-slate-950 font-light mt-">
                    Message<span className="text-red-500">*</span>
                </label>
                <textarea disabled={isLoading || didSubmit}  name='message' className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" required></textarea>
                <button disabled={isLoading || didSubmit} className="px-10 mt-8 py-2 bg-slate-950 text-gray-50 font-light rounded-md text-lg disabled:opacity-50" type="submit">{isLoading ? 'Sending' : didSubmit ? 'Submitted' : 'Send'}</button>
            </form>
            </div>
        </div>
    )
}