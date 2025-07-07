import { Bot, Search, ArrowRight, MessageSquare, BarChart3, Github, FileText, TrendingUp, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold text-gray-900">
                <span className="text-3xl font-bold text-[#72c414]">A</span>nuba
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
                How It Works
              </a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">
                FAQ
              </a>
              <a href="https://github.com/projectprobeai" className="text-gray-600 hover:text-gray-900 transition-colors">
                GitHub
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 space-y-6">
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-gray-700">
              <Bot className="h-4 w-4" />
              Find Projects worth Investing
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Your AI-Powered Due Diligence Bot for Project Evaluation.
              <span className="block text-[#72c414]">
                for Crypto Projects
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
              Tag @ProjectProbeAI on X to get a quick trust check on any token or project. Cut through the noise with instant analysis of GitHub activity, roadmap progress, and on-chain data.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mb-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://x.com/intent/tweet?text=@AnubaAi%20is%20this%20project%20legit%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#72c414] px-8 py-4 text-lg font-medium text-white shadow-lg hover:bg-[#34c414] hover:shadow-xl transition-all"
            >
              <Twitter className="h-5 w-5" />
              Try It Now on X
              <ArrowRight className="h-5 w-5" />
            </a>
            <a 
              href="#example"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-transparent px-8 py-4 text-lg font-medium text-gray-700 hover:border-gray-400 hover:bg-gray-50 hover:text-gray-900 transition-all"
            >
              <MessageSquare className="h-5 w-5" />
              See Example
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 border-t border-gray-200 pt-8">
            <p className="mb-6 text-sm text-gray-500">
              Analyzing projects across multiple blockchains
            </p>
            <div className="flex items-center justify-center gap-8 opacity-60">
              <span className="text-2xl font-bold text-gray-800">0+</span>
              <div className="h-8 w-px bg-gray-800" />
              <span className="text-2xl font-bold text-gray-800">100%</span>
              <div className="h-8 w-px bg-gray-300" />
              <span className="text-2xl font-bold text-gray-800">24/7</span>
            </div>
            <div className="mt-2 flex items-center justify-center gap-8 text-xs text-gray-500">
              <span>Projects Analyzed</span>
              <span className="opacity-0">|</span>
              <span>Accuracy Rate</span>
              <span className="opacity-0">|</span>
              <span>Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" id="how-it-works">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mb-12 text-lg text-gray-600">
            Get instant crypto project analysis in three simple steps
          </p>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="relative">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gray-100">
                <Twitter className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                1. Tag the Bot
              </h3>
              <p className="text-gray-600">
                Reply to any crypto tweet with @ProjectProbeAI and mention the project you want analyzed
              </p>
            </div>
            
            <div className="relative">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gray-100">
                <Search className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                2. AI Analysis
              </h3>
              <p className="text-gray-600">
                Our AI analyzes GitHub repos, documentation, tokenomics, and on-chain activity in real-time
              </p>
            </div>
            
            <div className="relative">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gray-100">
                <BarChart3 className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                3. Trust Score
              </h3>
              <p className="text-gray-600">
                Receive an instant reply with a comprehensive trust score and key insights
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Example Reply Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 bg-white" id="example">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Example Analysis
          </h2>
          <p className="mb-12 text-lg text-gray-600">
            See what a typical ProjectProbeAI response looks like
          </p>
          
          <div className="mx-auto max-w-2xl">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-left shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div>
                  <p className="font-semibold text-gray-900">@ProjectProbeAI</p>
                  <p className="text-sm text-gray-500">2 minutes ago</p>
                </div>
              </div>
              <div className="space-y-3 text-gray-800">
                <p>🧠 <strong>Analysis for $XYZ Token:</strong></p>
                <p>📊 <strong>Trust Score: 82/100</strong></p>
                <p>✅ Active GitHub (45 commits last month)</p>
                <p>✅ Roadmap progress: 75% goals met</p>
                <p>✅ Rising trading volume (+120% this week)</p>
                <p>⚠️ Limited audit history</p>
                <p className="text-sm text-gray-600 pt-2">
                  <em>Analysis based on GitHub activity, documentation quality, tokenomics, and on-chain metrics.</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-4xl text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            What We Analyze
          </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-gray-100 p-6 text-center shadow-sm hover:shadow-md transition-shadow bg-white">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100">
              <Github className="h-6 w-6 bg-[#72c414]" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              GitHub Activity
            </h3>
            <p className="text-gray-600">
              Code quality, commit frequency, contributor activity, and development progress
            </p>
          </div>
          
          <div className="rounded-xl border border-gray-100 p-6 text-center shadow-sm hover:shadow-md transition-shadow bg-white">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              Documentation
            </h3>
            <p className="text-gray-600">
              Whitepaper quality, roadmap clarity, and technical documentation completeness
            </p>
          </div>
          
          <div className="rounded-xl border border-gray-100 p-6 text-center shadow-sm hover:shadow-md transition-shadow bg-white">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              On-Chain Data
            </h3>
            <p className="text-gray-600">
              Trading volume, holder distribution, smart contract audits, and tokenomics
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 bg-white" id="about">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Mission
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            We help crypto investors cut through noise by evaluating real project progress, not just hype. Our AI analyzes technical fundamentals, development activity, and on-chain metrics to provide objective insights.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 text-left">
            <div className="rounded-xl border border-gray-100 p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                Data-Driven Analysis
              </h3>
              <p className="text-gray-600">
                We focus on quantifiable metrics like code commits, documentation quality, and on-chain activity rather than social media sentiment.
              </p>
            </div>
            <div className="rounded-xl border border-gray-100 p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                Accessible Insights
              </h3>
              <p className="text-gray-600">
                Complex technical analysis made simple through our Twitter bot interface. No need for specialized tools or expertise.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" id="faq">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-3xl font-bold text-gray-900 text-center sm:text-4xl">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            <div className="rounded-xl border border-gray-100 p-6 bg-white">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                What do you analyze?
              </h3>
              <p className="text-gray-600">
                We analyze GitHub repositories, documentation quality, roadmap progress, tokenomics, trading volume, holder distribution, and smart contract audits when available.
              </p>
            </div>
            
            <div className="rounded-xl border border-gray-100 p-6 bg-white">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                How accurate is the trust score?
              </h3>
              <p className="text-gray-600">
                Our AI model achieves 95% accuracy based on historical data. However, crypto investments are inherently risky, and our analysis should be used as one factor in your research, not the sole basis for investment decisions.
              </p>
            </div>
            
            <div className="rounded-xl border border-gray-100 p-6 bg-white">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                Do you support all blockchains?
              </h3>
              <p className="text-gray-600">
                Yes, we analyze projects across Ethereum, Solana, Polygon, BSC, and other major blockchains. Our analysis adapts to each blockchain&lsquo;s specific characteristics and data availability.
              </p>
            </div>
            
            <div className="rounded-xl border border-gray-100 p-6 bg-white">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                Is this financial advice?
              </h3>
              <p className="text-gray-600">
                No, our analysis is for informational purposes only. We provide technical and fundamental analysis, but you should always do your own research and consider your risk tolerance before making investment decisions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 flex items-center gap-2">
               <span className="text-xl font-semibold text-gray-900">
                <span className="text-3xl font-bold text-[#72c414]">A</span>nuba
              </span>
            </div>
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Terms
              </a>
              <a href="https://x.com/ProjectProbeAI" className="hover:text-gray-900 transition-colors">
                Follow on X
              </a>
            </div>
          </div>
          <div className="mt-6 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
            © 2024 ProjectProbeAI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
