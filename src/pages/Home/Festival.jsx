import React from "react";

import advelogo from "../../assets/festival/BhonsalaAdventureSporfestival.png";
import chmeslogo from "../../assets/festival/CHMES-New-Logo_.png";

import mountaincycling from "../../assets/festival/mountaincycling.jpg";
import rangetrek from "../../assets/festival/rangetrek.jpg";
import bouldering from "../../assets/festival/bouldering.jpg";
import navigation from "../../assets/festival/navigation.jpg";
import ropeobstacle from "../../assets/festival/ropeobstacle.jpg";
import rafting from "../../assets/festival/rafting.png";
import triventure from "../../assets/festival/triventure.png";
import triventure2 from "../../assets/festival/triventure2.png";
import triventure3 from "../../assets/festival/triventure3.png";
import parasailing from "../../assets/festival/parasailing.jpg";
import sailing from "../../assets/festival/sailing.jpg";
import scubadiving from "../../assets/festival/scubadiving.jpg";
import rifleshooting from "../../assets/festival/rifleshooting.jpg";
import bhartiyyudhkala from "../../assets/festival/bhartiyyudhkala.jpg";
import bhonsalagymnastic from "../../assets/festival/bhonsalagymnastic.jpg";

// Sports data in JSON format with image URLs
const sportsData = {
  teamCompetitive: [
    {
      id: 1,
      date: "29 Nov",
      sport: "Mountain Cycling",
      ageGroup: "18 to 35 Yrs. & 36 to 65 Yrs.",
      category: "Team Competitive",
      link: "https://rzp.io/rzp/O843kdE",
      participants: "4 members per Team",
      teamType: "Male & Female separate Team",
      image: mountaincycling,
    },
    {
      id: 2,
      date: "30 Nov",
      sport: "Range Trek",
      ageGroup: "18 to 35 Yrs. & 36 to 65 Yrs.",
      category: "Team Competitive",
      link: "https://rzp.io/rzp/e3BuJ4R",
      participants: "4 members per Team",
      teamType: "Male & Female separate Team",
      image: rangetrek,
    },
    {
      id: 3,
      date: "5 Dec",
      sport: "Navigation",
      ageGroup: "18 to 35 Yrs. & 36 to 65 Yrs.",
      category: "Team Competitive",
      link: "https://rzp.io/rzp/81LgXTCE",
      participants: "4 members per Team",
      teamType: "Male & Female separate Team",
      image: navigation,
    },
    {
      id: 4,
      date: "6 Dec",
      sport: "Rafting",
      ageGroup: "18 to 35 Yrs. & 36 to 65 Yrs.",
      category: "Team Competitive",
      link: "https://rzp.io/rzp/V1WtPnfo",
      participants: "4 members per Team",
      teamType: "Male & Female separate Team",
      image: rafting,
    },
    {
      id: 5,
      date: "7 Dec",
      sport: "Tri-venture (Cycling, Range Trek, Rafting)",
      ageGroup: "18 to 35 Yrs. & 36 to 65 Yrs.",
      category: "Team Competitive",
      link: "https://rzp.io/rzp/KNCmUff",
      participants: "4 members per Team",
      teamType: "Male & Female separate Team",
      image: triventure,
    },
  ],
  individualCompetitive: [
    {
      id: 6,
      date: "4 Dec",
      sport: "Bouldering",
      ageGroup: "18 to 35 Yrs. & 36 to 65 Yrs.",
      category: "Individual Competitive",
      link: "https://rzp.io/rzp/dNsmjpoK ",
      image: bouldering,
    },
    {
      id: 7,
      date: "6 Dec",
      sport: "Rope & Obstacle",
      ageGroup: "12 to 17 Yrs. & 18 to 35 Yrs.",
      category: "Individual Competitive",
      link: "https://rzp.io/rzp/hLXQTDkA",
      image: ropeobstacle,
    },
  ],
  nonCompetitive: [
    {
      id: 8,
      date: "29 Nov",
      sport: "Rifle Shooting",
      ageGroup: "15 to 17 Yrs. & 18 Above",
      category: "Non-Competitive",
      link: "https://rzp.io/rzp/olHJnpE",
      image: rifleshooting,
    },
    {
      id: 9,
      date: "1 Dec",
      sport: "Parasailing",
      ageGroup: "18 to 35 Yrs.",
      category: "Non-Competitive",
      link: "https://rzp.io/rzp/Lqv6hGAH",
      image: parasailing,
    },
    {
      id: 10,
      date: "2 & 3 Dec",
      sport: "Sailing JR",
      ageGroup: "15 to 17 Yrs",
      category: "Non-Competitive",
      link: "https://rzp.io/rzp/SwxOt3v",
      image: sailing,
    },
    {
      id: 10,
      date: "2 & 3 Dec",
      sport: "Sailing SR",
      ageGroup: "18 Yrs Above",
      category: "Non-Competitive",
      link: "https://rzp.io/rzp/NpHknscn",
      image: sailing,
    },
    {
      id: 11,
      date: "3 & 4 Dec",
      sport: "Scuba Diving",
      ageGroup: "15 to 17 Yrs. & 18 Above",
      category: "Non-Competitive",
      link: "https://rzp.io/rzp/qTGYjOi",
      image: scubadiving,
    },
  ],
  demonstration: [
    {
      id: 12,
      sport: "Horse Riding",
      category: "Demonstration",
      link: "/horse-riding",
      description: "Open to All",
      image:
        "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=400&h=250&fit=crop",
    },
    {
      id: 13,
      sport: "Bhartiya Yuddhakala",
      category: "Demonstration",
      link: "/bhartiya-yuddhakala",
      description: "Open to All",
      image: bhartiyyudhkala,
    },
    {
      id: 14,
      sport: "Military Band",
      category: "Demonstration",
      link: "/military-band",
      description: "Open to All",
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=250&fit=crop",
    },
    {
      id: 15,
      sport: "Bhonsala Gymnastic",
      category: "Demonstration",
      link: "/bhonsala-gymnastic",
      description: "Open to All",
      image: bhonsalagymnastic,
    },
  ],
  talkFilmShow: [
    {
      id: 16,
      event: "Scuba, Sailing & Mountaineering Talk Show",
      category: "Talk & Film Show",
      link: "/adventure-talk-show",
      description: "Open to All",
      image:
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=250&fit=crop",
    },
    {
      id: 17,
      event: "Adventure Film Show",
      category: "Talk & Film Show",
      link: "/adventure-film-show",
      description: "Open to All",
      image:
        "https://images.unsplash.com/photo-1489599809505-fb9c1e0b95c3?w=400&h=250&fit=crop",
    },
  ],
};

