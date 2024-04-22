import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <main className='min-[1700px]:mx-40 home-page-main'>
            <div className='grid grid-cols-1 gap-[200px]'>
                <div className='grid grid-cols-5 gap-20 mb-[200px]'>
                    <div className='h-full grid col-span-3 content-between justify-between'>
                        <div className=''>
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
                    <div className='col-span-2 relative rounded-[20px] bg-F1F1F3 home-page-main-image-area justify-self-end'>
                        <Image
                            src='/home/sub_container.png'
                            alt='cart icon'
                            style={{
                                width: '100%',
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
                <div className='grid grid-cols-1 gap-y-20 mb-[200px]'>
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
                    <div class='flex mb-3 pb-20 gap-8 scroll-pl-6 snap-x w-full overflow-x-auto'>
                        <div class=' snap-start shrink-0'>
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
                        <div class=' snap-start shrink-0'>
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
                        <div class=' snap-start shrink-0'>
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
                        <div class=' snap-start shrink-0'>
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
                        <div class=' snap-start shrink-0'>
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
                        <div class=' snap-start shrink-0'>
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
            </div>
        </main>
    )
}
