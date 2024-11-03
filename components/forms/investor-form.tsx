"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { WalletButton } from "@/components/wallet-button"
import { toast } from "sonner"

export function InvestorForm() {
  const router = useRouter()
  const [isWalletConnected, setIsWalletConnected] = useState(false)

  const handleSubmit = async () => {
    if (!isWalletConnected) {
      toast.error("Please connect your wallet first")
      return
    }

    // Save to cookies/local storage
    localStorage.setItem("userRole", "investor")
    
    // TODO: Save to backend
    
    toast.success("Registration successful!")
    router.push("/dashboard")
  }

  return (
    <Card className="mx-auto max-w-md">
      <CardHeader>
        <CardTitle>Complete Your Registration</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center">
          <WalletButton onConnect={() => setIsWalletConnected(true)} />
        </div>
        <Button
          className="w-full"
          onClick={handleSubmit}
          disabled={!isWalletConnected}
        >
          Complete Registration
        </Button>
      </CardContent>
    </Card>
  )
}