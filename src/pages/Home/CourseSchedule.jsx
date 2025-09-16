// components/CourseSchedule.jsx
import { motion } from "framer-motion";

const CourseSchedule = () => {
  const courses = [
    {
      id: 1,
      course: "Diwali Adventure Course",
      date: "24 to 27 Oct, 2025",
      days: 4,
      age: "12 to 18 Yrs",
      batch: "Mix Batch",
    },
    {
      id: 2,
      course: "Navigation & Wilderness Survival Course",
      date: "28 to 31 Oct, 2025",
      days: 4,
      age: "12yrs & Above",
      batch: "Mix Batch",
    },
    {
      id: 3,
      course: "Introductory Rafting & Kayaking Course",
      date: "28 to 31 Oct, 2025",
      days: 4,
      age: "12yrs & Above",
      batch: "Mix Batch",
    },
    {
      id: 4,
      course: "Winter Adventure Course",
      date: "25 to 28 Dec, 2025",
      days: 4,
      age: "12 to 18 Yrs",
      batch: "Mix Batch",
    },
    {
      id: 5,
      course: "Basic Rock Climbing Course",
      date: "28 to 31 Dec, 2025",
      days: 4,
      age: "12yrs & above",
      batch: "Mix Batch",
    },
  ];

  return (
    <section id="schedule" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Course Schedule 2025
        </motion.h2>
        <motion.p
          className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Plan your adventure with our comprehensive course schedule
        </motion.p>

        <motion.div
          className="overflow-x-auto bg-white rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sr.No.
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Days
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Age
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Batch
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {courses.map((course, index) => (
                <motion.tr
                  key={course.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {course.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">
                    {course.course}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {course.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {course.days}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {course.age}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {course.batch}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          className="mt-16 bg-white p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Important Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-[#61693b]">
                Rules & Regulations
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Do not leave the campsite without permission</li>
                <li>No weapons allowed on premises</li>
                <li>
                  Use of mobile phones/electronic devices is prohibited during
                  camp
                </li>
                <li>Follow all instructions from instructors and camp staff</li>
                <li>
                  Participants breaking rules may be debarred from the camp
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3 text-[#61693b]">
                Required Equipment & Clothing
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Tracksuit and T-Shirts (no shorts or sleeveless apparel)
                </li>
                <li>Sports or Hunter shoes, socks, and slippers</li>
                <li>Water bottle (1-2 Lt.), torch, and small sack</li>
                <li>Personal toiletries and medications</li>
                <li>Bed sheet, blanket (for winter), and pillow</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseSchedule;
