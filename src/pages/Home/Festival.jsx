import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import advelogo from "../../assets/festival/BhonsalaAdventureSporfestival.png";
import chmeslogo from "../../assets/festival/CHMES-New-Logo_.png";
import mountaincycling from "../../assets/festival/mountaincycling.jpg";
import mountaincycling1 from "../../assets/festival/Cycling1.jpeg";
import mountaincycling2 from "../../assets/festival/Cycling2.jpeg";
import rangetrek from "../../assets/festival/rangetrek.jpg";
import rangetrek1 from "../../assets/festival/rangetrek1.JPG";
import rangetrek2 from "../../assets/festival/rangetrek2.JPG";
import bouldering from "../../assets/festival/bouldering.jpg";
import bouldering1 from "../../assets/festival/Bouldering1.jpeg";
import bouldering2 from "../../assets/festival/Bouldering2.jpeg";
import navigation from "../../assets/festival/navigation.jpg";
import ropeobstacle from "../../assets/festival/ropeobstacle.jpg";
import ropeobstacle1 from "../../assets/festival/ropeobstacle1.jpg";
import ropeobstacle2 from "../../assets/festival/ropeobstacle2.jpg";
import rafting from "../../assets/festival/rafting4.jpeg";
import rafting1 from "../../assets/festival/rafting5.jpeg";
import rafting2 from "../../assets/festival/rafting6.jpeg";
import triventure from "../../assets/festival/triventure.png";
import parasailing from "../../assets/festival/parasailing.jpg";
import parasailing1 from "../../assets/festival/Parasailing3.jpg";
import parasailing2 from "../../assets/festival/FILE00577.jpg";
import sailing from "../../assets/festival/sailing.jpg";
import sailing1 from "../../assets/festival/sailing1.jpg";
import sailing2 from "../../assets/festival/sailing2.jpg";
import scubadiving from "../../assets/festival/scubadiving.jpg";
import scubadiving1 from "../../assets/festival/scubadiving1.jpg";
import scubadiving2 from "../../assets/festival/scubadiving2.jpg";
import rifleshooting from "../../assets/festival/rifleshooting.jpg";
import rifleshooting1 from "../../assets/festival/rifleshooting1.jpg";
import rifleshooting2 from "../../assets/festival/rifleshooting2.JPG";
import bhartiyyudhkala from "../../assets/festival/bhartiyyudhkala.jpg";
import bhonsalagymnastic from "../../assets/festival/bhonsalagymnastic.jpg";
import bhonsalagymnastic1 from "../../assets/festival/bhonsalagymnastic1.jpeg";
import bhonsalagymnastic2 from "../../assets/festival/bhonsalagymnastic2.jpeg";
import horseriding from "../../assets/festival/horse-riding.jpeg";
import horseriding1 from "../../assets/festival/horse-riding1.jpeg";
import horseriding2 from "../../assets/festival/horse-riding2.jpeg";
import militaryband from "../../assets/festival/military-band.jpeg";
import militaryband1 from "../../assets/festival/military-band1.jpg";
import militaryband2 from "../../assets/festival/military-band2.jpg";

import { usePopup } from "../../context/PopupContext";

