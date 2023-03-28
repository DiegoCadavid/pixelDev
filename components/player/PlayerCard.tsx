import ProgressBar from "../UI/progressBar/ProgressBar";

interface Props {}

const PlayerCard = ({}: Props) => {
  return (
    <div className="flex w-full max-w-md gap-4 p-4 mx-auto mt-20 rounded-lg bg-slate-200">
      <div className="flex items-center justify-center flex-shrink-0 text-2xl font-bold rotate-90 rounded-lg h-28 w-28 bg-slate-400 text-slate-600">
        :D
      </div>

      <div className="flex flex-col flex-grow gap-2">
        <div className="flex items-center justify-between">
          <h1 className="font-bold">Diego Cadavid</h1>
          <span className="p-1 px-2 text-sm rounded-full bg-slate-500 text-slate-200">
            nv.128
          </span>
        </div>

        <ProgressBar />
      </div>
    </div>
  );
};

export default PlayerCard;
