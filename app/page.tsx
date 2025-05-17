export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 顶部导航 */}
      <header className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">MCU Doctor</h1>
          <nav className="space-x-4">
            <a href="#" className="hover:underline">Products</a>
            <a href="#" className="hover:underline">Platforms</a>
            <a href="#" className="hover:underline">Support</a>
            <a href="#" className="hover:underline">Company</a>
          </nav>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-gray-100 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Leading Debug and Trace Tools</h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-900">
          MCU Doctor delivers world-class embedded development and debugging solutions.
        </p>
      </section>

      {/* 产品/解决方案 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Debugger</h3>
            <p className="text-gray-900">Powerful and scalable debug tools for all MCU platforms.</p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Trace Analyzer</h3>
            <p className="text-gray-900">Real-time trace analysis to optimize embedded applications.</p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Training & Support</h3>
            <p className="text-gray-900">Professional training and technical support services.</p>
          </div>
        </div>
      </section>

      {/* 新闻公告 */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h4 className="text-2xl font-bold mb-6 text-gray-900">Latest News</h4>
          <ul className="space-y-4 text-gray-900">
            <li>📰 MCU Doctor releases new ARM trace module - May 2025</li>
            <li>📢 Visit us at Embedded World 2025 in Nürnberg</li>
            <li>💡 New blog: Optimizing real-time performance in RTOS</li>
          </ul>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-gray-800 text-white py-6 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 MCU Doctor. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

