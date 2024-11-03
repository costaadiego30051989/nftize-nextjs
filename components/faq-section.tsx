"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is an NFT?",
    answer: "An NFT (Non-Fungible Token) is a unique digital asset that represents ownership of a specific item or piece of content on the blockchain. Unlike cryptocurrencies, each NFT is unique and cannot be replaced with something else of equal value."
  },
  {
    question: "How do I create my first NFT?",
    answer: "To create your first NFT, connect your wallet, click on 'Create' in the navigation menu, upload your digital asset (image, video, or audio), fill in the details like title and description, choose your blockchain network, and mint your NFT. Gas fees will apply for minting."
  },
  {
    question: "What wallets are supported?",
    answer: "We support major Web3 wallets including MetaMask, WalletConnect, Coinbase Wallet, and Trust Wallet. Make sure you have enough cryptocurrency in your wallet to cover gas fees and transactions."
  },
  {
    question: "How are NFT prices determined?",
    answer: "NFT prices are determined by various factors including the artist's reputation, the uniqueness of the piece, historical sales data, and market demand. Creators can set initial prices, and subsequent prices are determined by the market through bids and offers."
  },
]

export function FAQSection() {
  return (
    <section className="py-16">
      <h2 className="mb-8 text-center text-3xl font-bold">Frequently Asked Questions</h2>
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}