import React from "react";

const AdventureFestival = () => {
  const redirectToGoogleForm = () => {
    window.open("https://forms.google.com/your-form-link", "_blank");
  };

  const redirectToManaliTrek = () => {
    window.open("https://baf.bhonsala.in", "_blank");
  };

  const redirectToAdventureCourses = () => {
    window.open("https://bias.bhonsala.in", "_blank");
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Adventure Festival
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for an extraordinary adventure experience. Register now and
            choose your preferred adventure program!
          </p>
        </div>

        {/* Three Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Google Form Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Adventure Festival Registration
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Secure your spot in the Adventure Festival! Fill out the
                registration form to join our exciting programs and begin your
                adventure journey.
              </p>
              <button
                onClick={redirectToGoogleForm}
                className="w-full bg-[#2554a6] text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              >
                Register Now
              </button>
            </div>
          </div>

          {/* Manali Trek Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Manali Trek Expedition
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Conquer the Himalayas with our guided trekking expedition.
                Experience breathtaking views and challenging trails in the
                beautiful Manali region.
              </p>
              <button
                onClick={redirectToManaliTrek}
                className="w-full bg-[#c88f25] text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Explore Trek
              </button>
            </div>
          </div>

          {/* Adventure Courses Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Adventure Courses
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Master outdoor skills with our comprehensive courses. Learn rock
                climbing, survival techniques, and more from expert instructors.
              </p>
              <button
                onClick={redirectToAdventureCourses}
                className="w-full bg-[#e76120] text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                View Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventureFestival;
