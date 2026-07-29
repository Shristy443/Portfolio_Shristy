import React from "react";
// const ProjectCard=({title, description, image, tech})=>{
//     return(
//         <div className='bg-dark-300 rounded-2xl overflow-hidden hover:translate-y-2 translate duration-300 cursor-pointer>
//         <img src={image} alt={title} className='w-full h-60 object-cover'/>
//         <div className='p-6'>
//             <h3>{title}</h3>
//             <p>{description}

//             </p>
//             </div>
//         </div>
//         </div>
//     )
// }
// import Projects from '../components/projects'

// const ProjectCard = ({ title, description, image, tech }) => {
//   return (
//     <div className="bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer">
//       <img
//         src={image}
//         alt={title}
//         className="w-full h-60 object-cover"
//       />

//       <div className="p-6">
//         <h3 className='text-xl font-semibold mb-2'>{title}</h3>

//         <p className='text-gray-400 mb-4'>{description}</p>

//         <div className='flex flex-wrap gap-2 mb-4'>
//           {
//             tech.map((item, index)  => (
//               <span key={index} className='px-3 py-1 bg-dark-400 rounded-full text-sm'>{item}</span>
//             ))}
//         </div>
//         <div className='flex gap-2'>
//             <a href='https://wanderlust-website-3jlp.onrender.com/listings' className='flex-1 text-center px-4 py-2 bg-purple rounded-lg font-medium hover:bg=purple-700 transition
//             duration-300'>
//                 View Demo
//             </a>
//             <a href='https://github.com/Shristy443/WanderLust_Website.git' className="flex-1 text-center px-4 py-2 border border-purple font-medium rounded-lg hover:bg-purple/20 transition duration-300">Code</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;

const ProjectCard = ({
  title,
  description,
  image,
  tech,
  demo,
  code,
}) => {
  return (
    <div className="bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer">
      {/* Project Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover"
      />

      {/* Project Details */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>

        <p className="text-gray-400 mb-4">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-dark-400 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <a
            href={demo !== "#" ? demo : undefined}
            target={demo !== "#" ? "_blank" : undefined}
            rel="noopener noreferrer"
            className={`flex-1 text-center px-4 py-2 rounded-lg font-medium transition duration-300 ${
              demo === "#"
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-purple hover:bg-purple-700"
            }`}
          >
            {demo === "#" ? "Coming Soon" : "View Demo"}
          </a>

          <a
            href={code !== "#" ? code : undefined}
            target={code !== "#" ? "_blank" : undefined}
            rel="noopener noreferrer"
            className={`flex-1 text-center px-4 py-2 rounded-lg border font-medium transition duration-300 ${
              code === "#"
                ? "border-gray-500 text-gray-500 cursor-not-allowed"
                : "border-purple hover:bg-purple/20"
            }`}
          >
            {code === "#" ? "Private" : "Code"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;