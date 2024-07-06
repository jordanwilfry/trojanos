"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export function ShopHero() {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
          backgroundSize: ["100% 100%", "200% 200%"],
        }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        style={{
          backgroundImage: "url('/noise.png')",
        }}
      />

      <div className="  py-16 sm:py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="mr-1 h-3 w-3" /> New Collection
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-4">
            Save the planet
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-2xl">
            Discover a wide range of curated products for you
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}>
          <Button size="lg">Shop Now</Button>
        </motion.div>
      </div>
    </div>
  );
}
