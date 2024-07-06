import Filter from "./filter";
import { ShopHero } from "./hero";
export default function MainShop() {
  return (
    <div className="flex flex-col w-full">
      <div className="grid md:grid-cols-2 w-full max-w-6xl">
        <ShopHero />
        <div className="flex">
          <Filter />
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4  place-items-center gap-4 w-full">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => {
              return (
                <div
                  key={item}
                  className="border-2 border-gray-200 p-2 cursor-pointer">
                  Item {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
