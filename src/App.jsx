import { useState } from 'react'
import {
  Book, Users, TrendingUp, Star, GraduationCap, Building, FlaskConical,
  Wifi, User, Upload, ChartBar, Settings, Box, Search, Bell, ShoppingCart,
  CreditCard, Lock, Play, Award, MessageCircle, Video, FileText, CheckCircle,
  X, ChevronRight, Filter, Grid, List, Heart, Share2, Clock, BarChart3,
  Eye, Edit, Trash2, Plus, Minus, Check, AlertCircle, Zap, Globe, Shield
} from 'lucide-react'

// ============================================
// ICONS COMPONENT
// ============================================
const Icons = {
  Book, Users, TrendingUp, Star, GraduationCap, Building, Science: FlaskConical,
  Wifi, User, Upload, ChartBar, Settings, VR: Box, Search, Bell, ShoppingCart,
  CreditCard, Lock, Play, Award, MessageCircle, Video, FileText, CheckCircle,
  X, ChevronRight, Filter, Grid, List, Heart, Share2, Clock, BarChart3,
  Eye, Edit, Trash2, Plus, Minus, Check, AlertCircle, Zap, Globe, Shield
}

// ============================================
// MOCK DATA
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
    thumbnail: "bg-gradient-to-br from-blue-500 to-cyan-500"
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
    thumbnail: "bg-gradient-to-br from-purple-500 to-indigo-500"
  },
  {
    id: 3,
    title: "Human Anatomy VR Exploration",
    description: "Detailed 3D exploration of human anatomy systems",
    duration: "4h",
    difficulty: "Beginner",
    type: "premium",
    price: 3500,
    category: "Medical",
    teacher: "Dr. Fatima",
    rating: 4.7,
    students: 2103,
    thumbnail: "bg-gradient-to-br from-red-500 to-pink-500"
  },
  {
    id: 4,
    title: "Molecular Chemistry Lab",
    description: "Interactive molecular structures and reactions",
    duration: "2h",
    difficulty: "Intermediate",
    type: "free",
    price: 0,
    category: "Science",
    teacher: "Dr. Mohamed",
    rating: 4.6,
    students: 987,
    thumbnail: "bg-gradient-to-br from-green-500 to-emerald-500"
  },
  {
    id: 5,
    title: "Robotics & Automation",
    description: "Build and program robots in virtual environment",
    duration: "5h",
    difficulty: "Advanced",
    type: "premium",
    price: 4500,
    category: "Engineering",
    teacher: "Prof. Larbi",
    rating: 4.9,
    students: 634,
    thumbnail: "bg-gradient-to-br from-orange-500 to-amber-500"
  },
  {
    id: 6,
    title: "Optical Fiber Networks",
    description: "Understanding fiber optic communication systems",
    duration: "2h 45m",
    difficulty: "Intermediate",
    type: "free",
    price: 0,
    category: "Telecom",
    teacher: "Dr. Benzema",
    rating: 4.5,
    students: 1123,
    thumbnail: "bg-gradient-to-br from-cyan-500 to-blue-500"
  }
]

