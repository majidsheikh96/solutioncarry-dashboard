import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, DollarSign } from "lucide-react"

interface Job {
  id: string
  title: string
  client: string
  budget: number
  deadline: string
  status: "active" | "pending" | "completed"
  description: string
}

interface RecentJobsProps {
  jobs?: Job[]
}

export function RecentJobs({ jobs }: RecentJobsProps) {
  const mockJobs: Job[] = jobs || [
    {
      id: "1",
      title: "E-commerce Website Development",
      client: "TechCorp Inc.",
      budget: 2500,
      deadline: "2024-02-15",
      status: "active",
      description: "Build a modern e-commerce platform with React and Node.js",
    },
    {
      id: "2",
      title: "Mobile App UI/UX Design",
      client: "StartupXYZ",
      budget: 1800,
      deadline: "2024-02-20",
      status: "active",
      description: "Design user interface for iOS and Android mobile application",
    },
    {
      id: "3",
      title: "Database Optimization",
      client: "DataSolutions Ltd.",
      budget: 1200,
      deadline: "2024-01-30",
      status: "completed",
      description: "Optimize PostgreSQL database performance and queries",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "completed":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">Recent Jobs</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockJobs.map((job) => (
            <div key={job.id} className="border rounded-lg p-3 sm:p-4 hover:bg-gray-50 transition-colors">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 space-y-2 sm:space-y-0">
                <h3 className="font-semibold text-sm sm:text-lg pr-2">{job.title}</h3>
                <Badge className={`${getStatusColor(job.status)} text-xs w-fit`}>{job.status}</Badge>
              </div>
              <p className="text-gray-600 mb-3 text-sm sm:text-base line-clamp-2">{job.description}</p>
              <div className="space-y-2 sm:space-y-0 sm:flex sm:justify-between sm:items-center text-xs sm:text-sm text-gray-500">
                <span className="block sm:inline">Client: {job.client}</span>
                <div className="flex items-center justify-between sm:justify-end sm:items-center space-x-4">
                  <div className="flex items-center">
                    <DollarSign className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />${job.budget}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    {job.deadline}
                  </div>
                </div>
              </div>
              <div className="mt-3 flex justify-end">
                <Button variant="outline" size="sm" className="text-xs sm:text-sm bg-transparent">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
