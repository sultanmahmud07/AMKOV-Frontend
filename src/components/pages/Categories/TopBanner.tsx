
import { motion } from 'framer-motion';
import { LayoutGrid } from 'lucide-react';

const TopBanner = () => {

  return (
     <div className="relative w-full py-16 lg:py-20 bg-[#021824] overflow-hidden flex flex-col items-center justify-center">
      
      {/* Background Vector Grids & Angular Shards */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[40px_40px]"></div>
      
      {/* Animated Floating Polygons (Prism Effect) */}
      <motion.div 
        animate={{ y: [0, -40, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-[10%] w-[600px] h-[600px] bg-linear-to-br from-[#3A9AFF]/20 to-transparent [clip-path:polygon(50%_0%,100%_38%,82%_100%,18%_100%,0%_38%)] blur-2xl pointer-events-none"
      />
      <motion.div 
        animate={{ y: [0, 40, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-[5%] w-[400px] h-[400px] bg-linear-to-br from-[#00AEEF]/20 to-transparent [clip-path:polygon(25%_0%,100%_0%,75%_100%,0%_100%)] blur-xl pointer-events-none"
      />

      {/* Main Banner Content */}
      <div className="main-container relative z-10 flex flex-col items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 relative"
        >
          {/* Techy Hexagon Icon Background */}
          <div className="w-20 h-20 bg-[#3A9AFF]/10 border border-[#3A9AFF]/30 flex items-center justify-center backdrop-blur-md text-[#3A9AFF] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]">
            <LayoutGrid size={32} />
          </div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl md:text-4xl font-black text-white mb-5 tracking-tight uppercase"
        >
          Equipment <span className="text-transparent bg-clip-text bg-linear-to-r from-[#3A9AFF] to-[#00AEEF]">Series</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-slate-400 text-lg max-w-2xl font-light"
        >
          Discover our specialized digital imaging categories. Engineered for precision, built for visionaries.
        </motion.p>
      </div>
    </div>
  )
}

export default TopBanner
