import { useState } from 'react';

interface SharedChatCard {
  id: number | string;
  title: string;
  email: string;
  password: string;
  loginUrl: string;
  features: string[];
  validUntil: string;
  instructions: string;
  isDirectAccess?: boolean;
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activationCode, setActivationCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successCard, setSuccessCard] = useState<SharedChatCard | null>(null);
  const [successText, setSuccessText] = useState('');

  const sharedChatCards: SharedChatCard[] = [
    {
      id: 1,
      title: "ChatGPT Pro Account",
      email: "user1@sharedchat.cn",
      password: "SharedChat123!",
      loginUrl: "https://chat.openai.com",
      features: ["GPT-4 Access", "Unlimited Messages", "Priority Support", "Plugin Access"],
      validUntil: "2025-02-15",
      instructions: "1. Visit chat.openai.com\n2. Login with provided credentials\n3. Change password after first login\n4. Enjoy premium features!"
    },
    {
      id: 2,
      title: "ChatGPT Pro Account",
      email: "user2@sharedchat.cn",
      password: "SharedChat456!",
      loginUrl: "https://chat.openai.com",
      features: ["GPT-4 Access", "Unlimited Messages", "Priority Support", "Plugin Access"],
      validUntil: "2025-02-20",
      instructions: "1. Visit chat.openai.com\n2. Login with provided credentials\n3. Change password after first login\n4. Enjoy premium features!"
    },
    {
      id: 3,
      title: "ChatGPT Pro Account",
      email: "user3@sharedchat.cn",
      password: "SharedChat789!",
      loginUrl: "https://chat.openai.com",
      features: ["GPT-4 Access", "Unlimited Messages", "Priority Support", "Plugin Access"],
      validUntil: "2025-02-25",
      instructions: "1. Visit chat.openai.com\n2. Login with provided credentials\n3. Change password after first login\n4. Enjoy premium features!"
    },
    {
      id: 4,
      title: "ChatGPT Pro Account",
      email: "user4@sharedchat.cn",
      password: "SharedChat321!",
      loginUrl: "https://chat.openai.com",
      features: ["GPT-4 Access", "Unlimited Messages", "Priority Support", "Plugin Access"],
      validUntil: "2025-03-01",
      instructions: "1. Visit chat.openai.com\n2. Login with provided credentials\n3. Change password after first login\n4. Enjoy premium features!"
    },
    {
      id: 5,
      title: "ChatGPT Pro Account",
      email: "user5@sharedchat.cn",
      password: "SharedChat654!",
      loginUrl: "https://chat.openai.com",
      features: ["GPT-4 Access", "Unlimited Messages", "Priority Support", "Plugin Access"],
      validUntil: "2025-03-05",
      instructions: "1. Visit chat.openai.com\n2. Login with provided credentials\n3. Change password after first login\n4. Enjoy premium features!"
    }
  ];

  const validCodes = ['ibrahim1', 'ibrahim2', 'ibrahim3', 'code123', 'test456', 'mustafa'];

  const comingSoonServices = [
    { name: 'ChatGPT 5', icon: '🤖', gradient: 'from-blue-500 to-purple-600' },
    { name: 'Canva Pro', icon: '🎨', gradient: 'from-pink-500 to-rose-600' },
    { name: 'Apple TV', icon: '📺', gradient: 'from-gray-700 to-gray-900' },
    { name: 'Apple Music', icon: '🎵', gradient: 'from-red-500 to-pink-600' },
    { name: 'Perplexity.ai', icon: '🔍', gradient: 'from-cyan-500 to-blue-600' },
    { name: 'Coursera', icon: '🎓', gradient: 'from-blue-600 to-indigo-700' },
    { name: 'Epic Games', icon: '🎮', gradient: 'from-purple-600 to-pink-600' },
    { name: 'Steam', icon: '🕹️', gradient: 'from-blue-700 to-blue-900' },
    { name: 'Veed.io', icon: '🎬', gradient: 'from-orange-500 to-red-600' }
  ];

  const openModal = () => {
    setIsModalOpen(true);
    setActivationCode('');
    setErrorMessage('');
    setShowSuccess(false);
    setSuccessCard(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActivationCode('');
    setErrorMessage('');
    setShowSuccess(false);
    setSuccessCard(null);
    setIsVerifying(false);
  };

  const verifyCode = async () => {
    const code = activationCode.trim();
    if (!code || isVerifying) return;

    setIsVerifying(true);
    setErrorMessage('');

    await new Promise(resolve => setTimeout(resolve, 1500));

    if (code.toLowerCase() === 'you') {
      const randomPassword = 'Pass' + Math.floor(Math.random() * 10000) + '!';
      window.open('https://sharedchat.cn/', '_blank');

      const directAccessCard: SharedChatCard = {
        id: 'you',
        title: "SharedChat.cn Direct Access",
        email: "xhitman",
        password: randomPassword,
        loginUrl: "https://sharedchat.cn/",
        features: ["Direct Access", "Premium Features", "Instant Login"],
        validUntil: "Unlimited",
        instructions: `1. The website has been opened in a new tab\n2. Use username: xhitman\n3. Use password: ${randomPassword}\n4. Enjoy premium access!`,
        isDirectAccess: true
      };

      setSuccessCard(directAccessCard);
      setSuccessText('SharedChat.cn Opened!');
      setShowSuccess(true);
    } else if (validCodes.includes(code.toLowerCase())) {
      const randomCard = sharedChatCards[Math.floor(Math.random() * sharedChatCards.length)];
      setSuccessCard(randomCard);
      setSuccessText('Free SharedChat Card Unlocked!');
      setShowSuccess(true);
    } else {
      setErrorMessage('Invalid activation code. Please try again.');
    }

    setIsVerifying(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      verifyCode();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-xl border-b border-white/20 sticky top-0 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between py-5 gap-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                🛒
              </div>
              <div>
                <h1 className="text-3xl font-extrabold text-gray-900">Code Store</h1>
                <p className="text-sm text-gray-600 font-medium">Premium Digital Accounts</p>
              </div>
            </div>
            <div className="flex gap-5 flex-wrap justify-center">
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full text-sm font-medium text-purple-700">
                🔒 Secure
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full text-sm font-medium text-purple-700">
                ⚡ Instant
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full text-sm font-medium text-purple-700">
                ✅ Verified
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-5 drop-shadow-2xl">
            Premium Digital Accounts
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Get instant access to premium AI tools and services. Secure, verified, and ready to use.
          </p>
          <div className="flex justify-center gap-10 md:gap-20 flex-wrap mt-10">
            <div className="text-center">
              <span className="text-4xl font-extrabold block">1000+</span>
              <span className="text-sm opacity-80 mt-1 block">Happy Customers</span>
            </div>
            <div className="text-center">
              <span className="text-4xl font-extrabold block">24/7</span>
              <span className="text-sm opacity-80 mt-1 block">Support</span>
            </div>
            <div className="text-center">
              <span className="text-4xl font-extrabold block">99.9%</span>
              <span className="text-sm opacity-80 mt-1 block">Uptime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl mx-4 md:mx-10 my-10 p-8 md:p-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-extrabold text-gray-900 mb-4">Available Products</h3>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Choose from our selection of premium digital accounts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* ChatGPT Pro */}
            <div
              onClick={openModal}
              className="bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-purple-600 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-purple-800"></div>
              <div className="w-20 h-20 mx-auto mb-5 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center text-4xl shadow-lg">
                🤖
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">ChatGPT Pro</h4>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Premium AI assistant with advanced capabilities and unlimited access
              </p>
              <div className="text-2xl font-bold text-purple-700 mb-6">$20/month</div>
              <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                Activate Account
              </button>
            </div>

            {/* Coming Soon Products */}
            {comingSoonServices.map((service) => (
              <div
                key={service.name}
                className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 relative overflow-hidden opacity-60 pointer-events-none"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-300 to-gray-400"></div>
                <div className="absolute top-4 right-4 text-amber-500 text-2xl">⏰</div>
                <div className={`w-20 h-20 mx-auto mb-5 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-4xl shadow-lg`}>
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h4>
                <p className="text-gray-500 mb-4 leading-relaxed">
                  Premium service coming soon
                </p>
                <div className="text-2xl font-bold text-gray-400 mb-6">Coming Soon</div>
                <button className="w-full py-4 bg-gray-200 text-gray-500 rounded-xl font-semibold cursor-not-allowed">
                  Coming Soon
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-xl mx-4 md:mx-10 my-5 mb-5 p-10 text-center">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-600 mb-2">&copy; 2025 Code Store. All rights reserved.</p>
          <p className="text-gray-500">Secure digital account marketplace</p>
        </div>
      </footer>

      {/* Activation Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-5 animate-fadeIn"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className="bg-white rounded-3xl p-10 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center text-xl">
                  🤖
                </div>
                <h3 className="text-2xl font-bold text-gray-900">ChatGPT Pro</h3>
              </div>
              <button
                onClick={closeModal}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-xl text-gray-600 transition-all duration-300 hover:rotate-90"
              >
                ×
              </button>
            </div>

            {!showSuccess ? (
              <div>
                <div className="mb-6">
                  <label className="block font-semibold text-gray-700 mb-2">
                    Enter Activation Code
                  </label>
                  <input
                    type="text"
                    value={activationCode}
                    onChange={(e) => setActivationCode(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl text-base focus:outline-none focus:border-purple-600 focus:ring-4 focus:ring-purple-100 transition-all"
                    placeholder="Enter your code here..."
                    autoFocus
                  />
                </div>

                {errorMessage && (
                  <div className="flex items-center gap-2 text-red-600 text-sm mb-4">
                    <span>❌</span>
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>For testing, try:</strong> ibrahim1, ibrahim2, ibrahim3, code123, test456, or mustafa
                  </p>
                </div>

                <button
                  onClick={verifyCode}
                  disabled={isVerifying}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isVerifying ? (
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Verifying...</span>
                    </div>
                  ) : (
                    'Verify Code'
                  )}
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-3 text-green-600 font-semibold text-lg mb-5">
                  <span>✅</span>
                  <span>{successText}</span>
                </div>

                <div
                  className={`rounded-2xl p-6 text-white mb-5 ${
                    successCard?.isDirectAccess
                      ? 'bg-gradient-to-br from-purple-600 to-purple-800'
                      : 'bg-gradient-to-br from-green-500 to-green-700'
                  }`}
                >
                  <div className="flex justify-between items-center mb-5">
                    <div className="font-bold text-lg">{successCard?.title}</div>
                    <div className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium">
                      Valid until {successCard?.validUntil}
                    </div>
                  </div>

                  <div className="bg-white/15 rounded-lg p-4 mb-4">
                    <div className="text-xs opacity-80 mb-1">
                      {successCard?.isDirectAccess ? 'Username' : 'Email'}
                    </div>
                    <div className="font-mono font-semibold select-all">{successCard?.email}</div>
                  </div>

                  <div className="bg-white/15 rounded-lg p-4 mb-4">
                    <div className="text-xs opacity-80 mb-1">Password</div>
                    <div className="font-mono font-semibold select-all">{successCard?.password}</div>
                  </div>

                  <div className="bg-white/15 rounded-lg p-4 mb-4">
                    <div className="text-xs opacity-80 mb-1">Login URL</div>
                    <a
                      href={successCard?.loginUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:opacity-80"
                    >
                      {successCard?.loginUrl}
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-2 my-4">
                    {successCard?.features.map((feature, index) => (
                      <span key={index} className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="bg-white/10 rounded-lg p-4 mt-4">
                    <div className="text-xs font-semibold mb-2">Instructions:</div>
                    <div className="text-xs leading-relaxed whitespace-pre-line">
                      {successCard?.instructions}
                    </div>
                  </div>

                  <div className="text-center mt-4 text-xs opacity-80">
                    Powered by{' '}
                    <a
                      href="https://sharedchat.cn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      SharedChat.cn
                    </a>
                  </div>
                </div>

                <button
                  onClick={closeModal}
                  className={`w-full py-4 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                    successCard?.isDirectAccess
                      ? 'bg-gradient-to-r from-purple-600 to-purple-800'
                      : 'bg-gradient-to-r from-green-500 to-green-700'
                  }`}
                >
                  {successCard?.isDirectAccess ? 'Continue Browsing' : 'Enjoy Your Free Account!'}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
