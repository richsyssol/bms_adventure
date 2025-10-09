import React from "react";
import { useNavigate } from "react-router-dom";

import advelogo from "../../assets/festival/BhonsalaAdventureSporfestival.png";
import chmeslogo from "../../assets/festival/CHMES-New-Logo_.png";
// Import the PDF file
import rulesPdf from "../../assets/rulesandregulation/General_Rules_and_Regulation_for_Adventure_Festival.pdf";

// Rules and Regulations Data
const rulesData = {
  sections: [
    {
      title: "1. Eligibility & Registration",
      content: [
        {
          subtitle: "1.1. Age Groups",
          points: [
            "Category A: 12–17 years (must provide medical fitness certificate)",
            "Category B: 18–35 years (must provide medical fitness certificate)",
            "Category C: 36–65 years (must provide medical fitness certificate)",
          ],
        },
        {
          subtitle: "1.2. Registration",
          points: [
            "Participants must complete registration forms, submit ID proof, and sign the indemnity Form.",
            "Entry fees must be paid in advance; no on-the-spot registrations allowed.",
          ],
        },
        {
          subtitle: "1.3. Medical Fitness",
          points: [
            "Mandatory submission of a fitness certificate from a certified medical practitioner.",
            "Any chronic illness, recent surgery, or injury must be disclosed.",
          ],
        },
      ],
    },
    {
      title: "2. General Conduct",
      content: [
        {
          points: [
            "Respect for nature and fellow participants is mandatory.",
            "Littering, damaging flora/fauna, or misconduct towards staff or other participants may lead to disqualification.",
            "Alcohol, recreational drugs, or performance-enhancing substances are strictly prohibited.",
            "Safety gear (life jackets) provided by organizers must be worn at rafting.",
            "Timing will be taken at the check point after four team members arrive.",
          ],
        },
      ],
    },
    {
      title: "3. Equipment & Gear",
      content: [
        {
          points: [
            "Organizers' Equipment: Rafts, ropes, bouldering mats, and obstacle course setups will be provided where applicable.",
            "Personal Gear: Participants are responsible for their own shoes, gloves, hydration packs, and clothing.",
            "Any modification of provided equipment without approval will result in penalties.",
          ],
        },
      ],
    },
    {
      title: "4. Event-Specific Rules - Competition Sports",
      content: [
        {
          subtitle: "4.1. Tri-Venture (Trekking, Rafting, Mountain Cycling)",
          points: [
            "Teams of 4 members must compete in all three disciplines.",
            "Timing from each discipline will be combined to calculate total performance.",
            "Mechanical issues during cycling must be resolved by the team itself (self-supported).",
            "Transition zones time between events must be within the limit communicated by the organizing team before event. Exceeding time incurs penalties.",
            "The rules applicable for Mountain cycling, Rafting & Trekking event mentioned below are applicable for respective event in tri-venture.",
            "If a team does not complete the first event within the given time, they will be disqualified for the next event.",
          ],
        },
        {
          subtitle: "4.2. Mountain Cycling",
          points: [
            "Helmets are mandatory.",
            "Drafting behind vehicles is prohibited.",
            "Any shortcuts or deviation from the marked trail results in disqualification.",
            "Riders must yield to overtaking competitors on narrow paths.",
          ],
        },
        {
          subtitle: "4.3. Trekking",
          points: [
            "Trekkers must stick to designated trails",
            "Any shortcuts or deviation from the marked trail results in disqualification.",
            "Any reckless behavior will attract disqualification.",
          ],
        },
        {
          subtitle: "4.4. Rafting",
          points: [
            "Life jackets are mandatory.",
            "Teams must stay in their assigned rafts; switching is not allowed.",
            "Intentional capsizing or rough play is prohibited.",
            "In case of a flip, all team members must account for one another before proceeding.",
          ],
        },
        {
          subtitle: "4.5. Bouldering",
          points: [
            "Each climber gets two attempts per problem.",
            "Completing designated boulder route within given time will be counted & deviation from the route will be penalized",
            "Time limits per problem will be enforced.",
          ],
        },
        {
          subtitle: "4.6. Rope & Obstacle Course",
          points: [
            "Touching marked 'out-of-bounds' areas incurs penalties.",
            "Skipping any obstacle results in a penalty or disqualification.",
          ],
        },
      ],
    },
    {
      title: "5. Non-Competition Sports on introductory format",
      content: [
        {
          subtitle: "5.1. Parasailing",
          points: [
            "Participants must follow the instructor's directions.",
            "If participant unable the follow the direction of instructor correctly by any reason they will be disqualified for taking flight.",
          ],
        },
        {
          subtitle: "5.2. River Sailing",
          points: [
            "Life jacket is required.",
            "Sail boats are powered with the wind so sailing will be dependable on the weather conditions.",
            "Beginners must attend the orientation session.",
          ],
        },
        {
          subtitle: "5.3. Scuba Diving",
          points: [
            "Beginners must undergo introductory training",
            "Participants must follow the instructor's directions.",
            "If participant unable the follow the direction of instructor correctly by any reason they will be disqualified for taking part in scuba diving.",
          ],
        },
        {
          subtitle: "5.4. Rifle Shooting",
          points: [
            "Beginners must undergo introductory training",
            "Participants must follow the instructor's directions.",
            "If participant unable the follow the direction of instructor correctly by any reason they will be disqualified for taking part in rifle shooting.",
          ],
        },
      ],
    },
    {
      title: "6. Environmental Responsibility",
      content: [
        {
          points: [
            "Use only eco-friendly materials for personal use",
            "Follow Leave No Trace principles at all times.",
          ],
        },
      ],
    },
    {
      title: "7. Timing & Penalties",
      content: [
        {
          points: [
            "Late starts may not be compensated.",
            "Minor or Major Violation attract to appropriate penalties.",
            "Appeals against penalties must be lodged in writing with appellate committee. Their decision will be final and binding.",
          ],
        },
      ],
    },
    {
      title: "8. Safety & Emergency Procedures",
      content: [
        {
          points: [
            "Participants must assist fellow competitors in distress and report accidents immediately.",
            "Any unforeseen situation may result in event suspension or rerouting.",
          ],
        },
      ],
    },
    {
      title: "9. Prizes & Recognition",
      content: [
        {
          points: [
            "Tri-Venture rankings will be based on cumulative performance across all three activities.",
            "Ranking of all competitive team sports will be based on cumulative performance of respective sports.",
            "Separate awards for each group & gender categories.",
            "Certificates of participation for all finishers.",
          ],
        },
      ],
    },
    {
      title: "10. Liability",
      content: [
        {
          points: [
            "The organizers are not responsible for injuries, equipment loss, or accidents caused by negligence or rule violation or by any other reasons.",
            "By registering, participants accept all risks inherent in adventure sports.",
          ],
        },
      ],
    },
    {
      title: "11. Judge",
      content: [
        {
          points: [
            "An Adventure Festival Judge Panel will be appointed to resolve problems and queries; of the participants following fair decision-making practice. Their decision shall be final and binding on all participants.",
          ],
        },
      ],
    },
  ],
};

