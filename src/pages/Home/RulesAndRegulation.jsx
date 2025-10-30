import React from "react";
import { useNavigate } from "react-router-dom";

import advelogo from "../../assets/festival/BhonsalaAdventureSporfestival.png";
import chmeslogo from "../../assets/festival/CHMES-New-Logo_.png";
// Import the PDF file
import rulesPdf from "../../assets/rulesandregulation/BASf_Rules_and_regulations.pdf";

// Rules and Regulations Data
const rulesData = {
  sections: [
    {
      title: "1. Eligibility & Registration",
      content: [
        {
          subtitle: "1.1. Age Groups (Male-Female separate)",
          points: ["12–17 years", "18–35 years", "36–65 years"],
        },
        {
          subtitle: "1.2. Registration",
          points: [
            "Participants must complete the registration form, submit valid ID proof, and sign the indemnity form.",
            "Entry fees must be paid in advance; on-the-spot registrations will not be accepted.",
          ],
        },
        {
          subtitle: "1.3. Medical Fitness",
          points: [
            "A fitness certificate from a registered MBBS practitioner is mandatory.",
            "Any chronic illness, recent surgery, or injury must be disclosed in the medical form and at the time of registration.",
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
            "Littering, damaging flora or fauna, or misconduct toward staff or participants may lead to disqualification.",
            "Alcohol, recreational drugs, or performance-enhancing substances are strictly prohibited.",
            "Safety gear and instructions provided by the organizers must be followed at all times.",
            "The team's timing will be recorded only after all team members have arrived.",
          ],
        },
      ],
    },
    {
      title: "3. Equipment & Gear",
      content: [
        {
          points: [
            "Organizers' Equipment: Makeshift rafts, life jackets, ropes, crash pads, climbing gear, maps, compasses, and obstacle course setups will be provided where applicable.",
            "Personal Gear: Participants must bring their own shoes, gloves, cycling helmet, water bottle, and suitable clothing.",
            "Return Policy: Participants are responsible for returning all safety gear and items provided by the organizers. In case of loss or damage, the replacement cost will be charged to the participant, and this may also affect their score.",
          ],
        },
      ],
    },
    {
      title: "4. Guidelines for Competitive Events",
      content: [
        {
          subtitle: "4.1. Tri-Venture (Trekking, Rafting, Mountain Cycling)",
          points: [
            "Teams of four members must compete in all three disciplines.",
            "Cumulative timing from each discipline will determine the total performance.",
            "Mechanical issues during cycling must be resolved by the team itself (self-supported).",
            "Transition times between events must remain within the limits set by the organizing team; exceeding them will attract penalties.",
            "Rules for individual events (mountain cycling, rafting, trekking) also apply to the Tri-Venture.",
            "If a team fails to complete any event within the given time, it will be disqualified from the next event.",
          ],
        },
        {
          subtitle: "4.2. Mountain Cycling",
          points: [
            "Helmets are mandatory.",
            "Drafting behind vehicles is prohibited.",
            "Any shortcuts or trail deviations will result in disqualification.",
            "Overtaking on narrow or risky paths is strictly prohibited.",
          ],
        },
        {
          subtitle: "4.3. Trekking",
          points: [
            "Trekkers must stick to the designated trails.",
            "Any shortcuts or deviation will lead to disqualification.",
            "Reckless behaviour will attract penalties or disqualification.",
          ],
        },
        {
          subtitle: "4.4. Rafting",
          points: [
            "Life jackets are mandatory.",
            "Teams must stay in their assigned rafts; switching is not allowed.",
            "Intentional capsizing or rough play is strictly prohibited.",
          ],
        },
        {
          subtitle: "4.5. Bouldering",
          points: [
            "Each climber gets two attempts per problem.",
            "Completion of a designated route within the given time will be counted; any deviation will be penalized.",
            "Time limits per problem will be strictly enforced.",
          ],
        },
      ],
    },
    {
      title: "5. Non-Competitive (Introductory) Sports",
      content: [
        {
          subtitle: "5.1. Parasailing",
          points: [
            "Participants must follow all instructor directions.",
            "Failure to follow instructions correctly will result in disqualification from flight.",
          ],
        },
        {
          subtitle: "5.2. Sailing",
          points: [
            "Life jackets are mandatory.",
            "Sailing depends on weather conditions, as sailboats are wind-powered.",
            "Beginners must attend the orientation session.",
            "Participants must follow all instructor instructions.",
          ],
        },
        {
          subtitle: "5.3. Scuba Diving",
          points: [
            "Beginners must undergo introductory training.",
            "Participants must follow all instructor directions.",
            "Failure to follow instructions will lead to disqualification.",
          ],
        },
        {
          subtitle: "5.4. Rifle Shooting",
          points: [
            "Beginners must undergo introductory training.",
            "Participants must follow all instructor directions.",
            "Failure to do so will result in disqualification.",
          ],
        },
      ],
    },
    {
      title: "6. Environmental Responsibility",
      content: [
        {
          points: [
            "Use only eco-friendly materials for personal use.",
            "Follow 'Leave No Trace' principles at all times.",
          ],
        },
      ],
    },
    {
      title: "7. Timing & Penalties",
      content: [
        {
          points: [
            "Late starts will not be compensated.",
            "Minor or major violations will attract appropriate penalties.",
            "Appeals against penalties must be submitted in writing to the appellate committee. Their decision will be final and binding.",
          ],
        },
      ],
    },
    {
      title: "8. Safety & Emergency Procedures",
      content: [
        {
          points: [
            "Participants must assist fellow competitors in distress and report any incidents immediately.",
            "In unforeseen situations, events may be suspended or rerouted by organizers.",
            "All participants must follow the instructions of instructors and volunteers during every event.",
          ],
        },
      ],
    },
    {
      title: "9. Prizes & Recognition",
      content: [
        {
          points: [
            "Tri-Venture rankings will be based on cumulative performance across all three events.",
            "Rankings in all team competitive sports will be based on overall performance.",
            "Separate awards will be given for each age group and gender category.",
            "Certificates and medals will be awarded to all finishers.",
            "If fewer than five teams participate in any event, only the 1st prize will be awarded.",
          ],
        },
      ],
    },
    {
      title: "10. Liability",
      content: [
        {
          points: [
            "The organizers are not responsible for injuries, equipment loss, or accidents resulting from negligence, rule violations, or any other reason.",
            "By registering, participants accept all risks associated with adventure sports.",
          ],
        },
      ],
    },
    {
      title: "11. Appeal Panel",
      content: [
        {
          points: [
            "An Adventure Sports Festival Appeal Panel will be appointed to resolve complaints, problems, and queries of participants, following fair decision-making practices. Their decision shall be final and binding.",
          ],
        },
      ],
    },
    {
      title: "12. Cancellation Policy",
      content: [
        {
          subtitle: "12.1. No Refunds",
          points: [
            "Once registration is completed, no refund will be granted under any circumstances (including withdrawal, absence, or disqualification).",
          ],
        },
        {
          subtitle: "12.2. Replacement of Team Member",
          points: [
            "Replacement of a team member is allowed until one day prior to the event and only after completing all formalities with the organising committee.",
          ],
        },
      ],
    },
    {
      title: "13. Organisational Rights",
      content: [
        {
          points: [
            "The organizing institution reserves the right to use photographs and videos taken during the event for publicity, promotion, or advertising purposes in any media format.",
            "In case of climatic conditions or any other unforeseen circumstances, the organisation reserves the right to change the event schedule or cancel the event.",
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
    element.download = "BASf_Rules_and_regulations.pdf";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // Alternative method: Open in new tab and let browser handle download
  const openPDFInNewTab = () => {
    window.open(rulesPdf, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 md:py-8 py-3">
      <div className="container mx-auto px-4 max-w-10xl">
        {/* Header with Logos */}
        <header className="text-center md:mb-12 mb-4">
          <div className="bg-white rounded-2xl shadow-xl p-2 mb-3 md:p-8 md:mb-8 border-4 border-yellow-400 relative">
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
            <div className="flex justify-center items-center gap-6 md:mb-6 lg:hidden">
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
            <div className="lg:px-24">
              <h1 className="text-1xl md:text-4xl font-bold text-gray-800 md:mb-2">
                C.H.M.E.S
              </h1>
              <h2 className="text-1xl md:text-3xl font-bold text-blue-800 md:mb-2">
                BHONSALA ADVENTURE SPORTS
              </h2>
              <h3 className="text-1xl md:text-2xl font-bold text-red-600 md:mb-4">
                FESTIVAL 2025
              </h3>
              <h4 className="text-1xl md:text-3xl font-bold text-green-800">
                Rules & Regulations
              </h4>
            </div>
          </div>

          {/* Download Buttons */}
          <div className="flex justify-center gap-4 md:mb-8 mb-3 flex-wrap">
            <button
              onClick={downloadPDF}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-2 md:py-3 md:px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
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
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-2 md:py-3 md:px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
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
