"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Briefcase } from "lucide-react"
import { InvestorForm } from "@/components/forms/investor-form"
import { CompanyForm } from "@/components/forms/company-form"

export default function RegisterPage() {
  const [selectedRole, setSelectedRole] = useState<"investor" | "company" | null>(
    null
  )

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-center text-4xl font-bold">Choose Your Role</h1>
      
      {!selectedRole ? (
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <Card
            className="cursor-pointer transition-all hover:scale-105 hover:shadow-lg"
            onClick={() => setSelectedRole("investor")}
          >
            <CardContent className="flex flex-col items-center p-6">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Briefcase className="h-12 w-12 text-primary" />
              </div>
              <h2 className="mb-2 text-2xl font-semibold">Investor</h2>
              <p className="text-center text-muted-foreground">
                Connect your wallet and start investing in promising projects
              </p>
              <Button className="mt-6">Choose Investor</Button>
            </CardContent>
          </Card>

          <Card
            className="cursor-pointer transition-all hover:scale-105 hover:shadow-lg"
            onClick={() => setSelectedRole("company")}
          >
            <CardContent className="flex flex-col items-center p-6">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Building2 className="h-12 w-12 text-primary" />
              </div>
              <h2 className="mb-2 text-2xl font-semibold">Company</h2>
              <p className="text-center text-muted-foreground">
                Register your company and raise funds through NFT offerings
              </p>
              <Button className="mt-6">Choose Company</Button>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {selectedRole === "investor" ? <InvestorForm /> : <CompanyForm />}
        </div>
      )}
    </div>
  )
}