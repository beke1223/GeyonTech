import{ useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function TrainerImage() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <div className="w-44 h-44 rounded-full border border-[#008cba] border-opacity-50  flex items-center justify-center" data-aos="zoom-in" data-aos-duration="2000">
        <div className="w-36 h-36 rounded-full border border-[#008cba] border-opacity-50 flex items-center justify-center">
            <img src="" className="w-[120px] h-[120px] rounded-full bg-[#68d2f5] object-cover" />
        </div>
        
      </div>
    </div>
  );
}
export default TrainerImage;