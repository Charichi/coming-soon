"use client";
import { motion } from "framer-motion";
import Logo from "./components/Logo/Logo";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-neutral-950 text-white px-4 sm:px-6 md:px-8">
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-center w-full max-w-2xl"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col items-center w-full">
          <Logo />
          <motion.span
            className="block h-1 w-20 sm:w-24 md:w-28 lg:w-32 mx-auto mt-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-400"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.7 }}
            style={{ originX: 0 }}
          />
        </div>
      </motion.h1>

      <motion.p
        className="font-sans text-sm sm:text-base md:text-xl text-center text-neutral-400 mb-10 max-w-xs sm:max-w-md md:max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        Our platform is coming soon.
        <br />
        <span className="hidden sm:inline">Stay tuned.</span>
        <span className="sm:hidden">Stay tuned!</span>
      </motion.p>

      <motion.div
        className="flex flex-col items-center w-full max-w-xs sm:max-w-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        {/* Add responsive content here if needed */}
      </motion.div>
    </main>
  );
}
