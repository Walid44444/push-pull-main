import { useState, useEffect } from 'react'
import {
  Book, Users, TrendingUp, Star, GraduationCap, Building, FlaskConical,
  Wifi, User, Upload, ChartBar, Settings, Box, Search, Bell, ShoppingCart,
  CreditCard, Lock, Play, Award, MessageCircle, Video, FileText, CheckCircle,
  X, ChevronRight, Filter, Grid, List, Heart, Share2, Clock, BarChart3,
  Eye, Edit, Trash2, Plus, Minus, Check, AlertCircle, Zap, Globe, Shield, Trophy, Calendar,
  Home, LogOut, Mail, Phone, MapPin, Download, Camera
} from 'lucide-react'

// ============================================
// ICONS COMPONENT - Fixed missing icons
// ============================================
const Icons = {
  Book, Users, TrendingUp, Star, GraduationCap, Building, Science: FlaskConical,
  Wifi, User, Upload, ChartBar, Settings, VR: Box, Search, Bell, ShoppingCart,
  CreditCard, Lock, Play, Award, MessageCircle, Video, FileText, CheckCircle,
  X, ChevronRight, Filter, Grid, List, Heart, Share2, Clock, BarChart3,
  Eye, Edit, Trash2, Plus, Minus, Check, AlertCircle, Zap, Globe, Shield, Trophy, Calendar,
  Home, LogOut, Mail, Phone, MapPin, Download, Camera
}

// ============================================
// MOCK DATA - Enhanced with more realistic data
// ============================================
const labsData = [
  {
    id: 1,
    title: "5G Network Architecture Lab",
    description: "Explore 5G network components and architecture through immersive VR experience",
    duration: "2h 30m",
    difficulty: "Intermediate",
    type: "free",
    price: 0,
    category: "Telecom",
    teacher: "Dr. Benzema",
    rating: 4.8,
    students: 1242,
    thumbnail: "bg-gradient-to-br from-blue-500 to-cyan-500",
    objectives: ["Understand 5G architecture", "Configure network components", "Troubleshoot common issues"],
    prerequisites: ["Basic networking knowledge", "Understanding of wireless communication"]
  },
  {
    id: 2,
    title: "Advanced Circuit Analysis",
    description: "Master circuit analysis techniques with interactive 3D components",
    duration: "3h 15m",
    difficulty: "Advanced",
    type: "premium",
    price: 2500,
    category: "Engineering",
    teacher: "Prof. Ahmed",
    rating: 4.9,
    students: 856,
    thumbnail: "bg-gradient-to-br from-purple-500 to-indigo-500",
    objectives: ["Analyze complex circuits", "Use simulation tools", "Design efficient circuits"],
    prerequisites: ["Basic electronics", "Circuit theory"]
  },
  // ... rest of labs data remains the same
]

