import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center text-center bg-gray-100 p-8">
      <div className="text-5xl font-serif italic m-6 text-gray-800">
        ABOUT US
      </div>
      <div className="max-w-4xl p-6 bg-white rounded-lg shadow-md overflow-auto h-[75vh] text-gray-700 leading-relaxed">
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nulla, harum, iste earum alias porro voluptatem aliquid nam delectus ipsa ex minus aspernatur eligendi accusamus excepturi cumque eveniet ut asperiores!
        </p>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aperiam porro sequi ea, eos qui at quae labore natus voluptatibus voluptatem, nobis blanditiis facilis quos officia dolore esse earum laudantium.
        </p>
        <p className="mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, mollitia dolorum numquam, tenetur voluptatum itaque, exercitationem iste iusto quos veniam repellendus nam beatae possimus sapiente! Molestias voluptatem alias fugiat minima?
        </p>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, corporis facilis voluptatibus quia provident natus cupiditate saepe excepturi expedita doloremque, eius vitae. Esse possimus labore voluptas rerum, cum quibusdam odio!
        </p>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ducimus natus error doloremque harum unde quas praesentium expedita numquam dolor quia a officia, fuga obcaecati atque quidem non possimus suscipit!
        </p>
        {/* Add more paragraphs as needed, keeping a consistent structure */}
      </div>
    </div>
  );
};

export default About;
