"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X, Plus } from "lucide-react"

interface AddCaseStudyFormProps {
  onClose: () => void
  onAdd: (caseStudy: any) => void
}

export function AddCaseStudyForm({ onClose, onAdd }: AddCaseStudyFormProps) {
  const [formData, setFormData] = useState({
    client: "",
    handle: "",
    platform: "",
    challenge: "",
    result: "",
    description: "",
    fullDescription: "",
    impressions: "",
    growth: "",
    date: "",
    duration: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newCaseStudy = {
      client: formData.client,
      handle: formData.handle,
      platform: formData.platform,
      challenge: formData.challenge,
      result: formData.result,
      metrics: {
        impressions: formData.impressions,
        growth: formData.growth,
        platform: formData.platform,
      },
      description: formData.description,
      fullDescription: formData.fullDescription,
      date: formData.date,
      duration: formData.duration,
    }

    onAdd(newCaseStudy)
    onClose()
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>Add New Case Study</CardTitle>
              <CardDescription>Create a new case study to showcase your work</CardDescription>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="client">Client Name</Label>
                <Input
                  id="client"
                  placeholder="@madrabbit"
                  value={formData.client}
                  onChange={(e) => handleChange("client", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="handle">Handle</Label>
                <Input
                  id="handle"
                  placeholder="@madrabbit.studios"
                  value={formData.handle}
                  onChange={(e) => handleChange("handle", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="platform">Platform</Label>
                <Select value={formData.platform} onValueChange={(value) => handleChange("platform", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select platform" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Instagram">Instagram</SelectItem>
                    <SelectItem value="TikTok">TikTok</SelectItem>
                    <SelectItem value="YouTube">YouTube</SelectItem>
                    <SelectItem value="Snapchat">Snapchat</SelectItem>
                    <SelectItem value="X">X (Twitter)</SelectItem>
                    <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                    <SelectItem value="Facebook">Facebook</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="result">Result Summary</Label>
                <Input
                  id="result"
                  placeholder="14M+ impressions generated"
                  value={formData.result}
                  onChange={(e) => handleChange("result", e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="challenge">Challenge</Label>
              <Textarea
                id="challenge"
                placeholder="Describe the main challenge or goal..."
                value={formData.challenge}
                onChange={(e) => handleChange("challenge", e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="description">Short Description</Label>
              <Textarea
                id="description"
                placeholder="Brief description for the preview card..."
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="fullDescription">Full Strategy Description</Label>
              <Textarea
                id="fullDescription"
                placeholder="Detailed description of strategy and execution..."
                value={formData.fullDescription}
                onChange={(e) => handleChange("fullDescription", e.target.value)}
                rows={4}
                required
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="impressions">Impressions</Label>
                <Input
                  id="impressions"
                  placeholder="14M+"
                  value={formData.impressions}
                  onChange={(e) => handleChange("impressions", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="growth">Growth</Label>
                <Input
                  id="growth"
                  placeholder="20%"
                  value={formData.growth}
                  onChange={(e) => handleChange("growth", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="date">Year</Label>
                <Input
                  id="date"
                  placeholder="2023"
                  value={formData.date}
                  onChange={(e) => handleChange("date", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="duration">Duration</Label>
                <Input
                  id="duration"
                  placeholder="6 months"
                  value={formData.duration}
                  onChange={(e) => handleChange("duration", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="submit" className="flex-1">
                <Plus className="mr-2 h-4 w-4" />
                Add Case Study
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
