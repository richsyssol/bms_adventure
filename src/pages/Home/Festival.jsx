import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import advelogo from "../../assets/festival/BhonsalaAdventureSporfestival.png";
import chmeslogo from "../../assets/festival/CHMES-New-Logo_.png";
import mountaincycling from "../../assets/festival/mountaincycling.jpg";
import rangetrek from "../../assets/festival/rangetrek.jpg";
import bouldering from "../../assets/festival/bouldering.jpg";
import navigation from "../../assets/festival/navigation.jpg";
import ropeobstacle from "../../assets/festival/ropeobstacle.jpg";
import rafting from "../../assets/festival/rafting.png";
import triventure from "../../assets/festival/triventure.png";
import parasailing from "../../assets/festival/parasailing.jpg";
import sailing from "../../assets/festival/sailing.jpg";
import scubadiving from "../../assets/festival/scubadiving.jpg";
import rifleshooting from "../../assets/festival/rifleshooting.jpg";
import bhartiyyudhkala from "../../assets/festival/bhartiyyudhkala.jpg";
import bhonsalagymnastic from "../../assets/festival/bhonsalagymnastic.jpg";
import horseriding from "../../assets/festival/horse-riding.jpeg";
import militaryband from "../../assets/festival/military-band.jpeg";

import { usePopup } from "../../context/PopupContext";

// Sports data in JSON format with image URLs
const sportsData = {
  teamCompetitive: [
    {
      id: 1,
      date: "30 Nov",
      sport: "Range Trek",
      ageGroup: "18 to 35 Yrs. & 36 to 65 Yrs.",
      category: "Team Competitive",
      participants: "4 members per Team",
      teamType: "Male & Female separate Team",
      image: rangetrek,
    },
    {
      id: 2,
      date: "5 Dec",
      sport: "Navigation",
      ageGroup: "18 to 35 Yrs. & 36 to 65 Yrs.",
      category: "Team Competitive",
      participants: "4 members per Team",
      teamType: "Male & Female separate Team",
      image: navigation,
    },
    {
      id: 3,
      date: "6 Dec",
      sport: "Rafting",
      ageGroup: "18 to 35 Yrs. & 36 to 65 Yrs.",
      category: "Team Competitive",
      participants: "4 members per Team",
      teamType: "Male & Female separate Team",
      image: rafting,
    },
    {
      id: 4,
      date: "7 Dec",
      sport: "Tri-venture (Cycling, Range Trek, Rafting)",
      ageGroup: "18 to 35 Yrs. & 36 to 65 Yrs.",
      category: "Team Competitive",
      participants: "4 members per Team",
      teamType: "Male & Female separate Team",
      image: triventure,
    },
  ],
  individualCompetitive: [
    {
      id: 5,
      date: "29 Nov",
      sport: "Mountain Cycling",
      ageGroup: "18 to 35 Yrs. & 36 to 65 Yrs.",
      category: "Team Competitive",
      image: mountaincycling,
    },
    {
      id: 6,
      date: "4 Dec",
      sport: "Bouldering",
      ageGroup: "18 to 35 Yrs. & 36 to 65 Yrs.",
      category: "Individual Competitive",
      image: bouldering,
    },
    {
      id: 7,
      date: "6 Dec",
      sport: "Rope & Obstacle",
      ageGroup: "12 to 17 Yrs. & 18 to 35 Yrs.",
      category: "Individual Competitive",
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
      image: rifleshooting,
    },
    {
      id: 9,
      date: "1 Dec",
      sport: "Parasailing",
      ageGroup: "18 to 35 Yrs.",
      category: "Non-Competitive",
      image: parasailing,
    },
    {
      id: 10,
      date: "2 & 3 Dec",
      sport: "Sailing JR",
      ageGroup: "15 to 17 Yrs",
      category: "Non-Competitive",
      image: sailing,
    },
    {
      id: 11,
      date: "2 & 3 Dec",
      sport: "Sailing SR",
      ageGroup: "18 Yrs Above",
      category: "Non-Competitive",
      image: sailing,
    },
    {
      id: 12,
      date: "3 & 4 Dec",
      sport: "Scuba Diving",
      ageGroup: "15 to 17 Yrs. & 18 Above",
      category: "Non-Competitive",
      image: scubadiving,
    },
  ],
  demonstration: [
    {
      id: 13,
      sport: "Horse Riding",
      category: "Demonstration",
      description: "Open to All",
      image: horseriding,
    },
    {
      id: 14,
      sport: "Bhartiya Yuddhakala",
      category: "Demonstration",
      description: "Open to All",
      image: bhartiyyudhkala,
    },
    {
      id: 15,
      sport: "Military Band",
      category: "Demonstration",
      description: "Open to All",
      image: militaryband,
    },
    {
      id: 16,
      sport: "Bhonsala Gymnastic",
      category: "Demonstration",
      description: "Open to All",
      image: bhonsalagymnastic,
    },
  ],
  talkFilmShow: [
    {
      id: 17,
      event: "Scuba, Sailing & Mountaineering Talk Show",
      category: "Talk & Film Show",
      description: "Open to All",
      image:
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=250&fit=crop",
    },
    {
      id: 18,
      event: "Adventure Film Show",
      category: "Talk & Film Show",
      description: "Open to All",
      image:
        "https://images.unsplash.com/photo-1489599809505-fb9c1e0b95c3?w=400&h=250&fit=crop",
    },
  ],
};

