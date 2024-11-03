import { Card, CardContent } from "@/components/ui/card"
import { Wallet, Upload, Coins, BadgeDollarSign } from "lucide-react"

const steps = [
  {
    icon: <Wallet className="h-12 w-12" />,
    title: "Connect Wallet",
    description: "Connect your preferred Web3 wallet to get started with NFT trading."
  },
  {
    icon: <Upload className="h-12 w-12" />,
    title: "Create Collection",
    description: "Upload your digital assets and create your first NFT collection."
  },
  {
    icon: <Coins className="h-12 w-12" />,
    title: "List for Sale",
    description: "Set your price and list your NFTs on the marketplace."
  },
  {
    icon: <BadgeDollarSign className="h-12 w-12" />,
    title: "Earn Rewards",
    description: "Start earning as your NFTs are traded in the marketplace."
  },
]

export function HowItWorks() {
  return (
    <section className="py-16">
      <h2 className="mb-8 text-center text-3xl font-bold">How It Works</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <Card key={index} className="text-center">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  {step.icon}
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}