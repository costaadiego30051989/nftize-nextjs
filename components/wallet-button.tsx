"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Wallet } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function WalletButton() {
  const [isConnected, setIsConnected] = useState(false)
  const [balance, setBalance] = useState("0.00")
  const [address, setAddress] = useState("")

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        // Request account access
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
        const account = accounts[0]
        setAddress(account)
        
        // Get balance
        const balance = await window.ethereum.request({
          method: "eth_getBalance",
          params: [account, "latest"],
        })
        
        // Convert balance from wei to ETH
        const ethBalance = parseInt(balance) / Math.pow(10, 18)
        setBalance(ethBalance.toFixed(4))
        
        setIsConnected(true)
      } catch (error) {
        console.error("Error connecting wallet:", error)
      }
    } else {
      alert("Please install MetaMask!")
    }
  }

  if (!isConnected) {
    return (
      <Button onClick={connectWallet} className="hidden sm:inline-flex">
        <Wallet className="mr-2 h-4 w-4" />
        Connect Wallet
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="hidden sm:inline-flex">
          <Wallet className="mr-2 h-4 w-4" />
          {address.slice(0, 6)}...{address.slice(-4)}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Wallet Info</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Balance: {balance} ETH
        </DropdownMenuItem>
        <DropdownMenuItem>
          {address}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setIsConnected(false)}>
          Disconnect
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}