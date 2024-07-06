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

      <div className="container mx-auto px-4 py-16 sm:py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="mr-1 h-3 w-3" /> New Collection
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-4">
            Discover Your Style
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-2xl">
            Explore our curated selection of trendsetting fashion and
            accessories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {["Summer Vibes", "Urban Chic", "Vintage Charm"].map(
            (category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{category}</h3>
                    <p className="text-sm opacity-80">
                      Discover the latest trends in {category.toLowerCase()}{" "}
                      fashion.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          )}
        </div>

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
