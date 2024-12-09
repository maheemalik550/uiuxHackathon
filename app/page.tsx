import Image from "next/image";
import ComponentOne from "./components/Home/ComponentOne/page";
import ComponentTwo from "./components/Home/ComponentTwo/page";
import ComponentThree from "./components/Home/ComponentThree/page";
import ComponentFour from "./components/Home/ComponentFour/page";
import ComponentFive from "./components/Home/ComponentFive/page";
import ComponentSix from "./components/Home/ComponentSix/page";
import ComponentSeven from "./components/Home/ComponentSeven/page";
import ComponentEight from "./components/Home/ComponentEight/page";

export default function Home() {
  return (
    <div>
      <ComponentOne/>
      <ComponentTwo/>
      <ComponentThree/>
      <ComponentFour/>
      <ComponentFive/>
      <ComponentSix/>
      <ComponentSeven/>
      <ComponentEight/>

    </div>
  );
}
