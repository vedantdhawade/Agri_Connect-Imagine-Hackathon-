import body from "../assets/body.png";

function Aboutus() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-96 flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${body})`,
        }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Empowering Farmers with AI-Driven Plant Diagnostics
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Revolutionizing agriculture through intelligent plant health
            monitoring and diagnosis
          </p>
        </div>
      </div>

      {/* Purpose Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-center text-green-700 mb-8">Our Purpose</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <p className="text-gray-700 text-lg">
            At Plant Diagnosis, we leverage cutting-edge AI technology to
            revolutionize how farmers monitor and maintain their crop health.
            Our platform provides instant, accurate diagnostics that help
            identify plant diseases, nutrient deficiencies, and other critical
            issues before they become severe problems.
          </p>
          <p className="text-gray-700 text-lg">
            We understand that time is crucial in agriculture, which is why our
            solution delivers real-time analysis and actionable insights. By
            combining advanced machine learning algorithms with agricultural
            expertise, we empower farmers to make informed decisions that
            protect their yields and optimize resource utilization.
          </p>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-green-700 mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center border border-green-500 rounded-lg p-6 shadow-lg">
              <div className="text-green-500 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Instant AI Analysis</h3>
              <p className="text-gray-600">
                Get immediate results from our advanced AI system for quick
                decision-making.
              </p>
            </div>
            <div className="text-center border border-green-500 rounded-lg p-6 shadow-lg">
              <div className="text-green-500 text-4xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-2">Accurate Diagnostics</h3>
              <p className="text-gray-600">
                Precise identification of plant issues with detailed
                recommendations.
              </p>
            </div>
            <div className="text-center border border-green-500 rounded-lg p-6 shadow-lg">
              <div className="text-green-500 text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-2">Improved Crop Yields</h3>
              <p className="text-gray-600">
                Optimize your farming practices for better harvest results.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">Our Mission</h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            To make farming smarter and more sustainable by providing
            accessible, AI-powered solutions that help farmers maximize their
            crop health and productivity while minimizing resource waste.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-6 text-lg">
            Have questions about our platform? We’d love to hear from you.
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
