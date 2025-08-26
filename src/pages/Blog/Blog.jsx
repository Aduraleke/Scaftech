

const blogs = [
  {
    id: 1,
    title: "5 Types of Fire Extinguishers And Their Uses.",
    category: "Uncategorized",
    date: "February 21, 2025",
    image: "/Fire form wet.jpg",
  },
  {
    id: 2,
    title: "NDT Career Guide: Explore Industry Opportunities.",
    category: "Non-Destructive Testing",
    date: "February 4, 2025",
    image: "/NDT-img.jpg",
  },
  {
    id: 3,
    title: "Master the Art of Lifting with Scaftech's Appointed Person",
    category: "Training",
    date: "January 24, 2025",
    image: "/lifting-operation-img.jpg",
  },
  {
    id: 4,
    title:
      "The Heimlich Maneuver: A Life-Saving Skill To Rescue A Choking Victim.",
    category: "Health and Safety",
    date: "January 14, 2025",
    image: "/HeimlichManeuver.jpg",
  },
  {
    id: 5,
    title: "Master Mobile Crane Operations with Scaftech.",
    category: "Training",
    date: "December 6, 2024",
    image: "/towercane-img.jpg",
  },
  {
    id: 6,
    title: "Standard Best Practices For Rope Access Operations.",
    category: "Training",
    date: "November 27, 2024",
    image: "/PRA716.jpg",
  },
  {
    id: 7,
    title: "10 Essential Employability Skills in the Oil and Gas Industry.",
    category: "Training",
    date: "November 22, 2024",
    image: "/confine-space-img.jpg",
  },
  {
    id: 8,
    title: "HAVS TRAINING: PROTECTING YOUR HANDS AND ARMS AT WORK.",
    category: "Training",
    date: "February 21, 2025",
    image: "/audit-img.jpg",
  },
  {
    id: 9,
    title:
      "From Bystander to Hero: Maximize Safety with Scaftech's Basic First Aid",
    category: "Uncategorized",
    date: "November 14, 2024",
    image: "/QC-2-img.jpg",
  },
  {
    id: 10,
    title: "Offshore Orientation Training",
    category: "Training",
    date: "November 6, 2024",
    image: "/offshore-hebron-boat.jpg",
  },
];

const Blog = () => {
  return (
    <section className="bg-[#0a192f] py-12 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Our <span className="text-[#07bc0c]">Latest Articles</span>
          </h1>
          <p className="mt-3 text-gray-300 text-sm sm:text-base">
            Stay updated with our latest news, insights, and training guides.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Blog Image */}
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-4 left-4 bg-[#07bc0c] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  {blog.category}
                </span>
              </div>

              {/* Blog Content */}
              <div className="p-5">
                <h2 className="text-lg font-bold text-[#0a192f] group-hover:text-[#07bc0c] transition-colors duration-300">
                  {blog.title}
                </h2>
                <p className="text-gray-500 text-sm mt-3">{blog.date}</p>
                <a
                  href="#"
                  className="inline-block mt-4 text-[#07bc0c] text-sm font-semibold hover:text-[#059a0a] transition-colors"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
