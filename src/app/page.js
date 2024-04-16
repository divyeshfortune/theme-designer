import React from 'react';
import Header from "@/components/Header";
import Link from 'next/link';
import Image from 'next/image';
import resource from '../app/api/data';

const Page = () => {
    
    return (
        <>
            <Header />
            <section className='hero'>
                <div className='container'>
                    <div className='hero_main'>
                        <h1>FIGMA RESOURCES FREE DOWNLOAD<span className='dot_yellow'>.</span></h1>
                        <p>Download free figma website templates, landing pages, admin dashboards and more.</p>
                        <Link href="/" className='btn'>Download Now</Link>
                    </div>
                </div>
            </section>

            <section className='product_box'>
                <div className='container'>
                    <div className='categaroy_main'>
                        <div className='prod_box'>
                            {resource.map((item, index) => (
                                <div key={index}>
                                    <Link href="/product-details">
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            width={0}
                                            height={0}
                                            layout="responsive"
                                            quality={100}
                                            sizes="100vh"
                                        />
                                    </Link>
                                </div>
                            ))}
                        </div>
                        <div className='caption_download_main'>
                            <p className='box_caption'>Modernize Analytics Dashboard Figma</p>
                            <button className='download_box'><i className='m_download'></i></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;