import img from "@/assets/project-card/project-card-img.jpg";
import {
  resetAiExtractState,
  setTheProjectId,
} from "@/redux/features/AI-intrigratoin/aiFileDataSlice";
import image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";
interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  serviceTitle: string;
  id: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  description,
  id,
  serviceTitle,
}) => {
  const router = useRouter();

  const dispatch = useDispatch();
  console.log(id);
  console.log(`Starting service: ${image}`);
  const handleServiceClick = (serviceTitle: string): void => {
    console.log(`Starting service: ${serviceTitle}`);
    // Add your service navigation logic here
  };
  // routing and id catch
  const handleProjectId = (serviceTitle: string) => {
    console.log("image", serviceTitle);
    dispatch(resetAiExtractState()); // all state fields go back to initialState
    dispatch(
      setTheProjectId({
        title,
        image,
        description,
        id,
      })
    );

    console.log("image", serviceTitle);
    if (serviceTitle.toLocaleLowerCase() === "service-1") {
      router.push("/service/sub-category");
      console.log(serviceTitle)
    }

    if (serviceTitle.toLocaleLowerCase() === "service-4") {
      router.push("/description-task-for-eng");
    }
    if (serviceTitle.toLocaleLowerCase() === "service-2") {
      router.push("/building-permit");
    }
    if (serviceTitle.toLocaleLowerCase() === "service-3") {
      router.push("/htk");
    }
    // // services -2
    // else if (id === "68c56689d5f94c3ac153e67a") {
    //   router.push("/create-project-two");
    // }
  };

  return (
    // <div className="bg-white rounded-lg border-2 border-transparent hover:border-[#017AFF] overflow-hidden max-w-5xl mx-auto p-6">
    //   <div className="flex justify-between items-center gap-6">
    //     {/* Image Section */}
    //     <div className="flex-shrink-0">
    //       <Image
    //         width={220}
    //         height={220}
    //         src={img}
    //         alt="Modern kitchen interior"
    //         className=" object-cover rounded-lg"
    //         style={{ aspectRatio: "1/1" }}
    //       />
    //     </div>

    //     {/* Content Section */}
    //     <div className="flex-1 flex flex-col justify-center">
    //       <h1 className="text-2xl font-bold text-black mb-4 leading-tight tracking-tight">
    //         {title}
    //       </h1>

    //       <p className="text-gray-700 text-base leading-relaxed mb-5 font-normal">
    //         {description}
    //       </p>
    //       <div>
    //         <button
    //           onClick={() => handleProjectId(id)}
    //           className="bg-[#017AFF] hover:bg-blue-600 text-white px-6 py-3 rounded-md font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 cursor-pointer"
    //         >
    //           Begin Project
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div
      className={`
    border border-blue-200
    bg-gradient-to-br from-white via-blue-50 to-blue-200
    rounded-2xl p-6 lg:p-8 cursor-pointer
    transform  transition-transform hover:duration-1000 hover:transition-transform duration-1000 
  `}
    >
      {/* Icon */}
      <div className="mb-6">
        <img src={image} alt="no icon" />
      </div>

      {/* Content */}
      <div className="mb-6">
        <h3 className={`text-xl lg:text-2xl font-bold  mb-4 leading-tight `}>
          {title}
        </h3>
        <p
          className={`
        text-sm lg:text-base leading-relaxed 
          `}
        >
          {description}
        </p>
      </div>

      {/* Button */}
      <button
        onClick={() => handleProjectId(serviceTitle)}
        type="button"
        aria-label={`Start ${title} service`}
        className="relative  border-[#61BDFF]  inline-flex items-center justify-center px-6 py-3 border font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#61BDFF]
            hover:bg-[linear-gradient(44deg,#017AFF_37.44%,#61BDFF_67.11%)]   hover:text-white  p-[2px] cursor-pointer"
      >
        Begin Project
      </button>
    </div>
  );
};

export default ProjectCard;
