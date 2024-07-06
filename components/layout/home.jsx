"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Component() {
  useEffect(() => {
    gsap.to(".hero-image", {
      yPercent: 50,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        scrub: true,
      },
    });

    gsap.utils.toArray(".section-title").forEach((title) => {
      gsap.from(title, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
        },
      });
    });
  }, []);

  const staggerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid gap-6 md:grid-cols-1 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerVariants}
              className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <motion.h1
                  variants={itemVariants}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter text-primary">
                  Empowering Farmers, Reducing Waste
                </motion.h1>
                <motion.p
                  variants={itemVariants}
                  className="max-w-[600px]  text-sm sm:text-base md:text-lg lg:text-xl">
                  In rural Cameroon, farmers struggle with limited distribution
                  channels, leading to the spoilage of perishable farm produce
                  and significant food waste. This issue not only impacts{" "}
                  {"farmers' "}livelihoods but also deprives communities of
                  access to fresh, nutritious food.
                </motion.p>
              </div>
              <motion.div
                variants={itemVariants}
                className="flex flex-col gap-2 min-[400px]:flex-row">
                <motion.a
                  href="#"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="inline-flex h-10 items-center justify-center rounded-md  px-8 text-sm font-medium  shadow transition-colors  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#4CAF50] disabled:pointer-events-none disabled:opacity-50">
                  Learn More
                </motion.a>
                <motion.a
                  href="#"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="inline-flex h-10 items-center justify-center rounded-md border px-8 text-sm font-medium shadow-sm transition-colors  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#4CAF50] bg-primary text-primary-foreground disabled:pointer-events-none disabled:opacity-50">
                  Get Involved
                </motion.a>
              </motion.div>
            </motion.div>
            <div className="hero-section relative overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3213283/pexels-photo-3213283.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Hero"
                width={600}
                height={400}
                className="hero-image mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg px-3 py-1 text-sm bg-primary text-primary-foreground">
                  Impact on Farmers
                </div>
                <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter ">
                  Devastating Losses for Rural Farmers
                </h2>
                <p className="max-w-[900px]  text-sm sm:text-base md:text-lg lg:text-xl">
                  Without reliable distribution channels, farmers in rural
                  Cameroon often face the heartbreaking reality of watching
                  their hard-earned produce spoil before it can reach the
                  market. This not only robs them of their livelihood but also
                  deprives their communities of access to fresh, nutritious
                  food.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden rounded-xl">
                <Image
                  width={1000}
                  height={1000}
                  src="https://images.pexels.com/photos/9844130/pexels-photo-9844130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Farmer"
                  className="mx-auto aspect-video object-cover object-center sm:w-full lg:order-last"
                />
              </motion.div>
              <div className="flex flex-col justify-center space-y-4">
                <motion.ul
                  initial="hidden"
                  whileInView="visible"
                  variants={staggerVariants}
                  className="grid gap-6">
                  <motion.li variants={itemVariants}>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-primary">
                        Reduced Incomes
                      </h3>
                      <p className="">
                        Farmers lose a significant portion of their harvest due
                        to spoilage, leading to decreased earnings and financial
                        instability.
                      </p>
                    </div>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-primary">
                        Wasted Efforts
                      </h3>
                      <p className="">
                        The time, resources, and hard work invested by farmers
                        are often rendered meaningless when their produce cannot
                        reach the market.
                      </p>
                    </div>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-primary">
                        Diminished Hope
                      </h3>
                      <p className="">
                        Repeated losses due to spoilage can erode the confidence
                        and motivation of farmers, making it increasingly
                        difficult to maintain their livelihoods.
                      </p>
                    </div>
                  </motion.li>
                </motion.ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg  px-3 py-1 text-sm bg-primary text-primary-foreground">
                  Food Waste
                </div>
                <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter ">
                  Staggering Levels of Food Waste
                </h2>
                <p className="max-w-[900px]  text-sm sm:text-base md:text-lg lg:text-xl">
                  The lack of efficient distribution channels in rural Cameroon
                  leads to the staggering loss of tons of fresh, nutritious
                  produce every year. This not only represents a tragic waste of
                  resources but also deprives communities of access to essential
                  food sources.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden rounded-xl lg:order-last">
                <Image
                  width={1000}
                  height={1000}
                  src="https://images.pexels.com/photos/2382894/pexels-photo-2382894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Food Waste"
                  className="mx-auto aspect-video object-cover object-center sm:w-full"
                />
              </motion.div>
              <div className="flex flex-col justify-center space-y-4">
                <motion.ul
                  initial="hidden"
                  whileInView="visible"
                  variants={staggerVariants}
                  className="grid gap-6">
                  <motion.li variants={itemVariants}>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-primary">
                        Tons of Produce Lost
                      </h3>
                      <p className="">
                        Estimates suggest that up to 40% of the total
                        agricultural output in rural Cameroon is lost due to
                        spoilage and lack of distribution channels.
                      </p>
                    </div>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-primary">
                        Nutritional Deficiencies
                      </h3>
                      <p className="">
                        The loss of fresh produce deprives communities of access
                        to essential vitamins, minerals, and other nutrients,
                        contributing to widespread malnutrition.
                      </p>
                    </div>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-primary">
                        Environmental Impact
                      </h3>
                      <p className="">
                        The vast amounts of food waste generated have a
                        significant environmental impact, contributing to
                        greenhouse gas emissions and the depletion of natural
                        resources.
                      </p>
                    </div>
                  </motion.li>
                </motion.ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg  px-3 py-1 text-sm bg-primary text-primary-foreground">
                  Community Impact
                </div>
                <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter ">
                  Depriving Communities of Fresh Food
                </h2>
                <p className="max-w-[900px]  text-sm sm:text-base md:text-lg lg:text-xl">
                  The lack of reliable distribution channels not only impacts
                  farmers but also deprives rural communities of access to
                  fresh, nutritious produce. This contributes to food insecurity
                  and undermines the overall health and well-being of these
                  communities.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden rounded-xl">
                <Image
                  width={1000}
                  height={1000}
                  src="https://images.pexels.com/photos/21998617/pexels-photo-21998617/free-photo-of-wicker-baskets-of-exotic-fruits.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Community"
                  className="mx-auto aspect-video object-cover object-center sm:w-full lg:order-last"
                />
              </motion.div>
              <div className="flex flex-col justify-center space-y-4">
                <motion.ul
                  initial="hidden"
                  whileInView="visible"
                  variants={staggerVariants}
                  className="grid gap-6">
                  <motion.li variants={itemVariants}>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-primary">
                        Limited Access to Nutrition
                      </h3>
                      <p className="">
                        Without reliable access to fresh produce, rural
                        communities in Cameroon face challenges in obtaining
                        essential nutrients, leading to health issues and
                        malnutrition.
                      </p>
                    </div>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-primary">
                        Economic Hardship
                      </h3>
                      <p className="">
                        The lack of fresh, affordable produce in local markets
                        forces communities to rely on more expensive and
                        less-nutritious alternatives, further exacerbating
                        economic challenges.
                      </p>
                    </div>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-primary">
                        Diminished Quality of Life
                      </h3>
                      <p className="">
                        The inability to access fresh, locally-grown produce
                        undermines the overall well-being and quality of life
                        for rural communities in Cameroon.
                      </p>
                    </div>
                  </motion.li>
                </motion.ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter ">
                Join Us in Transforming Rural Cameroon
              </h2>
              <p className="mx-auto max-w-[700px]  text-sm sm:text-base md:text-lg lg:text-xl">
                Together, we can address the issue of perishable farm produce
                spoilage and empower rural communities in Cameroon. Your support
                can make a lasting impact on the lives of farmers and families.
              </p>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerVariants}
              className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <motion.a
                href="#"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="inline-flex h-10 items-center justify-center rounded-md  px-8 text-sm font-medium  shadow transition-colors  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#4CAF50] disabled:pointer-events-none disabled:opacity-50">
                Donate Now
              </motion.a>
              <motion.a
                href="#"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="inline-flex h-10 items-center justify-center rounded-md border px-8 text-sm font-medium shadow-sm transition-colors  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#4CAF50] bg-primary text-primary-foreground disabled:pointer-events-none disabled:opacity-50">
                Learn More
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
