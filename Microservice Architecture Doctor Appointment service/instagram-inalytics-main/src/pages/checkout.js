"use client";
import Image from "next/image";
import { checkout } from "@/checkout";
export default function Home() {
  return (
    <main>
      <div>
        <div className="px-4">
          <div>
            <h2 className="text-3xl font-bold tracki text-center mt-12 sm:text-5xl ">
              Pricing
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl text-center ">
              Get started on our free plan and upgrade when you are ready.
            </p>
          </div>
          <div className="container m-12 mx-auto mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Companies / Brands
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              7 day free trial then £10 pcm
            </p>
          </div>
          <div className="mt-12 m-auto container space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div className="relative p-8 border border-gray-200 rounded-2xl shadow-sm flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-semibold ">...</h3>
                <p className="mt-4 flex items-baseline ">
                  <span className="text-5xl font-extrabold tracking-tight">
                    ....
                  </span>
                  <span className="ml-1 text-xl font-semibold">/Month</span>
                </p>
                <p className="mt-4 flex items-baseline ">
                  <span className="text-5xl font-extrabold tracking-tight">
                    ...
                  </span>
                  <span className="ml-1 text-xl font-semibold">/Year</span>
                </p>
                <p className="mt-4 flex items-baseline ">
                  <span className="text-5xl font-extrabold tracking-tight">
                    ...
                  </span>
                  <span className="ml-1 text-xl font-semibold">/Life time</span>
                </p>
                <p className="mt-6 ">You just want to discover</p>
                <ul role="list" className="mt-6 space-y-6">
                  <li className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="flex-shrink-0 w-6 h-6 text-emerald-500"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="ml-3 ">10 Credits</span>
                  </li>
                  <li className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="flex-shrink-0 w-6 h-6 text-emerald-500"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="ml-3 ">Generate video (2 credits)</span>
                  </li>
                  <li className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="flex-shrink-0 w-6 h-6 text-emerald-500"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="ml-3 ">Quizz (1 credits) </span>
                  </li>
                </ul>
              </div>
              <butoon
                className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
                href="/test"
                onClick={() => {
                  checkout({
                    lineItems: [
                      { price: "price_1PQ3MAP3KDscrK3opWU1DC84", quantity: 1 },
                    ],
                  });
                }}
              >
                Get started
              </butoon>
            </div>
            <div className="relative p-8 border border-gray-200 rounded-2xl shadow-sm flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-semibold ">...</h3>
                <p className="mt-4 flex items-baseline ">
                  <span className="text-5xl font-extrabold tracking-tight">
                    ....
                  </span>
                  <span className="ml-1 text-xl font-semibold">/Month</span>
                </p>
                <p className="mt-4 flex items-baseline ">
                  <span className="text-5xl font-extrabold tracking-tight">
                    ...
                  </span>
                  <span className="ml-1 text-xl font-semibold">/Year</span>
                </p>
                <p className="mt-4 flex items-baseline ">
                  <span className="text-5xl font-extrabold tracking-tight">
                    ...
                  </span>
                  <span className="ml-1 text-xl font-semibold">/Life time</span>
                </p>
                <p className="mt-6 ">You just want to discover</p>
                <ul role="list" className="mt-6 space-y-6">
                  <li className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="flex-shrink-0 w-6 h-6 text-emerald-500"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="ml-3 ">10 Credits</span>
                  </li>
                  <li className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="flex-shrink-0 w-6 h-6 text-emerald-500"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="ml-3 ">Generate video (2 credits)</span>
                  </li>
                  <li className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="flex-shrink-0 w-6 h-6 text-emerald-500"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="ml-3 ">Quizz (1 credits) </span>
                  </li>
                </ul>
              </div>
              <butoon
                href="/test"
                className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
                onClick={() => {
                  checkout({
                    lineItems: [
                      { price: "price_1PQ3MAP3KDscrK3opWU1DC84", quantity: 1 },
                    ],
                  });
                }}
              >
                Get started
              </butoon>
            </div>
            <div className="relative p-8 border border-gray-200 rounded-2xl shadow-sm flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-semibold ">...</h3>
                <p className="mt-4 flex items-baseline ">
                  <span className="text-5xl font-extrabold tracking-tight">
                    ....
                  </span>
                  <span className="ml-1 text-xl font-semibold">/Month</span>
                </p>
                <p className="mt-4 flex items-baseline ">
                  <span className="text-5xl font-extrabold tracking-tight">
                    ...
                  </span>
                  <span className="ml-1 text-xl font-semibold">/Year</span>
                </p>
                <p className="mt-4 flex items-baseline ">
                  <span className="text-5xl font-extrabold tracking-tight">
                    ...
                  </span>
                  <span className="ml-1 text-xl font-semibold">/Life time</span>
                </p>
                <p className="mt-6 ">You just want to discover</p>
                <ul role="list" className="mt-6 space-y-6">
                  <li className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="flex-shrink-0 w-6 h-6 text-emerald-500"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="ml-3 ">10 Credits</span>
                  </li>
                  <li className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="flex-shrink-0 w-6 h-6 text-emerald-500"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="ml-3 ">Generate video (2 credits)</span>
                  </li>
                  <li className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="flex-shrink-0 w-6 h-6 text-emerald-500"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="ml-3 ">Quizz (1 credits) </span>
                  </li>
                </ul>
              </div>
              <butoon
                className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
                href="/test"

                onClick={() => {
                  checkout({
                    lineItems: [
                      { price: "price_1PQ3MAP3KDscrK3opWU1DC84", quantity: 1 },
                    ],
                  });
                }}
              >
                Get started
              </butoon>
            </div>
            
          </div>
          
          <div className="container m-12 mx-auto mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Influencers:
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              £1 pcm / £10 for year
            </p>
          </div>
          <div className="mt-12 m-auto container space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div className="relative p-8  border border-gray-200 rounded-2xl shadow-sm flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-semibold ">....</h3>
                <p className="absolute top-0 py-1.5 px-4 bg-emerald-500 text-white rounded-full text-xs font-semibold uppercase tracking-wide  transform -translate-y-1/2">
                  Most popular
                </p>
                <p className="mt-4 flex items-baseline ">
                  <span className="text-5xl font-extrabold tracking-tight">
                    ....
                  </span>
                  <span className="ml-1 text-xl font-semibold">/month</span>
                </p>
                <p className="mt-4 flex items-baseline ">
                  <span className="text-5xl font-extrabold tracking-tight">
                    ...
                  </span>
                  <span className="ml-1 text-xl font-semibold">/Year</span>
                </p>
                <p className="mt-6 ">
                  You want to learn and have a personal assistant
                </p>
                <ul role="list" className="mt-6 space-y-6">
                  <li className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="flex-shrink-0 w-6 h-6 text-emerald-500"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="ml-3 ">30 credits</span>
                  </li>
                  <li className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="flex-shrink-0 w-6 h-6 text-emerald-500"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="ml-3 ">
                      Powered by GPT-4 (more accurate)
                    </span>
                  </li>
                  <li className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="flex-shrink-0 w-6 h-6 text-emerald-500"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="ml-3 ">Generate video (2 credits)</span>
                  </li>
                  <li className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="flex-shrink-0 w-6 h-6 text-emerald-500"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="ml-3 ">Quizz (1 credits) </span>
                  </li>
                  <li className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="flex-shrink-0 w-6 h-6 text-emerald-500"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="ml-3 ">Analytics on the quizz</span>
                  </li>
                </ul>
              </div>
              <butoon
                href="/test"
                className="bg-emerald-500 text-white  hover:bg-emerald-600 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
                onClick={() => {
                  checkout({
                    lineItems: [
                      { price: "price_1PQ3MAP3KDscrK3opWU1DC84", quantity: 1 },
                    ],
                  });
                }}
              >
                Get started
              </butoon>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            checkout({
              lineItems: [
                { price: "price_1PQ3MAP3KDscrK3opWU1DC84", quantity: 1 },
              ],
            });
          }}
        >
          Buy This image
        </button>
      </div>
    </main>
  );
}