// SportCard Component with Image
const SportCard = ({ sport }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { openPopup } = usePopup();
  return (
    <div className="bg-white rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer flex flex-col h-full border border-gray-200">
      {/* Image Section */}
      <div className="overflow-hidden rounded-t-lg">
        <img
          src={sport.image}
          alt={sport.sport || sport.event}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
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

        <div className="space-y-2 flex-grow">
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
        <span
          onClick={() => {
            openPopup();
          }}
          className="text-blue-500 font-bold py-1 my-1 transition duration-300 cursor-pointer "
        >
          Register Now
        </span>
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
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { openPopup } = usePopup();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="bg-white rounded-2xl shadow-xl md:p-8 mb-8 border-4 border-yellow-400 relative">
            {/* Left Logo */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
              <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center p-2">
                <img
                  src={chmeslogo}
                  alt="CHMES Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Right Logo */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
              <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center p-2">
                <img
                  src={advelogo}
                  alt="Adventure Sports Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Mobile Logos */}
            <div className="flex justify-center items-center gap-8 md:mb-6 lg:hidden">
              <div className="w-15 h-15 bg-white rounded-full flex items-center justify-center p-2">
                <img
                  src={chmeslogo}
                  alt="CHMES Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-15 h-15 bg-white rounded-full flex items-center justify-center p-2">
                <img
                  src={advelogo}
                  alt="Adventure Sports Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:px-32">
              <h1 className="text-1xl md:text-5xl font-bold text-gray-800 md:mb-4">
                C.H.M.E.S
              </h1>
              <h2 className="text-1xl md:text-4xl font-bold text-blue-800 md:mb-4">
                BHONSALA ADVENTURE SPORTS
              </h2>
              <h3 className="text-1xl md:text-3xl font-bold text-red-600 md:mb-6">
                FESTIVAL 2025
              </h3>
              <button
                onClick={() => {
                  openPopup(); // This will open FestivalForm since we're on /festival page
                }}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-1 my-1 px-2 rounded-lg md:text-lg transition duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto"
              >
                Register Now
              </button>
            </div>
          </div>

          {/* Rules & Regulations Button */}
          <div className="text-center mb-8">
            <button
              onClick={() => navigate("/rulesandregulation")}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-2 rounded-lg md:text-lg transition duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              View Rules & Regulations
            </button>
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