// Extended sports data with multiple images and detailed information
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
      images: [rangetrek, rangetrek1, rangetrek2],
      description:
        "A challenging trek through mountain ranges testing endurance and teamwork.",
      rules: [
        "Team of 4 members",
        "Proper trekking gear required",
        "Checkpoints at various locations",
      ],
      equipment: "Trekking shoes, backpack, water bottles",
      duration: "4-6 hours",
      location: "Mountain Range Base",
      difficulty: "Moderate to High",
    },
    {
      id: 2,
      date: "5 Dec",
      sport: "Navigation",
      ageGroup: "18 to 35 Yrs. & 36 to 65 Yrs.",
      category: "Team Competitive",
      participants: "4 members per Team",
      teamType: "Male & Female separate Team",
      images: [navigation],
      description:
        "Test your navigation skills using maps and compass in unknown terrain.",
      rules: [
        "Use of provided maps and compass only",
        "Time-bound challenge",
        "Team must stay together",
      ],
      equipment: "Compass, maps, whistle",
      duration: "3-4 hours",
      location: "Designated forest area",
      difficulty: "Moderate",
    },
    {
      id: 3,
      date: "6 Dec",
      sport: "Rafting",
      ageGroup: "18 to 35 Yrs. & 36 to 65 Yrs.",
      category: "Team Competitive",
      participants: "4 members per Team",
      teamType: "Male & Female separate Team",
      images: [rafting, rafting1, rafting2],
      description:
        "White water rafting adventure testing teamwork and river navigation skills.",
      rules: [
        "Safety gear mandatory",
        "Follow guide instructions",
        "Team coordination essential",
      ],
      equipment: "Raft, paddles, life jackets, helmets",
      duration: "2-3 hours",
      location: "River Rapids",
      difficulty: "High",
    },
    {
      id: 4,
      date: "7 Dec",
      sport: "Tri-venture (Cycling, Range Trek, Rafting)",
      ageGroup: "18 to 35 Yrs. & 36 to 65 Yrs.",
      category: "Team Competitive",
      participants: "4 members per Team",
      teamType: "Male & Female separate Team",
      images: [rafting2, rangetrek2, mountaincycling],
      description:
        "Ultimate adventure challenge combining three different sports in one event.",
      rules: [
        "Sequential completion required",
        "Team must finish together",
        "Time penalties for rule violations",
      ],
      equipment: "Cycles, trekking gear, rafting equipment",
      duration: "6-8 hours",
      location: "Multiple locations",
      difficulty: "Very High",
    },
  ],
  individualCompetitive: [
    {
      id: 5,
      date: "29 Nov",
      sport: "Mountain Cycling",
      ageGroup: "18 to 35 Yrs. & 36 to 65 Yrs.",
      category: "Individual Competitive",
      images: [mountaincycling1, mountaincycling2, mountaincycling],
      description:
        "Mountain biking through challenging terrains and steep trails.",
      rules: [
        "Helmet mandatory",
        "Follow marked trail",
        "No external assistance allowed",
      ],
      equipment: "Mountain bike, helmet, gloves",
      duration: "2-3 hours",
      location: "Mountain trails",
      difficulty: "High",
    },
    {
      id: 6,
      date: "4 Dec",
      sport: "Bouldering",
      ageGroup: "18 to 35 Yrs. & 36 to 65 Yrs.",
      category: "Individual Competitive",
      images: [bouldering, bouldering1, bouldering2],
      description:
        "Rock climbing on small rock formations without ropes or harnesses.",
      rules: [
        "Safety mats provided",
        "Time limit for each route",
        "Points for completion and technique",
      ],
      equipment: "Climbing shoes, chalk bag",
      duration: "3 hours",
      location: "Bouldering wall/Natural rocks",
      difficulty: "Moderate to High",
    },
    {
      id: 7,
      date: "6 Dec",
      sport: "Rope & Obstacle",
      ageGroup: "12 to 17 Yrs. & 18 to 35 Yrs.",
      category: "Individual Competitive",
      images: [ropeobstacle, ropeobstacle1, ropeobstacle2],
      description:
        "Navigate through various rope obstacles testing strength and agility.",
      rules: [
        "Safety harness required",
        "Complete obstacles in sequence",
        "Time-based scoring",
      ],
      equipment: "Harness, ropes, safety gear",
      duration: "1-2 hours",
      location: "Obstacle course arena",
      difficulty: "Moderate",
    },
  ],
  nonCompetitive: [
    {
      id: 8,
      date: "29 Nov",
      sport: "Rifle Shooting",
      ageGroup: "15 to 17 Yrs. & 18 Above",
      category: "Non-Competitive",
      images: [rifleshooting, rifleshooting1, rifleshooting2],
      description:
        "Learn and practice rifle shooting under expert supervision.",
      rules: [
        "Safety briefing mandatory",
        "Follow range commands",
        "Experienced instructors present",
      ],
      equipment: "Rifles, targets, safety gear",
      duration: "2 hours",
      location: "Shooting range",
      difficulty: "Low",
    },
    {
      id: 9,
      date: "1 Dec",
      sport: "Parasailing",
      ageGroup: "18 to 35 Yrs.",
      category: "Non-Competitive",
      images: [parasailing, parasailing1, parasailing2],
      description:
        "Experience the thrill of flying with parasailing over scenic locations.",
      rules: [
        "Weight restrictions apply",
        "Weather dependent",
        "Professional guides only",
      ],
      equipment: "Parasail, harness, boat",
      duration: "15-20 minutes per person",
      location: "Lake side",
      difficulty: "Low",
    },
    {
      id: 10,
      date: "2 & 3 Dec",
      sport: "Sailing JR",
      ageGroup: "15 to 17 Yrs",
      category: "Non-Competitive",
      images: [sailing, sailing1, sailing2],
      description: "Junior sailing experience for young adventure enthusiasts.",
      rules: [
        "Life jackets mandatory",
        "Instructor supervised",
        "Basic swimming skills required",
      ],
      equipment: "Sailboats, life jackets",
      duration: "3 hours",
      location: "Lake",
      difficulty: "Low to Moderate",
    },
    {
      id: 11,
      date: "2 & 3 Dec",
      sport: "Sailing SR",
      ageGroup: "18 Yrs Above",
      category: "Non-Competitive",
      images: [sailing, sailing1, sailing2],
      description: "Sailing adventure for adults exploring water sports.",
      rules: [
        "Safety gear required",
        "Follow instructor guidance",
        "Weather permitting",
      ],
      equipment: "Sailboats, navigation equipment",
      duration: "4 hours",
      location: "Lake",
      difficulty: "Moderate",
    },
    {
      id: 12,
      date: "3 & 4 Dec",
      sport: "Scuba Diving",
      ageGroup: "15 to 17 Yrs. & 18 Above",
      category: "Non-Competitive",
      images: [scubadiving, scubadiving1, scubadiving2],
      description:
        "Explore underwater world with professional scuba diving instructors.",
      rules: [
        "Medical fitness required",
        "Certified instructors only",
        "Buddy system mandatory",
      ],
      equipment: "Scuba gear, wetsuits",
      duration: "2-3 hours",
      location: "Designated diving spot",
      difficulty: "Moderate",
    },
  ],
  demonstration: [
    {
      id: 13,
      sport: "Horse Riding",
      category: "Demonstration",
      description: "Open to All",
      images: [horseriding, horseriding1, horseriding2],
      detailedDescription:
        "Equestrian show featuring various riding styles and techniques.",
      timing: "2:00 PM - 4:00 PM",
      location: "Main Arena",
    },
    {
      id: 14,
      sport: "Bhartiya Yuddhakala",
      category: "Demonstration",
      description: "Open to All",
      images: [bhartiyyudhkala],
      detailedDescription: "Traditional Indian martial arts demonstration.",
      timing: "11:00 AM - 1:00 PM",
      location: "Cultural Stage",
    },
    {
      id: 15,
      sport: "Military Band",
      category: "Demonstration",
      description: "Open to All",
      images: [militaryband, militaryband1, militaryband2],
      detailedDescription:
        "Patriotic and ceremonial music performance by military band.",
      timing: "5:00 PM - 6:00 PM",
      location: "Main Stage",
    },
    {
      id: 16,
      sport: "Bhonsala Gymnastic",
      category: "Demonstration",
      description: "Open to All",
      images: [bhonsalagymnastic, bhonsalagymnastic1, bhonsalagymnastic2],
      detailedDescription:
        "Gymnastics display showcasing agility and physical fitness.",
      timing: "3:00 PM - 4:30 PM",
      location: "Sports Arena",
    },
  ],
  talkFilmShow: [
    {
      id: 17,
      event: "Scuba, Sailing & Mountaineering Talk Show",
      category: "Talk & Film Show",
      description: "Open to All",
      images: [
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=250&fit=crop",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop",
        "https://images.unsplash.com/photo-1536152470836-b943b246224c?w=400&h=250&fit=crop",
      ],
      detailedDescription:
        "Interactive session with experts from scuba diving, sailing and mountaineering fields.",
      speakers: [
        "John Doe - Master Scuba Diver",
        "Jane Smith - Sailing Champion",
        "Mike Johnson - Mountaineer",
      ],
      timing: "6:00 PM - 8:00 PM",
      location: "Conference Hall",
    },
    {
      id: 18,
      event: "Adventure Film Show",
      category: "Talk & Film Show",
      description: "Open to All",
      images: [
        "https://images.unsplash.com/photo-1489599809505-fb9c1e0b95c3?w=400&h=250&fit=crop",
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=250&fit=crop",
      ],
      detailedDescription:
        "Screening of award-winning adventure films and documentaries.",
      films: ["The Last Summit", "Ocean Depths", "Desert Trails"],
      timing: "8:00 PM - 10:00 PM",
      location: "Open Air Theater",
    },
  ],
};

