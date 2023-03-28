import Link from "next/link";

import PlaceholderImage from "../UI/placeholders/PlaceholderImage";
import ProgressBar from "../UI/progressBar/ProgressBar";

interface Props {}

const DungeonItem = ({}: Props) => {
  return (
    <div>
      <div className="w-full">
        <h1 className="text-2xl font-bold text-center uppercase">Html</h1>
        <p className="mb-2 text-center">Start of the history</p>
        <ProgressBar onText sideText="right" />
      </div>
      <div className="mt-4 h-[600px] w-[400px]">
        <Link href="/dungeons/html">
          <PlaceholderImage />
        </Link>
      </div>
    </div>
  );
};

export default DungeonItem;
