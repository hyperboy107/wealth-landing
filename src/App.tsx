import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Wallet,
  Receipt,
  PieChart,
  Bell,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  CreditCard,
  TrendingUp,
  Shield
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart as RechartsePieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=2070",
      alt: "Finance Dashboard"
    },
    {
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
      alt: "Financial Planning"
    },
    {
      url: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&q=80&w=2070",
      alt: "Mobile Banking"
    },
    {
      url: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=2070",
      alt: "Investment Growth"
    }
  ];

  const blogs = [
  {
    title: "5 Tips for Budgeting Like a Pro",
    description: "Learn how to master your finances with these simple budgeting tips.",
    image: "https://source.unsplash.com/featured/?budget",
  },
  {
    title: "Investment Strategies 101",
    description: "Explore beginner-friendly strategies to grow your wealth.",
    image: "https://source.unsplash.com/featured/?investment",
  },
  {
    title: "Saving for the Future",
    description: "Discover smart ways to save and secure your financial future.",
    image: "https://source.unsplash.com/featured/?saving",
  },
  {
    title: "Understanding Credit Scores",
    description: "Find out how credit scores work and how to improve yours.",
    image: "https://source.unsplash.com/featured/?credit",
  },
];

  const features = [
    {
      icon: <Receipt className="w-6 h-6" />,
      title: "Bill Scanning",
      description: "Easily scan and track all your bills automatically"
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: "Expense Analytics",
      description: "Get detailed insights into your spending patterns"
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Smart Alerts",
      description: "Receive notifications for bills and unusual spending"
    }
  ];

  const pricing = [
    {
      title: "Basic",
      price: "Free",
      features: ["Bill scanning", "Basic analytics", "Monthly reports"],
    },
    {
      title: "Pro",
      price: "$9.99/mo",
      features: ["Everything in Basic", "Advanced analytics", "Custom alerts", "Priority support"],
    },
    {
      title: "Enterprise",
      price: "Custom",
      features: ["Everything in Pro", "API access", "Custom integration", "Dedicated support"],
    }
  ];

  // Chart data
  const pieChartData = [
    { name: "Housing", value: 35, color: "#8b5cf6" },
    { name: "Food", value: 25, color: "#a78bfa" },
    { name: "Transport", value: 20, color: "#c4b5fd" },
    { name: "Entertainment", value: 15, color: "#ddd6fe" },
    { name: "Others", value: 5, color: "#ede9fe" },
  ];

  const barChartData = [
    { month: "Jan", savings: 650 },
    { month: "Feb", savings: 450 },
    { month: "Mar", savings: 750 },
    { month: "Apr", savings: 550 },
    { month: "May", savings: 850 },
    { month: "Jun", savings: 700 },
  ];

  const lineChartData = [
    { month: "Jan", value: 1000 },
    { month: "Feb", value: 1500 },
    { month: "Mar", value: 1300 },
    { month: "Apr", value: 1800 },
    { month: "May", value: 1600 },
    { month: "Jun", value: 2000 },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? blogs.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === blogs.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2"
              >
                <Wallet className="w-8 h-8 text-violet-600" />
                <span className="text-xl font-bold text-gray-900">Wealth</span>
              </motion.div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#features" className="text-gray-600 hover:text-violet-600">Features</a>
                <a href="#pricing" className="text-gray-600 hover:text-violet-600">Pricing</a>
                <a href="">
                  <button className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700">
                  Get Started
                </button>
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-gray-600">Features</a>
              <a href="#pricing" className="block px-3 py-2 text-gray-600">Pricing</a>
              <button className="w-full text-left px-3 py-2 text-violet-600">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Take Control of Your <span className="text-violet-600">Finances</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Track expenses, scan bills, and get insights into your spending habits with our intelligent finance management platform.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="https://www.youtube.com/" target='_blank' rel='noopener noreferrer'>
              <button
            className="bg-violet-600 text-white px-8 py-3 rounded-lg hover:bg-violet-700 flex items-center justify-center gap-2">
              Get Started Free <ChevronRight className="w-5 h-5" />
            </button>
            </a>
            <button className="border border-violet-600 text-violet-600 px-8 py-3 rounded-lg hover:bg-violet-50" onClick={openModal}>
              Watch Demo
            </button>
            {isModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-2xl">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Demo Video</h2>
                    <button
                      className="text-gray-500 hover:text-gray-700"
                      onClick={closeModal}
                    >
                      ✖
                    </button>
                  </div>
                  <div className="relative pb-[56.25%]">
                    <iframe
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Use the correct embed link
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Demo Video"
                    ></iframe>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Image Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 relative overflow-hidden rounded-xl shadow-2xl"
        >
          <motion.div
            animate={{
              x: [0, -100 * (images.length - 1) + '%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex"
          >
            {[...images, ...images].map((image, index) => (
              <motion.div
                key={index}
                className="min-w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600">Everything you need to manage your finances in one place</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center text-violet-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that works best for you</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.title}</h3>
                <p className="text-4xl font-bold text-violet-600 mb-6">{plan.price}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <ChevronRight className="w-5 h-5 text-violet-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg ${index === 1
                    ? 'bg-violet-600 text-white hover:bg-violet-700'
                    : 'border border-violet-600 text-violet-600 hover:bg-violet-50'
                  }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visualize Your Finances</h2>
            <p className="text-xl text-gray-600">Get clear insights with beautiful, interactive charts</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pie Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Expense Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsePieChart>
                        <Pie
                          data={pieChartData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          fill="#8884d8"
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {pieChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </RechartsePieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4 space-y-2">
                    {pieChartData.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-sm">{item.name} ({item.value}%)</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Bar Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Savings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={barChartData}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="savings" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Line Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Investment Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={lineChartData}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="#8b5cf6"
                          strokeWidth={2}
                          dot={{ fill: "#8b5cf6" }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-600 mb-6">
              Track your spending, monitor savings, and watch your investments grow with our intuitive visualization tools.
            </p>
            <a href="" target='_blank'>
              <button className="bg-violet-600 text-white px-8 py-3 rounded-lg hover:bg-violet-700 inline-flex items-center gap-2">
              Start Tracking Now <ChevronRight className="w-5 h-5" />
            </button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Blogs */}
      <section className="py-12 px-4 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Learn More About Managing Your Finances</h2>
        <p className="text-gray-600">Explore our latest insights on budgeting, investing, and saving money.</p>
      </div>
      <div className="relative max-w-5xl mx-auto">
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:shadow-lg"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="flex overflow-hidden w-full">
          {blogs.map((blog, index) => (
            <Card
              key={index}
              className={`w-64 shrink-0 mx-4 transition-transform duration-300 ease-in-out ${
                index === currentIndex ? "scale-100" : "scale-75 opacity-50"
              }`}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="rounded-t-2xl h-40 w-full object-cover"
              />
              <CardHeader className="px-4 py-2">
                <h3 className="text-lg font-semibold">{blog.title}</h3>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <p className="text-gray-700 text-sm mb-4">{blog.description}</p>
                <Button variant="link" className="text-blue-500">Read MorButtone</Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:shadow-lg"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
    </div>
  );
}

export default App;