'use client'
    
import {NextUIProvider} from '@nextui-org/react'
import { ChakraProvider } from '@chakra-ui/react'
import { CartProvider } from "@/app/components/Context";

export function Providers({children}: { children: React.ReactNode }) {

  return (
      <NextUIProvider>
        <ChakraProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </ChakraProvider>
      </NextUIProvider>
  )
}