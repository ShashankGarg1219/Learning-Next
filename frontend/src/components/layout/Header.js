import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

function Header() {
    return (
        <header className='text-white sticky top-0 z-50 bg-dark stiky body-font'>

            <div className='container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center'>
                <Link href={"/"} className="flex title-font font-extrabold items-center uppercase text-gray-100">
                {/* <Image alt="" src="/https://pngtree.com/freepng/ebook-learning-logo-design-template_7683306.htmlhttps://icon2.cleanpng.com/20180406/hwq/avbsytqax.webphttps://icon2.cleanpng.com/20180421/pdw/avuwm68sa.webphttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOHXIBrTfskhU6Zuoqv456RDHcaxwSU87xi0k9Fjh-xQHxOi-Op72jpS3DZg&s" width={60} height={60} /> */}
                    <p className='leading-5 text-xl mx-2'>Smart Learning solutions</p>
                </Link>
                <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>

                    <Link href={"/login"} className="text-white mr-5 cursor-pointer hover:text-gray-200 flex items-center">
                        Login
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                        </svg>
                    </Link>

                    <Link href={"/signup"} className="text-white mr-5 cursor-pointer hover:text-gray-200 flex items-center">
                        Signup
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                        </svg>
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
