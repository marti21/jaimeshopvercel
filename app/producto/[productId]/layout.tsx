import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Producto',
  description: 'Producto',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {

  return (
    <div>
        {children}
    </div>
  )
}