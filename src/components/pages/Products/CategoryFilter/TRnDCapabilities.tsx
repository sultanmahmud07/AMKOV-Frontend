import { GiCircuitry, GiArtificialIntelligence } from "react-icons/gi";
import { FiCpu } from "react-icons/fi";
import { AiOutlineCloudServer } from "react-icons/ai";

const TRnDCapabilities = () => {
  return (
    <div className=" border-[#E8E8EA] border-b py-6">
      <h6 className="text-[10px] md:text-xs font-semibold text-[#000000] mb-3">
        T-POWER R&D Capabilities
      </h6>

      <ul className="flex flex-col gap-3">
        <li className="flex items-center gap-3">
          <span className="p-2 bg-[#F5F7FA] rounded-full flex items-center justify-center">
            <GiCircuitry className="h-4 w-4 text-primary" />
          </span>
          <span className="text-xs md:text-sm text-gray-700">Hardware &amp; Power Electronics</span>
        </li>

        <li className="flex items-center gap-3">
          <span className="p-2 bg-[#F5F7FA] rounded-full flex items-center justify-center">
            <FiCpu className="h-4 w-4 text-primary" />
          </span>
          <span className="text-xs md:text-sm text-gray-700">Embedded Systems &amp; Firmware</span>
        </li>

        <li className="flex items-center gap-3">
          <span className="p-2 bg-[#F5F7FA] rounded-full flex items-center justify-center">
            <AiOutlineCloudServer className="h-4 w-4 text-primary" />
          </span>
          <span className="text-xs md:text-sm text-gray-700">OCPP Cloud Software</span>
        </li>

        <li className="flex items-center gap-3">
          <span className="p-2 bg-[#F5F7FA] rounded-full flex items-center justify-center">
            <GiArtificialIntelligence className="h-4 w-4 text-primary" />
          </span>
          <span className="text-xs md:text-sm text-gray-700">AI &amp; Data Intelligence</span>
        </li>
      </ul>
    </div>
  );
};

export default TRnDCapabilities;
