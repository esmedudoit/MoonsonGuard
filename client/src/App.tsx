import { Router, Route, Switch } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Cloud, Shield, Droplets, TrendingUp, Phone, Mail, MapPin } from "lucide-react";

function useAuth() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["/api/auth/user"],
    retry: false,
  });

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
  };
}

function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-blue-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Cloud className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">MonsoonShield</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#policies" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">Policies</a>
              <a href="#calculator" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">Calculator</a>
              <a href="#weather" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">Weather Risks</a>
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">About</a>
            </nav>
            <a 
              href="/api/login"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Login
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Revolutionary <span className="text-blue-600">Parametric Monsoon Insurance</span> for India
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Get instant payouts based on rainfall data. No lengthy claim assessments. Just fast, transparent protection against monsoon-related losses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#policies"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Explore Policies
            </a>
            <a 
              href="#calculator"
              className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Calculate Premium
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Choose Parametric Monsoon Insurance?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-blue-50 dark:bg-gray-700">
              <Droplets className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Rainfall-Triggered Payouts</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Automatic payouts when rainfall exceeds or falls below predetermined thresholds. No need for individual loss assessments.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-green-50 dark:bg-gray-700">
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Faster Claims Processing</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Receive payouts within 7 days of trigger events. No lengthy documentation or inspection processes required.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-purple-50 dark:bg-gray-700">
              <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Comprehensive Coverage</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Protect crops, property, and livestock from monsoon-related damages with state-backed reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-blue-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Proven Success Across India
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Nagaland State Success</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Nagaland's pioneering Disaster Risk Transfer Parametric Insurance Solution (DRTPS) made its first payout in May 2025 for damages during the 2024 monsoon season, demonstrating the effectiveness of parametric insurance.
              </p>
              <div className="text-sm text-blue-600 font-semibold">Partnership with Tata AIG & Swiss Re</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">SEWA Women Workers</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                SEWA's implementation of parametric insurance has successfully protected informal women workers from extreme weather impacts, providing financial security during challenging monsoon seasons.
              </p>
              <div className="text-sm text-green-600 font-semibold">Supporting "Insurance for All by 2047"</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6">Get Started Today</h3>
              <p className="text-gray-300 mb-8">
                Join thousands of Indians who have secured their future with parametric monsoon insurance. Fast, transparent, and reliable protection when you need it most.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span>1-800-MONSOON (1-800-666-7666)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span>support@monsoonshield.in</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span>Available across all Indian states</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Quick Contact</h4>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="How can we help you?"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Cloud className="h-6 w-6 text-blue-400" />
            <span className="text-lg font-semibold">MonsoonShield</span>
          </div>
          <p>&copy; 2025 MonsoonShield India. Advancing parametric insurance for climate resilience.</p>
        </div>
      </footer>
    </div>
  );
}

function Home() {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Cloud className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">MonsoonShield Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700 dark:text-gray-300">Welcome, {user?.firstName || 'User'}</span>
              <a 
                href="/api/logout"
                className="text-red-600 hover:text-red-700 font-semibold"
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Active Policies</h3>
            <p className="text-3xl font-bold text-blue-600">3</p>
            <p className="text-gray-600 dark:text-gray-400">Total coverage: ₹15,00,000</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Claims Processed</h3>
            <p className="text-3xl font-bold text-green-600">2</p>
            <p className="text-gray-600 dark:text-gray-400">Last payout: ₹50,000</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Risk Level</h3>
            <p className="text-3xl font-bold text-yellow-600">Medium</p>
            <p className="text-gray-600 dark:text-gray-400">Based on your location</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="p-4 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors">
              Browse Policies
            </button>
            <button className="p-4 bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg hover:bg-green-100 dark:hover:bg-green-800 transition-colors">
              Calculate Premium
            </button>
            <button className="p-4 bg-yellow-50 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 rounded-lg hover:bg-yellow-100 dark:hover:bg-yellow-800 transition-colors">
              Check Weather Risks
            </button>
            <button className="p-4 bg-purple-50 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-800 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">The page you're looking for doesn't exist.</p>
        <a href="/" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">
          Go Home
        </a>
      </div>
    </div>
  );
}

function App() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <Cloud className="h-12 w-12 text-blue-600 animate-pulse mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Switch>
        {isLoading || !isAuthenticated ? (
          <Route path="/" component={Landing} />
        ) : (
          <>
            <Route path="/" component={Home} />
          </>
        )}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;