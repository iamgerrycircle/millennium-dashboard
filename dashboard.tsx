"use client"

import { useState } from "react"
import { ChevronDown, Plus } from 'lucide-react'
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

export default function MillenniumDashboard() {
  const [activeLeadTab, setActiveLeadTab] = useState("overview")
  const [activeCampaignTab, setActiveCampaignTab] = useState("overview")

  const topMetrics = [
    { label: "BOOKED APPOINTMENTS", value: "247", trend: "up", color: "green" },
    { label: "WAITING ACCEPTANCE", value: "58", trend: "down", color: "red" },
    { label: "ACCEPTED APPOINTMENTS", value: "189", trend: "up", color: "green" },
  ]

  const bottomMetrics = [
    { label: "PROSPECTS", value: "634", trend: "up", color: "red" },
    { label: "CLOSED WON", value: "287", trend: "up", color: "red" },
    { label: "CLOSED LOST", value: "287", trend: "up", color: "red" },
    { label: "OPPORTUNITIES", value: "287", trend: "up", color: "red" },
  ]

  const overviewSegments = [
    { name: "Age Distribution", percentage: 45, color: "bg-blue-500" },
    { name: "Income Distribution", percentage: 38, color: "bg-blue-400" },
    { name: "Household Size", percentage: 32, color: "bg-blue-300" },
    { name: "Tax Status", percentage: 28, color: "bg-blue-200" },
  ]

  const demographicsSegments = [
    { name: "Customer Campaign Plan Details", percentage: 65, color: "bg-blue-500", priority: "High Priority" },
    { name: "High Premiums", percentage: 45, color: "bg-red-400", priority: "High Priority" },
    { name: "Out of Network Bills", percentage: 55, color: "bg-red-500", priority: "High Priority" },
    { name: "Complex Plan Options", percentage: 35, color: "bg-blue-400", priority: "Medium Priority" },
    { name: "Limited Provider Network", percentage: 25, color: "bg-blue-300", priority: "Medium Priority" },
    { name: "Prior Authorization Issues", percentage: 18, color: "bg-green-400", priority: "Low Priority" },
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
                <SelectItem value="active-only">Active Only</SelectItem>
                <SelectItem value="paused-only">Paused Only</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all-campaigns">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-campaigns">All Campaigns</SelectItem>
                <SelectItem value="active-campaigns">Active Campaigns</SelectItem>
                <SelectItem value="paused-campaigns">Paused Campaigns</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Filter
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6 space-y-8">
        {/* Top Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topMetrics.map((metric, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{metric.label}</p>
                    <p className="text-3xl font-bold">{metric.value}</p>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${metric.color === 'green' ? 'bg-green-500' : 'bg-red-500'}`} />
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
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{metric.label}</p>
                    <p className="text-3xl font-bold">{metric.value}</p>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Funnel Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Funnel from Booked to Sold</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Funnel Visualization */}
              <div className="relative">
                <div className="flex items-center justify-center space-x-1">
                  {/* Booked */}
                  <div className="relative">
                    <div 
                      className="bg-blue-500 text-white font-semibold flex items-center justify-center text-sm"
                      style={{ 
                        width: '200px', 
                        height: '48px',
                        clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0 100%)',
                        borderRadius: '4px 0 0 4px'
                      }}
                    >
                      1,200
                    </div>
                  </div>
                  
                  {/* Qualified */}
                  <div className="relative -ml-4">
                    <div 
                      className="bg-blue-400 text-white font-semibold flex items-center justify-center text-sm"
                      style={{ 
                        width: '180px', 
                        height: '48px',
                        clipPath: 'polygon(15% 0, 85% 0, 100% 100%, 0 100%)'
                      }}
                    >
                      1,050
                    </div>
                  </div>
                  
                  {/* Proposal */}
                  <div className="relative -ml-4">
                    <div 
                      className="bg-gray-500 text-white font-semibold flex items-center justify-center text-sm"
                      style={{ 
                        width: '160px', 
                        height: '48px',
                        clipPath: 'polygon(15% 0, 85% 0, 100% 100%, 0 100%)'
                      }}
                    >
                      780
                    </div>
                  </div>
                  
                  {/* Sold */}
                  <div className="relative -ml-4">
                    <div 
                      className="bg-green-500 text-white font-semibold flex items-center justify-center text-sm"
                      style={{ 
                        width: '140px', 
                        height: '48px',
                        clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)',
                        borderRadius: '0 4px 4px 0'
                      }}
                    >
                      510
                    </div>
                  </div>
                </div>
                
                {/* Stage Labels */}
                <div className="flex justify-between mt-4 px-2">
                  <div className="text-center" style={{ width: '200px' }}>
                    <span className="text-sm font-medium text-gray-700">Booked</span>
                  </div>
                  <div className="text-center" style={{ width: '180px', marginLeft: '-16px' }}>
                    <span className="text-sm font-medium text-gray-700">Qualified</span>
                  </div>
                  <div className="text-center" style={{ width: '160px', marginLeft: '-16px' }}>
                    <span className="text-sm font-medium text-gray-700">Proposal</span>
                  </div>
                  <div className="text-center" style={{ width: '140px', marginLeft: '-16px' }}>
                    <span className="text-sm font-medium text-gray-700">Sold</span>
                  </div>
                </div>
              </div>
              
              {/* Conversion Rates */}
              <div className="flex justify-between text-xs text-gray-500 px-2">
                <div style={{ width: '200px' }} className="text-center">100%</div>
                <div style={{ width: '180px', marginLeft: '-16px' }} className="text-center">87.5%</div>
                <div style={{ width: '160px', marginLeft: '-16px' }} className="text-center">65%</div>
                <div style={{ width: '140px', marginLeft: '-16px' }} className="text-center">42.5%</div>
              </div>
              
              {/* Alerts */}
              <div className="flex gap-2">
                <Badge variant="destructive" className="text-xs">Alert</Badge>
                <Badge variant="destructive" className="text-xs">Alert</Badge>
                <Badge variant="destructive" className="text-xs">Alert</Badge>
              </div>
              
              {/* Alert Message */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-sm text-red-800">
                  ⚠️ We need to improve the funnel at the Proposal stage
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Lead Segments */}
          <Card>
            <CardHeader>
              <CardTitle>Lead Segments</CardTitle>
              <div className="flex gap-2">
                <Button
                  variant={activeLeadTab === "overview" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveLeadTab("overview")}
                >
                  Overview
                </Button>
                <Button
                  variant={activeLeadTab === "demographics" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveLeadTab("demographics")}
                >
                  Demographics
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeLeadTab === "overview" ? (
                  <>
                    {overviewSegments.map((segment, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{segment.name}</span>
                          <span className="text-sm text-gray-600">{segment.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`${segment.color} h-2 rounded-full`}
                            style={{ width: `${segment.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    <p className="text-sm text-gray-600 mb-4">
                      Leads with a defined issue based on their profile
                    </p>
                    {demographicsSegments.map((segment, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">{segment.name}</span>
                            <Badge
                              variant={
                                segment.priority === "High Priority"
                                  ? "destructive"
                                  : segment.priority === "Medium Priority"
                                  ? "secondary"
                                  : "default"
                              }
                              className="text-xs"
                            >
                              {segment.priority}
                            </Badge>
                          </div>
                          <span className="text-sm text-gray-600">{segment.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`${segment.color} h-2 rounded-full`}
                            style={{ width: `${segment.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                    <div className="flex gap-4 text-xs mt-4">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full" />
                        <span>High Priority</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span>Medium Priority</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span>Low Priority</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Top 5 States / Most Selected Goals */}
          <Card>
            <CardHeader>
              <CardTitle>
                {activeLeadTab === "overview" ? "Top 5 States by Lead Count" : "Most Selected Survey Goals"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {activeLeadTab === "overview" ? (
                <div className="space-y-4">
                  {topStates.map((state, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-medium">
                          #{index + 1}
                        </div>
                        <span className="font-medium">{state.state}</span>
                      </div>
                      <span className="text-sm text-gray-600">{state.leads}</span>
                    </div>
                  ))}
                  <div className="mt-6 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">Geographic visualization would appear here</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-sm text-gray-600 mb-4">
                    Leads with Multiple Goals (Q2-Q4 FY)
                  </p>
                  {mostSelectedGoals.map((goal, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{goal.name}</span>
                        <span className="text-sm text-gray-600">{goal.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`${goal.color} h-2 rounded-full`}
                          style={{ width: `${goal.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Agencies & Agents Table */}
        <Card>
          <CardHeader>
            <CardTitle>Agencies & Agents</CardTitle>
            <p className="text-sm text-gray-600">
              Top performing Agencies and Agents signed to ACA
            </p>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>AGENCY / AGENT NAME</TableHead>
                  <TableHead>PRIORITY WEIGHT</TableHead>
                  <TableHead>ACCEPTED TO FOLLOW-UP</TableHead>
                  <TableHead>ACCEPTANCE RATE %</TableHead>
                  <TableHead>CLOSED WON %</TableHead>
                  <TableHead>CLOSED WON</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {agenciesData.map((agency, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{agency.name}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${agency.status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`} />
                        {agency.priority}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">Yes</Badge>
                    </TableCell>
                    <TableCell>{agency.acceptanceRate}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Yes</Badge>
                    </TableCell>
                    <TableCell>{agency.closedWon}</TableCell>
                  </TableRow>
                ))}
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
                <div className="grid grid-cols-4 gap-6 mb-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">LEADS</p>
                    <p className="text-2xl font-bold">1,240</p>
                    <Badge variant="secondary" className="text-xs">+5%</Badge>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">CONVERSION RATE</p>
                    <p className="text-2xl font-bold">42%</p>
                    <Badge variant="secondary" className="text-xs">+8%</Badge>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">COST PER LEAD</p>
                    <p className="text-2xl font-bold">3.2</p>
                    <Badge variant="secondary" className="text-xs">-2%</Badge>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">CLICK-THROUGH RATE</p>
                    <p className="text-2xl font-bold">4.1%</p>
                    <Badge variant="secondary" className="text-xs">+1%</Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Channel Mix</h4>
                  <div className="w-full bg-gray-200 rounded-lg h-8 flex overflow-hidden">
                    <div className="bg-blue-500 flex-1 flex items-center justify-center text-white text-sm">
                      Email
                    </div>
                    <div className="bg-green-500 flex-1 flex items-center justify-center text-white text-sm">
                      Direct Mail
                    </div>
                    <div className="bg-gray-400 flex-1 flex items-center justify-center text-white text-sm">
                      Ads
                    </div>
                    <div className="bg-red-400 flex-1 flex items-center justify-center text-white text-sm">
                      Provider Outreach
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>CHANNEL</TableHead>
                        <TableHead>BOOKINGS</TableHead>
                        <TableHead>CONVERSION RATE %</TableHead>
                        <TableHead>COST/LEAD $</TableHead>
                        <TableHead>AVG TOUCHPOINTS/LEAD</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Email</TableCell>
                        <TableCell>471</TableCell>
                        <TableCell>38%</TableCell>
                        <TableCell>2.2</TableCell>
                        <TableCell>4.8</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Direct Mail</TableCell>
                        <TableCell>322</TableCell>
                        <TableCell>45%</TableCell>
                        <TableCell>3.1</TableCell>
                        <TableCell>3.4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Ads</TableCell>
                        <TableCell>278</TableCell>
                        <TableCell>41%</TableCell>
                        <TableCell>4.8</TableCell>
                        <TableCell>6.2</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Provider Outreach</TableCell>
                        <TableCell>174</TableCell>
                        <TableCell>52%</TableCell>
                        <TableCell>1.4</TableCell>
                        <TableCell>2.1</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-4 gap-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">LEADS</p>
                    <p className="text-2xl font-bold">1,240</p>
                    <Badge variant="secondary" className="text-xs">+5%</Badge>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">CONVERSION RATE</p>
                    <p className="text-2xl font-bold">42%</p>
                    <Badge variant="secondary" className="text-xs">+8%</Badge>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">COST PER LEAD</p>
                    <p className="text-2xl font-bold">3.2</p>
                    <Badge variant="secondary" className="text-xs">-2%</Badge>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">CLICK-THROUGH RATE</p>
                    <p className="text-2xl font-bold">4.1%</p>
                    <Badge variant="secondary" className="text-xs">+1%</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-4">Touch Frequency Distribution</h4>
                  <div className="w-full bg-gray-200 rounded-lg h-8 flex overflow-hidden">
                    <div className="bg-green-500 h-full" style={{ width: '40%' }} />
                    <div className="bg-blue-500 h-full" style={{ width: '30%' }} />
                    <div className="bg-gray-400 h-full" style={{ width: '20%' }} />
                    <div className="bg-red-400 h-full" style={{ width: '10%' }} />
                  </div>
                  <div className="flex justify-between text-xs text-gray-600 mt-2">
                    <span>1 Touch</span>
                    <span>2-3 Touches</span>
                    <span>4-6 Touches</span>
                    <span>7+ Touches</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-4">Campaign Performance</h4>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>CAMPAIGN NAME</TableHead>
                        <TableHead>MEDIUM/CHANNEL</TableHead>
                        <TableHead>IMPRESSIONS</TableHead>
                        <TableHead>BOOKINGS</TableHead>
                        <TableHead>CONVERSION RATE %</TableHead>
                        <TableHead>COST/LEAD $</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>ACA Open Enrollment</TableCell>
                        <TableCell>Direct Mail</TableCell>
                        <TableCell>25,847 impressions</TableCell>
                        <TableCell>142</TableCell>
                        <TableCell>48%</TableCell>
                        <TableCell>3.2%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Life Insurance Leads</TableCell>
                        <TableCell>Ads</TableCell>
                        <TableCell>18,492 impressions</TableCell>
                        <TableCell>89</TableCell>
                        <TableCell>42%</TableCell>
                        <TableCell>4.1%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Provider Referral Program</TableCell>
                        <TableCell>Provider Outreach</TableCell>
                        <TableCell>8,234 impressions</TableCell>
                        <TableCell>156</TableCell>
                        <TableCell>61%</TableCell>
                        <TableCell>1.8%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Supplement Plans</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>12,847 impressions</TableCell>
                        <TableCell>73</TableCell>
                        <TableCell>35%</TableCell>
                        <TableCell>2.4%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Plans Term Matched</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>9,847 impressions</TableCell>
                        <TableCell>45</TableCell>
                        <TableCell>28%</TableCell>
                        <TableCell>3.1%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Dental & Vision</TableCell>
                        <TableCell>Direct Mail</TableCell>
                        <TableCell>6,234 impressions</TableCell>
                        <TableCell>78</TableCell>
                        <TableCell>39%</TableCell>
                        <TableCell>2.7%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>ACA Pricing</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>4,847 impressions</TableCell>
                        <TableCell>34</TableCell>
                        <TableCell>31%</TableCell>
                        <TableCell>4.2%</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
