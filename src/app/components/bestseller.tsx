import Image from "next/image";
import bestseller1 from "@/app/images/bestseller1.png";
import bestseller2 from "@/app/images/bestseller2.png";
import bestseller3 from "@/app/images/bestseller3.png";
import bestseller4 from "@/app/images/bestseller4.png";
import bestseller5 from "@/app/images/bestseller5.png";
import bestseller6 from "@/app/images/bestseller6.png";
import bestseller7 from "@/app/images/bestseller7.png";
import bestseller8 from "@/app/images/bestseller8.png";
export default function BestSeller() {
  return (
    <>
      <div className="font-sans p-4 mx-auto lg:max-w-5xl md:max-w-3xl sm:max-w-full">
        <p className="text-center">Featured Products</p>
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12 text-center">
          BESTSELLER PRODUCTS
        </h2>
        <p className="text-center text-[#737373] -mt-10">
          Problems trying to resolve the conflict between
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          <div className="bg-white rounded overflow-hidden cursor-pointer hover:scale-[1.02] transition-all">
            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
              <Image
                src={bestseller1}
                alt="Product 1"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 text-center">
                Graphic Design
              </h3>
              <h3 className="text-lg font-bold text-[#737373] text-center">
                English Department
              </h3>
              <div className="mt-4 flex items-center flex-wrap gap-2">
                <h4 className="text-lg font-bold text-gray-800 ml-10">
                  <span className="text-[#BDBDBD]">$16.48 </span>
                  <span className="text-[#23856D]">$6.48</span>
                </h4>
                <div className="flex space-x-1 ml-10">
                  <div className="w-6 h-6 bg-[#23A6F0] rounded-full"></div>
                  <div className="w-6 h-6 bg-[#23856D] rounded-full"></div>
                  <div className="w-6 h-6 bg-[#E77C40] rounded-full"></div>
                  <div className="w-6 h-6 bg-[#252B42] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded overflow-hidden cursor-pointer hover:scale-[1.02] transition-all">
            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
              <Image
                src={bestseller2}
                alt="Product 1"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 text-center">
                Graphic Design
              </h3>
              <h3 className="text-lg font-bold text-[#737373] text-center">
                English Department
              </h3>
              <div className="mt-4 flex items-center flex-wrap gap-2">
                <h4 className="text-lg font-bold text-gray-800 ml-10">
                  <span className="text-[#BDBDBD]">$16.48 </span>
                  <span className="text-[#23856D]">$6.48</span>
                </h4>
                <div className="flex space-x-1 ml-10">
                  <div className="w-6 h-6 bg-[#23A6F0] rounded-full"></div>
                  <div className="w-6 h-6 bg-[#23856D] rounded-full"></div>
                  <div className="w-6 h-6 bg-[#E77C40] rounded-full"></div>
                  <div className="w-6 h-6 bg-[#252B42] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded overflow-hidden cursor-pointer hover:scale-[1.02] transition-all">
            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
              <Image
                src={bestseller3}
                alt="Product 1"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 text-center">
                Graphic Design
              </h3>
              <h3 className="text-lg font-bold text-[#737373] text-center">
                English Department
              </h3>
              <div className="mt-4 flex items-center flex-wrap gap-2">
                <h4 className="text-lg font-bold text-gray-800 ml-10">
                  <span className="text-[#BDBDBD]">$16.48 </span>
                  <span className="text-[#23856D]">$6.48</span>
                </h4>
                <div className="flex space-x-1 ml-10">
                  <div className="w-6 h-6 bg-[#23A6F0] rounded-full"></div>
                  <div className="w-6 h-6 bg-[#23856D] rounded-full"></div>
                  <div className="w-6 h-6 bg-[#E77C40] rounded-full"></div>
                  <div className="w-6 h-6 bg-[#252B42] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded overflow-hidden cursor-pointer hover:scale-[1.02] transition-all">
            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
              <Image
                src={bestseller4}
                alt="Product 1"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 text-center">
                Graphic Design
              </h3>
              <h3 className="text-lg font-bold text-[#737373] text-center">
                English Department
              </h3>
              <div className="mt-4 flex items-center flex-wrap gap-2">
                <h4 className="text-lg font-bold text-gray-800 ml-10">
                  <span className="text-[#BDBDBD]">$16.48 </span>
                  <span className="text-[#23856D]">$6.48</span>
                </h4>
                <div className="flex space-x-1 ml-10">
                  <div className="w-6 h-6 bg-[#23A6F0] rounded-full"></div>
                  <div className="w-6 h-6 bg-[#23856D] rounded-full"></div>
                  <div className="w-6 h-6 bg-[#E77C40] rounded-full"></div>
                  <div className="w-6 h-6 bg-[#252B42] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-32">
          <div className="bg-white rounded overflow-hidden cursor-pointer hover:scale-[1.02] transition-all">
            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
              <Image
                src={bestseller5}
                alt="Product 1"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 text-center">
                Graphic Design
              </h3>
              <h3 className="text-lg font-bold text-[#737373] text-center">
                English Department
              </h3>
              <div className="mt-4 flex items-center flex-wrap gap-2">
                <h4 className="text-lg font-bold text-gray-800 ml-10">
                  <span className="text-[#BDBDBD]">$16.48 </span>
                  <span className="text-[#23856D]">$6.48</span>
                </h4>
                <div className="flex space-x-1 ml-10">
                  <div className="w-6 h-6 bg-[#23A6F0] rounded-full"></div>
                  <div className="w-6 h-6 bg-[#23856D] rounded-full"></div>
                  <div className="w-6 h-6 bg-[#E77C40] rounded-full"></div>
                  <div className="w-6 h-6 bg-[#252B42] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded overflow-hidden cursor-pointer hover:scale-[1.02] transition-all">
            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
              <Image
                src={bestseller6}
                alt="Product 1"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 text-center">
                Graphic Design
              </h3>
              <h3 className="text-lg font-bold text-[#737373] text-center">
                English Department
              </h3>
              <div className="mt-4 flex items-center flex-wrap gap-2">
                <h4 className="text-lg font-bold text-gray-800 ml-10">
                  <span className="text-[#BDBDBD]">$16.48 </span>
                  <span className="text-[#23856D]">$6.48</span>
                </h4>
                <div className="flex space-x-1 ml-10">
                  <div className="w-6 h-6 bg-[#23A6F0] rounded-full"></div>
                  <div className="w-6 h-6 bg-[#23856D] rounded-full"></div>
                  <div className="w-6 h-6 bg-[#E77C40] rounded-full"></div>
                  <div className="w-6 h-6 bg-[#252B42] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded overflow-hidden cursor-pointer hover:scale-[1.02] transition-all">
            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
              <Image
                src={bestseller7}
                alt="Product 1"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 text-center">
                Graphic Design
              </h3>
              <h3 className="text-lg font-bold text-[#737373] text-center">
                English Department
              </h3>
              <div className="mt-4 flex items-center flex-wrap gap-2">
                <h4 className="text-lg font-bold text-gray-800 ml-10">
                  <span className="text-[#BDBDBD]">$16.48 </span>
                  <span className="text-[#23856D]">$6.48</span>
                </h4>
                <div className="flex space-x-1 ml-10">
                  <div className="w-6 h-6 bg-[#23A6F0] rounded-full"></div>
                  <div className="w-6 h-6 bg-[#23856D] rounded-full"></div>
                  <div className="w-6 h-6 bg-[#E77C40] rounded-full"></div>
                  <div className="w-6 h-6 bg-[#252B42] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded overflow-hidden cursor-pointer hover:scale-[1.02] transition-all">
            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
              <Image
                src={bestseller8}
                alt="Product 1"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 text-center">
                Graphic Design
              </h3>
              <h3 className="text-lg font-bold text-[#737373] text-center">
                English Department
              </h3>
              <div className="mt-4 flex items-center flex-wrap gap-2">
                <h4 className="text-lg font-bold text-gray-800 ml-10">
                  <span className="text-[#BDBDBD]">$16.48 </span>
                  <span className="text-[#23856D]">$6.48</span>
                </h4>
                <div className="flex space-x-1 ml-10">
                  <div className="w-6 h-6 bg-[#23A6F0] rounded-full"></div>
                  <div className="w-6 h-6 bg-[#23856D] rounded-full"></div>
                  <div className="w-6 h-6 bg-[#E77C40] rounded-full"></div>
                  <div className="w-6 h-6 bg-[#252B42] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
