import Image from "next/image";
import Link from "next/link";

export default function SolutionPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">">
                  Our Solution: Connecting Farmers to Markets
                </h1>
                <p className="max-w-[600px] md:text-xl">
                  Cameroon Fresh is a social enterprise that connects rural
                  farmers in Cameroon with reliable distribution channels and
                  urban markets. By providing transportation, storage, and sales
                  support, we empower farmers to get their fresh produce to
                  customers, reducing waste and increasing their incomes.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md  px-8 text-sm font-medium  shadow transition-colors  focus-visible:outline-none focus-visible:ring-1  disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border  px-8 text-sm font-medium shadow-sm transition-colors  focus-visible:outline-none focus-visible:ring-1  disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground"
                  prefetch={false}
                >
                  Get Involved
                </Link>
              </div>
            </div>
            <Image
              width={1000}
              height={1000}
              src="https://placehold.co/400x600.png"
              alt="Solution"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg  px-3 py-1 text-sm bg-primary text-primary-foreground">
                  Our Approach
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Empowering Farmers, Reducing Waste
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Cameroon Fresh utilizes a multi-pronged approach to address
                  the challenges faced by rural farmers. We provide
                  transportation services to collect produce from remote
                  villages, ensuring it reaches urban markets in a timely
                  manner. Additionally, we offer storage and refrigeration
                  facilities to extend the shelf life of perishable items,
                  reducing waste and spoilage.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                width={1000}
                height={1000}
                src="https://placehold.co/400x600.png"
                alt="Farmer Empowerment"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-primary">">
                        Increased Farmer Incomes
                      </h3>
                      <p className="">
                        By ensuring that {"farmers' "}produce reaches the market, we
                        help them maximize their earnings and improve their
                        overall financial stability.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-primary">">
                        Reduced Food Waste
                      </h3>
                      <p className="">
                        Our transportation and storage solutions significantly
                        reduce the amount of fresh produce that is lost to
                        spoilage, minimizing waste and maximizing the
                        availability of nutritious food.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-primary">">
                        Empowered Communities
                      </h3>
                      <p className="">
                        By ensuring a reliable supply of fresh, locally-grown
                        produce, we help improve food security and access to
                        essential nutrients for rural communities in Cameroon.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">">
                Join Us in Transforming Rural Cameroon
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Together, we can address the issue of perishable farm produce
                spoilage and empower rural communities in Cameroon. Your support
                can make a lasting impact on the lives of farmers and families.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md  px-8 text-sm font-medium  shadow transition-colors  focus-visible:outline-none focus-visible:ring-1  disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground"
                prefetch={false}
              >
                Donate Now
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
