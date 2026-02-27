const LandingNavbar = () => {
  return (
    <>
      <nav
        className="flex mx-2 justify-between gap-4 border-2 border-t-0 
                    rounded-b-3xl bg-[#eee] border-[#bcbcbc] h-14"
      >
        <div className="flex justify-center gap-4 mx-1">
          <a href="#" className="flex items-center mr-2 ">
            <i className="msr text-[32px]">school</i>

            <div className="text-2xl my-1 px-2 rounded-3xl border-[#bcbcbc] ">درس‌یاور</div>
          </a>
        </div>
        <div className="flex gap-4 mx-1">
          <button
            className="border-2 my-1 px-4 rounded-3xl border-[#bcbcbc] hover:bg-[#ddd] 
              transition-colors duration-100 ease-in-out active:scale-[0.95] cursor-pointer text-sm"
          >
            ورود / ثبت‌نام
          </button>
        </div>
      </nav>
    </>
  );
};

export default LandingNavbar;
