"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Wallet, Trophy, Building } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const [userRole, setUserRole] = useState<"investor" | "company" | null>(null)

  useEffect(() => {
    const role = localStorage.getItem("userRole") as "investor" | "company"
    setUserRole(role)
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        {userRole === "company" && (
          <Button asChild>
            <Link href="/dashboard/create-nft">
              <Plus className="mr-2 h-4 w-4" /> Create New NFT
            </Link>
          </Button>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wallet className="h-5 w-5" />
              Total Value
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">120.5 ETH</p>
            <p className="text-sm text-muted-foreground">≈ $245,000</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              {userRole === "investor" ? "Investments" : "Funds Raised"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">15</p>
            <p className="text-sm text-muted-foreground">Active Projects</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5" />
              {userRole === "investor" ? "Portfolio Companies" : "NFTs Listed"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">8</p>
            <p className="text-sm text-muted-foreground">Total</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="active" className="mt-8">
        <TabsList>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Add NFT cards here */}
          </div>
        </TabsContent>
        <TabsContent value="history">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Add historical NFT cards here */}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}