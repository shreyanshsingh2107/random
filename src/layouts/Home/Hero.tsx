import React from "react";


const Hero = () => {

    return (
        <section className="p-[2rem_1rem] tablet:p-[6rem_4rem]">
            <article className="flex w-full flex-col items-center justify-center gap-0 tablet:flex-row tablet:gap-8">
                <div className="mx-auto flex h-full w-full max-w-screen-tablet flex-col justify-center">
                    <div>
                        <h2 className="mb-5 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-left tablet:mb-6 tablet:text-3xl desktop:text-6xl">
                        Empowering Education & Innovation
                        </h2>
                        <p className="mb-10 text-center text-lg font-normal leading-[150%] text-gray-500 sm:text-left tablet:mb-10 tablet:text-xl tablet:leading-[30px]">Transforming learning experiences with our services for schools, events, and competitions.</p>
                    </div>
                    <div className="w-full tablet:w-fit">
            <div className="flex w-full flex-col justify-center gap-3 tablet:max-w-full tablet:flex-row tablet:items-center tablet:gap-0">
                <div className="flex w-full justify-center tablet:w-fit hide-on-proposal">
                    <form className="tablet:max-w-full w-full">
                        <div className="flex flex-col justify-center gap-3 tablet:flex-row tablet:items-center tablet:gap-0">
                            <div className="relative w-full flex-1 tablet:mr-3">
                                <div className="flex flex-col gap-2 w-full">
                                    <div className="relative">
                                        <input
                                            className="py-3 rounded-lg outline outline-1 w-full min-h-[48px] focus:outline-brand-600 focus:border-brand-600 text-base font-sans bg-gray-50 text-gray-900 placeholder-gray-500 border-none focus:outline-brand-600 outline-offset-[-1px] outline-gray-300 pl-4 pr-4"
                                            placeholder="Enter your e-mail address"
                                            data-testid="input-input"
                                            type="email"
                                            name="email"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="m-1 tablet:w-fit">
                                <button
                                    className="flex font-medium truncate font-sans rounded-lg flex-row gap-2 items-center justify-center h-[48px] py-3 text-base font-medium px-5 text-white w-full"
                                    type="submit"
                                    style={{ backgroundColor: 'rgb(14, 159, 110)', color: 'rgb(255, 255, 255)' }}
                                >
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
                </div>
                <div className="mt-4 w-auto items-center justify-center sm:flex tablet:mt-12">
                    <img src="https://images.unsplash.com/photo-1604933834215-2a64950311bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjIwNjV8MHwxfHNlYXJjaHwxfHxTdHVkZW50cyUyMGVuZ2FnaW5nJTIwaW4lMjBhJTIwaGFja2F0aG9ufGVufDF8MHx8fDE3MzA4MjU5ODN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Hero" className="w-full max-w-full rounded-lg object-cover shadow-lg dark:hidden" />
                    </div>
            </article>
        </section>
    );
}

export default Hero;