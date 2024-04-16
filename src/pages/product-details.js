import React from 'react';
import Header from "@/components/Header";
import Link from 'next/link';
import Image from 'next/image';
import "../app/globals.css";
import prodactdetails from '../app/api/data';


const page = () => {
    console.log(prodactdetails);

    return (
        <>
        <Header/>
        <section className='product_detail'>
            <div className='container'>
                <div className='product_detail_main'>
                    <div className='product_content'>
                    {
                        prodactdetails.map((item, index) => (
                        <React.Fragment key={index}>
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={0}
                                height={0}
                                style={{width:'100%', height:'auto '}}
                                quality={100}
                                sizes="100vh"
                            />
                            <p className='pt-5'>{item.description1}</p>
                            <p>{item.description2}</p>
                        </React.Fragment>
                        ))
                    }
                    </div>
                    <div className='product_bar'>
                        <div className='product_heading'>
                            <h2>INSURANCE PREES FREE FIGMA HOMEPAGE.</h2>
                            <div className='product_bar_btn'>
                                <Link href="#" className='btn'>FREE DOWNLOAD</Link>
                                <Link href="#" className='btn_coder'>BUY CODED VERSION</Link>
                            </div>
                        </div>
                        <div className='social'>
                            <p>Share on:</p>
                            <div className='social_media'>
                                <Link href="#">
                                    <i className='m_icon m_facebook'></i>
                                </Link>
                                <Link href="#">
                                    <i className='m_icon m_twitter'></i>
                                </Link>
                                <Link href="#">
                                    <i className='m_icon m_linkedin'></i>
                                </Link>
                                <Link href="#">
                                    <i className='m_icon m_whatsapp'></i>
                                </Link>
                                <Link href="#">
                                        <i className='m_icon m_vecter'></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
            
    );
};

export default page;