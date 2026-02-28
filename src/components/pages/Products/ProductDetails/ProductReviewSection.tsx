"use client";

import React, { useState } from "react";
import { Star, MessageSquare, ThumbsUp, ThumbsDown, Flag, PenLine, X } from "lucide-react";

// --- MOCK DATA ---
const initialReviews = [
  {
    id: 1,
    name: "Isabella Moretti",
    date: "4/22/25, 1:12 AM",
    rating: 5,
    title: "Great..!",
    comment: "I was pleasantly surprised by how easy it was to navigate the menus. The 5K video quality is superb.",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2,
    name: "Victoria Robinson",
    date: "4/22/25, 1:11 AM",
    rating: 5,
    title: "Good product and services.",
    comment: "We just bought this for our studio. Excellent build quality and the flip screen is very sturdy.",
    likes: 4,
    dislikes: 0,
  },
  {
    id: 3,
    name: "Scarlett Walker",
    date: "4/22/25, 1:08 AM",
    rating: 5,
    title: "Best product and quality.",
    comment: "The product is original AMKOV gear. Works perfectly right out of the box.",
    likes: 12,
    dislikes: 1,
  },
  {
    id: 4,
    name: "Clara Becker",
    date: "4/22/25, 1:07 AM",
    rating: 5,
    title: "Great Value for the Price",
    comment: "The camera feels high-quality and performs much better in low light than I anticipated.",
    likes: 8,
    dislikes: 2,
  },
];

// Helper to render stars
const renderStars = (rating: number) => {
  return Array.from({ length: 5 }).map((_, index) => (
    <Star
      key={index}
      size={16}
      className={`${index < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
        }`}
    />
  ));
};

// --- INDIVIDUAL REVIEW COMPONENT (Handles Vote State) ---
const ReviewItem = ({ review }: { review: typeof initialReviews[0] }) => {
  const [likes, setLikes] = useState(review.likes);
  const [dislikes, setDislikes] = useState(review.dislikes);
  const [userVote, setUserVote] = useState<"like" | "dislike" | null>(null);

  const handleLike = () => {
    if (userVote === "like") {
      setLikes(likes - 1);
      setUserVote(null);
    } else {
      setLikes(likes + 1);
      if (userVote === "dislike") setDislikes(dislikes - 1);
      setUserVote("like");
    }
  };

  const handleDislike = () => {
    if (userVote === "dislike") {
      setDislikes(dislikes - 1);
      setUserVote(null);
    } else {
      setDislikes(dislikes + 1);
      if (userVote === "like") setLikes(likes - 1);
      setUserVote("dislike");
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 py-8 border-b border-gray-100 last:border-0">

      {/* Left Column: Meta Data */}
      <div className="w-full md:w-1/4 shrink-0 flex flex-col gap-2">
        <div className="flex gap-0.5 mb-1">{renderStars(review.rating)}</div>
        <p className="text-sm font-medium text-gray-800">{review.date}</p>
        <p className="text-sm text-gray-500">By {review.name}</p>
      </div>

      {/* Right Column: Content */}
      <div className="w-full md:w-3/4 flex flex-col md:border-l border-gray-100 pl-0 md:pl-8">
        <h4 className="text-base font-bold text-[#023047] mb-2">{review.title}</h4>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">{review.comment}</p>

        {/* Interaction Actions */}
        <div className="flex items-center gap-6 mt-auto">
          <button
            onClick={handleLike}
            className={`flex items-center gap-1.5 text-xs font-semibold transition-colors ${userVote === 'like' ? 'text-[#3A9AFF]' : 'text-gray-400 hover:text-gray-600'}`}
          >
            <ThumbsUp size={16} className={userVote === 'like' ? 'fill-current' : ''} /> {likes}
          </button>
          <button
            onClick={handleDislike}
            className={`flex items-center gap-1.5 text-xs font-semibold transition-colors ${userVote === 'dislike' ? 'text-red-500' : 'text-gray-400 hover:text-gray-600'}`}
          >
            <ThumbsDown size={16} className={userVote === 'dislike' ? 'fill-current' : ''} /> {dislikes}
          </button>
          <button className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-red-500 transition-colors ml-2">
            <Flag size={14} /> Report
          </button>
        </div>
      </div>
    </div>
  );
};

// --- MAIN SECTION COMPONENT ---
export default function ProductReviewSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Calculate aggregate
  const totalReviews = initialReviews.length;
  const averageRating = 5; // Static for demo, calculate dynamically in production

  return (
    <div id="reviews" className="main-container scroll-mt-20  py-5 mb-5 md:mb-10">

      {/* Header Bar (Matches the reference image style) */}
      <div className="bg-gray-100  px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 text-[#023047] font-bold">
          <MessageSquare size={18} />
          <span>Comments ({totalReviews})</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-gray-600">Grade</span>
          <div className="flex gap-0.5">
            {renderStars(averageRating)}
          </div>
        </div>
      </div>

      {/* Review List Container */}
      <div className="px-5 bg-white">
        {initialReviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </div>

      {/* Call to Action Button */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#3A9AFF] hover:bg-[#023047] text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 shadow-md flex items-center gap-2 uppercase tracking-wide text-sm"
        >
          <PenLine size={18} />
          Write Your Review
        </button>
      </div>

      {/* ========================================= */}
      {/* WRITE REVIEW MODAL (Functionality) */}
      {/* ========================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-lg p-6 relative shadow-2xl animate-in fade-in zoom-in duration-200">

            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-[#023047]">Write a Review</h3>
              <button onClick={() => setIsModalOpen(false)} className="p-2 text-gray-400 hover:bg-gray-100 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); alert("Review submitted successfully!"); }} className="space-y-4">

              {/* Rating Input */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Your Rating</label>
                <div className="flex gap-1 cursor-pointer">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={28} className="text-gray-200 fill-gray-200 hover:text-yellow-400 hover:fill-yellow-400 transition-colors" />
                  ))}
                </div>
              </div>

              {/* Title Input */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Review Title</label>
                <input required type="text" placeholder="Summary of your experience" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3A9AFF] focus:ring-1 focus:ring-[#3A9AFF] transition-all" />
              </div>

              {/* Review Input */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Your Review</label>
                <textarea required rows={4} placeholder="What did you like or dislike?" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3A9AFF] focus:ring-1 focus:ring-[#3A9AFF] transition-all resize-none"></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" className="w-full bg-[#023047] hover:bg-[#3A9AFF] text-white font-bold py-3.5 rounded-xl transition-colors mt-2">
                Submit Review
              </button>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}