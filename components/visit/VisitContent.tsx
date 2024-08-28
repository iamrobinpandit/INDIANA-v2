"use client";
import React from 'react';
import { DirectionAwareHover } from '../ui/direction-aware-hover';
import { LayoutGrid } from '../ui/layout-grid';
import Link from 'next/link';


export const VisitContent = () => {
  return (
    <div>
      <span className='text-6xl font-bold flex flex-col justify-start ml-40 mt-32 '>Must Do Experiences In India</span>
       <div className="h-screen w-ful">
      <LayoutGrid cards={cards} />
    </div>
    </div>
  );
};

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white underline">
        House in the woods
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};
 
const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House above the clouds
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Greens all over
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFive = () => {
  return (
    <div>
      <Link href="/visi">
        <p className="font-bold md:text-4xl text-xl text-white">
          Rivers are serene
        </p>
      </Link> 
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
 
const cards = [
  {
    id: 1,
    content: <SkeletonOne/>,
    className: "md:col-span-2",
    thumbnail:
      "https://img.veenaworld.com/wp-content/uploads/2023/05/10-Travel-Places-Where-Nature-Takes-Centerstage.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://www.vacationstravel.com/wp-content/uploads/2017/07/103_Kerala_Skouatroulio_iStock-534757407x4.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://media2.thrillophilia.com/images/photos/000/082/478/original/1600412455_shutterstock_1084397678.jpg?w=518&h=490&dpr=1.5",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://t4.ftcdn.net/jpg/06/85/71/11/360_F_685711177_sBr8YTiEspA4qmZPTyRnuTjewJYWdXU5.jpg",
  },
  {
    id: 4,
    content: <SkeletonFive />,
    className: "md:col-span-2",
    thumbnail:
      "https://www.holidify.com/images/bgImages/DARJEELING.jpg",
  },
];
