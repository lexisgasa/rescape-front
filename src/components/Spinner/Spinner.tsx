import { ThreeCircles } from "react-loader-spinner";

const Spinner = (): React.ReactElement => {
  return (
    <ThreeCircles
      innerCircleColor="#ff6363"
      middleCircleColor="#ae0000"
      outerCircleColor="#ae0000"
      ariaLabel="three-circles-loading"
      height="200"
      width="200"
    />
  );
};

export default Spinner;
