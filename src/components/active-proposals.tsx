import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Eye } from "lucide-react"

interface Proposal {
  id: string
  jobTitle: string
  client: string
  proposedRate: number
  submittedDate: string
  status: "pending" | "viewed" | "shortlisted" | "rejected"
  views: number
}

interface ActiveProposalsProps {
  proposals?: Proposal[]
}

export function ActiveProposals({ proposals }: ActiveProposalsProps) {
  const mockProposals: Proposal[] = proposals || [
    {
      id: "1",
      jobTitle: "React Developer for SaaS Platform",
      client: "InnovateTech",
      proposedRate: 45,
      submittedDate: "2024-01-28",
      status: "shortlisted",
      views: 12,
    },
    {
      id: "2",
      jobTitle: "Full Stack Developer - Healthcare App",
      client: "HealthFirst",
      proposedRate: 50,
      submittedDate: "2024-01-26",
      status: "viewed",
      views: 8,
    },
    {
      id: "3",
      jobTitle: "WordPress Theme Customization",
      client: "DigitalAgency",
      proposedRate: 35,
      submittedDate: "2024-01-25",
      status: "pending",
      views: 3,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "shortlisted":
        return "bg-green-100 text-green-800"
      case "viewed":
        return "bg-blue-100 text-blue-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">Active Proposals</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockProposals.map((proposal) => (
            <div key={proposal.id} className="border rounded-lg p-3 sm:p-4 hover:bg-gray-50 transition-colors">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 space-y-2 sm:space-y-0">
                <h3 className="font-semibold text-sm sm:text-base pr-2 line-clamp-2">{proposal.jobTitle}</h3>
                <Badge className={`${getStatusColor(proposal.status)} text-xs w-fit`}>{proposal.status}</Badge>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs sm:text-sm text-gray-500 mb-3 space-y-1 sm:space-y-0">
                <span>Client: {proposal.client}</span>
                <span>Rate: ${proposal.proposedRate}/hr</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs sm:text-sm text-gray-500 space-y-2 sm:space-y-0">
                <div className="flex items-center">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  Submitted: {proposal.submittedDate}
                </div>
                <div className="flex items-center">
                  <Eye className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  {proposal.views} views
                </div>
              </div>
              <div className="mt-3 flex justify-end">
                <Button variant="outline" size="sm" className="text-xs sm:text-sm bg-transparent">
                  View Proposal
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
