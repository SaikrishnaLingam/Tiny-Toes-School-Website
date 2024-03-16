import React from 'react'

const ContactUs = () => {
    return (
        <div>
            {/* <h1>Have any Queries?</h1>
            <h1>Here's how you can reach us: </h1>
            <p>Our Number: </p>
            <p>Our Email: </p>
            <p>Our Address: </p>
            <p>Still have doubts, send them here: </p> */}
            < section class="bg-white" >
                <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-black ">Have any more queries?</h2>
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-black ">Contact Us</h2>
                    <p class="mb-8 lg:mb-16 font-light text-center text-black  sm:text-xl">Let us know about your issues, concerns here:</p>
                    <form action="#" class="space-y-8">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-black ">Your email</label>
                            <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
                        </div>
                        <div>
                            <label for="subject" class="block mb-2 text-sm font-medium text-black ">Subject</label>
                            <input type="text" id="subject" class="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Let us know how we can help you" required />
                        </div>
                        <div class="sm:col-span-2">
                            <label for="message" class="block mb-2 text-sm font-medium text-black ">Your message</label>
                            <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Leave a comment..."></textarea>
                        </div>
                        <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
                    </form>
                </div>
            </section >
        </div>
    )
}

export default ContactUs

