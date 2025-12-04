export default function TravelDeals() {
  return (
    <section className="w-full flex flex-col items-center py-16 px-4">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center">
        Get travel deals in your <br /> inbox
      </h1>

      {/* Sub-text */}
      <p className="text-center text-gray-600 mt-4">
        Receive updates on new tours, seasonal offers, and travel tips from Pakistan.
      </p>

      {/* Email Form */}
      <form className="flex flex-col md:flex-row items-center gap-3 mt-8 w-full max-w-xl">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
        >
          Subscribe
        </button>
      </form>

      {/* Privacy Note */}
      <p className="text-xs text-gray-500 mt-3 text-center">
        By subscribing you agree to our terms and privacy policy.
      </p>

      {/* Image Section */}
      <div className="w-full max-w-5xl mt-6 border border-gray-300">
        <img
          src="/Planning.jpg" 
          alt="People planning a trip"
          className="w-full h-100 rounded-md"
        />
      </div>
    </section>
  );
}
