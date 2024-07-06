"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

const categories = ["Clothing", "Accessories", "Furniture", "Electronics"];

export default function Filter({ onFilterChange, products }) {
  const [filters, setFilters] = useState({
    category: [],
    priceRange: [0, 1000],
    rating: 0,
  });

  const [maxPrice, setMaxPrice] = useState(1000);

  useEffect(() => {
    const highestPrice = Math.max(...products.map((p) => p.price));
    setMaxPrice(Math.ceil(highestPrice / 100) * 100);
    setFilters((prev) => ({ ...prev, priceRange: [0, highestPrice] }));
  }, [products]);

  const handleCategoryChange = (category) => {
    setFilters((prev) => ({
      ...prev,
      category: prev.category.includes(category)
        ? prev.category.filter((c) => c !== category)
        : [...prev.category, category],
    }));
  };

  const handlePriceRangeChange = (value) => {
    setFilters((prev) => ({ ...prev, priceRange: value }));
  };

  const handleRatingChange = (value) => {
    setFilters((prev) => ({ ...prev, rating: value[0] }));
  };

  const applyFilters = () => {
    onFilterChange(filters);
  };

  const resetFilters = () => {
    const resetFilters = {
      category: [],
      priceRange: [0, maxPrice],
      rating: 0,
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full md:w-64 bg-background p-4 rounded-lg shadow-lg mb-6 md:mb-0">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="category">
          <AccordionTrigger>Category</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={category}
                    checked={filters.category.includes(category)}
                    onCheckedChange={() => handleCategoryChange(category)}
                  />
                  <Label htmlFor={category}>{category}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <Slider
              min={0}
              max={maxPrice}
              step={10}
              value={filters.priceRange}
              onValueChange={handlePriceRangeChange}
              className="mt-2"
            />
            <div className="flex justify-between mt-2">
              <span>${filters.priceRange[0]}</span>
              <span>${filters.priceRange[1]}</span>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="rating">
          <AccordionTrigger>Rating</AccordionTrigger>
          <AccordionContent>
            <Slider
              min={0}
              max={5}
              step={0.5}
              value={[filters.rating]}
              onValueChange={handleRatingChange}
              className="mt-2"
            />
            <div className="mt-2">
              <span>{filters.rating} stars and above</span>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="mt-4 space-y-2">
        <Button onClick={applyFilters} className="w-full">
          Apply Filters
        </Button>
        <Button onClick={resetFilters} variant="outline" className="w-full">
          Reset Filters
        </Button>
      </div>
    </motion.div>
  );
}
