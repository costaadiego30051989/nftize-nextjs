import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp } from "lucide-react"
import Image from "next/image"

const featuredCollections = [
  {
    id: 1,
    name: "Cosmic Dreamers",
    creator: "CryptoArtist",
    image: "https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?w=800&auto=format&fit=crop&q=60",
    floorPrice: "2.5 ETH",
    volume: "150 ETH",
    verified: true,
  },
  {
    id: 2,
    name: "Digital Nomads",
    creator: "Web3Studio",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60",
    floorPrice: "1.8 ETH",
    volume: "89 ETH",
    verified: true,
  },
  {
    id: 3,
    name: "Future Artifacts",
    creator: "NFTLegend",
    image: "https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?w=800&auto=format&fit=crop&q=60",
    floorPrice: "3.2 ETH",
    volume: "210 ETH",
    verified: true,
  },
]

export function FeaturedCollections() {
  return (
    <section className="mb-16">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold">Featured Collections</h2>
        <Button variant="ghost" className="gap-2">
          <TrendingUp className="h-4 w-4" /> View Rankings
        </Button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredCollections.map((collection) => (
          <Card
            key={collection.id}
            className="group overflow-hidden transition-all hover:shadow-lg"
          >
            <div className="relative aspect-square">
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-4">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-xl font-semibold">{collection.name}</h3>
                {collection.verified && (
                  <Badge variant="secondary">Verified</Badge>
                )}
              </div>
              <p className="mb-4 text-sm text-muted-foreground">
                by {collection.creator}
              </p>
              <div className="flex justify-between text-sm">
                <div>
                  <p className="text-muted-foreground">Floor Price</p>
                  <p className="font-medium">{collection.floorPrice}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Volume</p>
                  <p className="font-medium">{collection.volume}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}