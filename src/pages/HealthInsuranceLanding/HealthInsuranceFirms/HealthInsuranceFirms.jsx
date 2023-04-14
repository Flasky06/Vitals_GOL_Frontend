import React from "react";
import TitleElement from "../../LandingPage/TitleElement/TitleElement";
import HealthInsuranceFirm from "./HealthInsuranceFirm";
import jubileeImg from "../../../assets/images/jubilee-ins.jpeg";

const HealthInsuranceFirms = () => {
  return (
    <>
      <TitleElement
        subTitle="popular health insurance firms"
        mainTitle="(and we are collecting and updating more firms' information for you.)"
        shouldCenter={true}
      />

      <div className="insurance-comapnies-container p-3">
        <HealthInsuranceFirm
          image={jubileeImg}
          title="Jubilee insurance"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vero distinctio modi possimus accusamus ad magnam quam voluptas eveniet illo quo quis sed, libero tenetur quae nihil adipisci dolores tempora repudiandae earum aliquid exercitationem doloribus maxime fugiat? Repudiandae, pariatur velit. Non deleniti asperiores est laborum neque aliquid fuga, vel eius?"
        />

        <HealthInsuranceFirm
          image={jubileeImg}
          title="Jubilee insurance"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vero distinctio modi possimus accusamus ad magnam quam voluptas eveniet illo quo quis sed, libero tenetur quae nihil adipisci dolores tempora repudiandae earum aliquid exercitationem doloribus maxime fugiat? Repudiandae, pariatur velit. Non deleniti asperiores est laborum neque aliquid fuga, vel eius?"
        />

        <HealthInsuranceFirm
          image={jubileeImg}
          title="Jubilee insurance"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vero distinctio modi possimus accusamus ad magnam quam voluptas eveniet illo quo quis sed, libero tenetur quae nihil adipisci dolores tempora repudiandae earum aliquid exercitationem doloribus maxime fugiat? Repudiandae, pariatur velit. Non deleniti asperiores est laborum neque aliquid fuga, vel eius?"
        />

        <HealthInsuranceFirm
          image={jubileeImg}
          title="Jubilee insurance"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vero distinctio modi possimus accusamus ad magnam quam voluptas eveniet illo quo quis sed, libero tenetur quae nihil adipisci dolores tempora repudiandae earum aliquid exercitationem doloribus maxime fugiat? Repudiandae, pariatur velit. Non deleniti asperiores est laborum neque aliquid fuga, vel eius?"
        />

        <HealthInsuranceFirm
          image={jubileeImg}
          title="Jubilee insurance"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vero distinctio modi possimus accusamus ad magnam quam voluptas eveniet illo quo quis sed, libero tenetur quae nihil adipisci dolores tempora repudiandae earum aliquid exercitationem doloribus maxime fugiat? Repudiandae, pariatur velit. Non deleniti asperiores est laborum neque aliquid fuga, vel eius?"
        />

        <HealthInsuranceFirm
          image={jubileeImg}
          title="Jubilee insurance"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vero distinctio modi possimus accusamus ad magnam quam voluptas eveniet illo quo quis sed, libero tenetur quae nihil adipisci dolores tempora repudiandae earum aliquid exercitationem doloribus maxime fugiat? Repudiandae, pariatur velit. Non deleniti asperiores est laborum neque aliquid fuga, vel eius?"
        />
      </div>
    </>
  );
};

export default HealthInsuranceFirms;