// ============================================
// ENHANCED NAVIGATION COMPONENT
// ============================================
const Navigation = ({ currentView, onViewChange, userRole, userData, onLogout }) => {
  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = {
    student: [
      { id: 'dashboard', label: 'Home', icon: Icons.Home },
      { id: 'marketplace', label: 'Marketplace', icon: Icons.ShoppingCart },
      { id: 'labs', label: 'My Labs', icon: Icons.Science },
      { id: 'profile', label: 'Profile', icon: Icons.User }
    ],
    teacher: [
      { id: 'dashboard', label: 'Dashboard', icon: Icons.ChartBar },
      { id: 'creator', label: 'Create Lab', icon: Icons.Plus },
      { id: 'sessions', label: 'Live Sessions', icon: Icons.Video },
      { id: 'analytics', label: 'Analytics', icon: Icons.BarChart3 }
    ],
    university: [
      { id: 'dashboard', label: 'Overview', icon: Icons.Building },
      { id: 'labs', label: 'University Labs', icon: Icons.Science },
      { id: 'students', label: 'Students', icon: Icons.Users },
      { id: 'reports', label: 'Reports', icon: Icons.FileText }
    ],
    ministry: [
      { id: 'dashboard', label: 'Overview', icon: Icons.BarChart3 },
      { id: 'approvals', label: 'Approvals', icon: Icons.CheckCircle },
      { id: 'analytics', label: 'Analytics', icon: Icons.ChartBar },
      { id: 'reports', label: 'Reports', icon: Icons.FileText }
    ],
    djezzy: [
      { id: 'dashboard', label: 'Network', icon: Icons.Wifi },
      { id: 'monitoring', label: 'Monitoring', icon: Icons.Eye },
      { id: 'analytics', label: 'Analytics', icon: Icons.ChartBar },
      { id: 'support', label: 'Support', icon: Icons.MessageCircle }
    ],
    admin: [
      { id: 'dashboard', label: 'Admin', icon: Icons.Settings },
      { id: 'users', label: 'Users', icon: Icons.Users },
      { id: 'system', label: 'System', icon: Icons.Settings }
    ]
  }

  const getLogoColors = () => {
    switch (userRole) {
      case 'djezzy':
        return 'from-red-600 to-red-400'
      case 'ministry':
        return 'from-green-600 to-emerald-400'
      case 'admin':
        return 'from-indigo-600 to-purple-400'
      case 'university':
        return 'from-orange-600 to-amber-400'
      default:
        return 'from-blue-600 to-cyan-400'
    }
  }

  const getActiveColors = () => {
    switch (userRole) {
      case 'djezzy':
        return { bg: 'bg-red-50', text: 'text-red-600', hover: 'hover:bg-red-50' }
      case 'ministry':
        return { bg: 'bg-green-50', text: 'text-green-600', hover: 'hover:bg-green-50' }
      case 'admin':
        return { bg: 'bg-indigo-50', text: 'text-indigo-600', hover: 'hover:bg-indigo-50' }
      case 'university':
        return { bg: 'bg-orange-50', text: 'text-orange-600', hover: 'hover:bg-orange-50' }
      default:
        return { bg: 'bg-blue-50', text: 'text-blue-600', hover: 'hover:bg-blue-50' }
    }
  }

  const activeColors = getActiveColors()
  const items = navItems[userRole] || navItems.student

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Mobile Menu */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              <Icons.Grid className="w-5 h-5" />
            </button>
            
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 bg-gradient-to-br ${getLogoColors()} rounded-lg flex items-center justify-center`}>
                <Icons.VR className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className={`text-xl font-bold bg-gradient-to-r ${getLogoColors()} bg-clip-text text-transparent`}>
                  EduXR
                  {userRole === 'djezzy' && (
                    <span className="text-red-600 ml-1">× Djezzy</span>
                  )}
                </h1>
                <p className="text-xs text-gray-500">
                  {userRole === 'djezzy' ? 'Powered by 5G' : 'Immersive Learning'}
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentView === item.id
                    ? `${activeColors.bg} ${activeColors.text}`
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Icons.Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-900">Notifications</h3>
                  </div>
                  <div className="max-h-60 overflow-y-auto">
                    {[
                      { id: 1, text: "New lab available: 5G Networks", time: "5 min ago", unread: true },
                      { id: 2, text: "Live session starting soon", time: "1 hour ago", unread: true },
                      { id: 3, text: "Your lab has been approved", time: "2 hours ago", unread: false }
                    ].map(notification => (
                      <div key={notification.id} className={`px-4 py-3 hover:bg-gray-50 cursor-pointer border-l-2 ${notification.unread ? 'border-blue-500 bg-blue-50' : 'border-transparent'}`}>
                        <p className="text-sm text-gray-900">{notification.text}</p>
                        <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 py-2 border-t border-gray-200">
                    <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Menu */}
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <div className={`w-8 h-8 bg-gradient-to-br ${
                  userRole === 'djezzy' ? 'from-red-600 to-red-400' :
                  userRole === 'ministry' ? 'from-green-600 to-emerald-400' :
                  userRole === 'admin' ? 'from-indigo-600 to-purple-400' :
                  userRole === 'university' ? 'from-orange-600 to-amber-400' :
                  'from-blue-500 to-cyan-400'
                } rounded-full flex items-center justify-center`}>
                  <span className="text-white text-sm font-semibold">
                    {userData?.name?.charAt(0) || 'U'}
                  </span>
                </div>
                <span className="hidden md:block text-sm font-medium text-gray-700">
                  {userData?.name || 'User'}
                </span>
                <Icons.ChevronRight className={`w-4 h-4 text-gray-500 transition-transform ${showProfileMenu ? 'rotate-90' : ''}`} />
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-200">
                    <p className="text-sm font-medium text-gray-900">{userData.name}</p>
                    <p className="text-xs text-gray-500">{userData.university}</p>
                  </div>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2">
                    <Icons.User className="w-4 h-4" />
                    <span>Profile Settings</span>
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2">
                    <Icons.Settings className="w-4 h-4" />
                    <span>Preferences</span>
                  </button>
                  <hr className="my-2" />
                  <button 
                    onClick={onLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2"
                  >
                    <Icons.LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onViewChange(item.id)
                    setMobileMenuOpen(false)
                  }}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                    currentView === item.id
                      ? `${activeColors.bg} ${activeColors.text}`
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// ============================================
// ENHANCED LAB SESSION PAGE
// ============================================
const LabSessionPage = ({ lab, onClose, onViewChange }) => {
  const [progress, setProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showChat, setShowChat] = useState(false)
  const [activeTab, setActiveTab] = useState('lab')
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: 'teacher', text: 'Welcome to the lab! How can I help you today?', time: '10:00 AM' }
  ])
  const [newMessage, setNewMessage] = useState('')

  useEffect(() => {
    // Simulate progress updates
    const interval = setInterval(() => {
      if (isPlaying && progress < 100) {
        setProgress(prev => Math.min(prev + 1, 100))
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [isPlaying, progress])

  if (!lab) return null

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: chatMessages.length + 1,
        sender: 'student',
        text: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
      setChatMessages([...chatMessages, message])
      setNewMessage('')
    }
  }

  const labSteps = [
    { id: 1, title: "Introduction", description: "Lab overview and objectives", duration: "15 min", completed: true },
    { id: 2, title: "Setup", description: "Configure your environment", duration: "20 min", completed: true },
    { id: 3, title: "Main Experiment", description: "Perform the core lab activities", duration: "45 min", completed: progress > 50 },
    { id: 4, title: "Analysis", description: "Review and analyze results", duration: "25 min", completed: false },
    { id: 5, title: "Conclusion", description: "Summary and next steps", duration: "15 min", completed: false }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex-1">
            <button
              onClick={onClose}
              className="flex items-center space-x-2 text-gray-300 hover:text-white mb-4 transition-colors"
            >
              <Icons.ChevronRight className="w-5 h-5 rotate-180" />
              <span>Back to Dashboard</span>
            </button>
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold">{lab.title}</h1>
                <p className="text-gray-400 mt-2 max-w-2xl">{lab.description}</p>
                <div className="flex items-center space-x-4 mt-3">
                  <div className="flex items-center space-x-1 text-sm text-gray-300">
                    <Icons.Clock className="w-4 h-4" />
                    <span>{lab.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-300">
                    <Icons.User className="w-4 h-4" />
                    <span>By {lab.teacher}</span>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    lab.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-300' :
                    lab.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300' :
                    'bg-red-500/20 text-red-300'
                  }`}>
                    {lab.difficulty}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors">
                  <Icons.Share2 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setShowChat(!showChat)}
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors relative"
                >
                  <Icons.MessageCircle className="w-5 h-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span>Overall Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tab Navigation */}
            <div className="bg-gray-800/50 rounded-2xl p-1">
              <div className="flex space-x-1">
                {[
                  { id: 'lab', label: 'Lab Environment', icon: Icons.Science },
                  { id: 'materials', label: 'Materials', icon: Icons.Book },
                  { id: 'notes', label: 'Notes', icon: Icons.FileText }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-colors flex-1 justify-center ${
                      activeTab === tab.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* XR Viewer */}
            <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
              <div className="aspect-video bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center relative">
                {!isPlaying ? (
                  <div className="text-center">
                    <Icons.VR className="w-32 h-32 text-white/30 mx-auto mb-4" />
                    <p className="text-white/60 text-lg">XR Lab Environment</p>
                    <p className="text-white/40 text-sm mt-2">Interactive 3D Lab Simulation</p>
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="mt-6 px-8 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-xl font-semibold transition-colors flex items-center space-x-2 mx-auto"
                    >
                      <Icons.Play className="w-5 h-5" />
                      <span>Start Lab</span>
                    </button>
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-white/60">Lab Session in Progress</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Controls */}
              <div className="p-6 bg-gray-800/50">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                    >
                      {isPlaying ? (
                        <Icons.X className="w-6 h-6" />
                      ) : (
                        <Icons.Play className="w-6 h-6 ml-1" />
                      )}
                    </button>
                    <div className="text-sm text-gray-400">
                      <span>00:00</span> / <span>{lab.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                      <Icons.Video className="w-5 h-5" />
                    </button>
                    <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                      <Icons.Settings className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Lab Steps */}
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-4">Lab Steps</h3>
              <div className="space-y-3">
                {labSteps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`flex items-center space-x-4 p-4 rounded-xl border transition-colors ${
                      step.completed
                        ? 'bg-green-500/10 border-green-500/20'
                        : 'bg-gray-700/50 border-gray-600'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step.completed ? 'bg-green-500' : 'bg-gray-600'
                    }`}>
                      {step.completed ? (
                        <Icons.Check className="w-4 h-4 text-white" />
                      ) : (
                        <span className="text-white text-sm font-semibold">{index + 1}</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white">{step.title}</h4>
                      <p className="text-sm text-gray-400">{step.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-400">{step.duration}</p>
                      {step.completed && (
                        <p className="text-xs text-green-400">Completed</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Lab Information */}
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-4">Lab Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Category</p>
                  <p className="font-semibold">{lab.category}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Instructor</p>
                  <p className="font-semibold">{lab.teacher}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Learning Objectives</p>
                  <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                    {lab.objectives?.map((obj, idx) => (
                      <li key={idx}>{obj}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-colors">
                  <Icons.Download className="w-5 h-5" />
                  <span>Download Materials</span>
                </button>
                <button className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-colors">
                  <Icons.FileText className="w-5 h-5" />
                  <span>Submit Report</span>
                </button>
                <button className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-colors">
                  <Icons.Award className="w-5 h-5" />
                  <span>View Badges</span>
                </button>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Resources</h3>
              <div className="space-y-3">
                <button className="w-full bg-white/20 hover:bg-white/30 py-2 px-4 rounded-xl text-sm font-medium transition-colors flex items-center justify-between">
                  <span>Lab Manual</span>
                  <Icons.Download className="w-4 h-4" />
                </button>
                <button className="w-full bg-white/20 hover:bg-white/30 py-2 px-4 rounded-xl text-sm font-medium transition-colors flex items-center justify-between">
                  <span>Reference Materials</span>
                  <Icons.Download className="w-4 h-4" />
                </button>
                <button className="w-full bg-white/20 hover:bg-white/30 py-2 px-4 rounded-xl text-sm font-medium transition-colors flex items-center justify-between">
                  <span>3D Models</span>
                  <Icons.Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Panel */}
      {showChat && (
        <div className="fixed right-0 top-0 h-full w-96 bg-gray-800 border-l border-gray-700 shadow-2xl z-50 flex flex-col">
          <div className="p-6 border-b border-gray-700 flex items-center justify-between">
            <h3 className="text-xl font-bold">Chat with Instructor</h3>
            <button 
              onClick={() => setShowChat(false)}
              className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <Icons.X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {chatMessages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'teacher' ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`max-w-xs rounded-2xl p-4 ${
                  message.sender === 'teacher' 
                    ? 'bg-gray-700 rounded-tl-none' 
                    : 'bg-blue-600 rounded-tr-none'
                }`}>
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">{message.time}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-6 border-t border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type your message..."
                className="flex-1 bg-gray-700 border border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                onClick={sendMessage}
                className="px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors"
              >
                <Icons.ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ============================================
// ENHANCED STUDENT PROFILE PAGE
// ============================================
const StudentProfilePage = ({ userData, onViewChange }) => {
  const [activeTab, setActiveTab] = useState('overview')
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState(userData)

  const stats = {
    completed: 12,
    badges: 8,
    hours: 48,
    certificates: 5,
    courses: 8,
    rank: 234,
    streak: 14,
  }

  const handleSave = () => {
    // In a real app, you would save to backend here
    setIsEditing(false)
    // Update userData context/state
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center space-x-5 mb-4 md:mb-0">
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                  {userData.name.charAt(0)}
                </div>
                <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center border-2 border-white">
                  <Icons.Camera className="w-4 h-4 text-white" />
                </button>
              </div>
              <div>
                {isEditing ? (
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={editData.name}
                      onChange={(e) => setEditData({...editData, name: e.target.value})}
                      className="text-2xl font-bold border-b border-gray-300 focus:border-blue-500 focus:outline-none"
                    />
                    <input
                      type="text"
                      value={editData.university}
                      onChange={(e) => setEditData({...editData, university: e.target.value})}
                      className="text-gray-600 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
                    />
                    <input
                      type="text"
                      value={editData.department}
                      onChange={(e) => setEditData({...editData, department: e.target.value})}
                      className="text-gray-600 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                ) : (
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">{userData.name}</h1>
                    <p className="text-gray-600 text-sm mt-1">
                      {userData.university} • {userData.department}
                    </p>
                    <div className="flex items-center space-x-4 mt-2">
                      <div className="flex items-center space-x-1 text-sm text-gray-600">
                        <Icons.Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-semibold">4.8 Rating</span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-600">
                        <Icons.TrendingUp className="w-4 h-4 text-green-500" />
                        <span className="font-semibold">Rank #{stats.rank}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex space-x-3">
              {isEditing ? (
                <>
                  <button 
                    onClick={() => { setIsEditing(false); setEditData(userData); }}
                    className="px-5 py-2.5 text-sm font-semibold border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleSave}
                    className="px-5 py-2.5 text-sm font-semibold bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                  >
                    Save Changes
                  </button>
                </>
              ) : (
                <>
                  <button 
                    onClick={() => setIsEditing(true)}
                    className="px-5 py-2.5 text-sm font-semibold border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    Edit Profile
                  </button>
                  <button className="px-5 py-2.5 text-sm font-semibold bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors flex items-center space-x-2">
                    <Icons.Download className="w-4 h-4" />
                    <span>Download Transcript</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Rest of the profile page remains similar but with enhanced styling */}
        {/* ... */}
      </div>
    </div>
  )
}

// ============================================
// ENHANCED PAYMENT MODAL
// ============================================
const PaymentModal = ({ lab, onClose, onSuccess }) => {
  const [paymentMethod, setPaymentMethod] = useState('ccp')
  const [cardNumber, setCardNumber] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cvv, setCvv] = useState('')
  const [cardholderName, setCardholderName] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  if (!lab) return null

  const handlePayment = async (e) => {
    e.preventDefault()
    setIsProcessing(true)
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setShowSuccess(true)
      setTimeout(() => {
        onSuccess()
        onClose()
      }, 2000)
    }, 3000)
  }

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    const matches = v.match(/\d{4,16}/g)
    const match = matches && matches[0] || ''
    const parts = []
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }
    
    return parts.length ? parts.join(' ') : value
  }

  const formatExpiryDate = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    if (v.length >= 2) {
      return v.substring(0, 2) + (v.length > 2 ? '/' + v.substring(2, 4) : '')
    }
    return v
  }

  if (showSuccess) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center animate-in fade-in duration-500">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icons.CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h2>
          <p className="text-gray-600 mb-6">You now have access to {lab.title}</p>
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in fade-in duration-300">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white rounded-t-3xl">
          <h2 className="text-2xl font-bold text-gray-900">Complete Purchase</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            disabled={isProcessing}
          >
            <Icons.X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handlePayment} className="p-6">
          {/* Lab Summary */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-6">
            <div className="flex items-start space-x-4">
              <div className={`w-20 h-20 ${lab.thumbnail} rounded-xl flex items-center justify-center`}>
                <Icons.VR className="w-10 h-10 text-white opacity-50" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{lab.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{lab.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>{lab.duration}</span>
                  <span>•</span>
                  <span>{lab.difficulty}</span>
                  <span>•</span>
                  <span>By {lab.teacher}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500 mb-1">Total</p>
                <p className="text-3xl font-bold text-purple-600">{lab.price.toLocaleString()} DA</p>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h3>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setPaymentMethod('ccp')}
                className={`p-4 border-2 rounded-xl transition-all ${
                  paymentMethod === 'ccp'
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Icons.CreditCard className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <p className="font-semibold">CCP</p>
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('edahabia')}
                className={`p-4 border-2 rounded-xl transition-all ${
                  paymentMethod === 'edahabia'
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Icons.CreditCard className="w-8 h-8 mx-auto mb-2 text-green-600" />
                <p className="font-semibold">Edahabia</p>
              </button>
            </div>
          </div>

          {/* Payment Form */}
          {paymentMethod === 'ccp' && (
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
                <input
                  type="text"
                  required
                  value={cardholderName}
                  onChange={(e) => setCardholderName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={isProcessing}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                <input
                  type="text"
                  required
                  value={cardNumber}
                  onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={isProcessing}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                  <input
                    type="text"
                    required
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(formatExpiryDate(e.target.value))}
                    placeholder="MM/YY"
                    maxLength={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    disabled={isProcessing}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                  <input
                    type="text"
                    required
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 3))}
                    placeholder="123"
                    maxLength={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    disabled={isProcessing}
                  />
                </div>
              </div>
            </div>
          )}

          {paymentMethod === 'edahabia' && (
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Edahabia Card Number</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your 16-digit Edahabia card number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={isProcessing}
                />
              </div>
            </div>
          )}

          {/* Security Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 flex items-start space-x-3">
            <Icons.Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-blue-800">
              Your payment is secure and encrypted. We use industry-standard security measures to protect your information.
            </p>
          </div>

          {/* Total and Pay Button */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center justify-between mb-6">
              <span className="text-lg font-semibold text-gray-900">Total Amount</span>
              <span className="text-3xl font-bold text-purple-600">{lab.price.toLocaleString()} DA</span>
            </div>
            <button
              type="submit"
              disabled={isProcessing}
              className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg transition-all flex items-center justify-center space-x-2 ${
                isProcessing
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 hover:shadow-xl'
              } text-white`}
            >
              {isProcessing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Processing Payment...</span>
                </>
              ) : (
                <span>Complete Purchase</span>
              )}
            </button>
            <p className="text-center text-sm text-gray-500 mt-4">
              By completing this purchase, you agree to our Terms of Service
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

// ============================================
// ADD MISSING COMPONENTS
// ============================================

// Enhanced University Dashboard with proper routing
const UniversityDashboard = ({ userData, onViewChange }) => {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Icons.Home },
    { id: 'students', label: 'Students', icon: Icons.Users },
    { id: 'teachers', label: 'Teachers', icon: Icons.GraduationCap },
    { id: 'labs', label: 'XR Labs', icon: Icons.Science },
    { id: 'sessions', label: 'Live Sessions', icon: Icons.Video },
    { id: 'analytics', label: 'Analytics', icon: Icons.ChartBar },
    { id: 'billing', label: 'Billing', icon: Icons.CreditCard },
    { id: 'settings', label: 'Settings', icon: Icons.Settings },
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <UniversityOverviewTab userData={userData} />
      case 'students':
        return <UniversityStudentsTab />
      case 'teachers':
        return <UniversityTeachersTab />
      case 'labs':
        return <UniversityLabsTab onViewChange={onViewChange} />
      case 'sessions':
        return <UniversitySessionsTab />
      case 'analytics':
        return <UniversityAnalyticsTab />
      case 'billing':
        return <UniversityBillingTab />
      case 'settings':
        return <UniversitySettingsTab userData={userData} />
      default:
        return <UniversityOverviewTab userData={userData} />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl p-8 text-white mb-8 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          <div className="relative z-10">
            <h1 className="text-4xl lg:text-5xl font-bold mb-3">University Dashboard</h1>
            <p className="text-orange-100 text-lg">Welcome, {userData.name} - {userData.university}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-2 mb-6 overflow-x-auto">
          <div className="flex space-x-2 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-orange-50'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {renderTabContent()}
      </div>
    </div>
  )
}

// University Overview Tab
const UniversityOverviewTab = ({ userData }) => {
  const stats = {
    students: 2450,
    teachers: 84,
    labs: 23,
    departments: 12,
    activeSessions: 15,
    labsUsed: 18,
    topLabs: 5
  }

  return (
    <div>
      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-3xl shadow-lg border border-orange-100 p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Active Students</p>
              <p className="text-3xl font-bold text-gray-900">{stats.students.toLocaleString()}</p>
            </div>
            <div className="p-4 rounded-2xl bg-orange-100">
              <Icons.GraduationCap className="w-8 h-8 text-orange-600" />
            </div>
          </div>
        </div>
        
        {/* Add other stat cards similarly */}
      </div>

      {/* Quick Actions and Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl shadow-lg border border-orange-100 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center space-x-2">
              <Icons.Plus className="w-5 h-5" />
              <span>Add Student</span>
            </button>
            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center space-x-2">
              <Icons.Users className="w-5 h-5" />
              <span>Add Teacher</span>
            </button>
            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center space-x-2">
              <Icons.ChartBar className="w-5 h-5" />
              <span>View Analytics</span>
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-3xl shadow-lg border border-orange-100 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {[
              { action: 'New lab created', user: 'Dr. Benzema', time: '2 hours ago' },
              { action: 'Student enrolled', user: 'Ahmed Benali', time: '5 hours ago' },
              { action: 'Live session completed', user: 'Prof. Ahmed', time: '1 day ago' }
            ].map((activity, idx) => (
              <div key={idx} className="flex items-center space-x-3 p-3 bg-orange-50 rounded-xl">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">by {activity.user}</p>
                </div>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Add other university tab components similarly...

// ============================================
// FIXED MAIN APP COMPONENT
// ============================================
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentView, setCurrentView] = useState('dashboard')
  const [selectedLab, setSelectedLab] = useState(null)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [userRole, setUserRole] = useState('student')
  const [userData, setUserData] = useState({
    name: 'Ahmed Benali',
    university: 'University of Algiers',
    department: 'Engineering'
  })

  const handleLogin = (role, data) => {
    setUserRole(role)
    setUserData(data)
    setIsAuthenticated(true)
    setCurrentView('dashboard')
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setCurrentView('dashboard')
    setUserRole('student')
    setUserData({
      name: 'Ahmed Benali',
      university: 'University of Algiers',
      department: 'Engineering'
    })
  }

  const handleSelectLab = (lab) => {
    if (lab.type === 'premium') {
      setSelectedLab(lab)
      setShowPaymentModal(true)
    } else {
      setSelectedLab(lab)
      setCurrentView('lab-session')
    }
  }

  const handlePaymentSuccess = () => {
    setShowPaymentModal(false)
    setCurrentView('lab-session')
  }

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        if (userRole === 'student') {
          return <StudentDashboard onSelectLab={handleSelectLab} userData={userData} onViewChange={setCurrentView} />
        } else if (userRole === 'teacher') {
          return <TeacherDashboard userData={userData} onViewChange={setCurrentView} />
        } else if (userRole === 'university') {
          return <UniversityDashboard userData={userData} onViewChange={setCurrentView} />
        } else if (userRole === 'ministry') {
          return <MinistryDashboard userData={userData} onViewChange={setCurrentView} />
        } else if (userRole === 'djezzy') {
          return <DjezzyDashboard userData={userData} onViewChange={setCurrentView} />
        } else if (userRole === 'admin') {
          return <AdminDashboard userData={userData} onViewChange={setCurrentView} />
        }
        break
      case 'marketplace':
        return <Marketplace onSelectLab={handleSelectLab} onViewChange={setCurrentView} />
      case 'labs':
        if (userRole === 'student') {
          return <StudentLabsPage onSelectLab={handleSelectLab} />
        }
        break
      case 'profile':
        if (userRole === 'student') {
          return <StudentProfilePage userData={userData} onViewChange={setCurrentView} />
        }
        break
      case 'sessions':
        if (userRole === 'teacher') {
          return <TeacherSessionsPage />
        }
        break
      case 'analytics':
        if (userRole === 'teacher') {
          return <TeacherAnalyticsPage />
        }
        if (userRole === 'ministry') {
          return <MinistryAnalyticsPage />
        }
        break
      case 'reports':
        if (userRole === 'ministry') {
          return <MinistryReportsPage />
        }
        break
      case 'monitoring':
        if (userRole === 'djezzy') {
          return <NetworkMonitoringPage />
        }
        break
      case 'users':
        if (userRole === 'admin') {
          return <AdminUsersPage />
        }
        break
      case 'system':
        if (userRole === 'admin') {
          return <AdminSystemPage />
        }
        break
      case 'lab-session':
        return <LabSessionPage lab={selectedLab} onClose={() => setCurrentView('dashboard')} onViewChange={setCurrentView} />
      case 'creator':
        return <LabCreator onViewChange={setCurrentView} />
      case 'approvals':
        return <ApprovalPage onViewChange={setCurrentView} />
      default:
        return <StudentDashboard onSelectLab={handleSelectLab} userData={userData} onViewChange={setCurrentView} />
    }
  }

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        currentView={currentView} 
        onViewChange={setCurrentView}
        userRole={userRole}
        userData={userData}
        onLogout={handleLogout}
      />
      {renderView()}
      {showPaymentModal && (
        <PaymentModal
          lab={selectedLab}
          onClose={() => setShowPaymentModal(false)}
          onSuccess={handlePaymentSuccess}
        />
      )}
    </div>
  )
}

export default App