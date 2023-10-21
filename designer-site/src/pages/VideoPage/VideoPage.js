import React, { useContext, useState } from "react";
import "./VideoPage.css";
import { motion } from "framer-motion";
import { AppContext } from "../../Context/AppContext";
export default function VideoPage() {
  const { setIsBackgroundBlack } = useContext(AppContext);
  const [ isSvgVisible, setIsSvgVisible]  = useState(false);
  const variants8 = {
    initial: {
      strokeDashoffset: 15632,
    },
    animate: {
      strokeDashoffset: 0,
    },
  };
  return (
    <div className="video-page">
      <div className="handwritingV2">
        <svg
          id="esinSOh9IKX1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 2665 1739"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"

        >
          <motion.path
            variants={variants8}
            initial="initial"
            animate={isSvgVisible?"animate":"initial"}
            transition={{ duration: 1.4, ease: "linear" }}
            d="M680.000394,48.361312c419.839599-59.860256,815.20823,30.835342,607.930824,283.240496-196.844702,105.097228-623.432524,147.748334-853.175645,113.987029c242.229002-61.335239,563.213986-82.4554,504.306252,100.17042-255.639561,59.922299-706.547174,102.856151-904.987931,41.449829C-57.48679,484.704614,374.947368,281.318411,845.79971,179.619102C581.88902,245.173661,191.551227,337.143253,27.165589,545.759257c-57.895123,99.064334,440.241778,69.860629,853.175645,0l31.087372,65.628896c25.187503,30.006092,86.183544,18.991861,121.992081,0-65.342819-42.226781-174.298712-17.582363-216.550836,57.182347c126.883734,69.366642,580.666497,34.569402,869.534894-19.989307c141.538094-46.840342-14.56613-82.108482-214.88506-84.954559-300.780627,50.537736-650.917001,189.930854-654.649834,288.179189c10.349212,80.691658,184.344867,21.58932,301.505394-8.328878l-59.967923,26.023054c19.802134,52.020751,167.85073,22.447662,266.524105,0c35.673515-42.781736-25.55168-58.995206-189.898425,0-123.862056,57.172487-156.09426,123.365835-23.320859,123.896755c123.097764-11.087858,359.506661-88.765171,478.077614-146.588258c71.72746-51.078758-86.163504-6.847317-278.184535,69.962578-99.861739,31.89749-221.961643,116.352558-258.195227,166.577566-101.358493,128.360313,49.257115,50.213779,126.59895,28.318186c231.982504-56.843389,662.679793-210.413002,859.54024-313.165824c55.730278-66.33838-133.120761,5.365716-254.863676,48.307494-181.987143,76.020846-309.203854,210.954345-194.895752,268.189881c44.414519,49.698761,157.484037,54.424241,224.879714,14.991981c37.518445-41.890657-3.74744-51.947618-101.612315-8.328878-84.892767,28.883962-95.192933,88.422654,71.628353,124.933174c156.879549,57.625983,419.979347,64.18755,521.387781,0c37.455974-33.197681,91.530343-83.128665-191.5642-131.596277-124.862991-16.218368-260.991031,50.34808-299.839619,113.272745-147.616296,138.625596-4.551915,315.102594,169.909117,388.125729c175.548932,67.832318,508.936955,132.356589,669.952887,109.987497"
            fill="none"
            strokeDashoffset="15632"
            // stroke="#3f5787"
            // stroke-width="5.33"
            // stroke-linecap="round"
            // stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="up">
        <h1>TWENTY YEARS</h1>
        <h1>IN THE INDUSTRY</h1>
      </div>
      <div className="down">
        <motion.div className="down-left" whileInView={() => {
              setIsSvgVisible(true);
            }}>
          <video
            autoPlay
            muted
            loop
            src="https://player.vimeo.com/progressive_redirect/playback/844638093/rendition/1080p/file.mp4?loc=external&amp;signature=2fb1dd890f9234a24703b099b6d54d2e23e05c6a55eba16d19ae0029a1965e5f"
          ></video>
        </motion.div>
        <div className="down-right">
          <h1>ALL PACKED INTO A CREATIVE</h1>
          <h1>STUDIO HUNGRY FOR CHANGE</h1>
          <motion.p
            whileInView={() => {
              setIsBackgroundBlack(true);
            }}
          >
            Contact: aladinzecic10@gmail.com
          </motion.p>
        </div>
      </div>
    </div>
  );
}
