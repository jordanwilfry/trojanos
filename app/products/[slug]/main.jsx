"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Toast } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  StarIcon,
  HeartIcon,
  ShoppingCartIcon,
  ZoomInIcon,
} from "lucide-react";

export default function ProductDetail({ product }) {
  const [selectedColor, setSelectedColor] = useState(product.color[0]);
  const [selectedSize, setSelectedSize] = useState(product.size[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const imageRef = useRef(null);
  const { toast } = useToast();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".product-title", { opacity: 0, y: 20, duration: 0.5 })
      .from(".product-price", { opacity: 0, x: -20, duration: 0.5 }, "-=0.3")
      .from(
        ".product-badge",
        { opacity: 0, scale: 0.8, duration: 0.5 },
        "-=0.3"
      )
      .from(
        ".product-options",
        { opacity: 0, y: 20, duration: 0.5, stagger: 0.2 },
        "-=0.3"
      );
  }, []);

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.title} has been added to your cart.`,
    });
  };

  const handleImageZoom = (e) => {
    if (!isZoomed || !imageRef.current) return;
    const { left, top, width, height } =
      imageRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    imageRef.current.style.transformOrigin = `${x * 100}% ${y * 100}%`;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 lg:p-8 max-w-7xl mx-auto">
      <motion.div
        className="relative overflow-hidden rounded-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}>
        <Carousel>
          <CarouselContent>
            {[1, 2, 3, 4].map((_, index) => (
              <CarouselItem key={index}>
                <div
                  className="relative overflow-hidden cursor-zoom-in"
                  onClick={() => setIsZoomed(!isZoomed)}
                  onMouseMove={handleImageZoom}
                  onMouseLeave={() => setIsZoomed(false)}>
                  <Image
                    ref={imageRef}
                    src="https://placehold.co/400x600.png"
                    alt={`${product.title} - Image ${index + 1}`}
                    width={400}
                    height={600}
                    className={`w-full h-auto object-cover transition-transform duration-300 ${
                      isZoomed ? "scale-150" : "scale-100"
                    }`}
                  />
                  {!isZoomed && (
                    <div className="absolute top-2 right-2 bg-white/80 p-2 rounded-full">
                      <ZoomInIcon className="w-5 h-5" />
                    </div>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </motion.div>

      <ScrollArea className="h-[calc(100vh-2rem)] pr-4">
        <div className="grid gap-6">
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold product-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            {product.title}
          </motion.h1>

          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating)
                      ? "fill-primary"
                      : "fill-muted stroke-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="text-muted-foreground text-sm">
              ({product.rating.toFixed(1)} rating)
            </span>
          </div>

          <Accordion
            type="single"
            collapsible
            className="w-full product-options">
            <AccordionItem value="color">
              <AccordionTrigger>Color</AccordionTrigger>
              <AccordionContent>
                <RadioGroup
                  value={selectedColor}
                  onValueChange={setSelectedColor}
                  className="flex flex-wrap items-center gap-2 mt-2">
                  {product.color.map((color) => (
                    <Label
                      key={color}
                      htmlFor={`color-${color}`}
                      className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted">
                      <RadioGroupItem id={`color-${color}`} value={color} />
                      <span
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: color }}></span>
                      {color}
                    </Label>
                  ))}
                </RadioGroup>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="size">
              <AccordionTrigger>Size</AccordionTrigger>
              <AccordionContent>
                <RadioGroup
                  value={selectedSize}
                  onValueChange={setSelectedSize}
                  className="flex flex-wrap items-center gap-2 mt-2">
                  {product.size.map((size) => (
                    <Label
                      key={size}
                      htmlFor={`size-${size}`}
                      className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted">
                      <RadioGroupItem id={`size-${size}`} value={size} />
                      {size.toUpperCase()}
                    </Label>
                  ))}
                </RadioGroup>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="flex items-center justify-between">
            <motion.span
              className="text-4xl font-bold product-price"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              ${product.price.toFixed(2)}
            </motion.span>
            <motion.div
              className="product-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}>
              <Badge
                variant={product.inStock ? "default" : "secondary"}
                className="px-3 py-1 rounded-full">
                {product.inStock ? "In stock" : "Out of stock"}
              </Badge>
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <Button
              className="flex-1"
              onClick={handleAddToCart}
              disabled={!product.inStock}>
              <ShoppingCartIcon className="w-4 h-4 mr-2" />
              Add to cart
            </Button>
            <Button variant="outline" className="flex-1">
              <HeartIcon className="w-4 h-4 mr-2" />
              Add to wishlist
            </Button>
          </div>
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="border-b">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="pt-6">
              <div className="grid gap-4 text-sm leading-loose">
                <p>{product.description}</p>
              </div>
            </TabsContent>
            <TabsContent value="details" className="pt-6">
              <div className="grid gap-4 text-sm leading-loose">
                <div>
                  <h3 className="font-bold">Materials</h3>
                  <p>{product.material}</p>
                </div>
                <div>
                  <h3 className="font-bold">Care Instructions</h3>
                  <p>{product.careInstructions}</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="pt-6">
              <div className="grid gap-6">
                {product.reviews.map((review, index) => (
                  <div key={index} className="flex gap-4">
                    <Avatar className="w-10 h-10 border">
                      <AvatarImage src={"https://placehold.co/400x600.png"} />
                      <AvatarFallback>
                        {review.userName.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid gap-2">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">{review.userName}</h4>
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? "fill-primary"
                                  : "fill-muted stroke-muted-foreground"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm leading-loose text-muted-foreground">
                        {review.comment}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </ScrollArea>

      <Drawer>
        <DrawerTrigger asChild>
          <Button
            variant="outline"
            className="fixed bottom-4 right-4 lg:hidden">
            Quick View
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <p className="text-sm text-muted-foreground">
              {product.description}
            </p>
            <div className="mt-4">
              <Button
                size="sm"
                onClick={handleAddToCart}
                disabled={!product.inStock}>
                <ShoppingCartIcon className="w-4 h-4 mr-2" />
                Add to cart
              </Button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
