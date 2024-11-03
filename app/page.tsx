import { Button } from "@/components/ui/button"
import { Sparkles, TrendingUp, Zap } from "lucide-react"
import { FeaturedSlider } from "@/components/featured-slider"
import { FAQSection } from "@/components/faq-section"
import { HowItWorks } from "@/components/how-it-works"
import { FeaturedCollections } from "@/components/featured-collections"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
          Discover, Collect, and Trade
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {" "}
            Extraordinary NFTs
          </span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          Explore the future of digital ownership in our curated marketplace
          featuring the most innovative creators and collections.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="gap-2">
            <Sparkles className="h-5 w-5" /> Explore Collections
          </Button>
          <Button size="lg" variant="outline" className="gap-2" asChild>
            <Link href="/register">
              <Zap className="h-5 w-5" /> Start Creating
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured NFT Slider */}
      <section className="mb-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Featured NFTs</h2>
          <Button variant="ghost" className="gap-2">
            <TrendingUp className="h-4 w-4" /> View All
          </Button>
        </div>
        <FeaturedSlider />
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Featured Collections */}
      <FeaturedCollections />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  )
}