"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  const router = useRouter();

  const handleStudentLogin = () => {
    router.push("/student");
  };

  const handleFreelancerLogin = () => {
    router.push("/freelancer");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Welcome to SolutionCarry</CardTitle>
          <CardDescription>
            Choose your dashboard to continue
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            onClick={handleStudentLogin}
            className="w-full h-12 text-lg"
            variant="default"
          >
            Student Dashboard
          </Button>
          <Button
            onClick={handleFreelancerLogin}
            className="w-full h-12 text-lg"
            variant="outline"
          >
            Freelancer Dashboard
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
