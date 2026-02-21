/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { format } from 'date-fns';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IReview } from '@/types/review.interface';

// --- CUSTOM ARROWS ---
const NextArrow = (props: any) => (
    <button
        className="absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] text-[#023047] hover:bg-[#3A9AFF] hover:text-white transition-all duration-300 z-10 border border-gray-50"
        onClick={props.onClick}
    >
        <ChevronRight size={24} strokeWidth={2} />
    </button>
);

const PrevArrow = (props: any) => (
    <button
        className="absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] text-[#023047] hover:bg-[#3A9AFF] hover:text-white transition-all duration-300 z-10 border border-gray-50"
        onClick={props.onClick}
    >
        <ChevronLeft size={24} strokeWidth={2} />
    </button>
);

// --- COMPONENT: Read More Logic ---
const ReviewComment = ({ comment }: { comment: string }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const isLong = comment?.length > 130;

    return (
        <div className="mt-4 mb-6 grow">
            <p className={`text-gray-600 text-sm leading-relaxed ${!isExpanded && isLong ? 'line-clamp-4' : ''}`}>
                "{comment}"
            </p>
            {isLong && (
                <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-[#3A9AFF] text-xs font-bold mt-2 hover:text-[#023047] transition-colors focus:outline-none"
                >
                    {isExpanded ? 'Show Less' : 'Read Full Review'}
                </button>
            )}
        </div>
    );
};

export default function ModernReviewLayout({ reviews }: { reviews: IReview[] }) {
    // 1. Filter and Calculate Aggregate Data
    const validReviews = reviews.filter(r => r.comment && r.user);
    const totalReviews = validReviews.length;
    
    // Calculate average rating
    const averageRating = totalReviews > 0 
        ? (validReviews.reduce((acc, curr) => acc + (curr.rating || 5), 0) / totalReviews).toFixed(1)
        : "0.0";

    // Calculate distribution (5 star, 4 star, etc.)
    const distribution = [5, 4, 3, 2, 1].map(star => {
        const count = validReviews.filter(r => Math.round(r.rating || 5) === star).length;
        const percentage = totalReviews > 0 ? Math.round((count / totalReviews) * 100) : 0;
        return { star, count, percentage };
    });

    // 2. Slider Settings
    const settings = {
        dots: true,
        infinite: totalReviews > 2,
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 700,
        slidesToShow: 2,
        slidesToScroll: 1,
        pauseOnHover: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 1 } }
        ],
    };

    if (totalReviews === 0) return null; // Or render empty state

    return (
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* ============================================== */}
            {/* LEFT COLUMN: Aggregate Score & Distribution */}
            {/* ============================================== */}
            <div className="w-full lg:w-1/3 flex flex-col justify-center">
                <h2 className="text-3xl lg:text-4xl font-extrabold text-[#023047] mb-2 tracking-tight">
                    Customer Reviews
                </h2>
                
                <div className="flex items-end gap-4 mt-4 mb-6">
                    <span className="text-6xl font-extrabold text-[#023047] leading-none">
                        {averageRating}
                    </span>
                    <div className="flex flex-col pb-1">
                        <div className="flex text-yellow-400 mb-1">
                            {[1, 2, 3, 4, 5].map(i => (
                                <Star key={i} size={18} className={i <= Math.round(Number(averageRating)) ? "fill-yellow-400" : "text-gray-200 fill-gray-100"} />
                            ))}
                        </div>
                        <span className="text-sm text-gray-500 font-medium">
                            Based on {totalReviews} reviews
                        </span>
                    </div>
                </div>

                {/* Rating Distribution Bars */}
                <div className="space-y-3 mb-8">
                    {distribution.map((item) => (
                        <div key={item.star} className="flex items-center gap-3 text-sm">
                            <span className="w-12 text-gray-600 font-medium">{item.star} Stars</span>
                            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div 
                                    className="h-full bg-[#3A9AFF] rounded-full" 
                                    style={{ width: `${item.percentage}%` }}
                                />
                            </div>
                            <span className="w-10 text-right text-gray-400 text-xs">{item.percentage}%</span>
                        </div>
                    ))}
                </div>

                <button className="w-full py-3.5 px-6 bg-white border-2 border-[#023047] text-[#023047] font-bold rounded-xl hover:bg-[#023047] hover:text-white transition-colors duration-300">
                    Write a Review
                </button>
            </div>

            {/* ============================================== */}
            {/* RIGHT COLUMN: Reviews Slider */}
            {/* ============================================== */}
            <div className="w-full lg:w-2/3 relative px-4">
                <Slider {...settings} className="modern-review-slider -mx-4">
                    {validReviews.map((review) => (
                        <div key={review?._id} className="px-4 py-4 h-full">
                            <div className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col h-full shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(58,154,255,0.08)] transition-all duration-300 min-h-80">
                                
                                {/* Top: Stars & Date */}
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex text-yellow-400">
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <Star key={i} size={16} className={i <= (review?.rating || 5) ? "fill-yellow-400" : "text-gray-200 fill-gray-100"} />
                                        ))}
                                    </div>
                                    <span className="text-xs text-gray-400 font-medium">
                                        {format(new Date(review?.createdAt), 'MMMM dd, yyyy')}
                                    </span>
                                </div>

                                {/* Review Title/Product (if applicable) */}
                                {review?.tour?.title && (
                                    <h4 className="text-base font-bold text-[#023047] line-clamp-1 mb-1">
                                        {review.tour.title}
                                    </h4>
                                )}

                                {/* Middle: Comment */}
                                <ReviewComment comment={review?.comment} />

                                {/* Bottom: User Profile */}
                                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center gap-4">
                                    <div className="w-11 h-11 rounded-full overflow-hidden bg-gray-50 border border-gray-100 shrink-0">
                                        <Image
                                            src={review?.user?.picture || '/images/avatar-placeholder.png'}
                                            alt={review?.user?.name || "Customer"}
                                            width={44}
                                            height={44}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-[#023047]">
                                            {review?.user?.name || "Verified Customer"}
                                        </p>
                                        <div className="flex items-center gap-1.5 text-[11px] text-emerald-600 font-bold uppercase tracking-wide mt-0.5">
                                            <CheckCircle2 size={12} strokeWidth={3} />
                                            Verified Buyer
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </Slider>

                {/* Optional: Global CSS to style the slick dots to match brand */}
                <style dangerouslySetInnerHTML={{__html: `
                    .modern-review-slider .slick-dots { bottom: -30px; }
                    .modern-review-slider .slick-dots li button:before { color: #cbd5e1; font-size: 10px; opacity: 1; }
                    .modern-review-slider .slick-dots li.slick-active button:before { color: #3A9AFF; }
                `}} />
            </div>
            
        </div>
    );
}