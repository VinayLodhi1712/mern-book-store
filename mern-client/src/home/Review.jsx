import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from 'react-icons/fa6';
import 'swiper/css';
import 'swiper/css/pagination';
import { Avatar } from 'flowbite-react';
import { Pagination } from 'swiper/modules';

const reviews = [
    {
        name: 'Alice Johnson',
        role: 'Book Enthusiast',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        rating: 5,
        review: 'Amazing collection of books! The delivery was quick, and the quality of the books exceeded my expectations. Highly recommended!',
    },
    {
        name: 'Michael Smith',
        role: 'Author & Reader',
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
        rating: 4,
        review: 'Great service and an impressive selection of rare books. Would love to see more discounts on bestsellers.',
    },
    {
        name: 'Sophia Martinez',
        role: 'Literature Student',
        image: 'https://randomuser.me/api/portraits/women/22.jpg',
        rating: 5,
        review: 'Absolutely love the bookstore! The book recommendations are spot-on, and the packaging was excellent.',
    },
    {
        name: 'David Wilson',
        role: 'Avid Reader',
        image: 'https://randomuser.me/api/portraits/men/46.jpg',
        rating: 4,
        review: 'Good experience overall. The checkout process was smooth, and I received my order on time.',
    },
    {
        name: 'Emily Carter',
        role: 'Book Collector',
        image: 'https://randomuser.me/api/portraits/women/12.jpg',
        rating: 5,
        review: 'I found a rare book I was searching for, and it was in perfect condition! Thank you!',
    },
];

function Review() {
    return (
        <div className='my-10 px-6 lg:px-24 overflow-hidden'>
            <h2 className='text-4xl font-semibold text-center mb-10 text-gray-800'>What Our Customers Say</h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                loop={true}  // Enable infinite scrolling
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 30 },
                    1024: { slidesPerView: 3, spaceBetween: 40 },
                }}
                modules={[Pagination]}
                className='mySwiper'
            >
                {reviews.map((review, index) => (
                    <SwiperSlide key={index} className='shadow-lg bg-white py-6 px-5 rounded-xl border border-gray-200'>
                        <div className='space-y-5 text-gray-700'>
                            <div className='text-yellow-500 flex gap-1'>
                                {[...Array(review.rating)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                            <p className='text-base'>{review.review}</p>
                            <div className='flex items-center gap-4 mt-4'>
                                <Avatar img={review.image} alt={`avatar of ${review.name}`} rounded className='w-12 h-12' />
                                <div>
                                    <h5 className='text-lg font-medium'>{review.name}</h5>
                                    <p className='text-sm text-gray-500'>{review.role}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Review;
