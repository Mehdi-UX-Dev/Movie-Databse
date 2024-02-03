import { cx } from "class-variance-authority";
import { usePathname } from "next/navigation";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircleRating = ({ rating }: { rating: number }) => {
  const path = usePathname();
  return (
    <div
      className={cx(
        " rounded-[50%] p-1 text-2xl  font-bold  stroke-transparen  ",
        {
          " absolute -bottom-2 bg-white w-14 h-14": path.startsWith("/explore"),
          "w-20 mt-2" : path.startsWith("/tv") || path.startsWith("/movie")
        }
      )}
    >
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating.toString()}
        styles={buildStyles({
          pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
          textColor: path.startsWith("/tv") || path.startsWith("/movie") ? "white" : "black",
          textSize: 32,
        })}
      />
    </div>
  );
};

export default CircleRating;
