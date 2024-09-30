"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { useState, useEffect } from "react";
import { FaCog, FaCarSide, FaShapes, FaCar, FaCompressArrowsAlt, FaWrench, FaRoad, FaMedal } from 'react-icons/fa';
import { GiCarWheel, GiLaurelCrown, GiTrophyCup } from 'react-icons/gi';
import { PinContainer } from "@/components/ui/3d-pin";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IconType } from 'react-icons';
import { Badge } from "@/components/ui/badge";

export default function CR16Page() {
  const [isHovered, setIsHovered] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const achievements = [
    { title: "Design Event", position: 2, icon: GiLaurelCrown },
    { title: "Cost Event", position: 2, icon: GiLaurelCrown },
    { title: "Overall", position: 3, icon: GiTrophyCup },
  ];

  const specifications: [string, string, IconType][] = [
    ["Wheelbase", "1540mm", FaCarSide],
    ["Track Width", "1140/1120mm", FaCarSide],
    ["Engine", "Single Cylinder KTM 390 Engine", FaCog],
    ["Gearbox", "6 Speed sequential gearbox", FaWrench],
    ["Differential", "Drexler Limited Slip Differential", FaCog],
    ["Chassis", "TIG Welded Tubular Spaceframe Chassis", FaCarSide],
    ["Body", "Carbon Fibre Reinforced bodyworks", FaShapes],
    ["Aero kit", "Full Carbon Fibre Aero kit", FaShapes],
    ["Front Suspension", "Direct Actuated Double Wishbone setup", FaCompressArrowsAlt],
    ["Rear Suspension", "Pushrod Actuated Double Wishbone setup", FaCompressArrowsAlt],
    ["Dampers", "Ohlins TTX25", FaCompressArrowsAlt],
    ["Tires", "Hoosier R25B 18.0*6.0/R10 slicks", FaRoad],
    ["Brakes", "Custom Designed Pedal Assembly and Brake Rotors", GiCarWheel],
    ["Steering", "Custom Designed Steering Gearbox with 220 deg lock to lock", FaCarSide],
  ];

  return (
    <div className="min-h-screen bg-white text-black relative overflow-hidden">
      <main className="container mx-auto px-4 py-12 md:py-24 max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center gap-8 md:gap-12"
        >
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-4 md:mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"
          >
            CR16 (2016-17)
          </motion.h1>

          <div className={`w-full flex ${isSmallScreen ? 'flex-col' : 'flex-row'} gap-8 md:gap-12`}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className={isSmallScreen ? 'w-full' : 'w-1/2'}
            >
              <BackgroundGradient className="rounded-3xl p-1">
                <div className="bg-white border-none shadow-lg rounded-3xl">
                  <div className="p-0">
                    <div
                      className="relative overflow-hidden rounded-3xl aspect-video"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <Image
                        src="/images/CR16.jpg"
                        alt="CR16 Prototype"
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-300 hover:scale-110"
                        priority
                      />
                      <AnimatePresence>
                        {isHovered && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                          >
                            <p className="text-xl md:text-3xl font-bold text-white">CR16 Prototype</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </BackgroundGradient>
            </motion.div>

            <div className={`${isSmallScreen ? 'w-full' : 'w-1/2'} space-y-6`}>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-justify"
              >
                Having participated in FSG 15, the team went all out to put their learnings to practice. CR-16 was a major step up from the previous cars, with both its performance and stunning looks. Weighing in at 195kgs, this car was also equipped with the team&apos;s first Aero kit.
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap gap-2"
              >
                <Badge variant="outline" className="text-red-500 border-red-500">
                  First Aero Kit
                </Badge>
                <Badge variant="outline" className="text-red-500 border-red-500">
                  195kg Weight
                </Badge>
                <Badge variant="outline" className="text-red-500 border-red-500">
                  FSG Learnings Applied
                </Badge>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full mt-8"
          >
            <h2 className="text-2xl font-semibold mb-4 text-center text-red-600">Achievements</h2>
            <div className="relative">
              <div className="checkered-flag p-1 rounded-md">
                <ScrollArea className="h-[400px] w-full rounded-md bg-white">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                    {achievements.map((achievement, index) => (
                      <PinContainer key={index} title={achievement.title} icon={achievement.icon}>
                        <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[16rem] h-[8rem]">
                          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                            {achievement.title}
                          </h3>
                          <div className="text-base !m-0 !p-0 font-normal">
                            <span className="text-slate-500">
                              {achievement.position === 0 ? "Special Achievement" : `Position`}
                            </span>
                          </div>
                          <div className="mt-1 text-2xl font-bold text-slate-100 flex items-center">
                            {achievement.position === 0 ? (
                              <>
                                <FaMedal className="text-yellow-400 mr-2" />
                                <span>Special</span>
                              </>
                            ) : achievement.position === 2 ? (
                              <>
                                <GiLaurelCrown className="text-gray-300 mr-2" />
                                <span>2nd</span>
                              </>
                            ) : achievement.position === 3 ? (
                              <>
                                <GiTrophyCup className="text-amber-600 mr-2" />
                                <span>3rd</span>
                              </>
                            ) : (
                              `#${achievement.position}`
                            )}
                          </div>
                        </div>
                      </PinContainer>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full mt-8"
          >
            <h2 className="text-2xl font-semibold mb-4 text-center text-red-600">Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {specifications.map(([title, spec, Icon], index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 0px 8px rgba(255, 0, 0, 0.3)",
                  }}
                  className="bg-red-50 p-3 rounded-lg border border-red-500 transition-all duration-300 hover:bg-red-100"
                >
                  <div className="flex items-center mb-2">
                    {Icon && <Icon className="text-red-500 mr-2" />}
                    <h4 className="text-sm md:text-base font-semibold text-red-600">{title}</h4>
                  </div>
                  <p className="text-xs md:text-sm text-gray-700">{spec}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
