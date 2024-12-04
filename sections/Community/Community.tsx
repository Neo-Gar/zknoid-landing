"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const SocialLink = ({ link, icon }: { link: string; icon: ReactNode }) => {
  return (
    <Link href={link} target="_blank" rel="noreferrer">
      <motion.div
        className={
          "w-[15.059vw] lg:!w-[7.187vw] h-[15.059vw] lg:!h-[7.187vw] border border-white bg-white rounded-full flex items-center justify-center"
        }
        whileHover={{ borderColor: "#3A39FF", backgroundColor: "#1E1E1E" }}
      >
        {icon}
      </motion.div>
    </Link>
  );
};

export default function Community() {
  return (
    <section
      className={"lg:!mt-[10.417vw] bg-gray-light lg:!rounded-[1.563vw]"}
    >
      <div
        className={
          "px-[4.706vw] lg:!px-[10.938vw] pt-[4.706vw] lg:!pt-[1.406vw] pb-[4.706vw] lg:!pb-[5.208vw] flex flex-col justify-center items-center"
        }
      >
        <span
          className={
            "text-[13.647vw] lg:!text-[5.208vw] mb-[4.706vw] lg:!mb-[1.042vw] text-center leading-[80%] font-kavaimo uppercase text-yellow"
          }
        >
          Community
        </span>
        <div
          className={
            "lg:!w-[72.917vw] flex flex-col lg:!flex-row gap-[2.353vw] lg:!gap-[1.042vw] items-center"
          }
        >
          <span
            className={
              "font-helvetica-now lg:!w-[40%] text-center uppercase text-white text-[5.412vw] lg:!text-[1.563vw] leading-[110%] font-medium"
            }
          >
            Do you have any more questions about our project?
          </span>
          <div className={"flex flex-row w-full items-center justify-center"}>
            <SocialLink
              link={"#"}
              icon={
                <svg
                  width="65"
                  height="65"
                  viewBox="0 0 65 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={"w-[6.824vw] lg:!w-[3.385vw]"}
                >
                  <mask
                    id="mask0_1203_1317"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="65"
                    height="65"
                  >
                    <path
                      d="M0.576172 0.57373H64.2628V64.2604H0.576172V0.57373Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_1203_1317)">
                    <path
                      d="M50.7294 3.55615H60.4962L39.1612 28.0027L64.2628 61.2744H44.6109L29.2079 41.0994L11.6031 61.2744H1.82716L24.6452 35.1174L0.576172 3.5607H20.7284L34.6303 21.998L50.7294 3.55615ZM47.2949 55.4153H52.7082L17.7716 9.11054H11.967L47.2949 55.4153Z"
                      fill="#3A39FF"
                    />
                  </g>
                </svg>
              }
            />
            <SocialLink
              link={"#"}
              icon={
                <svg
                  width="57"
                  height="44"
                  viewBox="0 0 57 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={"w-[6.118vw] lg:!w-[2.969vw]"}
                >
                  <path
                    d="M47.9076 4.51368C44.3783 2.86844 40.5571 1.67431 36.5767 0.984375C36.5067 0.985372 36.4399 1.01399 36.3909 1.06398C35.9133 1.93968 35.356 3.08073 34.9845 3.95642C30.7626 3.31995 26.4691 3.31995 22.2472 3.95642C21.8757 3.05419 21.3184 1.93968 20.8142 1.06398C20.7877 1.01091 20.7081 0.984375 20.6285 0.984375C16.6481 1.67431 12.8534 2.86844 9.29756 4.51368C9.27103 4.51368 9.24449 4.54021 9.21796 4.56675C2.00014 15.3669 0.00993007 25.8752 0.991766 36.2774C0.991766 36.3305 1.0183 36.3835 1.07137 36.4101C5.84787 39.9128 10.4386 42.0357 14.9763 43.4421C15.0559 43.4687 15.1355 43.4421 15.162 43.3891C16.2235 41.9296 17.1788 40.3905 18.0014 38.7718C18.0545 38.6656 18.0014 38.5595 17.8953 38.533C16.3827 37.9492 14.9498 37.2592 13.5433 36.4631C13.4372 36.4101 13.4372 36.2509 13.5168 36.1712C13.8087 35.959 14.1006 35.7201 14.3925 35.5078C14.4456 35.4548 14.5252 35.4548 14.5782 35.4813C23.7067 39.6475 33.5516 39.6475 42.5738 35.4813C42.6269 35.4548 42.7065 35.4548 42.7596 35.5078C43.0515 35.7467 43.3434 35.959 43.6353 36.1978C43.7414 36.2774 43.7414 36.4366 43.6087 36.4897C42.2289 37.3123 40.7694 37.9757 39.2568 38.5595C39.1507 38.586 39.1241 38.7187 39.1507 38.7983C39.9998 40.417 40.9551 41.9561 41.99 43.4156C42.0696 43.4421 42.1492 43.4687 42.2289 43.4421C46.7931 42.0357 51.3838 39.9128 56.1603 36.4101C56.2134 36.3835 56.2399 36.3305 56.2399 36.2774C57.4075 24.2565 54.3028 13.8278 48.0137 4.56675C47.9872 4.54021 47.9607 4.51368 47.9076 4.51368ZM19.3813 29.9353C16.6481 29.9353 14.366 27.4143 14.366 24.3096C14.366 21.2049 16.595 18.684 19.3813 18.684C22.1941 18.684 24.4231 21.2314 24.3966 24.3096C24.3966 27.4143 22.1676 29.9353 19.3813 29.9353ZM37.8769 29.9353C35.1437 29.9353 32.8616 27.4143 32.8616 24.3096C32.8616 21.2049 35.0906 18.684 37.8769 18.684C40.6898 18.684 42.9188 21.2314 42.8923 24.3096C42.8923 27.4143 40.6898 29.9353 37.8769 29.9353Z"
                    fill="#3A39FF"
                  />
                </svg>
              }
            />
            <SocialLink
              link={"#"}
              icon={
                <svg
                  width="54"
                  height="46"
                  viewBox="0 0 54 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={"w-[5.882vw] lg:!w-[2.813vw]"}
                >
                  <path
                    d="M50.0794 1.2382L3.03086 19.3809C-0.180006 20.6706 -0.16143 22.4618 2.44176 23.2605L14.521 27.0286L42.4688 9.3954C43.7903 8.59136 44.9977 9.02389 44.0052 9.90489L21.362 30.3403H21.3567L21.362 30.343L20.5288 42.7937C21.7494 42.7937 22.2881 42.2338 22.9727 41.5731L28.8399 35.8678L41.0438 44.8821C43.2941 46.1214 44.9101 45.4845 45.47 42.799L53.4813 5.04348C54.3013 1.75566 52.2261 0.266983 50.0794 1.2382Z"
                    fill="#3A39FF"
                  />
                </svg>
              }
            />
            <SocialLink
              link={"#"}
              icon={
                <svg
                  width="54"
                  height="38"
                  viewBox="0 0 54 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={"w-[5.882vw] lg:!w-[2.813vw]"}
                >
                  <path
                    d="M21.7133 27.1767L35.4855 19.2159L21.7133 11.2551V27.1767ZM52.389 6.39896C52.7339 7.64615 52.9728 9.31793 53.132 11.4408C53.3177 13.5637 53.3974 15.3947 53.3974 16.9869L53.5566 19.2159C53.5566 25.0273 53.132 29.2996 52.389 32.0328C51.7256 34.4211 50.1865 35.9602 47.7982 36.6236C46.551 36.9685 44.2689 37.2074 40.7662 37.3666C37.3165 37.5523 34.1587 37.6319 31.2397 37.6319L27.0205 37.7912C15.9018 37.7912 8.97593 37.3666 6.24271 36.6236C3.85446 35.9602 2.31537 34.4211 1.65196 32.0328C1.30699 30.7856 1.06817 29.1139 0.908953 26.991C0.7232 24.8681 0.643591 23.0371 0.643591 21.4449L0.484375 19.2159C0.484375 13.4045 0.908953 9.13218 1.65196 6.39896C2.31537 4.01071 3.85446 2.47162 6.24271 1.80821C7.4899 1.46324 9.77201 1.22442 13.2748 1.0652C16.7245 0.879449 19.8823 0.799841 22.8012 0.799841L27.0205 0.640625C38.1391 0.640625 45.065 1.0652 47.7982 1.80821C50.1865 2.47162 51.7256 4.01071 52.389 6.39896Z"
                    fill="#3A39FF"
                  />
                </svg>
              }
            />
            <SocialLink
              link={"#"}
              icon={
                <svg
                  width="65"
                  height="37"
                  viewBox="0 0 65 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={"w-[7.059vw] lg:!w-[3.385vw]"}
                >
                  <path
                    d="M36.2982 18.2166C36.2982 28.1079 28.2578 36.1284 18.3346 36.1284C15.9793 36.1316 13.6464 35.6708 11.4691 34.7723C9.29183 33.8739 7.31285 32.5553 5.64514 30.8921C3.97744 29.2288 2.65367 27.2533 1.74941 25.0785C0.84516 22.9036 0.378134 20.5719 0.375 18.2166C0.375 8.32126 8.41544 0.304709 18.3346 0.304709C20.6903 0.301048 23.0237 0.761476 25.2014 1.6597C27.3791 2.55792 29.3586 3.87634 31.0267 5.53967C32.6948 7.20299 34.0189 9.17863 34.9234 11.3538C35.8279 13.5289 36.2951 15.8609 36.2982 18.2166ZM56.0013 18.2166C56.0013 27.5307 51.9811 35.0776 47.0215 35.0776C42.0619 35.0776 38.0417 27.5268 38.0417 18.2166C38.0417 8.9024 42.0619 1.35554 47.0215 1.35554C51.9811 1.35554 56.0013 8.90639 56.0013 18.2166ZM64.0616 18.2166C64.0616 26.5595 62.6486 33.3223 60.9012 33.3223C59.1578 33.3223 57.7447 26.5555 57.7447 18.2166C57.7447 9.87363 59.1578 3.1109 60.9052 3.1109C62.6486 3.1109 64.0616 9.87363 64.0616 18.2166Z"
                    fill="#3A39FF"
                  />
                </svg>
              }
            />
          </div>
          <span
            className={
              "font-helvetica-now lg:!w-[40%] text-center uppercase text-white text-[5.412vw] lg:!text-[1.563vw] leading-[110%] font-medium"
            }
          >
            Would you like to collaborate or build something using the ZkNoid
            SDK?
          </span>
        </div>
      </div>
    </section>
  );
}
