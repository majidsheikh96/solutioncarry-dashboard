"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Camera, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface DashboardHeroProps {
  coverPhoto?: string
}

export function DashboardHero({ coverPhoto }: DashboardHeroProps) {
  const [currentCoverPhoto, setCurrentCoverPhoto] = useState(coverPhoto || "/placeholder.svg?height=300&width=1200")
  const [isUploading, setIsUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setIsUploading(true)

    // Simulate upload to API
    const formData = new FormData()
    formData.append("coverPhoto", file)

    try {
      const response = await fetch("/api/profile/cover-photo", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        const data = await response.json()
        setCurrentCoverPhoto(data.url)
      }
    } catch (error) {
      console.error("Error uploading cover photo:", error)
    } finally {
      setIsUploading(false)
    }
  }

  const handleUrlUpload = async (url: string) => {
    setIsUploading(true)

    try {
      const response = await fetch("/api/profile/cover-photo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      })

      if (response.ok) {
        const data = await response.json()
        setCurrentCoverPhoto(data.url)
      }
    } catch (error) {
      console.error("Error updating cover photo:", error)
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="relative">
      {/* Cover Photo */}
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: currentCoverPhoto ? `url(${currentCoverPhoto})` : "none",
          backgroundColor: "#E0E7FF",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Welcome to Solutioncarry</h1>
          <p className="text-lg text-gray-200 mb-6">Find your next freelance opportunity or manage your projects</p>
          <div className="flex justify-center gap-4">
            <Button className="bg-upwork-green hover:bg-upwork-green-hover text-white">Find Work</Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-upwork-green bg-transparent"
            >
              Post a Project
            </Button>
          </div>
        </div>

        {/* Edit Cover Photo Button */}
        <div className="absolute top-4 right-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary" size="sm" className="bg-white/90 hover:bg-white">
                <Camera className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Update Cover</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Update Cover Photo</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="file-upload">Upload from device</Label>
                  <Input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    ref={fileInputRef}
                    disabled={isUploading}
                  />
                </div>
                <div className="text-center text-sm text-gray-500">or</div>
                <div>
                  <Label htmlFor="url-input">Enter image URL</Label>
                  <div className="flex space-x-2">
                    <Input
                      id="url-input"
                      placeholder="https://example.com/image.jpg"
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          const target = e.target as HTMLInputElement
                          handleUrlUpload(target.value)
                        }
                      }}
                      disabled={isUploading}
                    />
                    <Button
                      onClick={() => {
                        const input = document.getElementById("url-input") as HTMLInputElement
                        handleUrlUpload(input.value)
                      }}
                      disabled={isUploading}
                    >
                      <Upload className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                {isUploading && <div className="text-center text-sm text-gray-500">Updating cover photo...</div>}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}
