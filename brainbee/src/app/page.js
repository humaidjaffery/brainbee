import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const HomePage = () => {
  return (
    <div className="bg-sky-200 min-h-screen text-black font-sans">

      {/* User Info Section */}
      <section className="p-4 rounded-lg w-full">
        <div className="flex items-center justify-center w-full my-10">
          <h1 className='text-4xl'>The ULTIMATE Brain Bee study site</h1>
        </div>
      </section>

      <ul class="honeycomb">
          <li class="honeycomb-cell">
              {/* <img class="honeycomb-cell_img" src="img/work-1.jpg"> */}
              <div class="honeycomb-cell_title">Neurotransmitters</div>
          </li>
          <li class="honeycomb-cell">
              {/* <img class="honeycomb-cell_img" src="img/work-2.jpg"> */}
              <div class="honeycomb-cell_title">Brian Anatomy</div>
          </li>
          <li class="honeycomb-cell">
              {/* <img class="honeycomb-cell_img" src="img/Work3.jpg"> */}
              <div class="honeycomb-cell_title">Neural Networks</div>
          </li>
          <li class="honeycomb-cell">
              {/* <img class="honeycomb-cell_img" src="img/work4.jpg"> */}
              <div class="honeycomb-cell_title">Memory Systems</div>
          </li>
          <li class="honeycomb-cell">
              {/* <img class="honeycomb-cell_img" src="img/work5.jpg"> */}
              <div class="honeycomb-cell_title">Neurodegenerative Diseases</div>
          </li>
          <li class="honeycomb-cell">
              {/* <img class="honeycomb-cell_img" src="img/work06.jpg"> */}
              <div class="honeycomb-cell_title">Neurotechnology</div>
          </li>
          <li class="honeycomb-cell">
              {/* <img class="honeycomb-cell_img" src="img/work07.jpg" /> */}
              <div class="honeycomb-cell_title"></div>
          </li>
          <li class="honeycomb-cell honeycomb_Hidden">
          </li>
        </ul>

      {/* Units Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-10 justify-center align-middle">
        {(() => {
          const units = [
            {
              title: "Neurotransmitters",
              subtitle: "Learn about chemical messengers in the brain",
              topics: ["Serotonin", "Dopamine", "Acetylcholine", "GABA"],
              progress: 100,
              gradient: "from-orange-400 to-rose-500",
              gradientHex: ["#E8A917", "#EDBA42"]
            },
            {
              title: "Brain Anatomy",
              subtitle: "Explore the structure of the brain",
              topics: ["Cerebrum", "Cerebellum", "Brain Stem", "Cortex"],
              progress: 75,
              gradient: "from-purple-400 to-pink-500",
              gradientHex: ["#A855F7", "#EC4899"]
            },
            {
              title: "Neural Networks",
              subtitle: "Understanding how neurons connect",
              topics: ["Synapses", "Dendrites", "Axons", "Myelin"],
              progress: 50,
              gradient: "from-blue-400 to-teal-500",
              gradientHex: ["#60A5FA", "#14B8A6"]
            },
            {
              title: "Memory Systems",
              subtitle: "How we form and recall memories",
              topics: ["Encoding", "Storage", "Retrieval", "Forgetting"],
              progress: 25,
              gradient: "from-green-400 to-blue-500",
              gradientHex: ["#4ADE80", "#3B82F6"]
            },
            {
              title: "5",
              subtitle: "How we form and recall memories",
              topics: ["Encoding", "Storage", "Retrieval", "Forgetting"],
              progress: 25,
              gradient: "from-green-400 to-blue-500",
              gradientHex: ["#E8A917", "#EDBA42"]
            },
            {
              title: "6",
              subtitle: "How we form and recall memories",
              topics: ["Encoding", "Storage", "Retrieval", "Forgetting"],
              progress: 25,
              gradient: "from-green-400 to-blue-500",
              gradientHex: ["#E8A917", "#EDBA42"]
            },
            {
              title: "7",
              subtitle: "How we form and recall memories",
              topics: ["Encoding", "Storage", "Retrieval", "Forgetting"],
              progress: 25,
              gradient: "from-green-400 to-blue-500",
              gradientHex: ["#E8A917", "#EDBA42"]
            },
          ];
          
          // Render each unit
          return units.map((unit, index) => (
            <div 
              key={index} 
              className="rounded-2xl p-6 shadow-lg w-full relative overflow-hidden min-h-[180px] outline outline-black"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                background: `linear-gradient(135deg, ${unit.gradientHex ? unit.gradientHex[0] : '#FF6B00'}, ${unit.gradientHex ? unit.gradientHex[1] : '#FFA500'})`
              }}
            >
              {/* Title and Subtitle */}
              <div className="mb-3">
                <h3 className="text-white font-bold text-lg mb-1">
                  {unit.title}
                </h3>
                <p className="text-white/90 text-xs mb-4">
                  {unit.subtitle}
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-white/40 mb-3"></div>


              {/* Topics Section */}
              <div className="mb-3">
                <div className="flex items-center justify-between mb-1.5">
                  <p className="text-white font-semibold text-xs">
                  Topics covered:
                  </p>
                  <span className="text-white/90 text-xs font-medium">{unit.topics.length} topics</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {unit.topics.map((topic, topicIndex) => (
                    <div
                      key={topicIndex}
                      className="bg-white/10 rounded-lg px-4 py-2 text-white text-sm"
                    >
                      {topic}
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-white font-medium text-xs">Your progress</p>
                  <span className="text-white font-semibold text-xs">{unit.progress}%</span>
                </div>
                <div className="mt-4 h-2 rounded-full bg-white/20">
                  <div 
                    className="h-full rounded-full bg-white transition-all duration-300"
                    style={{ width: `${unit.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Footer Buttons */}
              <div className="flex gap-3 mt-4">
                <button className="px-6 py-3 rounded-full font-medium transition-all duration-200 text-white flex-1" style={{ backgroundColor: '#FFA000' }}>
                  <span className="mr-2">🚀</span> Start Learning
                </button>
                <button className="px-6 py-3 rounded-full font-medium transition-all duration-200 bg-emerald-500 hover:bg-emerald-600 text-white flex-1">
                  <span className="mr-2">✏️</span> Practice
                </button>
              </div>
            </div>
          ));
        })()}
      </section>
    </div>
  );
};

export default HomePage;