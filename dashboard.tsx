"use client"

import { useState } from "react"
import { ChevronDown, Plus, CalendarIcon, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function MillenniumDashboard() {
  const [activeLeadTab, setActiveLeadTab] = useState("demographics")
  const [activeCampaignTab, setActiveCampaignTab] = useState("overview")
  const [showAdditionalFilters, setShowAdditionalFilters] = useState(false)
  const [expandedAgencies, setExpandedAgencies] = useState<string[]>(["Premier Insurance Group", "Elite Coverage Solutions"])
  const [campaignFilters, setCampaignFilters] = useState({
    campaignType: [] as string[],
    touchpoints: [] as string[],
    audienceSegment: [] as string[],
    sourcePlatform: [] as string[],
    status: [] as string[]
  })
  const [showCampaignFilters, setShowCampaignFilters] = useState(false)

  const toggleAgencyExpansion = (agencyName: string) => {
    setExpandedAgencies(prev => 
      prev.includes(agencyName) 
        ? prev.filter(name => name !== agencyName)
        : [...prev, agencyName]
    )
  }

  const handleCampaignFilterChange = (category: keyof typeof campaignFilters, value: string) => {
    setCampaignFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }))
  }

  const topMetrics = [
    { label: "BOOKED APPOINTMENTS", value: "247", trend: "up", color: "#74D1A6", percentage: "+12%" },
    { label: "AWAITING ACCEPTANCE", value: "58", trend: "down", color: "#F87171", percentage: "-15%" },
    { label: "ACCEPTED APPOINTMENTS", value: "634", trend: "up", color: "#74D1A6", percentage: "+8%" },
  ]

  const bottomMetrics = [
    { label: "IN PROGRESS", value: "634", trend: "up", color: "#74D1A6", percentage: "+5%" },
    { label: "CLOSED WON", value: "342", trend: "up", color: "#74D1A6", percentage: "+7%" },
    { label: "CLOSED LOST", value: "156", trend: "down", color: "#F87171", percentage: "-8%" },
    { label: "INACTIVE/ARCHIVED", value: "89", trend: "up", color: "#74D1A6", percentage: "+2%" },
  ]

  const overviewSegments = [
    { name: "Age Distribution", percentage: 45, color: "bg-blue-500" },
    { name: "Income Distribution", percentage: 38, color: "bg-blue-400" },
    { name: "Household Size", percentage: 32, color: "bg-blue-300" },
    { name: "Tax Status", percentage: 28, color: "bg-blue-200" },
  ]

  const demographicsSegments = [
    { name: "Customer Campaign Plan Details", percentage: 65, color: "bg-blue-500", priority: "High Priority" },
    { name: "High Premiums", percentage: 45, color: "bg-[#FA9999]", priority: "High Priority" },
    { name: "Out of Network Bills", percentage: 55, color: "bg-[#F87171]", priority: "High Priority" },
    { name: "Complex Plan Options", percentage: 35, color: "bg-blue-400", priority: "Medium Priority" },
    { name: "Limited Provider Network", percentage: 25, color: "bg-blue-300", priority: "Medium Priority" },
    { name: "Prior Authorization Issues", percentage: 18, color: "bg-[#8DD9B8]", priority: "Low Priority" },
  ]

  const topStates = [
    { state: "CA", leads: "134 leads (12.5%)" },
    { state: "TX", leads: "124 leads (10.7%)" },
    { state: "FL", leads: "98 leads (7.8%)" },
    { state: "NY", leads: "87 leads (7%)" },
    { state: "PA", leads: "76 leads (6.1%)" },
  ]

  const agenciesData = [
    {
      name: "Premier Insurance Group",
      status: "Active",
      priority: 2,
      acceptanceRate: "34.2%",
      closedWon: 87,
    },
    {
      name: "Sarah Johnson",
      status: "Active",
      priority: 7,
      acceptanceRate: "41.8%",
      closedWon: 73,
    },
    {
      name: "Mike Chen",
      status: "Paused",
      priority: 3,
      acceptanceRate: "28.5%",
      closedWon: 45,
    },
    {
      name: "Lisa Rodriguez",
      status: "Active",
      priority: 8,
      acceptanceRate: "22.1%",
      closedWon: 62,
    },
    {
      name: "Elite Coverage Solutions",
      status: "Paused",
      priority: 15,
      acceptanceRate: "36.7%",
      closedWon: 54,
    },
    {
      name: "David Park",
      status: "Active",
      priority: 4,
      acceptanceRate: "31.4%",
      closedWon: 38,
    },
    {
      name: "Jennifer Walsh",
      status: "Paused",
      priority: 11,
      acceptanceRate: "24.0%",
      closedWon: 29,
    },
    {
      name: "Secure Benefits Network",
      status: "Active",
      priority: 9,
      acceptanceRate: "39.1%",
      closedWon: 72,
    },
    {
      name: "Guardian Health Partners",
      status: "Active",
      priority: 6,
      acceptanceRate: "33.8%",
      closedWon: 48,
    },
  ]

  const mostSelectedGoals = [
    { name: "Save Money", percentage: 45, color: "bg-blue-600" },
    { name: "Keep Doctor", percentage: 38, color: "bg-blue-500" },
    { name: "Dental & Vision", percentage: 35, color: "bg-blue-400" },
    { name: "Rx Coverage", percentage: 28, color: "bg-blue-300" },
    { name: "Low Deductible", percentage: 25, color: "bg-blue-200" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">Millennium Dashboard</h1>
        </div>
      </div>

      {/* Sticky Filter Bar */}
      <div className="sticky top-0 z-10 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Select defaultValue="this-quarter">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="this-quarter">This Quarter</SelectItem>
                <SelectItem value="last-quarter">Last Quarter</SelectItem>
                <SelectItem value="this-year">This Year</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all-agencies">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-agencies">All Agencies</SelectItem>
                <SelectItem value="premier-insurance-group">Premier Insurance Group</SelectItem>
                <SelectItem value="elite-coverage-solutions">Elite Coverage Solutions</SelectItem>
                <SelectItem value="secure-benefits-network">Secure Benefits Network</SelectItem>
                <SelectItem value="guardian-health-partners">Guardian Health Partners</SelectItem>
                <SelectItem value="active-only">Active Only</SelectItem>
                <SelectItem value="paused-only">Paused Only</SelectItem>
              </SelectContent>
            </Select>

            <Popover open={showCampaignFilters} onOpenChange={setShowCampaignFilters}>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-40 justify-between">
                  All Campaigns
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-4" align="start">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="font-medium">All Campaigns</span>
                    <Button variant="ghost" size="sm" className="text-xs">
                      Advanced
                    </Button>
                  </div>

                  {/* Scrollable Content */}
                  <div className="max-h-80 overflow-y-auto space-y-4">
                    {/* Campaign Type */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Campaign Type</Label>
                      <div className="space-y-2">
                        {['Email', 'Direct-Mail', 'Ads', 'Provider Outreach'].map((type) => (
                          <div key={type} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id={`campaign-${type}`}
                              checked={campaignFilters.campaignType.includes(type)}
                              onChange={() => handleCampaignFilterChange('campaignType', type)}
                              className="rounded border-gray-300"
                            />
                            <Label htmlFor={`campaign-${type}`} className="text-sm font-normal">
                              {type}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Touchpoints */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Touchpoints</Label>
                      <div className="space-y-2">
                        {['≤ 4 Touches', '5-7 Touches', 'Custom Range'].map((touchpoint) => (
                          <div key={touchpoint} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id={`touchpoint-${touchpoint}`}
                              checked={campaignFilters.touchpoints.includes(touchpoint)}
                              onChange={() => handleCampaignFilterChange('touchpoints', touchpoint)}
                              className="rounded border-gray-300"
                            />
                            <Label htmlFor={`touchpoint-${touchpoint}`} className="text-sm font-normal">
                              {touchpoint}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Audience Segment */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Audience Segment</Label>
                      <div className="space-y-2">
                        {['65-74', 'Dual-Eligible', 'New Retirees', 'High Income'].map((segment) => (
                          <div key={segment} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id={`segment-${segment}`}
                              checked={campaignFilters.audienceSegment.includes(segment)}
                              onChange={() => handleCampaignFilterChange('audienceSegment', segment)}
                              className="rounded border-gray-300"
                            />
                            <Label htmlFor={`segment-${segment}`} className="text-sm font-normal">
                              {segment}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Source Platform */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Source Platform</Label>
                      <div className="space-y-2">
                        {['Meta Ads', 'Google Search', 'YouTube', 'Postalytics'].map((platform) => (
                          <div key={platform} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id={`platform-${platform}`}
                              checked={campaignFilters.sourcePlatform.includes(platform)}
                              onChange={() => handleCampaignFilterChange('sourcePlatform', platform)}
                              className="rounded border-gray-300"
                            />
                            <Label htmlFor={`platform-${platform}`} className="text-sm font-normal">
                              {platform}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Status */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Status</Label>
                      <div className="space-y-2">
                        {['Active', 'Scheduled', 'Paused', 'Completed'].map((status) => (
                          <div key={status} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id={`status-${status}`}
                              checked={campaignFilters.status.includes(status)}
                              onChange={() => handleCampaignFilterChange('status', status)}
                              className="rounded border-gray-300"
                            />
                            <Label htmlFor={`status-${status}`} className="text-sm font-normal">
                              {status}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4 border-t">
                    <Button
                      className="flex-1"
                      onClick={() => setShowCampaignFilters(false)}
                    >
                      Apply Filters
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => {
                        setCampaignFilters({
                          campaignType: [],
                          touchpoints: [],
                          audienceSegment: [],
                          sourcePlatform: [],
                          status: []
                        })
                      }}
                    >
                      Clear All
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <Popover open={showAdditionalFilters} onOpenChange={setShowAdditionalFilters}>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Filter
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-4" align="start">
                <div className="space-y-4">
                  <h4 className="font-medium text-sm border-b pb-2">Additional Filters</h4>

                  {/* Scrollable Content */}
                  <div className="max-h-80 overflow-y-auto space-y-4">
                    {/* Lead Created Date */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Lead Created Date</Label>
                      <div className="flex gap-2">
                        <div className="relative flex-1">
                          <Input
                            type="text"
                            placeholder="mm/dd/yyyy"
                            className="pr-8"
                          />
                          <CalendarIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        </div>
                        <div className="relative flex-1">
                          <Input
                            type="text"
                            placeholder="mm/dd/yyyy"
                            className="pr-8"
                          />
                          <CalendarIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        </div>
                      </div>
                    </div>

                    {/* Lead Status */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Lead Status</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">New</SelectItem>
                          <SelectItem value="contacted">Contacted</SelectItem>
                          <SelectItem value="qualified">Qualified</SelectItem>
                          <SelectItem value="closed">Closed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Email</Label>
                      <div className="relative">
                        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          type="text"
                          placeholder="Search by email..."
                          className="pl-8"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Phone</Label>
                      <div className="relative">
                        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          type="text"
                          placeholder="Search by phone..."
                          className="pl-8"
                        />
                      </div>
                    </div>

                    {/* Age Range */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Age Range</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select age range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="18-25">18-25</SelectItem>
                          <SelectItem value="26-35">26-35</SelectItem>
                          <SelectItem value="36-45">36-45</SelectItem>
                          <SelectItem value="46-55">46-55</SelectItem>
                          <SelectItem value="56-65">56-65</SelectItem>
                          <SelectItem value="65+">65+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Location */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Location</Label>
                      <Input
                        type="text"
                        placeholder="City, State, or ZIP"
                      />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4 border-t">
                    <Button
                      className="flex-1"
                      onClick={() => setShowAdditionalFilters(false)}
                    >
                      Apply Filters
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => setShowAdditionalFilters(false)}
                    >
                      Clear All
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6 space-y-8">
        {/* Top Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topMetrics.map((metric, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-gray-600">{metric.label}</p>
                  <div className={`w-3 h-3 rounded-full ${metric.color === '#74D1A6' ? 'bg-[#74D1A6]' : 'bg-[#F87171]'}`} />
                </div>
                <div className="flex items-end justify-between">
                  <p className="text-3xl font-bold">{metric.value}</p>
                  <div className={`text-sm font-medium ${metric.color === '#74D1A6' ? 'text-[#5BB88A]' : 'text-[#E85555]'}`}>
                    {metric.percentage}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {bottomMetrics.map((metric, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-gray-600">{metric.label}</p>
                  <div className={`w-3 h-3 rounded-full ${metric.color === '#74D1A6' ? 'bg-[#74D1A6]' : 'bg-[#F87171]'}`} />
                </div>
                <div className="flex items-end justify-between">
                  <p className="text-3xl font-bold">{metric.value}</p>
                  <div className={`text-sm font-medium ${metric.color === '#74D1A6' ? 'text-[#5BB88A]' : 'text-[#E85555]'}`}>
                    {metric.percentage}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Funnel Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Funnel: from Booked to Sold</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Horizontal Funnel Bar */}
              <div className="w-full h-16 flex rounded-lg overflow-hidden">
                {/* Booked */}
                <div 
                  className="bg-blue-600 flex flex-col items-center justify-center text-white font-semibold relative"
                  style={{ width: '42.5%' }}
                >
                  <span className="text-lg font-bold">1,200</span>
                  <span className="text-sm">Booked</span>
                </div>
                
                {/* Assigned */}
                <div 
                  className="bg-blue-400 flex flex-col items-center justify-center text-white font-semibold"
                  style={{ width: '37.2%' }}
                >
                  <span className="text-lg font-bold">1,050</span>
                  <span className="text-sm">Assigned</span>
                </div>
                
                {/* Accepted */}
                <div 
                  className="bg-gray-500 flex flex-col items-center justify-center text-white font-semibold"
                  style={{ width: '27.6%' }}
                >
                  <span className="text-lg font-bold">780</span>
                  <span className="text-sm">Accepted</span>
                </div>
                
                {/* Sold */}
                <div 
                  className="bg-[#74D1A6] flex flex-col items-center justify-center text-white font-semibold"
                  style={{ width: '18.1%' }}
                >
                  <span className="text-lg font-bold">510</span>
                  <span className="text-sm">Sold</span>
                </div>
              </div>

              {/* Attrition Tags - Positioned at left edge of corresponding bars */}
              <div className="relative">
                <div className="flex mt-4">
                  {/* Booked to Assigned transition - align to left edge of Assigned bar */}
                  <div className="flex flex-col items-start" style={{ width: '42.5%' }}>
                    {/* Empty space for Booked bar */}
                  </div>
                  <div className="flex flex-col items-start" style={{ width: '37.2%' }}>
                    <Badge variant="destructive" className="bg-[#F87171] text-white text-xs px-3 py-1 mb-1">
                      ▼ -12.5%
                    </Badge>
                    <span className="text-xs text-gray-600">Booked to Assigned</span>
                  </div>
                  
                  {/* Assigned to Accepted transition - align to left edge of Accepted bar */}
                  <div className="flex flex-col items-start" style={{ width: '27.6%' }}>
                    <Badge variant="destructive" className="bg-[#F87171] text-white text-xs px-3 py-1 mb-1">
                      ▼ -25.7%
                    </Badge>
                    <span className="text-xs text-gray-600">Assigned to Accepted</span>
                  </div>
                  
                  {/* Accepted to Sold transition - align to left edge of Sold bar */}
                  <div className="flex flex-col items-start" style={{ width: '18.1%' }}>
                    <Badge variant="destructive" className="bg-[#F87171] text-white text-xs px-3 py-1 mb-1">
                      ▼ -34.6%
                    </Badge>
                    <span className="text-xs text-gray-600">Accepted to Sold</span>
                  </div>
                </div>
              </div>

              {/* Footer Note */}
              <div className="text-sm text-gray-600 border-t pt-4 text-center">
                <p>Bar lengths proportional to volume • Red chips = loss vs prior stage</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lead Segments - Single Card */}
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle>Lead Segments</CardTitle>
            <div className="flex gap-2">
              <Button
                variant={activeLeadTab === "demographics" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveLeadTab("demographics")}
              >
                Demographics
              </Button>
              <Button
                variant={activeLeadTab === "intent" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveLeadTab("intent")}
              >
                Intent & Pain-Points
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {activeLeadTab === "demographics" ? (
              <div className="space-y-8">
                {/* Age Distribution */}
                <div>
                  <h4 className="font-medium mb-3">Age Distribution</h4>
                  <div className="w-full bg-gray-200 rounded-lg h-8 flex overflow-hidden">
                    <div className="bg-blue-600 flex items-center justify-center text-white text-sm font-medium" style={{ width: '35%' }}>
                      35%
                    </div>
                    <div className="bg-blue-400 flex items-center justify-center text-white text-sm font-medium" style={{ width: '28%' }}>
                      28%
                    </div>
                    <div className="bg-blue-300 flex items-center justify-center text-white text-sm font-medium" style={{ width: '22%' }}>
                      22%
                    </div>
                    <div className="bg-blue-200 flex items-center justify-center text-gray-700 text-sm font-medium" style={{ width: '15%' }}>
                      15%
                    </div>
                  </div>
                </div>

                {/* Income Distribution */}
                <div>
                  <h4 className="font-medium mb-3">Income Distribution</h4>
                  <div className="w-full bg-gray-200 rounded-lg h-8 flex overflow-hidden">
                    <div className="bg-blue-600 flex items-center justify-center text-white text-sm font-medium" style={{ width: '18%' }}>
                      18%
                    </div>
                    <div className="bg-blue-400 flex items-center justify-center text-white text-sm font-medium" style={{ width: '32%' }}>
                      32%
                    </div>
                    <div className="bg-blue-300 flex items-center justify-center text-white text-sm font-medium" style={{ width: '28%' }}>
                      28%
                    </div>
                    <div className="bg-blue-200 flex items-center justify-center text-gray-700 text-sm font-medium" style={{ width: '22%' }}>
                      22%
                    </div>
                  </div>
                </div>

                {/* Household Size */}
                <div>
                  <h4 className="font-medium mb-3">Household Size</h4>
                  <div className="w-full bg-gray-200 rounded-lg h-8 flex overflow-hidden">
                    <div className="bg-blue-600 flex items-center justify-center text-white text-sm font-medium" style={{ width: '24%' }}>
                      24%
                    </div>
                    <div className="bg-blue-400 flex items-center justify-center text-white text-sm font-medium" style={{ width: '38%' }}>
                      38%
                    </div>
                    <div className="bg-blue-300 flex items-center justify-center text-white text-sm font-medium" style={{ width: '22%' }}>
                      22%
                    </div>
                    <div className="bg-blue-200 flex items-center justify-center text-gray-700 text-sm font-medium" style={{ width: '16%' }}>
                      16%
                    </div>
                  </div>
                </div>

                {/* Geographic Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium mb-3">Top Counties: Florida</h4>
                    <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-gray-500">Florida counties map visualization</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span>Lead Concentration:</span>
                      <div className="flex items-center gap-2">
                        <span>Low</span>
                        <div className="w-16 h-2 bg-gradient-to-r from-blue-200 to-blue-600 rounded"></div>
                        <span>High</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div>
                      <h4 className="font-medium mb-3">Top 5 Counties by Lead Count</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <span className="font-bold text-lg">#1</span>
                            <span className="font-medium">Miami-Dade</span>
                          </div>
                          <span className="text-sm text-gray-600">156 leads (12.5%)</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <span className="font-bold text-lg">#2</span>
                            <span className="font-medium">Broward</span>
                          </div>
                          <span className="text-sm text-gray-600">134 leads (10.7%)</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <span className="font-bold text-lg">#3</span>
                            <span className="font-medium">Palm Beach</span>
                          </div>
                          <span className="text-sm text-gray-600">98 leads (7.9%)</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <span className="font-bold text-lg">#4</span>
                            <span className="font-medium">Hillsborough</span>
                          </div>
                          <span className="text-sm text-gray-600">87 leads (7%)</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <span className="font-bold text-lg">#5</span>
                            <span className="font-medium">Orange</span>
                          </div>
                          <span className="text-sm text-gray-600">76 leads (6.1%)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-sm text-gray-600 border-t pt-4">
                  <p>Segment widths proportional to share of booked leads</p>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                {/* Common Coverage Pain Points */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-medium">Common Coverage Pain Points</h4>
                    <span className="text-sm text-gray-600">Click bars to filter leads table</span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">High Premiums</span>
                          <Badge variant="destructive" className="text-xs">high</Badge>
                        </div>
                        <span className="text-sm font-medium">43.5%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-lg h-6 relative overflow-hidden">
                        <div className="bg-[#FA9999] h-full rounded-lg flex items-center px-3" style={{ width: '43.5%' }}>
                          <span className="text-white text-sm font-medium">542 leads</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Out-of-Network Bills</span>
                          <Badge variant="destructive" className="text-xs">high</Badge>
                        </div>
                        <span className="text-sm font-medium">31.9%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-lg h-6 relative overflow-hidden">
                        <div className="bg-[#FA9999] h-full rounded-lg flex items-center px-3" style={{ width: '31.9%' }}>
                          <span className="text-white text-sm font-medium">398 leads</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Complex Plan Options</span>
                          <Badge variant="secondary" className="text-xs">medium</Badge>
                        </div>
                        <span className="text-sm font-medium">26.8%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-lg h-6 relative overflow-hidden">
                        <div className="bg-blue-400 h-full rounded-lg flex items-center px-3" style={{ width: '26.8%' }}>
                          <span className="text-white text-sm font-medium">334 leads</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Limited Provider Network</span>
                          <Badge variant="secondary" className="text-xs">medium</Badge>
                        </div>
                        <span className="text-sm font-medium">23%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-lg h-6 relative overflow-hidden">
                        <div className="bg-blue-400 h-full rounded-lg flex items-center px-3" style={{ width: '23%' }}>
                          <span className="text-white text-sm font-medium">287 leads</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Prior Authorization Issues</span>
                          <Badge variant="outline" className="text-xs">low</Badge>
                        </div>
                        <span className="text-sm font-medium">15.9%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-lg h-6 relative overflow-hidden">
                        <div className="bg-[#8DD9B8] h-full rounded-lg flex items-center px-3" style={{ width: '15.9%' }}>
                          <span className="text-white text-sm font-medium">198 leads</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 text-xs mt-4">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-[#FA9999] rounded-full" />
                      <span>High Priority</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span>Medium Priority</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-[#8DD9B8] rounded-full" />
                      <span>Low Priority</span>
                    </div>
                  </div>
                </div>

                {/* Most Selected Survey Goals */}
                <div>
                  <h4 className="font-medium mb-4">Most Selected Survey Goals</h4>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Save Money</span>
                        <span className="text-sm font-medium">39.1%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-lg h-6 relative overflow-hidden">
                        <div className="bg-blue-600 h-full rounded-lg flex items-center px-3" style={{ width: '39.1%' }}>
                          <span className="text-white text-sm font-medium">487 leads</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Keep Doctor</span>
                        <span className="text-sm font-medium">33.9%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-lg h-6 relative overflow-hidden">
                        <div className="bg-blue-600 h-full rounded-lg flex items-center px-3" style={{ width: '33.9%' }}>
                          <span className="text-white text-sm font-medium">423 leads</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Dental & Vision</span>
                        <span className="text-sm font-medium">28.6%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-lg h-6 relative overflow-hidden">
                        <div className="bg-blue-600 h-full rounded-lg flex items-center px-3" style={{ width: '28.6%' }}>
                          <span className="text-white text-sm font-medium">356 leads</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Rx Coverage</span>
                        <span className="text-sm font-medium">23.9%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-lg h-6 relative overflow-hidden">
                        <div className="bg-blue-600 h-full rounded-lg flex items-center px-3" style={{ width: '23.9%' }}>
                          <span className="text-white text-sm font-medium">298 leads</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Low Deductible</span>
                        <span className="text-sm font-medium">21.4%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-lg h-6 relative overflow-hidden">
                        <div className="bg-blue-600 h-full rounded-lg flex items-center px-3" style={{ width: '21.4%' }}>
                          <span className="text-white text-sm font-medium">267 leads</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-sm text-gray-700 mt-6 pt-4 border-t">
                    <p><strong>Leads with Multiple Goals:</strong> 623 (49.9%)</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Agencies & Agents Table */}
<Card>
  <CardHeader>
    <CardTitle>Agencies & Agents</CardTitle>
    <p className="text-sm text-gray-600">
      Sort any column • Red values signal SLA risk.
    </p>
  </CardHeader>
  <CardContent>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>AGENCY / AGENT NAME</TableHead>
          <TableHead>WEEKLY REPORT</TableHead>
          <TableHead>AVG DAYS TO 1ST FOLLOW-UP</TableHead>
          <TableHead>ACCEPTANCE RATE %</TableHead>
          <TableHead>CLOSED-WON % ↓</TableHead>
          <TableHead>CLOSED WON</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* Premier Insurance Group */}
        <TableRow
          className="border-b-0 cursor-pointer hover:bg-gray-50"
          onClick={() => toggleAgencyExpansion("Premier Insurance Group")}
        >
          <TableCell className="font-medium">
            <div className="flex items-center gap-2">
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  expandedAgencies.includes("Premier Insurance Group") ? "" : "rotate-[-90deg]"
                }`}
              />
              <span>Premier Insurance Group</span>
            </div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-1 text-[#5BB88A]">
              <div className="w-3 h-3 rounded-full bg-[#74D1A6]" />
              <span className="text-sm">On-time</span>
            </div>
          </TableCell>
          <TableCell>3</TableCell>
          <TableCell>
            <span className="text-[#5BB88A] font-medium">92%</span>
          </TableCell>
          <TableCell>34.2%</TableCell>
          <TableCell>87</TableCell>
        </TableRow>

        {/* Premier Insurance Group Agents - Conditionally Rendered */}
        {expandedAgencies.includes("Premier Insurance Group") && (
          <>
            <TableRow className="bg-gray-50 border-b-0">
              <TableCell className="pl-8 text-gray-700">Sarah Johnson</TableCell>
              <TableCell>
                <div className="flex items-center gap-1 text-[#5BB88A]">
                  <div className="w-3 h-3 rounded-full bg-[#74D1A6]" />
                  <span className="text-sm">On-time</span>
                </div>
              </TableCell>
              <TableCell>2</TableCell>
              <TableCell>
                <span className="text-[#5BB88A] font-medium">96%</span>
              </TableCell>
              <TableCell>41.8%</TableCell>
              <TableCell>23</TableCell>
            </TableRow>

            <TableRow className="bg-gray-50 border-b-0">
              <TableCell className="pl-8 text-gray-700">Mike Chen</TableCell>
              <TableCell>
                <div className="flex items-center gap-1 text-[#E85555]">
                  <span className="text-[#F87171] text-lg">✗</span>
                  <span className="text-sm">Missing</span>
                </div>
              </TableCell>
              <TableCell>
                <span className="bg-[#FEE5E5] text-[#DC4444] px-2 py-1 rounded text-sm font-medium">9</span>
              </TableCell>
              <TableCell>
                <span className="text-[#E85555] font-medium">68%</span>
              </TableCell>
              <TableCell>28.5%</TableCell>
              <TableCell>11</TableCell>
            </TableRow>

            <TableRow className="bg-gray-50">
              <TableCell className="pl-8 text-gray-700">Lisa Rodriguez</TableCell>
              <TableCell>
                <div className="flex items-center gap-1 text-[#5BB88A]">
                  <div className="w-3 h-3 rounded-full bg-[#74D1A6]" />
                  <span className="text-sm">On-time</span>
                </div>
              </TableCell>
              <TableCell>4</TableCell>
              <TableCell>
                <span className="text-orange-600 font-medium">88%</span>
              </TableCell>
              <TableCell>32.1%</TableCell>
              <TableCell>53</TableCell>
            </TableRow>
          </>
        )}

        {/* Elite Coverage Solutions */}
        <TableRow
          className="border-b-0 cursor-pointer hover:bg-gray-50"
          onClick={() => toggleAgencyExpansion("Elite Coverage Solutions")}
        >
          <TableCell className="font-medium">
            <div className="flex items-center gap-2">
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  expandedAgencies.includes("Elite Coverage Solutions") ? "" : "rotate-[-90deg]"
                }`}
              />
              <span>Elite Coverage Solutions</span>
            </div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-1 text-[#E85555]">
              <span className="text-[#F87171] text-lg">✗</span>
              <span className="text-sm">Missing</span>
            </div>
          </TableCell>
          <TableCell>
            <span className="bg-[#FEE5E5] text-[#DC4444] px-2 py-1 rounded text-sm font-medium">8</span>
          </TableCell>
          <TableCell>
            <span className="text-orange-600 font-medium">74%</span>
          </TableCell>
          <TableCell>28.7%</TableCell>
          <TableCell>64</TableCell>
        </TableRow>

        {/* Elite Coverage Solutions Agents - Conditionally Rendered */}
        {expandedAgencies.includes("Elite Coverage Solutions") && (
          <>
            <TableRow className="bg-gray-50 border-b-0">
              <TableCell className="pl-8 text-gray-700">David Park</TableCell>
              <TableCell>
                <div className="flex items-center gap-1 text-[#5BB88A]">
                  <div className="w-3 h-3 rounded-full bg-[#74D1A6]" />
                  <span className="text-sm">On-time</span>
                </div>
              </TableCell>
              <TableCell>5</TableCell>
              <TableCell>
                <span className="text-orange-600 font-medium">82%</span>
              </TableCell>
              <TableCell>31.4%</TableCell>
              <TableCell>28</TableCell>
            </TableRow>

            <TableRow className="bg-gray-50">
              <TableCell className="pl-8 text-gray-700">Jennifer Walsh</TableCell>
              <TableCell>
                <div className="flex items-center gap-1 text-[#E85555]">
                  <span className="text-[#F87171] text-lg">✗</span>
                  <span className="text-sm">Missing</span>
                </div>
              </TableCell>
              <TableCell>
                <span className="bg-[#FEE5E5] text-[#DC4444] px-2 py-1 rounded text-sm font-medium">11</span>
              </TableCell>
              <TableCell>
                <span className="text-[#E85555] font-medium">66%</span>
              </TableCell>
              <TableCell>26.0%</TableCell>
              <TableCell>36</TableCell>
            </TableRow>
          </>
        )}

        {/* Secure Benefits Network - Collapsed */}
        <TableRow
          className="cursor-pointer hover:bg-gray-50"
          onClick={() => toggleAgencyExpansion("Secure Benefits Network")}
        >
          <TableCell className="font-medium">
            <div className="flex items-center gap-2">
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  expandedAgencies.includes("Secure Benefits Network") ? "" : "rotate-[-90deg]"
                }`}
              />
              <span>Secure Benefits Network</span>
            </div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-1 text-[#5BB88A]">
              <div className="w-3 h-3 rounded-full bg-[#74D1A6]" />
              <span className="text-sm">On-time</span>
            </div>
          </TableCell>
          <TableCell>6</TableCell>
          <TableCell>
            <span className="text-[#5BB88A] font-medium">95%</span>
          </TableCell>
          <TableCell>39.1%</TableCell>
          <TableCell>72</TableCell>
        </TableRow>

        {/* Secure Benefits Network Agents - Conditionally Rendered */}
        {expandedAgencies.includes("Secure Benefits Network") && (
          <>
            <TableRow className="bg-gray-50 border-b-0">
              <TableCell className="pl-8 text-gray-700">Michael Thompson</TableCell>
              <TableCell>
                <div className="flex items-center gap-1 text-[#5BB88A]">
                  <div className="w-3 h-3 rounded-full bg-[#74D1A6]" />
                  <span className="text-sm">On-time</span>
                </div>
              </TableCell>
              <TableCell>4</TableCell>
              <TableCell>
                <span className="text-[#5BB88A] font-medium">98%</span>
              </TableCell>
              <TableCell>42.3%</TableCell>
              <TableCell>45</TableCell>
            </TableRow>

            <TableRow className="bg-gray-50">
              <TableCell className="pl-8 text-gray-700">Amanda Davis</TableCell>
              <TableCell>
                <div className="flex items-center gap-1 text-[#5BB88A]">
                  <div className="w-3 h-3 rounded-full bg-[#74D1A6]" />
                  <span className="text-sm">On-time</span>
                </div>
              </TableCell>
              <TableCell>7</TableCell>
              <TableCell>
                <span className="text-[#5BB88A] font-medium">92%</span>
              </TableCell>
              <TableCell>35.8%</TableCell>
              <TableCell>27</TableCell>
            </TableRow>
          </>
        )}

        {/* Guardian Health Partners - Collapsed */}
        <TableRow
          className="cursor-pointer hover:bg-gray-50"
          onClick={() => toggleAgencyExpansion("Guardian Health Partners")}
        >
          <TableCell className="font-medium">
            <div className="flex items-center gap-2">
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  expandedAgencies.includes("Guardian Health Partners") ? "" : "rotate-[-90deg]"
                }`}
              />
              <span>Guardian Health Partners</span>
            </div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-1 text-[#5BB88A]">
              <div className="w-3 h-3 rounded-full bg-[#74D1A6]" />
              <span className="text-sm">On-time</span>
            </div>
          </TableCell>
          <TableCell>5</TableCell>
          <TableCell>
            <span className="text-orange-600 font-medium">87%</span>
          </TableCell>
          <TableCell>31.6%</TableCell>
          <TableCell>58</TableCell>
        </TableRow>

        {/* Guardian Health Partners Agents - Conditionally Rendered */}
        {expandedAgencies.includes("Guardian Health Partners") && (
          <>
            <TableRow className="bg-gray-50 border-b-0">
              <TableCell className="pl-8 text-gray-700">Robert Wilson</TableCell>
              <TableCell>
                <div className="flex items-center gap-1 text-[#5BB88A]">
                  <div className="w-3 h-3 rounded-full bg-[#74D1A6]" />
                  <span className="text-sm">On-time</span>
                </div>
              </TableCell>
              <TableCell>3</TableCell>
              <TableCell>
                <span className="text-[#5BB88A] font-medium">91%</span>
              </TableCell>
              <TableCell>33.2%</TableCell>
              <TableCell>32</TableCell>
            </TableRow>

            <TableRow className="bg-gray-50">
              <TableCell className="pl-8 text-gray-700">Emily Martinez</TableCell>
              <TableCell>
                <div className="flex items-center gap-1 text-orange-600">
                  <div className="w-3 h-3 rounded-full bg-orange-500" />
                  <span className="text-sm">Late</span>
                </div>
              </TableCell>
              <TableCell>8</TableCell>
              <TableCell>
                <span className="text-orange-600 font-medium">83%</span>
              </TableCell>
              <TableCell>30.1%</TableCell>
              <TableCell>26</TableCell>
            </TableRow>
          </>
        )}
      </TableBody>
    </Table>
  </CardContent>
</Card>

        {/* Campaigns */}
        <Card>
          <CardHeader>
            <CardTitle>Campaigns</CardTitle>
            <div className="flex gap-2">
              <Button
                variant={activeCampaignTab === "overview" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCampaignTab("overview")}
              >
                Overview
              </Button>
              <Button
                variant={activeCampaignTab === "deep-dive" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCampaignTab("deep-dive")}
              >
                Deep Dive
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {activeCampaignTab === "overview" ? (
              <>
                {/* KPI Cards */}
                <div className="grid grid-cols-4 gap-6 mb-8">
                  <div className="p-4 bg-white rounded-lg border border-gray-200">
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-sm text-gray-600">BOOKINGS</p>
                      <span className="text-xs text-[#5BB88A] font-medium">↑ 8%</span>
                    </div>
                    <p className="text-3xl font-bold">1,240</p>
                    <div className="mt-2 h-8 flex items-end">
                      <svg className="w-full h-6" viewBox="0 0 100 20">
                        <polyline
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="1"
                          points="0,15 20,12 40,8 60,10 80,6 100,4"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-gray-200">
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-sm text-gray-600">CONVERSION RATE</p>
                      <span className="text-xs text-[#5BB88A] font-medium">↑ 3%</span>
                    </div>
                    <p className="text-3xl font-bold">42%</p>
                    <div className="mt-2 h-8 flex items-end">
                      <svg className="w-full h-6" viewBox="0 0 100 20">
                        <polyline
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="1"
                          points="0,18 20,14 40,10 60,8 80,6 100,5"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-gray-200">
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-sm text-gray-600">AVG TOUCHES TO BOOK</p>
                      <span className="text-xs text-[#E85555] font-medium">↓ 5%</span>
                    </div>
                    <p className="text-3xl font-bold">3.2</p>
                    <div className="mt-2 h-8 flex items-end">
                      <svg className="w-full h-6" viewBox="0 0 100 20">
                        <polyline
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="1"
                          points="0,8 20,12 40,15 60,13 80,16 100,18"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-gray-200">
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-sm text-gray-600">COMPLAINT RATE</p>
                      <span className="text-xs text-[#5BB88A] font-medium">↑ 2%</span>
                    </div>
                    <p className="text-3xl font-bold">4.1%</p>
                    <div className="mt-2 h-8 flex items-end">
                      <svg className="w-full h-6" viewBox="0 0 100 20">
                        <polyline
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="1"
                          points="0,12 20,10 40,14 60,11 80,8 100,6"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Channel Mix */}
                <div className="space-y-4 mb-8">
                  <h4 className="font-medium">Channel Mix</h4>
                  <div className="w-full bg-gray-200 rounded-lg h-12 flex overflow-hidden">
                    <div className="bg-blue-500 flex items-center justify-center text-white text-sm font-medium" style={{ width: '38%' }}>
                      Email 38%
                    </div>
                    <div className="bg-blue-400 flex items-center justify-center text-white text-sm font-medium" style={{ width: '26%' }}>
                      Direct-Mail 26%
                    </div>
                    <div className="bg-blue-300 flex items-center justify-center text-white text-sm font-medium" style={{ width: '22%' }}>
                      Ads 22%
                    </div>
                    <div className="bg-blue-200 flex items-center justify-center text-gray-700 text-sm font-medium" style={{ width: '14%' }}>
                      Provider 14%
                    </div>
                  </div>
                </div>

                {/* Channel Performance Table */}
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>CHANNEL</TableHead>
                      <TableHead>BOOKINGS</TableHead>
                      <TableHead>CONVERSION RATE %</TableHead>
                      <TableHead>COMPLAINT %</TableHead>
                      <TableHead>AVG TOUCHES/LEAD</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Email</TableCell>
                      <TableCell>471</TableCell>
                      <TableCell>44%</TableCell>
                      <TableCell>3.2%</TableCell>
                      <TableCell>2.8</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Direct-Mail</TableCell>
                      <TableCell>322</TableCell>
                      <TableCell>38%</TableCell>
                      <TableCell>2.1%</TableCell>
                      <TableCell>3.4</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Ads</TableCell>
                      <TableCell>273</TableCell>
                      <TableCell>41%</TableCell>
                      <TableCell>6.8%</TableCell>
                      <TableCell className="text-[#E85555] font-medium">4.2</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Provider Outreach</TableCell>
                      <TableCell>174</TableCell>
                      <TableCell>46%</TableCell>
                      <TableCell>1.4%</TableCell>
                      <TableCell className="text-[#E85555] font-medium">5.1</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </>
            ) : (
              <>
                {/* KPI Cards - Same as Overview */}
                <div className="grid grid-cols-4 gap-6 mb-8">
                  <div className="p-4 bg-white rounded-lg border border-gray-200">
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-sm text-gray-600">BOOKINGS</p>
                      <span className="text-xs text-[#5BB88A] font-medium">↑ 8%</span>
                    </div>
                    <p className="text-3xl font-bold">1,240</p>
                    <div className="mt-2 h-8 flex items-end">
                      <svg className="w-full h-6" viewBox="0 0 100 20">
                        <polyline
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="1"
                          points="0,15 20,12 40,8 60,10 80,6 100,4"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-gray-200">
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-sm text-gray-600">CONVERSION RATE</p>
                      <span className="text-xs text-[#5BB88A] font-medium">↑ 3%</span>
                    </div>
                    <p className="text-3xl font-bold">42%</p>
                    <div className="mt-2 h-8 flex items-end">
                      <svg className="w-full h-6" viewBox="0 0 100 20">
                        <polyline
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="1"
                          points="0,18 20,14 40,10 60,8 80,6 100,5"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-gray-200">
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-sm text-gray-600">AVG TOUCHES TO BOOK</p>
                      <span className="text-xs text-[#E85555] font-medium">↓ 5%</span>
                    </div>
                    <p className="text-3xl font-bold">3.2</p>
                    <div className="mt-2 h-8 flex items-end">
                      <svg className="w-full h-6" viewBox="0 0 100 20">
                        <polyline
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="1"
                          points="0,8 20,12 40,15 60,13 80,16 100,18"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-gray-200">
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-sm text-gray-600">COMPLAINT RATE</p>
                      <span className="text-xs text-[#5BB88A] font-medium">↑ 2%</span>
                    </div>
                    <p className="text-3xl font-bold">4.1%</p>
                    <div className="mt-2 h-8 flex items-end">
                      <svg className="w-full h-6" viewBox="0 0 100 20">
                        <polyline
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="1"
                          points="0,12 20,10 40,14 60,11 80,8 100,6"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Touch Frequency Distribution */}
                <div className="space-y-4 mb-8">
                  <h4 className="font-medium">Touch Frequency Distribution</h4>
                  <div className="w-full bg-gray-200 rounded-lg h-8 flex overflow-hidden">
                    <div className="bg-emerald-400 flex items-center justify-center text-white text-xs font-medium" style={{ width: '20%' }}>
                      1 Touch 20%
                    </div>
                    <div className="bg-emerald-500 flex items-center justify-center text-white text-xs font-medium" style={{ width: '25%' }}>
                      2 Touch 25%
                    </div>
                    <div className="bg-slate-500 flex items-center justify-center text-white text-xs font-medium" style={{ width: '22%' }}>
      3 Touch 22%
    </div>
    <div className="bg-slate-600 flex items-center justify-center text-white text-xs font-medium" style={{ width: '15%' }}>
      4 Touch 15%
    </div>
    <div className="bg-orange-400 flex items-center justify-center text-white text-xs font-medium" style={{ width: '9%' }}>
      5 Touch 9%
    </div>
    <div className="bg-red-400 flex items-center justify-center text-white text-xs font-medium" style={{ width: '6%' }}>
      6 Touch 6%
    </div>
    <div className="bg-red-600 flex items-center justify-center text-white text-xs font-medium" style={{ width: '3%' }}>
      7+ 3%
    </div>
  </div>
  <div className="flex gap-4 text-xs">
    <div className="flex items-center gap-1">
      <div className="w-2 h-2 bg-emerald-400 rounded-full" />
      <span>Booked</span>
    </div>
    <div className="flex items-center gap-1">
      <div className="w-2 h-2 bg-slate-500 rounded-full" />
      <span>Still Open</span>
    </div>
    <div className="flex items-center gap-1">
      <div className="w-2 h-2 bg-orange-400 rounded-full" />
      <span>Complaint</span>
    </div>
  </div>
</div>

                {/* Touchpoint Heatmap */}
<div className="space-y-4 mb-8">
  <h4 className="font-medium">Touchpoint Heatmap</h4>
  <div className="overflow-x-auto">
    <table className="w-full min-w-[800px]">
      <thead>
        <tr>
          <th className="text-left text-sm font-medium text-gray-600 p-3 min-w-[120px]">Campaign Type</th>
          <th className="text-center text-sm font-medium text-gray-600 p-3 min-w-[80px]">Touch 1</th>
          <th className="text-center text-sm font-medium text-gray-600 p-3 min-w-[80px]">Touch 2</th>
          <th className="text-center text-sm font-medium text-gray-600 p-3 min-w-[80px]">Touch 3</th>
          <th className="text-center text-sm font-medium text-gray-600 p-3 min-w-[80px]">Touch 4</th>
          <th className="text-center text-sm font-medium text-gray-600 p-3 min-w-[80px]">Touch 5</th>
          <th className="text-center text-sm font-medium text-gray-600 p-3 min-w-[80px]">Touch 6</th>
          <th className="text-center text-sm font-medium text-gray-600 p-3 min-w-[80px]">Touch 7</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-sm font-medium p-3">Email</td>
          <td className="text-center text-sm p-3 bg-blue-300 text-white">28%</td>
          <td className="text-center text-sm p-3 bg-blue-400 text-white">35%</td>
          <td className="text-center text-sm p-3 bg-blue-300 text-white">22%</td>
          <td className="text-center text-sm p-3 bg-blue-200 text-gray-700">18%</td>
          <td className="text-center text-sm p-3 bg-red-200 text-gray-700">12%</td>
          <td className="text-center text-sm p-3 bg-red-400 text-white">8%</td>
          <td className="text-center text-sm p-3 bg-red-500 text-white">5%</td>
        </tr>
        <tr>
          <td className="text-sm font-medium p-3">Direct-Mail</td>
          <td className="text-center text-sm p-3 bg-blue-400 text-white">32%</td>
          <td className="text-center text-sm p-3 bg-blue-300 text-white">28%</td>
          <td className="text-center text-sm p-3 bg-blue-300 text-white">24%</td>
          <td className="text-center text-sm p-3 bg-blue-200 text-gray-700">19%</td>
          <td className="text-center text-sm p-3 bg-blue-200 text-gray-700">14%</td>
          <td className="text-center text-sm p-3 bg-blue-100 text-gray-700">9%</td>
          <td className="text-center text-sm p-3 bg-blue-100 text-gray-700">6%</td>
        </tr>
        <tr>
          <td className="text-sm font-medium p-3">Ads</td>
          <td className="text-center text-sm p-3 bg-blue-500 text-white">40%</td>
          <td className="text-center text-sm p-3 bg-blue-300 text-white">26%</td>
          <td className="text-center text-sm p-3 bg-blue-200 text-gray-700">18%</td>
          <td className="text-center text-sm p-3 bg-red-100 text-gray-700">15%</td>
          <td className="text-center text-sm p-3 bg-red-300 text-white">11%</td>
          <td className="text-center text-sm p-3 bg-red-400 text-white">7%</td>
          <td className="text-center text-sm p-3 bg-red-500 text-white">4%</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p className="text-xs text-gray-600">Darker = higher response • Red cells flag high complaint %</p>
</div>

                {/* Campaign Performance Table */}
                <div>
                  <h4 className="font-medium mb-4">Campaign Performance</h4>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>CAMPAIGN NAME</TableHead>
                        <TableHead>TYPE</TableHead>
                        <TableHead>TARGET SEGMENT</TableHead>
                        <TableHead>AVG TOUCHES/LEAD</TableHead>
                        <TableHead>BOOKINGS</TableHead>
                        <TableHead>CONVERSION RATE % ↓</TableHead>
                        <TableHead>COMPLAINT %</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Medicare Advantage Q4</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>65+ High Income</TableCell>
                        <TableCell>2.8</TableCell>
                        <TableCell>187</TableCell>
                        <TableCell>48%</TableCell>
                        <TableCell>2.1%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">ACA Open Enrollment</TableCell>
                        <TableCell>Direct-Mail</TableCell>
                        <TableCell>35-54 Families</TableCell>
                        <TableCell>3.2</TableCell>
                        <TableCell>156</TableCell>
                        <TableCell>46%</TableCell>
                        <TableCell>1.8%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Life Insurance Leads</TableCell>
                        <TableCell>Ads</TableCell>
                        <TableCell>25-44 Parents</TableCell>
                        <TableCell className="text-[#E85555] font-medium">4.5</TableCell>
                        <TableCell>143</TableCell>
                        <TableCell>44%</TableCell>
                        <TableCell>7.2%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Provider Referral Program</TableCell>
                        <TableCell>Provider Outreach</TableCell>
                        <TableCell>All Ages</TableCell>
                        <TableCell className="text-[#E85555] font-medium">5.1</TableCell>
                        <TableCell>98</TableCell>
                        <TableCell>43%</TableCell>
                        <TableCell>1.2%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Supplement Plans</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>55-64 Pre-Medicare</TableCell>
                        <TableCell>3.1</TableCell>
                        <TableCell>124</TableCell>
                        <TableCell>41%</TableCell>
                        <TableCell>3.4%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Short-Term Medical</TableCell>
                        <TableCell>Ads</TableCell>
                        <TableCell>18-34 Gig Workers</TableCell>
                        <TableCell>3.8</TableCell>
                        <TableCell>89</TableCell>
                        <TableCell>39%</TableCell>
                        <TableCell>5.8%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Dental & Vision</TableCell>
                        <TableCell>Direct-Mail</TableCell>
                        <TableCell>45-64 Families</TableCell>
                        <TableCell>2.9</TableCell>
                        <TableCell>76</TableCell>
                        <TableCell>37%</TableCell>
                        <TableCell>2.3%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Critical Illness</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>50+ High Risk</TableCell>
                        <TableCell>3.6</TableCell>
                        <TableCell>67</TableCell>
                        <TableCell>35%</TableCell>
                        <TableCell>4.1%</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
