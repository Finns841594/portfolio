import React from "react";

import {Card, CardHeader, CardBody, Image, CardFooter, Button } from "@nextui-org/react";
import GithubIcon from "../icons/GithubIcon"

export default function PortfolioCardBig() {
  return (
    <Card isBlurred className="py-4 border-none">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">Project Title</h4>
        {/* <small className="text-default-500">Project Subtitle</small> */}
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Project preview gif"
          className="object-cover rounded-xl"
          src="/map 2.gif"
          width={270}
        />
      </CardBody>
      <CardFooter className="flex flex-col justify-between">
        <p className="text-tiny">Description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, quisquam doloremque recusandae voluptates deserunt amet debitis ea praesentium eum reprehenderit quia accusamus repellat ipsam pariatur distinctio, a dolores suscipit voluptatum!</p>
        <Button color="primary" startContent={<GithubIcon/>} className="text-tiny" variant="bordered" radius="lg" size="sm">
          Github Repo
        </Button>
      </CardFooter>
    </Card>
  );
}