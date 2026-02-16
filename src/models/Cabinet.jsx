import { useConfiguratorStore } from "../store/useConfiguratorStore";
import { calculateCarcass } from "../geometry/carcassCalculator";
import LeftPanel from "./Panels/LeftPanel";
import RightPanel from "./Panels/RightPanel";
import TopPanel from "./Panels/TopPanel";
import BottomPanel from "./Panels/BottomPanel";
import BackPanel from "./Panels/BackPanel";
import Shelf from "./Shelf";

export default function Cabinet() {
  const config = useConfiguratorStore();
  const geometry = calculateCarcass(config);

  return (
    <group scale={[0.001, 0.001, 0.001]}>
      <LeftPanel data={geometry.left} />
      <RightPanel data={geometry.right} />
      <TopPanel data={geometry.top} />
      <BottomPanel data={geometry.bottom} />
      <BackPanel data={geometry.back} />
      {geometry.shelves.map((shelf, i) => (
        <Shelf key={i} data={shelf} />
      ))}
    </group>
  );
}