const ImageCarousel = ({ images, sportName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Slightly longer interval for fade effect

    return () => clearInterval(interval);
  }, [images.length, isPaused]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="relative overflow-hidden rounded-t-lg group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative md:h-64 h-80 overflow-hidden">
        {/* Fade transition container */}
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${sportName} - Image ${index + 1}`}
              className={`absolute top-0 left-0 w-full md:h-64 h-80 object-cover transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=250&fit=crop";
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                goToImage(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white scale-125"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Detail Modal Component
const DetailModal = ({ sport, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-800">
              {sport.sport || sport.event}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Image Carousel */}
            <div className="mb-6">
              <ImageCarousel
                images={sport.images}
                sportName={sport.sport || sport.event}
              />
            </div>

            {/* Basic Information */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-3">
                {sport.date && (
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold text-gray-700">Date:</span>
                    <span className="text-gray-600">{sport.date}</span>
                  </div>
                )}

                {sport.ageGroup && (
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold text-gray-700">
                      Age Group:
                    </span>
                    <span className="text-gray-600">{sport.ageGroup}</span>
                  </div>
                )}

                {sport.participants && (
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold text-gray-700">
                      Participants:
                    </span>
                    <span className="text-gray-600">{sport.participants}</span>
                  </div>
                )}

                {sport.teamType && (
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold text-gray-700">
                      Team Type:
                    </span>
                    <span className="text-gray-600">{sport.teamType}</span>
                  </div>
                )}

                {sport.duration && (
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold text-gray-700">
                      Duration:
                    </span>
                    <span className="text-gray-600">{sport.duration}</span>
                  </div>
                )}

                {sport.difficulty && (
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold text-gray-700">
                      Difficulty:
                    </span>
                    <span className="text-gray-600">{sport.difficulty}</span>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                {sport.location && (
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold text-gray-700">
                      Location:
                    </span>
                    <span className="text-gray-600">{sport.location}</span>
                  </div>
                )}

                {sport.equipment && (
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold text-gray-700">
                      Equipment:
                    </span>
                    <span className="text-gray-600">{sport.equipment}</span>
                  </div>
                )}

                {sport.timing && (
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold text-gray-700">Timing:</span>
                    <span className="text-gray-600">{sport.timing}</span>
                  </div>
                )}

                {sport.speakers && (
                  <div className="border-b pb-2">
                    <span className="font-semibold text-gray-700 block mb-2">
                      Speakers:
                    </span>
                    <ul className="list-disc list-inside text-gray-600">
                      {sport.speakers.map((speaker, index) => (
                        <li key={index}>{speaker}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {sport.films && (
                  <div className="border-b pb-2">
                    <span className="font-semibold text-gray-700 block mb-2">
                      Films:
                    </span>
                    <ul className="list-disc list-inside text-gray-600">
                      {sport.films.map((film, index) => (
                        <li key={index}>{film}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Description
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {sport.description || sport.detailedDescription}
              </p>
            </div>

            {/* Rules */}
            {sport.rules && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Rules & Guidelines
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {sport.rules.map((rule, index) => (
                    <li key={index}>{rule}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Buttons */}
            {/* <div className="flex gap-4 pt-4 border-t">
              <button
                onClick={() => {
                  onClose();
                  // You can integrate your popup context here
                  // openPopup();
                }}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
              >
                Register Now
              </button>
              <button
                onClick={onClose}
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                Close
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

// SportCard Component with Image Carousel
const SportCard = ({ sport }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { openPopup } = usePopup();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer flex flex-col h-full border border-gray-200">
        {/* Image Carousel Section */}
        <ImageCarousel
          images={sport.images}
          sportName={sport.sport || sport.event}
        />

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
                <span className="font-semibold">Age Group:</span>{" "}
                {sport.ageGroup}
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
                <span className="font-semibold">Team Type:</span>{" "}
                {sport.teamType}
              </p>
            )}

            {sport.description && (
              <p className="text-gray-600 text-sm">
                <span className="font-semibold">Status:</span>{" "}
                {sport.description}
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center pt-4 mt-2 border-t">
            <button
              onClick={(e) => {
                e.stopPropagation();
                openPopup();
              }}
              className="text-green-600 hover:text-green-800 font-semibold py-1 transition duration-300 cursor-pointer text-sm"
            >
              Register Now
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                openModal();
              }}
              className="text-blue-600 hover:text-blue-800 font-semibold py-1 transition duration-300 cursor-pointer text-sm"
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      <DetailModal sport={sport} isOpen={isModalOpen} onClose={closeModal} />
    </>
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
                  openPopup();
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
