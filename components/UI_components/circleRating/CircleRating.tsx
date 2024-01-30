import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircleRating = ({ rating }: { rating: number }) => {
  return (
    <div className=" bg-white rounded-[50%] p-1 text-2xl  font-bold  stroke-transparent absolute w-14 h-14 left-2 -bottom-8">
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating.toString()}
        styles={buildStyles({
          pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
          textColor: "black",
          textSize: 32
        })}
       
      />
    </div>
  );
};

export default CircleRating;
