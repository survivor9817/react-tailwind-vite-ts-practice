// src/components/HeroTypeWriter.tsx
import { TypeAnimation } from "react-type-animation";

const HeroTypeWriter = () => {
  return (
    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
      <div className="mb-4 text-gray-800 ">با درس‌یاور،</div>

      <div className="">
        <span>از</span>

        <TypeAnimation
          sequence={[
            "کتاب تست",
            2100,
            "معلم خصوصی",
            2100,
            "مشاور تحصیلی",
            2100,
            "کتاب کاغذی",
            2100,
            "ویدیوی آموزشی",
            2100,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-blue-600 dark:text-blue-400 mr-2"
        />

        <span>بی‌نیازی!</span>
      </div>
    </div>
  );
};

export default HeroTypeWriter;
