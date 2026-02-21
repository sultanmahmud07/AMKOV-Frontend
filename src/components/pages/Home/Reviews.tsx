/* eslint-disable @typescript-eslint/no-explicit-any */

import ModernReviewLayout from "./ProductReviewSlider";

// --- CAMERA-SPECIFIC MOCK DATA ---
const mockCameraReviews = [
  {
    _id: "rev-01",
    rating: 5,
    createdAt: "2026-01-15T10:30:00Z",
    tour: { _id: "prod-vlog", title: "5K V-Log Camera with Flip Screen" }, // 'tour' acts as your Product object here
    comment: "Absolutely love this camera for my YouTube channel! The flip screen makes framing a breeze, and it supports an external mic which is a game-changer for my audio. The 5K video is incredibly crisp, and the autofocus tracks my face perfectly even when I'm moving around.",
    user: { 
      _id: "u-01", 
      name: "Sarah Jenkins", 
      picture: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" 
    }
  },
  {
    _id: "rev-02",
    rating: 5,
    createdAt: "2026-02-02T14:15:00Z",
    tour: { _id: "prod-water", title: "48MP Waterproof Action Camera" },
    comment: "Took this on a scuba diving trip to Bali and the results were stunning. It survived depths of 5 meters without any extra housing, and the color correction software built into the camera made the coral reefs look incredibly vibrant. Highly recommend for adventure travelers.",
    user: { 
      _id: "u-02", 
      name: "Marcus Thorne", 
      picture: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop" 
    }
  },
  {
    _id: "rev-03",
    rating: 4,
    createdAt: "2026-01-28T09:45:00Z",
    tour: { _id: "prod-zoom", title: "8X Optical Zoom Digital Camera" },
    comment: "A fantastic compact alternative to hauling my heavy DSLR around. The 8X optical zoom maintains crystal clear detail without the pixelation you get from digital zoom on phones. Battery life is solid, lasting me a full weekend of street photography on a single charge.",
    user: { 
      _id: "u-03", 
      name: "Emily Chen", 
      picture: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop" 
    }
  },
  {
    _id: "rev-04",
    rating: 5,
    createdAt: "2026-02-10T16:20:00Z",
    tour: { _id: "prod-kids", title: "Kids Instant Print Camera" },
    comment: "Bought this for my 7-year-old daughter's birthday and it was the star of the party! It uses thermal paper so you don't have to buy expensive ink cartridges. The interface is simple enough for her to use on her own, and the print quality has a really cool retro vibe.",
    user: { 
      _id: "u-04", 
      name: "David Alaba", 
      picture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop" 
    }
  },
  {
    _id: "rev-05",
    rating: 4,
    createdAt: "2025-12-20T11:10:00Z",
    tour: { _id: "prod-beauty", title: "64MP 5K WiFi Digital Beauty Camera" },
    comment: "The built-in LED fill light is super bright and makes portraits look very professional. I love that I can instantly transfer photos to my phone via WiFi to post on social media. Deducted one star just because the menu takes a little bit of time to get used to.",
    user: { 
      _id: "u-05", 
      name: "Jessica Alba", 
      picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" 
    }
  }
];

const ProductReviews = async () => {
  // If you are ready to fetch from your own database, you would do it here:
  // const res = await getCameraReviews();
  // const reviews: IReview[] = (res?.data || []) as IReview[];
  
  // Using our camera-specific mock data for now
  const reviews: any[] = mockCameraReviews; 

  return (
    <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* We pass the camera reviews into the Client Component you already built */}
        <ModernReviewLayout reviews={reviews} />
      </div>
    </section>
  );
};

export default ProductReviews;