const RulesAndRegulations = () => {
  const navigate = useNavigate();

  const downloadPDF = () => {
    // Create a temporary anchor element to trigger download
    const element = document.createElement("a");
    element.href = rulesPdf;
    element.download =
      "Bhonsala_Adventure_Sports_Festival_Rules_Regulations.pdf";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // Alternative method: Open in new tab and let browser handle download
  const openPDFInNewTab = () => {
    window.open(rulesPdf, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 pt-70 py-8">
      <div className="container mx-auto px-4 max-w-10xl">
        {/* Header with Logos */}
        <header className="text-center mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-4 border-yellow-400 relative">
            {/* Left Logo */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center p-2">
                <img
                  src={chmeslogo}
                  alt="CHMES Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Right Logo */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center p-2">
                <img
                  src={advelogo}
                  alt="Adventure Sports Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Mobile Logos */}
            <div className="flex justify-center items-center gap-6 mb-6 lg:hidden">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-2">
                <img
                  src={chmeslogo}
                  alt="CHMES Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-2">
                <img
                  src={advelogo}
                  alt="Adventure Sports Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:px-24">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                C.H.M.E.S
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-2">
                BHONSALA ADVENTURE SPORTS
              </h2>
              <h3 className="text-xl md:text-2xl font-bold text-red-600 mb-4">
                FESTIVAL 2025
              </h3>
              <div className="w-20 h-1 bg-yellow-500 mx-auto mb-4"></div>
              <h4 className="text-2xl md:text-3xl font-bold text-green-800">
                Rules & Regulations
              </h4>
            </div>
          </div>

          {/* Download Buttons */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            <button
              onClick={downloadPDF}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
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
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Rules (PDF)
            </button>

            <button
              onClick={openPDFInNewTab}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
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
              View PDF
            </button>

            <button
              onClick={() => navigate("/festival")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
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
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Festival
            </button>
          </div>
        </header>
        {/* Rules Content */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden mb-8">
          <div className="lg:flex">
            {/* Sidebar Navigation */}
            <div className="lg:w-1/4 bg-gray-800 text-white p-6">
              <h3 className="text-xl font-bold mb-6">Quick Navigation</h3>
              <ul className="space-y-3">
                {rulesData.sections.map((section, index) => (
                  <li key={index}>
                    <a
                      href={`#section-${index}`}
                      className="block py-2 px-3 rounded-lg hover:bg-gray-700 transition duration-200 text-sm"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Download Button in Sidebar */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <button
                  onClick={downloadPDF}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 flex items-center justify-center gap-2 text-sm"
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
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download Rules & Regulation
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4 p-6 lg:p-8">
              <div id="rules-content">
                {rulesData.sections.map((section, index) => (
                  <section
                    key={index}
                    id={`section-${index}`}
                    className="mb-12 last:mb-0 scroll-mt-20"
                  >
                    <div className="flex items-start mb-6">
                      <div className="bg-blue-100 text-blue-800 rounded-lg p-3 mr-4 flex-shrink-0">
                        <span className="text-lg font-bold">{index + 1}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 pt-1">
                        {section.title}
                      </h3>
                    </div>

                    <div className="ml-4 lg:ml-16 space-y-8">
                      {section.content.map((content, contentIndex) => (
                        <div
                          key={contentIndex}
                          className="border-l-2 border-blue-200 pl-4 lg:pl-6"
                        >
                          {content.subtitle && (
                            <h4 className="text-xl font-semibold text-gray-700 mb-4">
                              {content.subtitle}
                            </h4>
                          )}
                          <ul className="space-y-3">
                            {content.points.map((point, pointIndex) => (
                              <li
                                key={pointIndex}
                                className="flex items-start text-gray-600 leading-relaxed"
                              >
                                <span className="text-green-500 mr-3 mt-1 flex-shrink-0">
                                  •
                                </span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
          >
            Back to Top
          </button>
          <button
            onClick={() => navigate("/festival")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
          >
            Back to Festival
          </button>
        </div>
      </div>
    </div>
  );
};

export default RulesAndRegulations;