// ============================================
// NAVIGATION COMPONENT
// ============================================
const Navigation = ({ currentView, onViewChange, userRole, userData, onLogout }) => {
  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)

  const navItems = {
    student: [
      { id: 'dashboard', label: 'Home', icon: Icons.Book },
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
    ministry: [
      { id: 'dashboard', label: 'Overview', icon: Icons.BarChart3 },
      { id: 'approvals', label: 'Approvals', icon: Icons.CheckCircle },
      { id: 'analytics', label: 'Analytics', icon: Icons.ChartBar },
      { id: 'reports', label: 'Reports', icon: Icons.FileText }
    ],
    djezzy: [
      { id: 'dashboard', label: 'Network', icon: Icons.Wifi },
      { id: 'monitoring', label: 'Monitoring', icon: Icons.Eye },
      { id: 'packages', label: 'Packages', icon: Icons.Globe }
    ],
    admin: [
      { id: 'dashboard', label: 'Admin', icon: Icons.Settings },
      { id: 'users', label: 'Users', icon: Icons.Users },
      { id: 'system', label: 'System', icon: Icons.Settings }
    ]
  }

  const items = navItems[userRole] || navItems.student

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
              <Icons.VR className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                EduXR
              </h1>
              <p className="text-xs text-gray-500">Immersive Learning</p>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-1">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentView === item.id
                    ? 'bg-blue-50 text-blue-600'
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
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Icons.Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">
                    {userData?.name?.charAt(0) || 'U'}
                  </span>
                </div>
                <span className="hidden md:block text-sm font-medium text-gray-700">
                  {userData?.name || 'User'}
                </span>
                <Icons.ChevronRight className="w-4 h-4 text-gray-500" />
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Profile Settings
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Preferences
                  </button>
                  <hr className="my-2" />
                  <button 
                    onClick={onLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

// ============================================
// STUDENT DASHBOARD
// ============================================
const StudentDashboard = ({ onSelectLab, userData, onViewChange }) => {
  const stats = {
    completed: 12,
    ongoing: 3,
    badges: 8,
    streak: 14,
  }

  const enrolledCourses = [
    { title: "Advanced 5G Networks", progress: 75, nextDeadline: "Dec 15, 2024" },
    { title: "Circuit Analysis", progress: 100, nextDeadline: "Completed" },
    { title: "Human Anatomy VR", progress: 30, nextDeadline: "Jan 10, 2025" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 rounded-3xl p-8 text-white mb-8 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
              <div className="flex-1">
                <h1 className="text-4xl lg:text-5xl font-bold mb-3">Welcome back, {userData.name}! 👋</h1>
                <p className="text-blue-100 text-lg mb-6">Continue your learning journey at {userData.university}</p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5 min-w-[160px] border border-white/30">
                    <div className="text-3xl font-bold">{stats.streak} days</div>
                    <div className="text-blue-100 text-sm mt-1">Learning Streak</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5 min-w-[160px] border border-white/30">
                    <div className="text-3xl font-bold">{stats.badges}</div>
                    <div className="text-blue-100 text-sm mt-1">Skill Badges</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5 min-w-[160px] border border-white/30">
                    <div className="text-3xl font-bold">{stats.completed}</div>
                    <div className="text-blue-100 text-sm mt-1">Labs Completed</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 lg:mt-0 lg:ml-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/30">
                  <p className="font-semibold mb-2 text-lg">🎯 Learning Goal</p>
                  <p className="text-blue-100 text-sm mb-3">Complete 5 labs this month</p>
                  <div className="w-full bg-white/20 rounded-full h-3">
                    <div className="bg-white h-3 rounded-full transition-all duration-500" style={{ width: '60%' }}></div>
                  </div>
                  <p className="text-blue-100 text-xs mt-2">3 of 5 completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Enrolled Courses */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">My Learning Journey</h2>
                <button 
                  onClick={() => onViewChange('labs')}
                  className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center space-x-1"
                >
                  <span>View All</span>
                  <Icons.ChevronRight className="w-4 h-4" />
                </button>
              </div>
              
              <div className="space-y-4">
                {enrolledCourses.map((course, index) => (
                  <div key={index} className="flex items-center justify-between p-5 bg-gradient-to-r from-gray-50 to-white rounded-2xl hover:shadow-md transition-all cursor-pointer border border-gray-100">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Icons.Book className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">{course.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">Next: {course.nextDeadline}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-gray-900 mb-2">{course.progress}%</div>
                      <div className="w-32 bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-emerald-500 h-2.5 rounded-full transition-all duration-500" 
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 mb-5 text-lg">Learning Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-600">Completed Labs</span>
                  <span className="font-bold text-gray-900 text-lg">{stats.completed}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-600">In Progress</span>
                  <span className="font-bold text-gray-900 text-lg">{stats.ongoing}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-600">Avg. Score</span>
                  <span className="font-bold text-green-600 text-lg">87%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Time Spent</span>
                  <span className="font-bold text-gray-900 text-lg">48h</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-600 rounded-3xl p-6 text-white shadow-xl">
              <h3 className="font-semibold mb-4 text-lg">Upcoming Live Session</h3>
              <p className="text-purple-100 mb-4">Advanced 5G Network Lab with Dr. Benzema</p>
              <div className="flex items-center justify-between">
                <span className="text-sm">Tomorrow, 10:00 AM</span>
                <button className="bg-white text-purple-600 px-5 py-2.5 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2">
                  <Icons.Video className="w-4 h-4" />
                  <span>Join Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Labs */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Recommended for You</h2>
            <button 
              onClick={() => onViewChange('marketplace')}
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-1"
            >
              <span>View All</span>
              <Icons.ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {labsData.slice(0, 3).map((lab) => (
              <div
                key={lab.id}
                className="bg-white border-2 border-gray-100 rounded-2xl hover:shadow-xl transition-all cursor-pointer group overflow-hidden hover:border-blue-200"
                onClick={() => onSelectLab(lab)}
              >
                <div className={`h-48 ${lab.thumbnail} flex items-center justify-center relative overflow-hidden`}>
                  <Icons.VR className="w-20 h-20 text-white opacity-30 group-hover:scale-125 transition-transform duration-500" />
                  {lab.type === "premium" && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                      PREMIUM
                    </div>
                  )}
                  {lab.type === "free" && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                      FREE
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">{lab.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{lab.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Icons.Clock className="w-4 h-4" />
                      <span>{lab.duration}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      lab.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                      lab.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {lab.difficulty}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      {lab.type === "premium" ? (
                        <span className="text-2xl font-bold text-purple-600">{lab.price.toLocaleString()} DA</span>
                      ) : (
                        <span className="text-green-600 font-bold text-lg">FREE</span>
                      )}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        onSelectLab(lab)
                      }}
                      className={`px-5 py-2.5 rounded-xl font-semibold transition-all flex items-center space-x-2 ${
                        lab.type === "premium"
                          ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg"
                          : "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg"
                      }`}
                    >
                      <Icons.Play className="w-4 h-4" />
                      <span>{lab.type === "premium" ? "Enroll" : "Start"}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// MARKETPLACE COMPONENT
// ============================================
const Marketplace = ({ onSelectLab, onViewChange }) => {
  const [filter, setFilter] = useState('all')
  const [sortBy, setSortBy] = useState('popularity')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredLabs = labsData.filter(lab => {
    if (filter !== 'all' && lab.type !== filter) return false
    if (searchQuery && !lab.title.toLowerCase().includes(searchQuery.toLowerCase())) return false
    return true
  })

  const sortedLabs = [...filteredLabs].sort((a, b) => {
    if (sortBy === 'popularity') return b.students - a.students
    if (sortBy === 'rating') return b.rating - a.rating
    if (sortBy === 'price') return a.price - b.price
    return 0
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Lab Marketplace</h1>
          <p className="text-gray-600">Discover immersive XR learning experiences</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Icons.Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search labs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-3">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Labs</option>
                <option value="free">Free Only</option>
                <option value="premium">Premium Only</option>
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500"
              >
                <option value="popularity">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price">Price: Low to High</option>
              </select>
            </div>
          </div>
        </div>

        {/* Labs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedLabs.map((lab) => (
            <div
              key={lab.id}
              className="bg-white border-2 border-gray-100 rounded-2xl hover:shadow-2xl transition-all cursor-pointer group overflow-hidden hover:border-blue-300"
              onClick={() => onSelectLab(lab)}
            >
              <div className={`h-56 ${lab.thumbnail} flex items-center justify-center relative overflow-hidden`}>
                <Icons.VR className="w-24 h-24 text-white opacity-20 group-hover:scale-150 transition-transform duration-700" />
                {lab.type === "premium" && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-xs font-bold shadow-xl">
                    PREMIUM
                  </div>
                )}
                {lab.type === "free" && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-xl">
                    FREE
                  </div>
                )}
                <div className="absolute bottom-4 left-4 flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Icons.Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-white text-sm font-semibold">{lab.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 line-clamp-1 flex-1">{lab.title}</h3>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Icons.Heart className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{lab.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Icons.Clock className="w-4 h-4" />
                      <span>{lab.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icons.Users className="w-4 h-4" />
                      <span>{lab.students.toLocaleString()}</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    lab.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                    lab.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {lab.difficulty}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">By {lab.teacher}</p>
                    {lab.type === "premium" ? (
                      <span className="text-2xl font-bold text-purple-600">{lab.price.toLocaleString()} DA</span>
                    ) : (
                      <span className="text-green-600 font-bold text-lg">FREE</span>
                    )}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      onSelectLab(lab)
                    }}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center space-x-2 ${
                      lab.type === "premium"
                        ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl"
                        : "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl"
                    }`}
                  >
                    <Icons.ShoppingCart className="w-4 h-4" />
                    <span>{lab.type === "premium" ? "Purchase" : "Enroll Free"}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ============================================
// LAB SESSION PAGE
// ============================================
const LabSessionPage = ({ lab, onClose, onViewChange }) => {
  const [progress, setProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showChat, setShowChat] = useState(false)

  if (!lab) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <button
              onClick={onClose}
              className="flex items-center space-x-2 text-gray-300 hover:text-white mb-2"
            >
              <Icons.ChevronRight className="w-5 h-5 rotate-180" />
              <span>Back to Dashboard</span>
            </button>
            <h1 className="text-3xl font-bold">{lab.title}</h1>
            <p className="text-gray-400 mt-1">{lab.description}</p>
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main XR Viewer */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-3xl overflow-hidden shadow-2xl border border-gray-700">
              <div className="aspect-video bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center relative">
                {/* XR Viewer Placeholder */}
                <div className="text-center">
                  <Icons.VR className="w-32 h-32 text-white/30 mx-auto mb-4" />
                  <p className="text-white/60 text-lg">XR Lab Environment</p>
                  <p className="text-white/40 text-sm mt-2">Interactive 3D Lab Simulation</p>
                </div>
                
                {/* Play Button Overlay */}
                {!isPlaying && (
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm"
                  >
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <Icons.Play className="w-10 h-10 text-white ml-1" />
                    </div>
                  </button>
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
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Lab Info Panel */}
            <div className="bg-gray-800/50 rounded-3xl p-6 mt-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-4">Lab Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Duration</p>
                  <p className="font-semibold">{lab.duration}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Difficulty</p>
                  <p className="font-semibold">{lab.difficulty}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Category</p>
                  <p className="font-semibold">{lab.category}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Instructor</p>
                  <p className="font-semibold">{lab.teacher}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress Tracker */}
            <div className="bg-gray-800/50 rounded-3xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-4">Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Overall Progress</span>
                    <span className="font-semibold">{progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full transition-all"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="space-y-2">
                  {['Introduction', 'Main Experiment', 'Analysis', 'Conclusion'].map((task, idx) => (
                    <div key={idx} className="flex items-center space-x-3 p-3 bg-gray-700/50 rounded-xl">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        idx * 25 < progress ? 'bg-green-500' : 'bg-gray-600'
                      }`}>
                        {idx * 25 < progress ? (
                          <Icons.Check className="w-4 h-4 text-white" />
                        ) : (
                          <div className="w-2 h-2 bg-gray-400 rounded-full" />
                        )}
                      </div>
                      <span className="flex-1 text-sm">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="bg-gray-800/50 rounded-3xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-4">Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-colors">
                  <Icons.MessageCircle className="w-5 h-5" />
                  <span>Ask Teacher</span>
                </button>
                <button className="w-full bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-colors">
                  <Icons.FileText className="w-5 h-5" />
                  <span>Submit Report</span>
                </button>
                <button className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-colors">
                  <Icons.Award className="w-5 h-5" />
                  <span>View Badges</span>
                </button>
              </div>
            </div>

            {/* Badges */}
            <div className="bg-gradient-to-br from-yellow-600 to-orange-600 rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-4">Earned Badges</h3>
              <div className="grid grid-cols-2 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                    <Icons.Award className="w-8 h-8 text-white mx-auto mb-2" />
                    <p className="text-white text-xs font-semibold">Badge {i}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Panel */}
      {showChat && (
        <div className="fixed right-0 top-0 h-full w-96 bg-gray-800 border-l border-gray-700 shadow-2xl z-50 flex flex-col">
          <div className="p-6 border-b border-gray-700 flex items-center justify-between">
            <h3 className="text-xl font-bold">Chat with Teacher</h3>
            <button onClick={() => setShowChat(false)} className="p-2 hover:bg-gray-700 rounded-lg">
              <Icons.X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            <div className="bg-gray-700 rounded-xl p-4">
              <p className="text-sm">Hello! How can I help you with this lab?</p>
              <p className="text-xs text-gray-400 mt-1">Dr. {lab.teacher}</p>
            </div>
          </div>
          <div className="p-6 border-t border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors">
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
// PAYMENT MODAL
// ============================================
const PaymentModal = ({ lab, onClose, onSuccess }) => {
  const [paymentMethod, setPaymentMethod] = useState('ccp')
  const [cardNumber, setCardNumber] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  if (!lab) return null

  const handlePayment = () => {
    // Simulate payment processing
    setTimeout(() => {
      setShowSuccess(true)
      setTimeout(() => {
        onSuccess()
        onClose()
      }, 2000)
    }, 1500)
  }

  if (showSuccess) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icons.CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h2>
          <p className="text-gray-600 mb-6">You now have access to {lab.title}</p>
          <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
          <h2 className="text-2xl font-bold text-gray-900">Complete Purchase</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Icons.X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  placeholder="Enter your Edahabia card number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          )}

          {/* Security Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 flex items-start space-x-3">
            <Icons.Shield className="w-5 h-5 text-blue-600 mt-0.5" />
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
              onClick={handlePayment}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Complete Purchase
            </button>
            <p className="text-center text-sm text-gray-500 mt-4">
              By completing this purchase, you agree to our Terms of Service
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// TEACHER DASHBOARD
// ============================================
const TeacherDashboard = ({ userData, onViewChange }) => {
  const teacherStats = {
    courses: 6,
    students: 1242,
    revenue: 145600,
    rating: 4.7,
  }

  const recentStudents = [
    { name: "Ahmed Benali", course: "5G Networks", progress: 85 },
    { name: "Fatima Zohra", course: "Circuit Analysis", progress: 92 },
    { name: "Mohamed Larbi", course: "5G Networks", progress: 78 }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 rounded-3xl p-8 text-white mb-8 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          <div className="relative z-10">
            <h1 className="text-4xl lg:text-5xl font-bold mb-3">Educator Dashboard</h1>
            <p className="text-purple-100 text-lg">Welcome back, {userData.name} from {userData.university}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Courses Created</p>
                <p className="text-3xl font-bold text-gray-900">{teacherStats.courses}</p>
              </div>
              <div className="p-4 rounded-2xl bg-purple-100">
                <Icons.Book className="w-8 h-8 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Total Students</p>
                <p className="text-3xl font-bold text-gray-900">{teacherStats.students.toLocaleString()}</p>
              </div>
              <div className="p-4 rounded-2xl bg-green-100">
                <Icons.Users className="w-8 h-8 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Total Revenue</p>
                <p className="text-3xl font-bold text-gray-900">{teacherStats.revenue.toLocaleString()} DA</p>
              </div>
              <div className="p-4 rounded-2xl bg-yellow-100">
                <Icons.TrendingUp className="w-8 h-8 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Average Rating</p>
                <p className="text-3xl font-bold text-gray-900">{teacherStats.rating}</p>
              </div>
              <div className="p-4 rounded-2xl bg-blue-100">
                <Icons.Star className="w-8 h-8 text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Student Activity</h2>
            <div className="space-y-4">
              {recentStudents.map((student, index) => (
                <div key={index} className="flex items-center justify-between p-5 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-md transition-all">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center">
                      <Icons.User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{student.name}</p>
                      <p className="text-sm text-gray-600">{student.course}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600 text-lg">{student.progress}%</p>
                    <p className="text-xs text-gray-500">Progress</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button 
                  onClick={() => onViewChange('creator')}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-4 px-4 rounded-xl transition-all flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl"
                >
                  <Icons.Plus className="w-5 h-5" />
                  <span>Create New Lab</span>
                </button>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-4 rounded-xl transition-colors flex items-center justify-center space-x-3">
                  <Icons.Users className="w-5 h-5" />
                  <span>View Students</span>
                </button>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-4 rounded-xl transition-colors flex items-center justify-center space-x-3">
                  <Icons.ChartBar className="w-5 h-5" />
                  <span>View Analytics</span>
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-3xl p-6 text-white shadow-xl">
              <h3 className="font-semibold mb-4 text-lg">Teaching Performance</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Student Satisfaction</span>
                  <span className="font-bold text-lg">94%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Completion Rate</span>
                  <span className="font-bold text-lg">87%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Avg. Course Rating</span>
                  <span className="font-bold text-lg">{teacherStats.rating}/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// TEACHER LAB CREATOR
// ============================================
const LabCreator = ({ onViewChange }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    difficulty: '',
    type: 'free',
    duration: '',
    price: 0
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Lab submitted for approval!')
    onViewChange('dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <button
            onClick={() => onViewChange('dashboard')}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-4"
          >
            <Icons.ChevronRight className="w-5 h-5 rotate-180" />
            <span>Back to Dashboard</span>
          </button>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Create New Lab</h1>
          <p className="text-gray-600">Design an immersive XR learning experience</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Basic Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Lab Title</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="e.g., Advanced 5G Network Architecture"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Describe the lab content and learning objectives..."
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Lab Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select category</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Medical">Medical</option>
                    <option value="Telecom">Telecom</option>
                    <option value="Science">Science</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
                  <select
                    required
                    value={formData.difficulty}
                    onChange={(e) => setFormData({...formData, difficulty: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select difficulty</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                  <input
                    type="text"
                    required
                    value={formData.duration}
                    onChange={(e) => setFormData({...formData, duration: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="e.g., 2h 30m"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Lab Type</label>
                  <select
                    required
                    value={formData.type}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="free">Free (Requires Approval)</option>
                    <option value="premium">Premium</option>
                  </select>
                </div>
                {formData.type === 'premium' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price (DA)</label>
                    <input
                      type="number"
                      required
                      min="0"
                      value={formData.price}
                      onChange={(e) => setFormData({...formData, price: parseInt(e.target.value)})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                )}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Lab Content</h2>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-purple-400 transition-colors">
                  <Icons.Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Upload 3D Lab Models / AR Content</p>
                  <p className="text-sm text-gray-500">Supported formats: .glb, .gltf, .fbx</p>
                  <button type="button" className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    Choose Files
                  </button>
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-purple-400 transition-colors">
                  <Icons.Video className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Upload Video Instructions</p>
                  <p className="text-sm text-gray-500">MP4, WebM, or MOV format</p>
                  <button type="button" className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    Choose Files
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={() => onViewChange('dashboard')}
                className="px-6 py-3 border border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
              >
                {formData.type === 'free' ? 'Submit for Approval' : 'Publish Lab'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

// ============================================
// MINISTRY DASHBOARD
// ============================================
const MinistryDashboard = ({ userData, onViewChange }) => {
  const nationalStats = {
    students: 28450,
    teachers: 1234,
    institutions: 156,
    labs: 456,
  }

  const regionalPerformance = [
    { region: "Algiers", students: 12450, completion: 89, growth: "+12%" },
    { region: "Oran", students: 8230, completion: 85, growth: "+8%" },
    { region: "Constantine", students: 5120, completion: 82, growth: "+15%" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-orange-600 via-orange-700 to-amber-600 rounded-3xl p-8 text-white mb-8 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          <div className="relative z-10">
            <h1 className="text-4xl lg:text-5xl font-bold mb-3">Ministry Oversight Dashboard</h1>
            <p className="text-orange-100 text-lg">National Education Platform Analytics - {userData.department}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Total Students</p>
                <p className="text-3xl font-bold text-gray-900">{nationalStats.students.toLocaleString()}</p>
              </div>
              <div className="p-4 rounded-2xl bg-blue-100">
                <Icons.GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Educators</p>
                <p className="text-3xl font-bold text-gray-900">{nationalStats.teachers.toLocaleString()}</p>
              </div>
              <div className="p-4 rounded-2xl bg-purple-100">
                <Icons.Users className="w-8 h-8 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Institutions</p>
                <p className="text-3xl font-bold text-gray-900">{nationalStats.institutions}</p>
              </div>
              <div className="p-4 rounded-2xl bg-green-100">
                <Icons.Building className="w-8 h-8 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">XR Laboratories</p>
                <p className="text-3xl font-bold text-gray-900">{nationalStats.labs}</p>
              </div>
              <div className="p-4 rounded-2xl bg-orange-100">
                <Icons.Science className="w-8 h-8 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Regional Performance</h2>
            <div className="space-y-4">
              {regionalPerformance.map((region, index) => (
                <div key={index} className="flex items-center justify-between p-5 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-md transition-all">
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">{region.region}</p>
                    <p className="text-sm text-gray-600">{region.students.toLocaleString()} students</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600 text-lg">{region.completion}%</p>
                    <p className="text-sm text-green-600">{region.growth}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Platform Overview</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-600">Platform Uptime</span>
                  <span className="font-bold text-green-600 text-lg">99.8%</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-600">Active Sessions</span>
                  <span className="font-bold text-gray-900 text-lg">2,847</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-600">Completion Rate</span>
                  <span className="font-bold text-green-600 text-lg">87%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">New Registrations</span>
                  <span className="font-bold text-blue-600 text-lg">+1,234</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-6 text-white shadow-xl">
              <h3 className="font-semibold mb-4 text-lg">National Impact</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Students Reached</span>
                  <span className="font-bold text-lg">28K+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Institutions Active</span>
                  <span className="font-bold text-lg">156</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Skills Developed</span>
                  <span className="font-bold text-lg">45K+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// MINISTRY APPROVAL PAGE
// ============================================
const ApprovalPage = ({ onViewChange }) => {
  const [pendingLabs, setPendingLabs] = useState([
    {
      id: 1,
      title: "New Chemistry Lab",
      teacher: "Dr. Ahmed",
      submitted: "2 days ago",
      category: "Science"
    },
    {
      id: 2,
      title: "Physics Simulation Lab",
      teacher: "Prof. Fatima",
      submitted: "5 days ago",
      category: "Engineering"
    }
  ])

  const handleApproval = (id, approved) => {
    setPendingLabs(pendingLabs.filter(lab => lab.id !== id))
    alert(approved ? 'Lab approved!' : 'Lab rejected')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <button
            onClick={() => onViewChange('dashboard')}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-4"
          >
            <Icons.ChevronRight className="w-5 h-5 rotate-180" />
            <span>Back to Dashboard</span>
          </button>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Lab Approval Queue</h1>
          <p className="text-gray-600">Review and approve free labs submitted by teachers</p>
        </div>

        <div className="space-y-6">
          {pendingLabs.map((lab) => (
            <div key={lab.id} className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">{lab.title}</h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {lab.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">Submitted by <span className="font-semibold">{lab.teacher}</span></p>
                  <p className="text-sm text-gray-500">{lab.submitted}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleApproval(lab.id, false)}
                    className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold transition-colors flex items-center space-x-2"
                  >
                    <Icons.X className="w-5 h-5" />
                    <span>Reject</span>
                  </button>
                  <button
                    onClick={() => handleApproval(lab.id, true)}
                    className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition-colors flex items-center space-x-2"
                  >
                    <Icons.Check className="w-5 h-5" />
                    <span>Approve</span>
                  </button>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-2">
                  <Icons.Eye className="w-5 h-5" />
                  <span>Preview Lab</span>
                </button>
              </div>
            </div>
          ))}
          {pendingLabs.length === 0 && (
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-12 text-center">
              <Icons.CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">All Clear!</h3>
              <p className="text-gray-600">No pending lab approvals</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ============================================
// DJEZZY DASHBOARD
// ============================================
const DjezzyDashboard = ({ userData }) => {
  const networkStats = {
    throughput: "12.4 Gbps",
    latency: "3.2 ms",
    activeSessions: 2341,
    coverage: "96%"
  }

  const networkHealth = [
    { metric: "5G Network Availability", value: "99.9%", status: "optimal" },
    { metric: "XR Streaming Quality", value: "98.7%", status: "optimal" },
    { metric: "Data Center Load", value: "72%", status: "good" },
    { metric: "Edge Computing Nodes", value: "45/50", status: "good" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-red-600 via-red-700 to-rose-600 rounded-3xl p-8 text-white mb-8 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          <div className="relative z-10">
            <h1 className="text-4xl lg:text-5xl font-bold mb-3">5G Network Partner Dashboard</h1>
            <p className="text-red-100 text-lg">Welcome, {userData.name} - {userData.department}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Network Throughput</p>
                <p className="text-3xl font-bold text-gray-900">{networkStats.throughput}</p>
              </div>
              <div className="p-4 rounded-2xl bg-blue-100">
                <Icons.Wifi className="w-8 h-8 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Average Latency</p>
                <p className="text-3xl font-bold text-gray-900">{networkStats.latency}</p>
              </div>
              <div className="p-4 rounded-2xl bg-green-100">
                <Icons.TrendingUp className="w-8 h-8 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Active XR Sessions</p>
                <p className="text-3xl font-bold text-gray-900">{networkStats.activeSessions.toLocaleString()}</p>
              </div>
              <div className="p-4 rounded-2xl bg-purple-100">
                <Icons.Users className="w-8 h-8 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">5G Coverage</p>
                <p className="text-3xl font-bold text-gray-900">{networkStats.coverage}</p>
              </div>
              <div className="p-4 rounded-2xl bg-orange-100">
                <Icons.ChartBar className="w-8 h-8 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Network Health Status</h2>
            <div className="space-y-4">
              {networkHealth.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-5 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-md transition-all">
                  <div>
                    <p className="font-semibold text-gray-900">{item.metric}</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-bold text-lg ${
                      item.status === 'optimal' ? 'text-green-600' : 'text-yellow-600'
                    }`}>
                      {item.value}
                    </p>
                    <p className={`text-xs ${
                      item.status === 'optimal' ? 'text-green-600' : 'text-yellow-600'
                    }`}>
                      {item.status === 'optimal' ? 'Optimal' : 'Good'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Overview</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-600">XR Streaming Service</span>
                  <span className="font-bold text-green-600 text-lg">Operational</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-600">Real-time Collaboration</span>
                  <span className="font-bold text-green-600 text-lg">Operational</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-600">Data Centers</span>
                  <span className="font-bold text-green-600 text-lg">Optimal</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Edge Computing</span>
                  <span className="font-bold text-green-600 text-lg">Operational</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-6 text-white shadow-xl">
              <h3 className="font-semibold mb-4 text-lg">5G Education Impact</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Schools Connected</span>
                  <span className="font-bold text-lg">156</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Students Served</span>
                  <span className="font-bold text-lg">28K+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Data Transferred</span>
                  <span className="font-bold text-lg">45 TB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// ADMIN DASHBOARD
// ============================================
const AdminDashboard = ({ userData }) => {
  const platformStats = {
    totalUsers: 28543,
    activeLabs: 456,
    institutions: 156,
    revenue: "4.2M DA"
  }

  const systemAlerts = [
    { type: "info", message: "System backup completed successfully", time: "2 hours ago" },
    { type: "warning", message: "High traffic detected on lab servers", time: "5 hours ago" },
    { type: "success", message: "New update deployed successfully", time: "1 day ago" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-green-600 via-green-700 to-emerald-600 rounded-3xl p-8 text-white mb-8 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          <div className="relative z-10">
            <h1 className="text-4xl lg:text-5xl font-bold mb-3">Platform Administration</h1>
            <p className="text-green-100 text-lg">Welcome, {userData.name} - {userData.department}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Total Users</p>
                <p className="text-3xl font-bold text-gray-900">{platformStats.totalUsers.toLocaleString()}</p>
              </div>
              <div className="p-4 rounded-2xl bg-blue-100">
                <Icons.Users className="w-8 h-8 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Active Labs</p>
                <p className="text-3xl font-bold text-gray-900">{platformStats.activeLabs}</p>
              </div>
              <div className="p-4 rounded-2xl bg-purple-100">
                <Icons.Science className="w-8 h-8 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Institutions</p>
                <p className="text-3xl font-bold text-gray-900">{platformStats.institutions}</p>
              </div>
              <div className="p-4 rounded-2xl bg-green-100">
                <Icons.Building className="w-8 h-8 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Platform Revenue</p>
                <p className="text-3xl font-bold text-gray-900">{platformStats.revenue}</p>
              </div>
              <div className="p-4 rounded-2xl bg-yellow-100">
                <Icons.TrendingUp className="w-8 h-8 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">System Alerts</h2>
            <div className="space-y-4">
              {systemAlerts.map((alert, index) => (
                <div key={index} className={`flex items-center justify-between p-5 rounded-2xl border ${
                  alert.type === 'warning' ? 'bg-yellow-50 border-yellow-200' :
                  alert.type === 'success' ? 'bg-green-50 border-green-200' :
                  'bg-blue-50 border-blue-200'
                }`}>
                  <div>
                    <p className="font-semibold text-gray-900">{alert.message}</p>
                    <p className="text-sm text-gray-600 mt-1">{alert.time}</p>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${
                    alert.type === 'warning' ? 'bg-yellow-500' :
                    alert.type === 'success' ? 'bg-green-500' :
                    'bg-blue-500'
                  }`}></div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-4 rounded-xl transition-colors flex items-center justify-center space-x-3">
                  <Icons.Users className="w-5 h-5" />
                  <span>User Management</span>
                </button>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-4 rounded-xl transition-colors flex items-center justify-center space-x-3">
                  <Icons.Settings className="w-5 h-5" />
                  <span>System Settings</span>
                </button>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-4 rounded-xl transition-colors flex items-center justify-center space-x-3">
                  <Icons.ChartBar className="w-5 h-5" />
                  <span>Platform Analytics</span>
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl p-6 text-white shadow-xl">
              <h3 className="font-semibold mb-4 text-lg">System Status</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Platform Uptime</span>
                  <span className="font-bold text-lg">99.9%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Database</span>
                  <span className="font-bold text-green-300 text-lg">Healthy</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>API Services</span>
                  <span className="font-bold text-green-300 text-lg">Operational</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Security Status</span>
                  <span className="font-bold text-green-300 text-lg">Secure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// STUDENT - MY LABS PAGE
// ============================================
const StudentLabsPage = ({ onSelectLab }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Labs</h1>
            <p className="text-gray-600">All the labs you have access to</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {labsData.map((lab) => (
            <div
              key={lab.id}
              className="bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all cursor-pointer overflow-hidden"
              onClick={() => onSelectLab(lab)}
            >
              <div className={`h-36 ${lab.thumbnail} flex items-center justify-center`}>
                <Icons.VR className="w-12 h-12 text-white opacity-40" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">{lab.title}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{lab.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <span>{lab.duration}</span>
                  <span>{lab.teacher}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      lab.type === 'premium'
                        ? 'bg-purple-50 text-purple-700'
                        : 'bg-green-50 text-green-700'
                    }`}
                  >
                    {lab.type === 'premium' ? 'Premium' : 'Free'}
                  </span>
                  <button
                    className="px-3 py-1.5 text-xs bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Open Lab
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ============================================
// STUDENT - PROFILE PAGE
// ============================================
const StudentProfilePage = ({ userData }) => {
  const stats = {
    completed: 12,
    badges: 8,
    hours: 48,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center space-x-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-2xl font-bold text-white">
              {userData.name.charAt(0)}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{userData.name}</h1>
              <p className="text-gray-600 text-sm">
                {userData.university} • {userData.department}
              </p>
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <button className="px-4 py-2 text-sm font-semibold border border-gray-300 rounded-xl hover:bg-gray-50">
              Edit Profile
            </button>
            <button className="px-4 py-2 text-sm font-semibold bg-blue-600 text-white rounded-xl hover:bg-blue-700">
              Download Transcript
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5">
            <p className="text-sm text-gray-500 mb-1">Completed Labs</p>
            <p className="text-2xl font-bold text-gray-900">{stats.completed}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5">
            <p className="text-sm text-gray-500 mb-1">Skill Badges</p>
            <p className="text-2xl font-bold text-gray-900">{stats.badges}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5">
            <p className="text-sm text-gray-500 mb-1">Time Spent</p>
            <p className="text-2xl font-bold text-gray-900">{stats.hours}h</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Certificates & Badges</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="border border-gray-100 rounded-2xl p-4 text-center hover:shadow-md transition-shadow"
              >
                <Icons.Award className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-800">Badge {i}</p>
                <p className="text-xs text-gray-500 mt-1">XR Learning</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// TEACHER - LIVE SESSIONS PAGE
// ============================================
const TeacherSessionsPage = () => {
  const sessions = [
    {
      id: 1,
      title: '5G Network Lab - Group A',
      date: 'Tomorrow, 10:00 AM',
      students: 32,
      status: 'Scheduled',
    },
    {
      id: 2,
      title: 'Circuit Analysis Lab',
      date: 'Friday, 2:00 PM',
      students: 24,
      status: 'Scheduled',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Live XR Sessions</h1>
            <p className="text-gray-600">Manage and start your live XR teaching sessions</p>
          </div>
          <button className="px-5 py-2.5 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 flex items-center space-x-2">
            <Icons.Video className="w-4 h-4" />
            <span>Schedule New Session</span>
          </button>
        </div>

        <div className="space-y-4">
          {sessions.map((session) => (
            <div
              key={session.id}
              className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 flex items-center justify-between"
            >
              <div>
                <h3 className="font-semibold text-gray-900">{session.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{session.date}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {session.students} students registered
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 rounded-full text-xs bg-purple-50 text-purple-700 font-medium">
                  {session.status}
                </span>
                <button className="px-4 py-2 text-sm bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700">
                  Start Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ============================================
// TEACHER - ANALYTICS PAGE
// ============================================
const TeacherAnalyticsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Teaching Analytics</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5">
            <p className="text-sm text-gray-500 mb-1">Average Completion Rate</p>
            <p className="text-2xl font-bold text-gray-900">87%</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5">
            <p className="text-sm text-gray-500 mb-1">Average Rating</p>
            <p className="text-2xl font-bold text-gray-900">4.7 / 5</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5">
            <p className="text-sm text-gray-500 mb-1">Active Students</p>
            <p className="text-2xl font-bold text-gray-900">1,242</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Engagement Over Time</h2>
          <div className="h-48 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl border border-dashed border-purple-200 flex items-center justify-center text-purple-400 text-sm">
            Analytics chart placeholder
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// MINISTRY - ANALYTICS & REPORTS
// ============================================
const MinistryAnalyticsPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50/30">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">National Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5">
          <p className="text-sm text-gray-500 mb-1">Total Students</p>
          <p className="text-2xl font-bold text-gray-900">28,450</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5">
          <p className="text-sm text-gray-500 mb-1">Institutions</p>
          <p className="text-2xl font-bold text-gray-900">156</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5">
          <p className="text-sm text-gray-500 mb-1">XR Labs</p>
          <p className="text-2xl font-bold text-gray-900">456</p>
        </div>
      </div>
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Skill Heatmap</h2>
        <div className="h-48 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl border border-dashed border-orange-200 flex items-center justify-center text-orange-400 text-sm">
          Heatmap visualization placeholder
        </div>
      </div>
    </div>
  </div>
)

const MinistryReportsPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50/30">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Reports</h1>
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Downloadable Reports</h2>
        <div className="space-y-3">
          {[
            'Monthly Adoption Report',
            'Regional Performance Report',
            'XR Lab Utilization Report',
          ].map((title, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-4 border border-gray-100 rounded-2xl hover:bg-gray-50"
            >
              <div className="flex items-center space-x-3">
                <Icons.FileText className="w-5 h-5 text-orange-500" />
                <p className="font-semibold text-gray-900">{title}</p>
              </div>
              <button className="px-4 py-2 text-sm bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600">
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

// ============================================
// DJEZZY - MONITORING & PACKAGES
// ============================================
const NetworkMonitoringPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50/30">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Network Monitoring</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Real-time Metrics</h2>
          <div className="h-40 bg-gradient-to-r from-red-50 to-rose-50 rounded-2xl border border-dashed border-red-200 flex items-center justify-center text-red-400 text-sm">
            Live metrics visualization placeholder
          </div>
        </div>
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Alerts</h2>
          <p className="text-sm text-gray-500">No critical alerts at the moment.</p>
        </div>
      </div>
    </div>
  </div>
)

const NetworkPackagesPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50/30">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Edu 5G Packages</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: 'Edu Basic', price: '999 DA', data: '50 GB', speed: 'Up to 100 Mbps' },
          { name: 'Edu Plus', price: '1,999 DA', data: '150 GB', speed: 'Up to 300 Mbps' },
          { name: 'Edu Max', price: '3,499 DA', data: 'Unlimited', speed: 'Up to 1 Gbps' },
        ].map((p) => (
          <div
            key={p.name}
            className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">{p.name}</h2>
              <p className="text-3xl font-bold text-red-600 mb-4">{p.price}</p>
              <p className="text-sm text-gray-600 mb-1">Data: {p.data}</p>
              <p className="text-sm text-gray-600">Speed: {p.speed}</p>
            </div>
            <button className="mt-4 px-4 py-2 text-sm bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
)

// ============================================
// ADMIN - USERS & SYSTEM
// ============================================
const AdminUsersPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50/30">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">User Management</h1>
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Users</h2>
          <button className="px-4 py-2 text-sm bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700">
            Add User
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-left text-gray-500">
                <th className="py-2">Name</th>
                <th className="py-2">Role</th>
                <th className="py-2">Institution</th>
                <th className="py-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="py-2">Ahmed Benali</td>
                <td className="py-2">Student</td>
                <td className="py-2">University of Algiers</td>
                <td className="py-2 text-right">
                  <button className="text-xs text-blue-600 hover:underline mr-2">Edit</button>
                  <button className="text-xs text-red-600 hover:underline">Remove</button>
                </td>
              </tr>
              <tr>
                <td className="py-2">Dr. Benzema</td>
                <td className="py-2">Teacher</td>
                <td className="py-2">University of Algiers</td>
                <td className="py-2 text-right">
                  <button className="text-xs text-blue-600 hover:underline mr-2">Edit</button>
                  <button className="text-xs text-red-600 hover:underline">Remove</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
)

const AdminSystemPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50/30">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">System Settings</h1>
      <div className="space-y-4">
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Maintenance Mode</h2>
          <p className="text-sm text-gray-600 mb-3">
            Temporarily disable access to the platform for maintenance operations.
          </p>
          <button className="px-4 py-2 text-sm bg-gray-900 text-white rounded-xl font-semibold hover:bg-black">
            Enable Maintenance Mode
          </button>
        </div>
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Security</h2>
          <p className="text-sm text-gray-600 mb-3">
            Manage platform-wide security settings and access policies.
          </p>
          <button className="px-4 py-2 text-sm bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700">
            Review Security Settings
          </button>
        </div>
      </div>
    </div>
  </div>
)

// ============================================
// LOGIN COMPONENT
// ============================================
const LoginPage = ({ onLogin }) => {
  const [selectedRole, setSelectedRole] = useState('student')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const roleData = {
    student: {
      name: 'Ahmed Benali',
      university: 'University of Algiers',
      department: 'Engineering',
      icon: Icons.GraduationCap,
      color: 'from-blue-600 to-cyan-600',
      description: 'Access free and premium labs'
    },
    teacher: {
      name: 'Dr. Benzema',
      university: 'University of Algiers',
      department: 'Telecommunications',
      icon: Icons.Book,
      color: 'from-purple-600 to-indigo-600',
      description: 'Create and manage XR labs'
    },
    ministry: {
      name: 'Ministry Admin',
      university: 'MESRS',
      department: 'Education Oversight',
      icon: Icons.Building,
      color: 'from-orange-600 to-amber-600',
      description: 'National platform oversight'
    },
    djezzy: {
      name: 'Network Engineer',
      university: 'Djezzy',
      department: '5G Network Operations',
      icon: Icons.Wifi,
      color: 'from-red-600 to-rose-600',
      description: 'Monitor 5G network performance'
    },
    admin: {
      name: 'Platform Admin',
      university: 'EduXR Platform',
      department: 'System Administration',
      icon: Icons.Settings,
      color: 'from-green-600 to-emerald-600',
      description: 'Platform management'
    }
  }

  const handleLogin = (e) => {
    e.preventDefault()
    const data = roleData[selectedRole]
    onLogin(selectedRole, {
      name: data.name,
      university: data.university,
      department: data.department
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl">
              <Icons.VR className="w-10 h-10 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold text-white">EduXR</h1>
              <p className="text-blue-200 text-sm">Immersive Learning Platform</p>
            </div>
          </div>
          <p className="text-gray-300 text-lg">Welcome to the future of education</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Role Selection */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Select Your Role</h2>
            <div className="space-y-3">
              {Object.entries(roleData).map(([role, data]) => {
                const Icon = data.icon
                return (
                  <button
                    key={role}
                    onClick={() => setSelectedRole(role)}
                    className={`w-full p-4 rounded-2xl border-2 transition-all text-left ${
                      selectedRole === role
                        ? `bg-gradient-to-r ${data.color} border-transparent text-white shadow-xl scale-105`
                        : 'bg-white/5 border-white/20 text-gray-200 hover:bg-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl ${
                        selectedRole === role ? 'bg-white/20' : 'bg-white/10'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg capitalize">{role}</h3>
                        <p className="text-sm opacity-80">{data.description}</p>
                      </div>
                      {selectedRole === role && (
                        <Icons.Check className="w-5 h-5" />
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Login Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign In</h2>
            <p className="text-gray-600 mb-8">Access your {selectedRole} dashboard</p>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={`${selectedRole}@eduxr.dz`}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className={`w-full py-4 bg-gradient-to-r ${roleData[selectedRole].color} text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02]`}
              >
                Sign In as {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-center text-sm text-gray-600">
                Demo Mode: Use any email and password to login
              </p>
            </div>
          </div>
        </div>

        {/* Quick Login Buttons */}
        <div className="mt-8 text-center">
          <p className="text-gray-300 mb-4">Quick Access (Demo):</p>
          <div className="flex flex-wrap justify-center gap-3">
            {Object.keys(roleData).map((role) => (
              <button
                key={role}
                onClick={() => {
                  setSelectedRole(role)
                  setEmail(`${role}@eduxr.dz`)
                  setPassword('demo123')
                }}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium transition-colors border border-white/20"
              >
                {role.charAt(0).toUpperCase() + role.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// MAIN APP COMPONENT
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
        } else if (userRole === 'ministry') {
          return <MinistryDashboard userData={userData} onViewChange={setCurrentView} />
        } else if (userRole === 'djezzy') {
          return <DjezzyDashboard userData={userData} />
        } else if (userRole === 'admin') {
          return <AdminDashboard userData={userData} />
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
          return <StudentProfilePage userData={userData} />
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
      case 'packages':
        if (userRole === 'djezzy') {
          return <NetworkPackagesPage />
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

  // Show login page if not authenticated
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

