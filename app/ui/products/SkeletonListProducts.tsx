'use client'

import {Skeleton} from "@nextui-org/react";

export default function SkeletonListProducts() {

    const array = Array.from({ length: 6 });

  return (
    <div className="gap-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {array.map((item, index) => (
        <Skeleton key={index} className="rounded-lg">
        <div className="h-[300px] rounded-lg bg-default-300"></div>
        </Skeleton>
      ))}
    </div>
  );
}
