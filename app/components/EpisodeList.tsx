import Image from "next/image";
import Ep from "../assets/images/ep.jpeg";
import GroupStar from "../assets/icons/groupstar.png";
const EpisodeList = () => {
  return (
    <div>
      <p>01</p>
      <section className="flex items-center gap-[43px]">
        <Image src={Ep} alt="ep" className="w-[64px] h-[64px]" />
        <span className="flex flex-col gap-[4px] text-[white]">
          <p className="text-[18px] font-semibold">
            The ministry of prayer and the world.
          </p>
          <p>By: Apostle Joshua Selman</p>
          <p>20 June, 23 - 30 minutes</p>
        </span>
        <span>
          <Image src={GroupStar} alt="star" className="star" />
        </span>
        <span></span>
      </section>
    </div>
  );
};

export default EpisodeList;
