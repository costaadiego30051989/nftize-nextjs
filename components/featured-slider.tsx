"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { useEffect, useState } from "react"
import { formatEther } from "@/lib/utils"

const recentNFTs = [
  {
    id: 1,
    name: "Ethereal Dreams #142",
    creator: "0xArtist",
    price: "1.8",
    image: "https://images.unsplash.com/photo-1647100856371-48b11c9e9903?w=800&auto=format&fit=crop&q=60",
    timeLeft: "2 hours",
    currentBid: "1.9",
  },
  {
    id: 2,
    name: "Cyber Punk City",
    creator: "MetaCreator",
    price: "2.5",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&auto=format&fit=crop&q=60",
    timeLeft: "5 hours",
    currentBid: "2.6",
  },
  {
    id: 3,
    name: "Digital Genesis",
    creator: "Web3Master",
    price: "3.2",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
    timeLeft: "1 day",
    currentBid: "3.3",
  },
  {
    id: 4,
    name: "Abstract Reality",
    creator: "CryptoVision",
    price: "1.5",
    image: "https://images.unsplash.com/photo-1642437742374-19b1911fe281?w=800&auto=format&fit=crop&q=60",
    timeLeft: "3 hours",
    currentBid: "1.6",
  },
]

export function FeaturedSlider() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {recentNFTs.map((nft) => (
          <CarouselItem key={nft.id} className="md:basis-1/2 lg:basis-1/3">
            <Card className="group relative overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src={nft.image}
                  alt={nft.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold">{nft.name}</h3>
                  <p className="text-sm opacity-90">by {nft.creator}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <div>
                      <p className="text-xs opacity-80">Current Bid</p>
                      <p className="font-medium">{nft.currentBid} ETH</p>
                    </div>
                    <Badge variant="secondary" className="bg-white/20">
                      {nft.timeLeft} left
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}