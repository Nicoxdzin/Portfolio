export default function TechCard({techName, techImgUrl}) {
  return (
    <div className="w-3/4
     max-w-sm 
    bg-white 
    rounded-lg 
    hover:shadow  
    m-2
    hover:scale-110
    transition 
    duration-100">
      <div className="flex justify-end px-4 pt-4">
      </div>
      <div className="flex flex-col items-center pb-10">
        <img className="w-24 h-24 mb-3" src={ techImgUrl } alt={ techName } />
        <h5 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">{ techName }</h5>
      </div>
    </div>
  );
};
