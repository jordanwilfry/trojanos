"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, Folder, Star, ShoppingCart } from "lucide-react";
import Filter from "./filter";
import { ShopHero } from "./hero";
import { FlexibleBreadcrumb } from "@/components/reusables/bread-crumbs";
import { Products } from "@/components/datas/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import slugify from "react-slugify";
import Link from "next/link";
export default function MainShop() {
  const [filteredProducts, setFilteredProducts] = useState(Products);
  const [filters, setFilters] = useState({
    category: [],
    priceRange: [0, Math.max(...Products.map((p) => p.price))],
    rating: 0,
  });

  const breadcrumbItems = [
    {
      label: "Home",
      href: "/",
      icon: <Folder className="h-4 w-4" />,
    },
    {
      label: "Shop",
      href: "/shop",
      icon: <Folder className="h-4 w-4" />,
    },
    {
      label: "All Products",
      href: "/shop",
      icon: <FileText className="h-4 w-4" />,
    },
  ];

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  useEffect(() => {
    const filtered = Products.filter((product) => {
      if (
        filters.category.length > 0 &&
        !filters.category.includes(product.category)
      ) {
        return false;
      }
      if (
        product.price < filters.priceRange[0] ||
        product.price > filters.priceRange[1]
      ) {
        return false;
      }
      if (product.rating < filters.rating) {
        return false;
      }
      return true;
    });

    setFilteredProducts(filtered);
  }, [filters]);

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col mb-32 w-full max-w-7xl mx-auto px-4">
        <FlexibleBreadcrumb items={breadcrumbItems} />
        <ShopHero />
        <div className="flex flex-col md:flex-row gap-8">
          <Filter onFilterChange={handleFilterChange} products={Products} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}>
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="relative">
                    <Link href={"/products/" + slugify(product.title)}>
                      <Image
                        src={"https://placehold.co/400x600.png"}
                        alt={product.title}
                        width={400}
                        height={600}
                        className="w-full h-64 object-cover"
                      />
                      {!product.inStock && (
                        <Badge className="absolute top-2 right-2 bg-red-500">
                          Out of Stock
                        </Badge>
                      )}
                    </Link>
                  </div>
                  <CardContent className="p-4 flex-grow">
                    <h3 className="text-lg font-semibold mb-2">
                      {product.title}
                    </h3>
                    <div className="flex items-center mb-2">
                      <Star className="w-5 h-5 text-yellow-400 mr-1" />
                      <span>{product.rating.toFixed(1)}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {product.category}
                    </p>
                    <p className="text-lg font-bold">
                      ${product.price.toFixed(2)}
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full" disabled={!product.inStock}>
                      <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
