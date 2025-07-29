const SkeletonCard = ({ count }: { count: number }) => {
  return Array(count)
    .fill(0)
    .map((_,index) => (
      <div key={index} className="group cursor-pointer animate-pulse">
        <div className="bg-gray-300 rounded aspect-[0.7] w-full" />
        <div className="h-4 bg-gray-300 rounded mt-2 w-3/4" />
      </div>
    ));
};

export default SkeletonCard;
