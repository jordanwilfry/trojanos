"use client";
import Image from "next/image";

import { useState, useMemo } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Products as products } from "@/components/datas/products";

export default function Component() {
  const [filters, setFilters] = useState({
    category: [],
    priceRange: [0, 100],
    rating: 0,
  });

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
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
  }, [filters]);
  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: value,
    }));
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 p-4 md:p-8">
      <div className="bg-background rounded-lg shadow-lg p-4 md:p-6">
        <Accordion type="single" collapsible>
          <AccordionItem value="filters">
            <AccordionTrigger className="text-lg font-medium">
              Filters
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-4">
                <div>
                  <h3 className="text-base font-medium mb-2">Category</h3>
                  <div className="grid gap-2">
                    <Label className="flex items-center gap-2">
                      <Checkbox
                        checked={filters.category.includes("Clothing")}
                        onCheckedChange={(checked) =>
                          handleFilterChange(
                            "category",
                            checked ? ["Clothing"] : []
                          )
                        }
                      />
                      Clothing
                    </Label>
                    <Label className="flex items-center gap-2">
                      <Checkbox
                        checked={filters.category.includes("Accessories")}
                        onCheckedChange={(checked) =>
                          handleFilterChange(
                            "category",
                            checked ? ["Accessories"] : []
                          )
                        }
                      />
                      Accessories
                    </Label>
                    <Label className="flex items-center gap-2">
                      <Checkbox
                        checked={filters.category.includes("Furniture")}
                        onCheckedChange={(checked) =>
                          handleFilterChange(
                            "category",
                            checked ? ["Furniture"] : []
                          )
                        }
                      />
                      Furniture
                    </Label>
                    <Label className="flex items-center gap-2">
                      <Checkbox
                        checked={filters.category.includes("Electronics")}
                        onCheckedChange={(checked) =>
                          handleFilterChange(
                            "category",
                            checked ? ["Electronics"] : []
                          )
                        }
                      />
                      Electronics
                    </Label>
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-medium mb-2">Price Range</h3>
                  <div />
                </div>
                <div>
                  <h3 className="text-base font-medium mb-2">Rating</h3>
                  <Slider
                    min={0}
                    max={5}
                    step={0.5}
                    value={[filters.rating]}
                    onValueChange={(value) =>
                      handleFilterChange("rating", value)
                    }
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-background rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/placeholder.svg"
              alt={product.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">{product.title}</h3>
              <div className="flex items-center mb-2">
                <div className="flex items-center gap-1 text-yellow-500">
                  {[...Array(Math.floor(product.rating))].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5" />
                  ))}
                  {product.rating % 1 !== 0 && (
                    <StarHalfIcon className="w-5 h-5" />
                  )}
                </div>
                <span className="ml-2 text-muted-foreground">
                  ({product.rating.toFixed(1)})
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">
                  ${product.price.toFixed(2)}
                </span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StarHalfIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
