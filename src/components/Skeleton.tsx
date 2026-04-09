const Skeleton = ({
  width = "100%", // مقدار پیشفرض عرض
  height = "1rem", // مقدار پیشفرض ارتفاع
  className = "", // کلاس‌های اضافه‌کاربر
}) => (
  <div
    className={`
      bg-gray-300
      animate-pulse
      rounded
      ${className}
    `}
    style={{ width, height }}
  />
);

export default Skeleton;
