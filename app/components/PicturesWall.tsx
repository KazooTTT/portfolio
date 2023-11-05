import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export function PicturesWall() {
  return (
    <Card className="col-span-4">
      <CardHeader className="py-2">
        <CardTitle className="text-lg">照片墙</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-row space-x-3 overflow-x-scroll">
          {new Array(10).fill(0).map((_, index) => (
            <li key={index} className="flex-shrink-0">
              <Image
                src="https://pictures.kazoottt.top/2023/11/20231104-202311041404163-f1c85a135cfe806bd5afd973e52c3143.jpeg"
                className="h-32 w-32 rounded-sm shadow hover:border hover:border-solid hover:border-gray-400"
                alt="newest image item"
                height={128}
                width={128}
              />
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