// SportCard Component with Image
const SportCard = ({ sport }) => {
  const handleCardClick = () => {
    window.open(sport.link, "_blank", "noopener,noreferrer");
  };

  //   const getCategoryColor = (category) => {
  //     const colors = {
  //       "Team Competitive": "bg-blue-100 border-blue-300 hover:bg-blue-200",
  //       "Individual Competitive":
  //         "bg-green-100 border-green-300 hover:bg-green-200",
  //       "Non-Competitive": "bg-yellow-100 border-yellow-300 hover:bg-yellow-200",
  //       Demonstration: "bg-purple-100 border-purple-300 hover:bg-purple-200",
  //       "Talk & Film Show": "bg-indigo-100 border-indigo-300 hover:bg-indigo-200",
  //     };
  //     return colors[category] || "bg-gray-100 border-gray-300 hover:bg-gray-200";
  //   };

  return (
    <div
      className={`shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer flex flex-col h-full`}
      onClick={handleCardClick}
    >
      {/* Image Section */}
      <div className="mb-4 overflow-hidden">
        <img
          src={sport.image}
          alt={sport.sport || sport.event}
          className="w-full h-50 object-cover transition-transform duration-300 hover:scale-110"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=250&fit=crop";
          }}
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-4">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-bold text-gray-800 leading-tight">
            {sport.sport || sport.event}
          </h3>
        </div>

        <div className="space-y-1 flex-grow">
          {sport.date && (
            <p className="text-gray-600 text-sm">
              <span className="font-semibold">Date:</span> {sport.date}
            </p>
          )}

          {sport.ageGroup && (
            <p className="text-gray-600 text-sm">
              <span className="font-semibold">Age Group:</span> {sport.ageGroup}
            </p>
          )}

          {sport.participants && (
            <p className="text-gray-600 text-sm">
              <span className="font-semibold">Participants:</span>{" "}
              {sport.participants}
            </p>
          )}

          {sport.teamType && (
            <p className="text-gray-600 text-sm">
              <span className="font-semibold">Team Type:</span> {sport.teamType}
            </p>
          )}

          {sport.description && (
            <p className="text-gray-600 text-sm">
              <span className="font-semibold">Status:</span> {sport.description}
            </p>
          )}
        </div>

        {/* Click to learn more */}
        <div className="mt-4 pt-3 border-t border-gray-300">
          <p className="text-blue-600 font-semibold text-xs">Register Now →</p>
        </div>
      </div>
    </div>
  );
};

// SportsSection Component with 5 cards per row
const SportsSection = ({ title, sports }) => {
  if (!sports || sports.length === 0) return null;

  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 pb-2 border-b-2 border-gray-300">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {sports.map((sport) => (
          <SportCard key={sport.id} sport={sport} />
        ))}
      </div>
    </div>
  );
};

// Main Festival Component
function Festival() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-8 pt-70">
      <div className="container mx-auto px-4">
        {/* Header */}
        {/* Header */}
        <header className="text-center mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-4 border-yellow-400 relative">
            {/* Left Logo */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
              <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center p-2">
                <img
                  src={chmeslogo}
                  alt="Left Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                />
              </div>
            </div>

            {/* Right Logo */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
              <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center p-2">
                <img
                  src={advelogo}
                  alt="Right Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                />
              </div>
            </div>

            {/* Mobile Logos */}
            <div className="flex justify-center items-center gap-8 mb-6 lg:hidden">
              <div className="w-25 h-25 bg-white rounded-full flex items-center justify-center p-2">
                <img
                  src={chmeslogo}
                  alt="Left Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                />
              </div>
              <div className="w-25 h-25 bg-white rounded-full flex items-center justify-center p-2">
                <img
                  src={advelogo}
                  alt="Right Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                />
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:px-32">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                C.H.M.E.S
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
                BHONSALA ADVENTURE SPORTS
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-6">
                FESTIVAL 2025
              </h3>
            </div>
          </div>
        </header>

        {/* Sports Sections */}
        <main className="space-y-12">
          <SportsSection
            title="TEAM COMPETITIVE SPORTS"
            sports={sportsData.teamCompetitive}
          />

          <SportsSection
            title="INDIVIDUAL COMPETITIVE SPORTS"
            sports={sportsData.individualCompetitive}
          />

          <SportsSection
            title="NON-COMPETITIVE SPORTS (INDIVIDUAL)"
            sports={sportsData.nonCompetitive}
          />

          <SportsSection
            title="DEMONSTRATION - OPEN TO ALL"
            sports={sportsData.demonstration}
          />

          <SportsSection
            title="TALK & FILM SHOW - OPEN TO ALL"
            sports={sportsData.talkFilmShow}
          />
        </main>
      </div>
    </div>
  );
}

export default Festival;
