import Drop from "./Drop";
import { useEffect } from "react";

const WaterDrops = () => {
  let drops = [];
  const renderDrops = (num) => {
    for (let i = 0; i <= num; i++) {
      drops.push(<Drop />);
    }
  };

  useEffect(() => {
    renderDrops();
  }, []);
  return (
    <>
      <group position={[4, 5, -2]}>
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
        <Drop />
      </group>
    </>
  );
};

export default WaterDrops;
