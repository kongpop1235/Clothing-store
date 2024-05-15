'use client'
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'
import { useState } from 'react'

export default function Home() {
    const [openQuestionsDetail, setOpenQuestionsDetail] = useState([
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
    ])

    const slideLeft = () => {
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 376.5
    }

    const slideRight = () => {
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 376.5
    }

    const updateOpenQuestionsDetail = (row, item) => {
        const updated = [...openQuestionsDetail]
        updated[row][item] = !updated[row][item]
        setOpenQuestionsDetail(updated)
    }

    return (
        <main className='home-page-main'>
            <div className='min-[1700px]:mx-40 grid grid-cols-1 gap-[200px]'>
                <div className='grid grid-cols-11 gap-x-20'>
                    <div className='h-full grid col-span-6 content-between justify-between'>
                        <div className='mb-20'>
                            <div className='flex relative justify-between'>
                                <h1 className='uppercase text-5xl font-semibold'>Elevate Your Style with Klothink</h1>
                                <p className='uppercase text-98989A text-nowrap text-right'>Style Redefined.</p>
                            </div>
                            <p className='text-656567 mt-6'>Explore a world of fashion at Klothink, where trends meet affordability. Immerse yourself in the latest styles and seize exclusive promotions.</p>
                            <div className='flex mt-12'>
                                <button className='bg-FFD400 rounded-full px-6 py-5 mr-2.5 button-main-page flex content-center justify-center font-semibold'>
                                    <svg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            fill-rule='evenodd'
                                            clip-rule='evenodd'
                                            d='M5.125 4.5V5.25H3.13787C2.17832 5.25 1.37362 5.97444 1.27317 6.92872L0.010015 18.9287C-0.106519 20.0358 0.761522 21 1.87471 21H17.3754C18.4886 21 19.3567 20.0358 19.2401 18.9287L17.977 6.92872C17.8765 5.97444 17.0718 5.25 16.1123 5.25H14.125V4.5C14.125 2.01472 12.1103 0 9.625 0C7.13972 0 5.125 2.01472 5.125 4.5ZM9.625 1.5C7.96815 1.5 6.625 2.84315 6.625 4.5V5.25H12.625V4.5C12.625 2.84315 11.2819 1.5 9.625 1.5ZM6.625 9.75C6.625 11.4069 7.96815 12.75 9.625 12.75C11.2819 12.75 12.625 11.4069 12.625 9.75V9C12.625 8.58579 12.9608 8.25 13.375 8.25C13.7892 8.25 14.125 8.58579 14.125 9V9.75C14.125 12.2353 12.1103 14.25 9.625 14.25C7.13972 14.25 5.125 12.2353 5.125 9.75V9C5.125 8.58579 5.46079 8.25 5.875 8.25C6.28921 8.25 6.625 8.58579 6.625 9V9.75Z'
                                            fill='#262626'
                                        />
                                    </svg>
                                    <p className='ml-2'>Shop Now</p>
                                </button>
                                <button className='border border-F1F1F3 rounded-full bg-white px-6 py-5 button-main-page content-self-center justify-self-center font-semibold button-defult'>Contact Us</button>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-5 p-5 bg-F7F7F8 home-page-main-contener rounded-xl ml-auto'>
                            <div className='col-span-1 bg-white rounded-xl p-7 content-center'>
                                <p className='uppercase home-page-main-p-head font-semibold'>over 1000+</p>
                                <p className='home-page-main-p-text'>Trendsetting Styles</p>
                            </div>
                            <div className='col-span-1 bg-white rounded-xl p-7'>
                                <p className='uppercase home-page-main-p-head font-semibold'>99%</p>
                                <p className='home-page-main-p-text'>Customer Satisfaction Rate</p>
                            </div>
                            <div className='col-span-1 bg-white rounded-xl p-7'>
                                <p className='uppercase home-page-main-p-head font-semibold'>24/7</p>
                                <p className='home-page-main-p-text'>Shopping Convenience</p>
                            </div>
                            <div className='col-span-1 bg-white rounded-xl p-7'>
                                <p className='uppercase home-page-main-p-head font-semibold'>30-Day</p>
                                <p className='home-page-main-p-text'>Hassle-Free Returns</p>
                            </div>
                        </div>
                    </div>
                    <div className='relative col-span-5 rounded-[20px] bg-F1F1F3 home-page-main-image-area justify-self-end'>
                        <Image
                            src='/home/sub_container.png'
                            alt='cart icon'
                            style={{
                                width: 'auto',
                                height: 'auto',
                            }}
                            width={500}
                            height={100}
                        />
                        <div className='absolute top-0 h-full w-full py-10 px-5 grid content-between'>
                            <div className='flex justify-between h-full'>
                                <div className='bg-white rounded-full grid content-center px-3.5 py-2 cursor-default'>
                                    <p className='text-base'>Best Seller</p>
                                </div>
                                <div className='flex h-full'>
                                    <button className='rounded-full bg-white p-3.5 mr-2.5 button-change-item grid content-center justify-center'>
                                        <svg width='18' height='18' viewBox='0 0 11 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path id='styled-element' d='M9.75 1.5L2.25 9L9.75 16.5' stroke-width='2' />
                                        </svg>
                                    </button>
                                    <button className='rounded-full bg-white p-3.5 button-change-item grid content-center justify-center flip'>
                                        <svg width='18' height='18' viewBox='0 0 11 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path id='styled-element' d='M9.75 1.5L2.25 9L9.75 16.5' stroke-width='2' />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='rounded-full bg-white py-2 px-4 flex'>
                                    <p className='pr-2'>Color</p>
                                    <div className='girid content-center rounded-full flex'>
                                        <div className='place-self-center rounded-full w-5 h-5 bg-[#739CDA]'></div>
                                        <div className='place-self-center rounded-full w-5 h-5 mx-1 bg-[#DAA573]'></div>
                                        <div className='place-self-center rounded-full w-5 h-5 bg-[#DAD673]'></div>
                                    </div>
                                </div>
                                <div className='rounded-full bg-white py-2 px-4 flex justify-self-center cursor-default'>
                                    <p>Sizes</p>
                                    <div className='ml-1 flex'>
                                        <div className='rounded-full bg-F7F7F8 border border-F1F1F3 px-3 mr-1'>S</div>
                                        <div className='rounded-full bg-F7F7F8 border border-F1F1F3 px-3 mr-1'>M</div>
                                        <div className='rounded-full bg-F7F7F8 border border-F1F1F3 px-3 mr-1'>L</div>
                                        <div className='rounded-full bg-F7F7F8 border border-F1F1F3 px-3'>XL</div>
                                    </div>
                                </div>
                                <div className='rounded-full bg-white py-2 px-4 flex cursor-default'>
                                    <p>View Similar</p>
                                    <svg className='my-1' xmlns='http://www.w3.org/2000/svg' height='15px' width='24px' viewBox='0 0 24 24' fill='#000000'>
                                        <path d='M0 0h24v24H0z' fill='none' />
                                        <path d='M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z' />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Discover fashion */}
                <div className='grid grid-cols-1 gap-y-20'>
                    <div className='flex justify-between'>
                        <div className='mr-[300px]'>
                            <div className='flex mb-9'>
                                <h2 className='uppercase text-5xl font-semibold mr-2'>Discover Fashion.</h2>
                                <p className='uppercase text-98989A text-nowrap text-right self-start'>Products</p>
                            </div>
                            <p className='text-656567 mt-6'>Dive into a world of fashion innovation at Klothink. Our carefully curated collections bring together the latest trends and timeless classics, ensuring you find the perfect pieces for every occasion.</p>
                        </div>
                        <div className='self-center'>
                            <button className='bg-FFD400 rounded-full px-6 py-5 content-center justify-center font-semibold'>
                                <p className='ml-2 text-nowrap'>View All Products</p>
                            </button>
                        </div>
                    </div>
                    <div className='flex content-between justify-between border-y border-F1F1F3 py-[30px]'>
                        <div className='flex uppercase text-98989A self-center content-end'>
                            <p className='cursor-pointer'>all</p>
                            <div className='w-[1px] bg-F1F1F3 h-6 mx-5'></div>
                            <p className='text-1A1A1A cursor-pointer'>menswear</p>
                            <div className='w-[1px] bg-F1F1F3 h-6 mx-5'></div>
                            <p className='cursor-pointer'>womenswear</p>
                            <div className='w-[1px] bg-F1F1F3 h-6 mx-5'></div>
                            <p className='cursor-pointer'>kidswear</p>
                        </div>
                        <div className='self-center'>
                            <button className='rounded-full bg-black text-white px-6 py-3.5 content-center justify-center font-semibold'>Casual</button>
                            <button className='rounded-full bg-white border border-F1F1F3 mx-2.5 px-6 py-3.5 content-center justify-center font-semibold'>Formal</button>
                            <button className='rounded-full bg-white border border-F1F1F3 px-6 py-3.5 content-center justify-center font-semibold'>Party</button>
                        </div>
                    </div>
                    <div className='flex mb-3 pb-20 gap-8 scroll-pl-6 snap-x w-full overflow-x-auto'>
                        <div className=' snap-start shrink-0'>
                            <div className='relative'>
                                <div className='absolute bottom-0 right-0 rounded-full bg-FFD400 p-3.5 cart-item-button grid content-center justify-center cursor-pointer'>
                                    <Image src='/home/shopping_cart_item.svg' alt='cart icon' width={24} height={24} />
                                </div>
                                <img src='/item/item1.png' alt='item1' width={376.5} height={384} />
                            </div>
                            <div>
                                <p className='text-xl font-semibold mt-[30px]'>Classic Denim Jeans</p>
                                <p className='text-lg font-medium text-4C4C4D'>$49.99</p>
                            </div>
                        </div>
                        <div className=' snap-start shrink-0'>
                            <div className='relative'>
                                <div className='absolute bottom-0 right-0 rounded-full bg-FFD400 p-3.5 cart-item-button grid content-center justify-center cursor-pointer'>
                                    <Image src='/home/shopping_cart_item.svg' alt='cart icon' width={24} height={24} />
                                </div>
                                <img src='/item/item2.png' alt='item1' width={376.5} height={384} />
                            </div>
                            <div>
                                <p className='text-xl font-semibold mt-[30px]'>Cozy Comfort Hoodie</p>
                                <p className='text-lg font-medium text-4C4C4D'>$39.99</p>
                            </div>
                        </div>
                        <div className=' snap-start shrink-0'>
                            <div className='relative'>
                                <div className='absolute bottom-0 right-0 rounded-full bg-FFD400 p-3.5 cart-item-button grid content-center justify-center cursor-pointer'>
                                    <Image src='/home/shopping_cart_item.svg' alt='cart icon' width={24} height={24} />
                                </div>
                                <img src='/item/item3.png' alt='item1' width={376.5} height={384} />
                            </div>
                            <div>
                                <p className='text-xl font-semibold mt-[30px]'>Cozy Comfort Hoodie</p>
                                <p className='text-lg font-medium text-4C4C4D'>$39.99</p>
                            </div>
                        </div>
                        <div className=' snap-start shrink-0'>
                            <div className='relative'>
                                <div className='absolute bottom-0 right-0 rounded-full bg-FFD400 p-3.5 cart-item-button grid content-center justify-center cursor-pointer'>
                                    <Image src='/home/shopping_cart_item.svg' alt='cart icon' width={24} height={24} />
                                </div>
                                <img src='/item/item4.png' alt='item1' width={376.5} height={384} />
                            </div>
                            <div>
                                <p className='text-xl font-semibold mt-[30px]'>Cozy Comfort Hoodie</p>
                                <p className='text-lg font-medium text-4C4C4D'>$39.99</p>
                            </div>
                        </div>
                        <div className=' snap-start shrink-0'>
                            <div className='relative'>
                                <div className='absolute bottom-0 right-0 rounded-full bg-FFD400 p-3.5 cart-item-button grid content-center justify-center cursor-pointer'>
                                    <Image src='/home/shopping_cart_item.svg' alt='cart icon' width={24} height={24} />
                                </div>
                                <img src='/item/item5.png' alt='item1' width={376.5} height={384} />
                            </div>
                            <div>
                                <p className='text-xl font-semibold mt-[30px]'>Cozy Comfort Hoodie</p>
                                <p className='text-lg font-medium text-4C4C4D'>$39.99</p>
                            </div>
                        </div>
                        <div className=' snap-start shrink-0'>
                            <div className='relative'>
                                <div className='absolute bottom-0 right-0 rounded-full bg-FFD400 p-3.5 cart-item-button grid content-center justify-center cursor-pointer'>
                                    <Image src='/home/shopping_cart_item.svg' alt='cart icon' width={24} height={24} />
                                </div>
                                <img src='/item/item6.png' alt='item1' width={376.5} height={384} />
                            </div>
                            <div>
                                <p className='text-xl font-semibold mt-[30px]'>Cozy Comfort Hoodie</p>
                                <p className='text-lg font-medium text-4C4C4D'>$39.99</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* The Klothink Experience */}
                <div className='grid grid-cols-1 gap-y-20'>
                    <div className=''>
                        <div className='flex mb-9'>
                            <h2 className='uppercase text-5xl font-semibold mr-2'>The Klothink Experience.</h2>
                            <p className='uppercase text-98989A text-nowrap text-right self-start'>About Us</p>
                        </div>
                        <p className='text-656567 mt-6'>At Klothink, we breathe life into fashion, blending creativity with commitment. Our journey is fueled by a dedication to delivering unparalleled style and quality. Join us in redefining fashion and embracing a community where every purchase tells a story.</p>
                    </div>
                    <div className='grid grid-rows-2 gap-[30px] p-[30px] bg-FCFCFD border border-F7F7F8 rounded-[20px]'>
                        <div className='grid grid-cols-3 gap-[30px] bg-FCFCFD'>
                            <div className='bg-white border border-F1F1F3 rounded-[20px] p-10'>
                                <div className='flex mb-6'>
                                    <div className='bottom-0 right-0 rounded-full bg-FFD400 p-3.5 mr-4 cart-item-button grid content-center justify-center cursor-pointer'>
                                        <Image src='/icon/star.svg' alt='cart icon' width={24} height={24} />
                                    </div>
                                    <h3 className='self-center font-semibold text-xl'>Passionate Craftsmanship</h3>
                                </div>
                                <p className='text-656567 font-normal'>Every garment at Klothink is crafted with passion, reflecting our commitment to quality and innovation.</p>
                            </div>
                            <div className='bg-white border border-F1F1F3 rounded-[20px] p-10'>
                                <div className='flex mb-6'>
                                    <div className='bottom-0 right-0 rounded-full bg-FFD400 p-3.5 mr-4 cart-item-button grid content-center justify-center cursor-pointer'>
                                        <Image src='/icon/Megaphone.svg' alt='cart icon' width={24} height={24} />
                                    </div>
                                    <h3 className='self-center font-semibold text-xl'>Passionate Craftsmanship</h3>
                                </div>
                                <p className='text-656567 font-normal'>Every garment at Klothink is crafted with passion, reflecting our commitment to quality and innovation.</p>
                            </div>
                            <div className='bg-white border border-F1F1F3 rounded-[20px] p-10'>
                                <div className='flex mb-6'>
                                    <div className='bottom-0 right-0 rounded-full bg-FFD400 p-3.5 mr-4 cart-item-button grid content-center justify-center cursor-pointer'>
                                        <Image src='/icon/Lifebuoy.svg' alt='cart icon' width={24} height={24} />
                                    </div>
                                    <h3 className='self-center font-semibold text-xl'>Passionate Craftsmanship</h3>
                                </div>
                                <p className='text-656567 font-normal'>Every garment at Klothink is crafted with passion, reflecting our commitment to quality and innovation.</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-3 gap-[30px] bg-FCFCFD'>
                            <div className='bg-white border border-F1F1F3 rounded-[20px] p-10'>
                                <div className='flex mb-6'>
                                    <div className='bottom-0 right-0 rounded-full bg-FFD400 p-3.5 mr-4 cart-item-button grid content-center justify-center cursor-pointer'>
                                        <Image src='/icon/lamp.svg' alt='cart icon' width={24} height={24} />
                                    </div>
                                    <h3 className='self-center font-semibold text-xl'>Passionate Craftsmanship</h3>
                                </div>
                                <p className='text-656567 font-normal'>Every garment at Klothink is crafted with passion, reflecting our commitment to quality and innovation.</p>
                            </div>
                            <div className='bg-white border border-F1F1F3 rounded-[20px] p-10'>
                                <div className='flex mb-6'>
                                    <div className='bottom-0 right-0 rounded-full bg-FFD400 p-3.5 mr-4 cart-item-button grid content-center justify-center cursor-pointer'>
                                        <Image src='/icon/constellation.svg' alt='cart icon' width={24} height={24} />
                                    </div>
                                    <h3 className='self-center font-semibold text-xl'>Passionate Craftsmanship</h3>
                                </div>
                                <p className='text-656567 font-normal'>Every garment at Klothink is crafted with passion, reflecting our commitment to quality and innovation.</p>
                            </div>
                            <div className='bg-white border border-F1F1F3 rounded-[20px] p-10'>
                                <div className='flex mb-6'>
                                    <div className='bottom-0 right-0 rounded-full bg-FFD400 p-3.5 mr-4 cart-item-button grid content-center justify-center cursor-pointer'>
                                        <Image src='/icon/Sun.svg' alt='cart icon' width={24} height={24} />
                                    </div>
                                    <h3 className='self-center font-semibold text-xl'>Passionate Craftsmanship</h3>
                                </div>
                                <p className='text-656567 font-normal'>Every garment at Klothink is crafted with passion, reflecting our commitment to quality and innovation.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Customers Love */}
                <div className='grid grid-cols-1 gap-y-20'>
                    <div className='flex justify-between'>
                        <div className='mr-[300px]'>
                            <div className='flex mb-9'>
                                <h2 className='uppercase text-5xl font-semibold mr-2'>Customers Love.</h2>
                                <p className='uppercase text-98989A text-nowrap text-right self-start'>Testimonials</p>
                            </div>
                            <p className='text-656567 mt-6'>At Klothink, our customers are the heartbeat of our brand. Explore the heartfelt testimonials shared by those who have experienced the magic of Klothink fashion.</p>
                        </div>
                        <div className='self-center'>
                            <button className='bg-FFD400 rounded-full px-6 py-5 content-center justify-center font-semibold'>
                                <p className='ml-2 text-nowrap'>View All Testimonials</p>
                            </button>
                        </div>
                    </div>
                    <div className='relative bg-FCFCFD border border-F7F7F8 rounded-[20px]'>
                        <div className='absolute w-full h-full btns flex'>
                            <svg className='absolute -left-[35px] self-center cursor-pointer arrow-left' onClick={slideLeft} width='58' height='58' viewBox='0 0 58 58' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <rect x='0.5' y='0.5' width='57' height='57' rx='28.5' fill='white' />
                                <rect x='0.5' y='0.5' width='57' height='57' rx='28.5' stroke='#B3B3B3' />
                                <path d='M32.75 21.5L25.25 29L32.75 36.5' stroke='#656567' stroke-width='2' />
                            </svg>
                            <svg className='absolute -right-[35px] self-center cursor-pointer arrow-right' onClick={slideRight} width='58' height='58' viewBox='0 0 58 58' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <rect x='57.5' y='57.5' width='57' height='57' rx='28.5' transform='rotate(180 57.5 57.5)' fill='white' />
                                <rect x='57.5' y='57.5' width='57' height='57' rx='28.5' transform='rotate(180 57.5 57.5)' stroke='#B3B3B3' />
                                <path d='M25.25 36.5L32.75 29L25.25 21.5' stroke='#656567' stroke-width='2' />
                            </svg>
                        </div>

                        <div className='flex bg-FCFCFD p-[30px] gap-8 scroll-pl-6 snap-x w-full overflow-x-auto' id='slider'>
                            <div className='border border-F1F1F3 rounded-[20px] p-[50px] snap-start shrink-0 w-[492px] h-[291px] grid grid-cols-1 content-between'>
                                <div className='flex justify-between'>
                                    <div className='flex'>
                                        <img className='mr-[15px]' src='/customer/customer01.png' alt='item1' width={70} height={70} />
                                        <div className='self-center'>
                                            <p className='pb-1.5'>Sarah Thompson</p>
                                            <Image src='/icon/5star.svg' alt='cart icon' width={120} height={20} />
                                        </div>
                                    </div>
                                    <Image src='/icon/doubleQuote.png' alt='cart icon' width={60} height={60} />
                                </div>
                                <div>
                                    <p className=''>Klothink exceeded my expectations. The gown's quality and design made me feel like a queen. Fast shipping, too!</p>
                                </div>
                            </div>
                            <div className='border border-F1F1F3 p-[50px] snap-start shrink-0 w-[492px] h-[291px] grid grid-cols-1 content-between'>
                                <div className='flex justify-between'>
                                    <div className='flex'>
                                        <img className='mr-[15px]' src='/customer/customer01.png' alt='item1' width={70} height={70} />
                                        <div className='self-center'>
                                            <p className='pb-1.5'>Sarah Thompson</p>
                                            <Image src='/icon/5star.svg' alt='cart icon' width={120} height={20} />
                                        </div>
                                    </div>
                                    <Image src='/icon/doubleQuote.png' alt='cart icon' width={60} height={60} />
                                </div>
                                <div>
                                    <p className=''>Klothink exceeded my expectations. The gown's quality and design made me feel like a queen. Fast shipping, too!</p>
                                </div>
                            </div>
                            <div className='border border-F1F1F3 p-[50px] snap-start shrink-0 w-[492px] h-[291px] grid grid-cols-1 content-between'>
                                <div className='flex justify-between'>
                                    <div className='flex'>
                                        <img className='mr-[15px]' src='/customer/customer01.png' alt='item1' width={70} height={70} />
                                        <div className='self-center'>
                                            <p className='pb-1.5'>Sarah Thompson</p>
                                            <Image src='/icon/5star.svg' alt='cart icon' width={120} height={20} />
                                        </div>
                                    </div>
                                    <Image src='/icon/doubleQuote.png' alt='cart icon' width={60} height={60} />
                                </div>
                                <div>
                                    <p className=''>Klothink exceeded my expectations. The gown's quality and design made me feel like a queen. Fast shipping, too!</p>
                                </div>
                            </div>
                            <div className='border border-F1F1F3 p-[50px] snap-start shrink-0 w-[492px] h-[291px] grid grid-cols-1 content-between'>
                                <div className='flex justify-between'>
                                    <div className='flex'>
                                        <img className='mr-[15px]' src='/customer/customer01.png' alt='item1' width={70} height={70} />
                                        <div className='self-center'>
                                            <p className='pb-1.5'>Sarah Thompson</p>
                                            <Image src='/icon/5star.svg' alt='cart icon' width={120} height={20} />
                                        </div>
                                    </div>
                                    <Image src='/icon/doubleQuote.png' alt='cart icon' width={60} height={60} />
                                </div>
                                <div>
                                    <p className=''>Klothink exceeded my expectations. The gown's quality and design made me feel like a queen. Fast shipping, too!</p>
                                </div>
                            </div>
                            <div className='border border-F1F1F3 p-[50px] snap-start shrink-0 w-[492px] h-[291px] grid grid-cols-1 content-between'>
                                <div className='flex justify-between'>
                                    <div className='flex'>
                                        <img className='mr-[15px]' src='/customer/customer01.png' alt='item1' width={70} height={70} />
                                        <div className='self-center'>
                                            <p className='pb-1.5'>Sarah Thompson</p>
                                            <Image src='/icon/5star.svg' alt='cart icon' width={120} height={20} />
                                        </div>
                                    </div>
                                    <Image src='/icon/doubleQuote.png' alt='cart icon' width={60} height={60} />
                                </div>
                                <div>
                                    <p className=''>Klothink exceeded my expectations. The gown's quality and design made me feel like a queen. Fast shipping, too!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Questions? We Have Answers */}
                <div className='grid grid-cols-1 gap-y-20'>
                    <div className='flex justify-between'>
                        <div className='mr-[300px]'>
                            <div className='flex mb-9'>
                                <h2 className='uppercase text-5xl font-semibold mr-2'>Questions? We Have Answers.</h2>
                                <p className='uppercase text-98989A text-nowrap text-right self-start'>FAQ</p>
                            </div>
                            <p className='text-656567 mt-6'>Ease into the world of Klothink with clarity. Our FAQs cover a spectrum of topics, ensuring you have the information you need for a seamless shopping experience.</p>
                        </div>
                        <div className='self-center'>
                            <button className='bg-FFD400 rounded-full px-6 py-5 content-center justify-center font-semibold'>
                                <p className='ml-2 text-nowrap'>View All Testimonials</p>
                            </button>
                        </div>
                    </div>
                    <div className='flex uppercase text-98989A self-center content-end border-y border-F1F1F3 py-10 text-[20px]'>
                        <p className='text-1A1A1A font-semibold cursor-pointer'>all</p>
                        <div className='w-[1px] bg-F1F1F3 h-6 mx-5'></div>
                        <p className='font-medium cursor-pointer'>ordering</p>
                        <div className='w-[1px] bg-F1F1F3 h-6 mx-5'></div>
                        <p className='font-medium cursor-pointer'>shipping</p>
                        <div className='w-[1px] bg-F1F1F3 h-6 mx-5'></div>
                        <p className='font-medium cursor-pointer'>returns</p>
                        <div className='w-[1px] bg-F1F1F3 h-6 mx-5'></div>
                        <p className='font-medium cursor-pointer'>customer Support</p>
                    </div>
                    <div className='grid grid-cols-3 gap-[30px]'>
                        <div className='grid grid-cols-1 gap-[20px]'>
                            <div className={`transition-all duration-500 rounded-2xl border border-F1F1F3 p-[30px] cursor-pointer ${openQuestionsDetail[0][0] ? 'h-[250px]' : 'h-[88px]'} inline-block overflow-hidden`} onClick={() => updateOpenQuestionsDetail(0, 0)}>
                                <div className='flex justify-between mb-[30px]'>
                                    <h3 className='font-medium text-lg'>Can I modify my order after placing it?</h3>
                                    <Image src='/icon/push.svg' className={`transition-all duration-500 ${openQuestionsDetail[0][0] ? 'rotate-45' : ''}`} alt='push icon' width={14} height={14} />
                                </div>
                                <p className='font-weight text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur incidunt sequi neque ea illum magnam voluptate harum, placeat eos corrupti asperiores molestiae delectus nobis necessitatibus natus dolor culpa consequatur doloremque!</p>
                            </div>
                            <div className={`transition-all duration-500 rounded-2xl border border-F1F1F3 p-[30px] cursor-pointer ${openQuestionsDetail[0][1] ? 'h-[250px]' : 'h-[88px]'} inline-block overflow-hidden`} onClick={() => updateOpenQuestionsDetail(0, 1)}>
                                <div className='flex justify-between mb-[30px]'>
                                    <h3 className='font-medium text-lg'>How do I initiate a return?</h3>
                                    <Image src='/icon/push.svg' className={openQuestionsDetail[0][1] ? 'transition-all duration-500 rotate-45' : 'transition-all duration-500'} alt='push icon' width={14} height={14} />
                                </div>
                                <p className='font-weight text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur incidunt sequi neque ea illum magnam voluptate harum, placeat eos corrupti asperiores molestiae delectus nobis necessitatibus natus dolor culpa consequatur doloremque!</p>
                            </div>
                            <div className={`transition-all duration-500 rounded-2xl border border-F1F1F3 p-[30px] cursor-pointer ${openQuestionsDetail[0][2] ? 'h-[250px]' : 'h-[88px]'} inline-block overflow-hidden`} onClick={() => updateOpenQuestionsDetail(0, 2)}>
                                <div className='flex justify-between mb-[30px]'>
                                    <h3 className='font-medium text-lg'>How can I unsubscribe from the newsletter?</h3>
                                    <Image src='/icon/push.svg' className={openQuestionsDetail[0][2] ? 'transition-all duration-500 rotate-45' : 'transition-all duration-500'} alt='push icon' width={14} height={14} />
                                </div>
                                <p className='font-weight text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur incidunt sequi neque ea illum magnam voluptate harum, placeat eos corrupti asperiores molestiae delectus nobis necessitatibus natus dolor culpa consequatur doloremque!</p>
                            </div>
                            <div className={`transition-all duration-500 rounded-2xl border border-F1F1F3 p-[30px] cursor-pointer ${openQuestionsDetail[0][3] ? 'h-[250px]' : 'h-[88px]'} inline-block overflow-hidden`} onClick={() => updateOpenQuestionsDetail(0, 3)}>
                                <div className='flex justify-between mb-[30px]'>
                                    <h3 className='font-medium text-lg'>Do you offer exchanges for products?</h3>
                                    <Image src='/icon/push.svg' className={openQuestionsDetail[0][3] ? 'transition-all duration-500 rotate-45' : 'transition-all duration-500'} alt='push icon' width={14} height={14} />
                                </div>
                                <p className='font-weight text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit magnam, sed optio laudantium blanditiis eius libero. Quibusdam, repudiandae maiores vel, excepturi, laudantium atque deserunt ea provident aperiam voluptatem aliquid officiis.</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 gap-[20px]'>
                            <div className={`transition-all duration-500 rounded-2xl border border-F1F1F3 p-[30px] cursor-pointer ${openQuestionsDetail[1][0] ? 'h-[250px]' : 'h-[88px]'} inline-block overflow-hidden`} onClick={() => updateOpenQuestionsDetail(1, 0)}>
                                <div className='flex justify-between mb-[30px]'>
                                    <h3 className='font-medium text-lg'>How can I place an order on Klothink?</h3>
                                    <Image src='/icon/push.svg' className={openQuestionsDetail[1][0] ? 'transition-all duration-500 rotate-45' : 'transition-all duration-500'} alt='push icon' width={14} height={14} />
                                </div>
                                <p className='font-weight text-lg'>Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.</p>
                            </div>
                            <div className={`transition-all duration-500 rounded-2xl border border-F1F1F3 p-[30px] cursor-pointer ${openQuestionsDetail[1][1] ? 'h-[250px]' : 'h-[88px]'} inline-block overflow-hidden`} onClick={() => updateOpenQuestionsDetail(1, 1)}>
                                <div className='flex justify-between mb-[30px]'>
                                    <h3 className='font-medium text-lg'>What payment methods do you accept?</h3>
                                    <Image src='/icon/push.svg' className={openQuestionsDetail[1][1] ? 'transition-all duration-500 rotate-45' : 'transition-all duration-500'} alt='push icon' width={14} height={14} />
                                </div>
                                <p className='font-weight text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur incidunt sequi neque ea illum magnam voluptate harum, placeat eos corrupti asperiores molestiae delectus nobis necessitatibus natus dolor culpa consequatur doloremque!</p>
                            </div>
                            <div className={`transition-all duration-500 rounded-2xl border border-F1F1F3 p-[30px] cursor-pointer ${openQuestionsDetail[1][2] ? 'h-[250px]' : 'h-[88px]'} inline-block overflow-hidden`} onClick={() => updateOpenQuestionsDetail(1, 2)}>
                                <div className='flex justify-between mb-[30px]'>
                                    <h3 className='font-medium text-lg'>How can I track my order?</h3>
                                    <Image src='/icon/push.svg' className={openQuestionsDetail[1][2] ? 'transition-all duration-500 rotate-45' : 'transition-all duration-500'} alt='push icon' width={14} height={14} />
                                </div>
                                <p className='font-weight text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum debitis reprehenderit, nihil illo reiciendis pariatur atque, molestiae suscipit, quis ipsam at laboriosam dolor culpa et a necessitatibus. Quia, fugiat perspiciatis.</p>
                            </div>
                            <div className={`transition-all duration-500 rounded-2xl border border-F1F1F3 p-[30px] cursor-pointer ${openQuestionsDetail[1][3] ? 'h-[250px]' : 'h-[88px]'} inline-block overflow-hidden`} onClick={() => updateOpenQuestionsDetail(1, 3)}>
                                <div className='flex justify-between mb-[30px]'>
                                    <h3 className='font-medium text-lg'>What is your shipping policy?</h3>
                                    <Image src='/icon/push.svg' className={openQuestionsDetail[1][3] ? 'transition-all duration-500 rotate-45' : 'transition-all duration-500'} alt='push icon' width={14} height={14} />
                                </div>
                                <p className='font-weight text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur facilis quisquam reiciendis blanditiis qui nobis ipsa corrupti sequi mollitia placeat explicabo perspiciatis, cum quaerat hic dolore illo saepe iusto accusantium?</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 gap-[20px]'>
                            <div className={`transition-all duration-500 rounded-2xl border border-F1F1F3 p-[30px] cursor-pointer ${openQuestionsDetail[2][0] ? 'h-[250px]' : 'h-[88px]'} inline-block overflow-hidden`} onClick={() => updateOpenQuestionsDetail(2, 0)}>
                                <div className='flex justify-between mb-[30px]'>
                                    <h3 className='font-medium text-lg'>Are there any additional fees for returns?</h3>
                                    <Image src='/icon/push.svg' className={openQuestionsDetail[2][0] ? 'transition-all duration-500 rotate-45' : 'transition-all duration-500'} alt='push icon' width={14} height={14} />
                                </div>
                                <p className='font-weight text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur incidunt sequi neque ea illum magnam voluptate harum, placeat eos corrupti asperiores molestiae delectus nobis necessitatibus natus dolor culpa consequatur doloremque!</p>
                            </div>
                            <div className={`transition-all duration-500 rounded-2xl border border-F1F1F3 p-[30px] cursor-pointer ${openQuestionsDetail[2][1] ? 'h-[250px]' : 'h-[88px]'} inline-block overflow-hidden`} onClick={() => updateOpenQuestionsDetail(2, 1)}>
                                <div className='flex justify-between mb-[30px]'>
                                    <h3 className='font-medium text-lg'>How do I create an account on Klothink?</h3>
                                    <Image src='/icon/push.svg' className={openQuestionsDetail[2][1] ? 'transition-all duration-500 rotate-45' : 'transition-all duration-500'} alt='push icon' width={14} height={14} />
                                </div>
                                <p className='font-weight text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur incidunt sequi neque ea illum magnam voluptate harum, placeat eos corrupti asperiores molestiae delectus nobis necessitatibus natus dolor culpa consequatur doloremque!</p>
                            </div>
                            <div className={`transition-all duration-500 rounded-2xl border border-F1F1F3 p-[30px] cursor-pointer ${openQuestionsDetail[2][2] ? 'h-[250px]' : 'h-[88px]'} inline-block overflow-hidden`} onClick={() => updateOpenQuestionsDetail(2, 2)}>
                                <div className='flex justify-between mb-[30px]'>
                                    <h3 className='font-medium text-lg'>Can I change my account information?</h3>
                                    <Image src='/icon/push.svg' className={openQuestionsDetail[2][2] ? 'transition-all duration-500 rotate-45' : 'transition-all duration-500'} alt='push icon' width={14} height={14} />
                                </div>
                                <p className='font-weight text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur incidunt sequi neque ea illum magnam voluptate harum, placeat eos corrupti asperiores molestiae delectus nobis necessitatibus natus dolor culpa consequatur doloremque!</p>
                            </div>
                            <div className={`transition-all duration-500 rounded-2xl border border-F1F1F3 p-[30px] cursor-pointer ${openQuestionsDetail[2][3] ? 'h-[250px]' : 'h-[88px]'} inline-block overflow-hidden`} onClick={() => updateOpenQuestionsDetail(2, 3)}>
                                <div className='flex justify-between mb-[30px]'>
                                    <h3 className='font-medium text-lg'>Are my personal details secure on Klothink?</h3>
                                    <Image src='/icon/push.svg' className={openQuestionsDetail[2][3] ? 'transition-all duration-500 rotate-45' : 'transition-all duration-500'} alt='push icon' width={14} height={14} />
                                </div>
                                <p className='font-weight text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur incidunt sequi neque ea illum magnam voluptate harum, placeat eos corrupti asperiores molestiae delectus nobis necessitatibus natus dolor culpa consequatur doloremque!</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Seamless Experience. */}
                <div className='grid grid-cols-1 gap-y-20 mb-[150px]'>
                    <div className='flex justify-between'>
                        <div className='mr-[300px]'>
                            <div className='flex mb-9'>
                                <h2 className='uppercase text-5xl font-semibold mr-2'>Seamless Experience.</h2>
                                <p className='uppercase text-98989A text-nowrap text-right self-start'>How it Works ?</p>
                            </div>
                            <p className='text-656567 mt-6'>At Klothink, we've designed a straightforward shopping experience to make fashion accessible. Explore the journey from discovering the latest trends to receiving your handpicked styles with ease.</p>
                        </div>
                    </div>
                    <div className='flex gap-y-[30px] gap-x-[20px] h-auto w-full rounded-[20px] bg-FCFCFD border border-F7F7F8 p-5'>
                        <div className='rounded-2xl bg-white border border-F1F1F3 h-full w-full p-[30px]'>
                            <p className='text-[80px] text-E4E4E7 text-semibold leading-[60px] mb-[30px]'>01</p>
                            <div>
                                <p className='text-333333 text-xl font-semibold mb-2'>Discover Trands</p>
                                <p className='text-656567 text-lg font-normal'>Explore our curated collection of over 1000 styles</p>
                            </div>
                        </div>
                        <div className='rounded-2xl bg-white border border-F1F1F3 h-full w-full p-[30px]'>
                            <p className='text-[80px] text-E4E4E7 text-semibold leading-[60px] mb-[30px]'>02</p>
                            <div>
                                <p className='text-333333 text-xl font-semibold mb-2'>Secure Checkout</p>
                                <p className='text-656567 text-lg font-normal'>Add your items to the cart and proceed to our secure checkout.</p>
                            </div>
                        </div>
                        <div className='rounded-2xl bg-white border border-F1F1F3 h-full w-full p-[30px]'>
                            <p className='text-[80px] text-E4E4E7 text-semibold leading-[60px] mb-[30px]'>03</p>
                            <div>
                                <p className='text-333333 text-xl font-semibold mb-2'>Swift Dispatch</p>
                                <p className='text-656567 text-lg font-normal'>Experience 95% same-day dispatch on orders.</p>
                            </div>
                        </div>
                        <div className='rounded-2xl bg-white border border-F1F1F3 h-full w-full p-[30px]'>
                            <p className='text-[80px] text-E4E4E7 text-semibold leading-[60px] mb-[30px]'>04</p>
                            <div>
                                <p className='text-333333 text-xl font-semibold mb-2'>Unbox Happiness</p>
                                <p className='text-656567 text-lg font-normal'>Receive your carefully packaged Klothink order.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <div className='px-[162px] flex border-y border-F1F1F3'>
                <div className='grid grid-rows-2 gap-[50px] w-[480px] py-[80px] mr-[80px]'>
                    <Image src='/navbar/logo.svg' alt='logo' width={100} height={100} />
                    <div className='flex'>
                        <input className='rounded-full w-[323px] h-[59px] bg-FCFCFD border border-F1F1F3 mr-2.5' type='text' name='name' />
                        <button className='bg-FFD400 rounded-full px-6 py-5 content-center justify-center font-semibold w-[147px] h-[59px]'>Subscride</button>
                    </div>
                </div>
                <div className='grid grid-cols-4 w-[800px] pl-[80px] py-[80px] border-l border-F1F1F3 h-full'>
                    <div>
                        <h3 className='pb-9 font-medium text-xl text-262626'>Home</h3>
                        <span className='grid grid-rows-4 gap-y-[18px] text-lg text-656567 font-normal'>
                            <p>Features</p>
                            <p>Popular Products</p>
                            <p>Testimonials</p>
                            <p>FAQ</p>
                        </span>
                    </div>
                    <div>
                        <h3 className='pb-9 font-medium text-xl text-262626'>Menswear</h3>
                        <span className='grid grid-rows-4 gap-y-[18px] text-lg text-656567 font-normal'>
                            <p>Casual</p>
                            <p>Formal</p>
                            <p>Party</p>
                            <p>Business</p>
                        </span>
                    </div>
                    <div>
                        <h3 className='pb-9 font-medium text-xl text-262626'>Womenswear</h3>
                        <span className='grid grid-rows-4 gap-y-[18px] text-lg text-656567 font-normal'>
                            <p>Casual</p>
                            <p>Formal</p>
                            <p>Party</p>
                            <p>Business</p>
                        </span>
                    </div>
                    <div>
                        <h3 className='pb-9 font-medium text-xl text-262626'>Kidswear</h3>
                        <span className='grid grid-rows-4 gap-y-[18px] text-lg text-656567 font-normal'>
                            <p>Casual</p>
                            <p>Formal</p>
                            <p>Party</p>
                        </span>
                    </div>
                </div>
            </div>
            {/* Terms & Conditions */}
            <div className='flex justify-between my-10 mx-[162px]'>
                <div className='flex'>
                    <p className='mr-6 font-normal text-98989A text-lg'>Terms & Conditions</p>
                    <p className='pl-6 border-l border-F1F1F3 font-normal text-98989A text-lg'>Privacy Policy</p>
                </div>
                <div className='flex gap-x-[21px] '>
                    <Image className='cursor-pointer' src='/icon/facebookButton.svg' alt='logo' width={44} height={44} />
                    <Image className='cursor-pointer' src='/icon/twitterButton.svg' alt='logo' width={44} height={44} />
                    <Image className='cursor-pointer' src='/icon/LinkedButton.svg' alt='logo' width={44} height={44} />
                </div>
                <p>© 2024 Klothink. All rights reserved.</p>
            </div>
        </main>
    )
}
