'use client'

import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import { useRouter } from 'next/navigation'

export default async function ListProducts(list: any) {
  const router = useRouter()

  return (
    <div className="gap-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {list.list.map((item: any, index: number) => (
        <Card className="" shadow="sm" key={index} isPressable onPress={() => router.push('/producto/' + item.id)} >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.name}
              className="w-full object-cover h-[300px]"
              src="https://www.digitalresponse.es/wp-content/uploads/2020/05/campa%C3%B1as_reposicion_de_producto.jpg"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.name}</b>
            <p className="text-default-500">{item.price} $</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
