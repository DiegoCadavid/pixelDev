interface Props {}

const DungeonFloor = ({}: Props) => {
  return (
    <div className="p-8 mt-10 bg-slate-300">
      {/* Course */}
      <h2 className="mb-4 text-xl font-bold leading-none text-slate-500">
        Introduction
      </h2>
      {/* Content floor */}
      <div className="grid grid-cols-5 gap-x-6 gap-y-8">
        {[...new Array(9)].map((_, i) => {
          return (
            <div
              key={i}
              className="relative flex items-center w-full gap-4 p-4 rounded-md bg-slate-400">
              <div className="w-12 h-12 rounded-full bg-slate-500" />
              <p className="font-bold leading-tight text-slate-600">
                Introduction
              </p>

              <div className="absolute top-[calc(100%-10px)] flex items-center  gap-1">
                <div className="w-4 h-4 rounded-md bg-slate-500" />
                <div className="w-4 h-4 rounded-md bg-slate-500" />
                <div className="w-4 h-4 rounded-md bg-slate-500" />
                <div className="w-4 h-4 rounded-md bg-slate-500" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DungeonFloor;
