"use client";

import Image from "next/image";
import logo from "/public/logo.png";
import Link from "next/link";
import { BiCart } from "react-icons/bi";
// import {BiSearch} from "react-icons/bi"
// import { useUser, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { LuAlignRight } from "react-icons/lu";
import { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Collapse from "../Collapse";

const Navbar = () => {
  const [LAL, setLAL] = useState(false);
  const [EP, setEP] = useState(false);
  const [IP, setIP] = useState(false);
  const [CC, setCC] = useState(false);
  const [M, setM] = useState(false);
  const [U, setU] = useState(false);
  const [Other, setOther] = useState(false);
  const [color1, setColor1] = useState("text-white");
  const [color2, setColor2] = useState("text-white");
  const [color3, setColor3] = useState("text-white");
  const [color4, setColor4] = useState("text-white");
  const [color5, setColor5] = useState("text-white");
  const [color6, setColor6] = useState("text-white");
  const [color7, setColor7] = useState("text-white");

  // let components:string[]=["a","b","c"]
  let others: string[] = [
    "Jeep-SUV-and-Bike",
    "Bike-Accessories",
    "Jeep&Pickup-Accessories",
    "Jeep-Lights",
    "Storage-Boxes",
    "Keychains&Pouch",
    "Keychains",
    "Leather-Key-Covers",
    "PVC-Silicone-KeyCovers",
    "Replacement-Key-ShellCover",
    "TPU-Plastic-KeyCovers",
    "Perfume&Fragrances",
    "Aerosol-Fresheners",
    "Fancy-Dashboard-Perfumes",
    "Gel&Wood-Perfumes",
    "Perfume-Cards&Hangings",
    "Perfume-Diffusers&Ionisers",
    "Vent&AC-Perfumes",
    "Security-Gadgets",
    "Anti-Theft-Locks",
    "Car-Alarm",
    "Parking-Sensors",
    "Spy-Camera",
    "Wheel",
    "Alloy-Rims",
    "Brake-CalliperCovers",
    "Tire-Pressure-Monitoring-System",
    "Tyre-Gauges",
    "Tyre-Valve-Air-Caps",
    "Wheel-Accessories",
    "Wheel-Centre-Caps",
    "Wheel-Covers",
    "Wheel-Lugnuts",
    "Wheel-Tyres&Tires",
    "Wheels-Snow-Chains",
    "Bundle-Offers&Flash-Sale",
    "Bundle-Offers",
    "Services",
    "Used-Car-Accessories",
  ];
  let LedAndLightening = [
    "Backlights&Backlamps",
    "Bumper-Fog-Lamps",
    "Day-Time-Running-Lights",
    "Dome&Roof-SMD&LED",
    "EL-Glow-Wires",
    "Flasher-Lights",
    "Flexible-DRL-Switchbacks",
    "Fog-Lamp-DRL-Covers",
    "Headlights&Headlamps",
    "HID&LED-Bulbs",
    "InteriorLEDLights",
    "LED&Rubber-Sill-Plates",
    "LED&SMD-Lights",
    "LEDBarLights",
    "LEDLogos",
    "ParkingSMD&LED",
    "SideMarkerLamps",
    "Strip-Lights",
    "Switch&Buttons",
    "ThirdBrakeLamps",
  ];
  let ExteriorParts = [
    "AirFlows",
    "AirPress&Sunvisors",
    "Antenna",
    "Bumper-Protectors",
    "Car-Wraps-PPF&Tints",
    "Chrome&CarbonTrims&Accessories",
    "ChromeHandleCovers",
    "DoorGuards",
    "Door-Mouldings",
    "License-Number-Plates&Frames",
    "Monograms&Emblems",
    "MudFlaps&SpareParts",
    "NumberPlateTilter",
    "Stickers",
    "WindowChromeWeatherStrips",
  ];
  let INTERIORPARTS = [
    "Anti-Skid-Nonslip-Dashboard-Mats",
    "Arm-Rests&Cushions",
    "Ashtray",
    "Back&Neck-Care-Cushions",
    "Car-Organisers&Accessories",
    "Carpet-Floor-Mats",
    "Console-Box",
    "Custom-Fit-PVC&Rubber-Floor-Mats",
    "Dashboard-Carpet",
    "Dashboard-Interior-Decoration",
    "Floor-Mats-10D",
    "Floor-Mats-5D",
    "Floor-Mats-7D",
    "Floor-Mats-7D-Eco",
    "Floor-Mats-8D",
    "Floor-Mats-9D",
    "Floor-Matting-7D&Rexine",
    "Gear&Hand-Brake-Covers",
    "Gear-Shift-Knobs",
    "Hangings",
    "Interior-Chrome-Trim&Accessories",
    "Interior-Protection-Gadgets",
    "Interior-Protection-Mats",
    "Seat-Belt-Clips",
    "Seat-belts&Accessories",
    "Seat-Covers",
    "Steering-Wheel-Covers",
    "Sun-Shades",
    "Tissue-Box",
    "Trunk-Mat-10D",
    "Trunk-Mat-5D",
    "Trunk-Mat-7D",
    "Trunk-Mat-Foam-PE+EVA",
    "Universal-PVC&Rubber-Floor-Mats",
  ];
  let CARCARE = [
    "Additives&Lubricant-Treatments",
    "All-Purpose-Cleaners",
    "Anti-Rust-Sprays",
    "Blowers&Tools",
    "Car-Care-Gadgets",
    "CarGlass&Ceramic-Coatings",
    "CarPolish&Wax",
    "Car-Shampoos Wash&Wax",
    "Color-Specified-Wax",
    "Detailing-Brushes",
    "Detailing-CarWashers&Machines",
    "Engine&CarburettorCleaners",
    "Interior-Cleaning-Polishes",
    "Leather&Upholstery-Cleaners",
    "MicroFiberCloth&Accessories",
    "OilPerformance&EngineOil",
    "PolisherMachine&Buffers",
    "RadiatorCoolants",
    "Scratch&PaintPen",
    "Scratch&SwirlsRestore",
    "ScreenCleaningWipers",
    "SprayPaints",
    "Steam-Cleaners",
    "Trims-Restorer&Cleaner",
    "Wheel&Tyre",
    "Windshield&GlassWash",
  ];
  let MOBILE = [
    "Charging-Cables",
    "MobileChargers|ChargingSockets",
    "MobileHolders",
    "PowerBanks",
  ];
  let UTILITIES = [
    "CarBatteries|CarRemoteCells",
    "CarFridge",
    "CarHydraulicLiftingJacks",
    "CarInsulators|Liners",
    "DoubleSidedTape&Adhesives",
    "Horns&Sirens",
    "PortableFans&Heaters",
    "SpareWheelCovers",
    "TireAirCompressorInflators",
    "TopCovers",
    "VacuumCleaner",
    "WiperBlades",
  ];
  //   const { isSignedIn } = useUser();
  return (
    <div
      onMouseLeave={() => {
        setTimeout(() => {
          setColor1("text-white");
          setColor2("text-white");
          setColor3("text-white");
          setColor4("text-white");
          setColor5("text-white");
          setLAL(false);
          setEP(false);
          setIP(false);
          setCC(false);
          setM(false);
          setU(false);
          setOther(false);
        }, 5000);
      }}
      className="flex items-center justify-between p-2 mx-8 my-6 rounded-full shadow-lg shadow-black navc"
    >
      <Link href={"/"}>
        <Image
          src={logo}
          alt="navbarImg"
          height={50}
          className="rounded-full"
        />
      </Link>
      <div className="hidden text-lg font-semibold lg:flex gap-x-10 ">
        <div>
          <button
            className={color1}
            onMouseLeave={() => {
              setTimeout(() => {
                setColor1("text-white");
              }, 1500);
            }}
            onMouseEnter={
              () => {
                setColor1("text-stone-400");
                if (LAL) {
                  setLAL(false);
                } else {
                  setLAL(true);
                  setEP(false);
                  setIP(false);
                  setCC(false);
                  setM(false);
                  setU(false);
                  setOther(false);
                }
              }
              // ()=>LAL?setLAL(false):setLAL(true)
            }
          >
            LedAndLightening
          </button>
          {!EP && !IP && !CC && !M && !U && LAL && !Other && (
            <div className="absolute left-0 z-10 justify-center w-full mt-10 ">
              <div className="flex justify-center">
                <ul className="grid grid-cols-4 p-4 pl-10 mt-2 bg-black/70 rounded-xl gap-x-10 gap-y-8">
                  {LedAndLightening.map((items) => {
                    return (
                      <Link key={items} href={`/Category/${items}`}>
                        <li className="p-2 text-white list-disc rounded-xl hover:text-stone-950 hover:bg-white">
                          {items}
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
        </div>

        <div>
          <button
            className={color2}
            onMouseLeave={() => {
              setTimeout(() => {
                setColor2("text-white");
              }, 1000);
            }}
            onMouseEnter={() => {
              setColor2("text-stone-400");
              if (EP) {
                setEP(false);
              } else {
                setLAL(false);
                setEP(true);
                setIP(false);
                setCC(false);
                setM(false);
                setU(false);
                setOther(false);
              }
            }}
          >
            ExteriorParts
          </button>
          {EP && !IP && !CC && !M && !U && !LAL && !Other && (
            <div className="absolute left-0 z-10 justify-center w-full mt-10 ">
              <div className="flex justify-center">
                <ul className="grid grid-cols-4 p-4 pl-10 mt-2 bg-black/70 gap-x-10 gap-y-8">
                  {ExteriorParts.map((items) => {
                    return (
                      <Link key={items} href={`/Category/${items}`}>
                        <li className="p-2 text-white list-disc rounded-xl hover:text-stone-950 hover:bg-white">
                          {items}
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
        </div>

        <div>
          <button
            className={color3}
            onMouseLeave={() => {
              setTimeout(() => {
                setColor3("text-white");
              }, 1000);
            }}
            onMouseEnter={() => {
              setColor3("text-stone-400");
              if (IP) {
                setIP(false);
              } else {
                setLAL(false);
                setEP(false);
                setIP(true);
                setCC(false);
                setM(false);
                setU(false);
                setOther(false);
              }
            }}
          >
            INTERIORPARTS
          </button>
          {!EP && IP && !CC && !M && !U && !LAL && !Other && (
            <div className="absolute left-0 z-10 justify-center w-full mt-10 ">
              <div className="flex justify-center">
                <ul className="grid grid-cols-4 p-4 pl-10 mt-2 bg-black/70 gap-x-10 gap-y-8">
                  {INTERIORPARTS.map((items) => {
                    return (
                      <Link key={items} href={`/Category/${items}`}>
                        <li className="p-2 text-white list-disc rounded-xl hover:text-stone-950 hover:bg-white">
                          {items}
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
        </div>

        <div>
          <button
            className={color4}
            onMouseLeave={() => {
              setTimeout(() => {
                setColor4("text-white");
              }, 1000);
            }}
            onMouseEnter={() => {
              setColor4("text-stone-400");
              if (CC) {
                setCC(false);
              } else {
                setLAL(false);
                setEP(false);
                setIP(false);
                setCC(true);
                setM(false);
                setU(false);
                setOther(false);
              }
            }}
          >
            CARCARE
          </button>
          {!EP && !IP && CC && !M && !U && !LAL && !Other && (
            <div className="absolute left-0 z-10 justify-center w-full mt-10 ">
              <div className="flex justify-center">
                <ul className="grid grid-cols-4 p-4 pl-10 mt-2 bg-black/70 gap-x-10 gap-y-8">
                  {CARCARE.map((items) => {
                    return (
                      <Link key={items} href={`/Category/${items}`}>
                        <li className="p-2 text-white list-disc rounded-xl hover:text-stone-950 hover:bg-white">
                          {items}
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
        </div>

        <div>
          <button
            className={color5}
            
            onMouseEnter={() => {
              setColor5("text-stone-400");
              if (M) {
                setM(false);
              } else {
                setLAL(false);
                setEP(false);
                setIP(false);
                setCC(false);
                setM(true);
                setU(false);
                setOther(false);
              }
            }}
          >
            MOBILE
          </button>
          {!EP && !IP && !CC && M && !U && !LAL && !Other && (
            <div onMouseLeave={() => {
              setTimeout(() => {
                setColor5("text-white");
                  setLAL(false);
                  setEP(false);
                  setIP(false);
                  setCC(false);
                  setM(false);
                  setU(false);
                  setOther(false);
              }, 1000);
            }} 
            className="absolute left-0 z-10 justify-center w-full mt-10 ">
              <div className="flex justify-center">
                <ul className="grid grid-cols-4 p-4 pl-10 mt-2 bg-black/70 gap-x-10 gap-y-8">
                  {MOBILE.map((items) => {
                    return (
                      <Link key={items} href={`/Category/${items}`}>
                        <li className="p-2 text-white list-disc rounded-xl hover:text-stone-950 hover:bg-white">
                          {items}
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
        </div>

        <div>
          <button
            className={color6}
            onMouseLeave={() => {
              setTimeout(() => {
                setColor6("text-white");
              }, 1000);
            }}
            onMouseEnter={() => {
              setColor6("text-stone-400");
              if (U) {
                setU(false);
              } else {
                setLAL(false);
                setEP(false);
                setIP(false);
                setCC(false);
                setM(false);
                setU(true);
                setOther(false);
              }
            }}
          >
            UTILITIES
          </button>
          {!EP && !IP && !CC && !M && U && !LAL && !Other && (
            <div className="absolute left-0 z-10 justify-center w-full mt-10 ">
              <div className="flex justify-center">
                <ul className="grid grid-cols-4 p-4 pl-10 mt-2 bg-black/70 gap-x-10 gap-y-8">
                  {UTILITIES.map((items) => {
                    return (
                      <Link key={items} href={`/Category/${items}`}>
                        <li className="p-2 text-white list-disc rounded-xl hover:text-stone-950 hover:bg-white">
                          {items}
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
        </div>

        <div>
          <button
            className={color7}
            onMouseLeave={() => {
              setTimeout(() => {
                setColor7("text-white");
              }, 1000);
            }}
            onMouseEnter={() => {
              setColor7("text-stone-400");
              if (Other) {
                setOther(false);
              } else {
                setLAL(false);
                setEP(false);
                setIP(false);
                setCC(false);
                setM(false);
                setU(false);
                setOther(true);
              }
            }}
          >
            others
          </button>
          {!EP && !IP && !CC && !M && !U && !LAL && Other && (
            <div className="absolute left-0 z-10 justify-center w-full mt-10 ">
              <div className="flex justify-center">
                <ul className="grid grid-cols-4 p-4 pl-10 mt-2 bg-black/70 gap-x-10 gap-y-8">
                  {others.map((items) => {
                    return (
                      <Link key={items} href={`/Category/${items}`}>
                        <li className="p-2 text-white list-disc rounded-xl hover:text-stone-950 hover:bg-white">
                          {items}
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button>
              <LuAlignRight size={30} />
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-scroll bg-stone-700">
            <SheetHeader>
              {/* <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription> */}
            </SheetHeader>
            <div className="mt-6 mb-2">
              <div className="flex items-center pl-4 pr-4 rounded-full">
                <h1 className="flex items-center justify-center text-black bg-gray-300 rounded-full w-9 h-9">
                  <BiCart size={22} />
                </h1>
              </div>
            </div>
            <ul className="text-lg font-semibold ">
              <li>
                <Collapse
                  heading={"LedAndLightening"}
                  elements={LedAndLightening}
                />
              </li>
              <li>
                <Collapse heading={"ExteriorParts"} elements={ExteriorParts} />
              </li>
              <li>
                <Collapse heading={"INTERIORPARTS"} elements={INTERIORPARTS} />
              </li>
              <li>
                <Collapse heading={"CARCARE"} elements={CARCARE} />
              </li>
              <li>
                <Collapse heading={"MOBILE"} elements={MOBILE} />
              </li>
              <li>
                <Collapse heading={"UTILITIES"} elements={UTILITIES} />
              </li>
              <li>
                <Collapse heading={"others"} elements={others} />
              </li>
            </ul>
            <SheetFooter>
              <SheetClose asChild></SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <button className="absolute lg:hidden sm:right-28 right-12" onClick={()=>open?setOpen(false):setOpen(true)
}>
{
  open?(
    <IoCloseOutline size={22}/>
    ):
    (
    <LuAlignRight size={22}/>
  )
}
</button> */}

      <div className="hidden mr-0 lg:flex">
        <div className="flex items-center p-2 pl-4 pr-4 rounded-full gap-x-4">
          <h1 className="flex items-center justify-center text-black bg-gray-300 rounded-full w-9 h-9">
            <BiCart size={22} />
          </h1>
        </div>
      </div>

      {/* hamburger options */}
      {/* {
  open && <div className="absolute z-10 p-4 space-y-4 mt-60 right-4 bg-slate-900 rounded-3xl">
    <div className="flex justify-center mr-0 lg:mr-0 sm:hidden">
<div className="flex items-center pl-4 pr-4 rounded-full">
            <h1 className="flex items-center justify-center text-black bg-gray-300 rounded-full w-9 h-9">
            <BiCart size={22}/>
            </h1>
          </div>
</div>
     <ul className="text-lg font-semibold lg:hidden">
        <Link href={"/Category/Female"}>
          <li className="flex justify-center">LedAndLightening</li>
        </Link>
        <Link className="flex justify-center" href={"/Category/Male"}>
          <li>ExteriorParts</li>
        </Link>
        <Link className="flex justify-center"  href={"/Category/Kids"}>
          <li>INTERIORPARTS</li>
        </Link>
        <Link className="flex justify-center"  href={"/Category/All-Products"}>
          <li>CARCARE</li>
        </Link>
        <Link className="flex justify-center"  href={"/Category/All-Products"}>
          <li>MOBILE</li>
        </Link>
        <Link className="flex justify-center"  href={"/Category/All-Products"}>
          <li>UTILITIES</li>
        </Link>
        <Link className="flex justify-center"  href={"/Category/All-Products"}>
          <li>others</li>
        </Link>
      </ul>

  </div>
} */}
    </div>
  );
};

export default Navbar;
