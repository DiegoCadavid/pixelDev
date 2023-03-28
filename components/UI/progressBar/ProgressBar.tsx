interface Props {
  onText?: boolean;
  sideText?: "right" | "left";
}

const ProgressBar = ({ onText = false, sideText = "left" }: Props) => {
  return (
    <div className="flex items-center w-full gap-2">
      {/* ProgressBar */} 
      { (onText && sideText === "left") && <span className="flex-shrink-0 font-bold text-slate-500">20%</span>}
      <div className="flex-grow w-full h-4 overflow-hidden rounded-full bg-slate-400">
        {/* Progress */}
        <div className="w-1/5 h-full bg-slate-500" />
      </div>
      { (onText && sideText === "right") && <span className="flex-shrink-0 font-bold text-slate-500">20%</span>}
    </div>
  );
};

export default ProgressBar;
