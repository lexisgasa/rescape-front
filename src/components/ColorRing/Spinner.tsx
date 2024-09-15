import { ColorRing } from "react-loader-spinner";

const Spinner = (): React.ReactElement => {
  return (
    <ColorRing
      colors={["#AE0000", "#AE0000", "#FF6363", "#080808", "#080808"]}
      height="200"
      width="200"
    />
  );
};

export default Spinner;
