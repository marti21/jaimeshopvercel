'use client'

import React, { useState } from "react";
import {Input} from "@nextui-org/react";
import {SearchIcon} from "./SearchIcon";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function SearchProducts() {
    const searchParams = useSearchParams()
    //console.log(searchParams.get('query'))
    const pathname = usePathname()
    const { replace } = useRouter();

    const valueSearch = (searchWord: string) => {
        console.log(searchWord);
        const params = new URLSearchParams(searchParams);

        if(searchWord){
            params.set('query', searchWord)
        }
        else{
            params.delete('query')
        }

        replace(`${pathname}?${params.toString()}`)
    }

  return (
      <Input
        label="Search"
        radius="lg"
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focused=true]:bg-default-200/50",
            "dark:group-data-[focused=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        className="max-w-xs"
        placeholder="Type to search..."
        startContent={
          <SearchIcon className="text-sm text-default-400 pointer-events-none flex-shrink-0" />
        }
        defaultValue={searchParams.get('query')?.toString()}
        onChange={event => valueSearch(event.target.value)}
      />
  );
}
