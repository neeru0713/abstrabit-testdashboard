import React from "react";
import Header from "./Header";
import Timeline from "./Timeline";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import InfoBox from "./InfoBox";
import InfoBoxLogo from "../assets/InfoBoxLogo.png";
import BajajFinserv from "../assets/BajajFinserv.png";
import ShriRamFIN from "../assets/ShriRamFIN.png";
import MahindraBankIcon from "../assets/MahindraBankIcon.png";
import FaqBox from "./FaqBox";
import { ScheduleBox } from "./ScheduleBox";
import PieChartComponent from "./PieChartComponent";
import Button from "./Button";

const Home = () => {
  return (
    <div className="home bg-[#f7f8fa] scroll snap-both pb-10">
      <Header />
      {/* <Timeline/> */}
      <div className="flex mx-20 flex-col gap-8">
        <div>
        <h1 className="text-2xl pt-10 px-10">Welcome, Johan Paul</h1>
        <div className="flex w-[100%] gap-6 pt-8 px-10">
          <div className="border rounded-md gap-4 shadow shadow-lg w-[35%] bg-white">
            <PieChartComponent />
          </div>
          <div className="flex flex-col border rounded-md gap-4 shadow shadow-lg w-[65%] bg-white">
            <Timeline />
          </div>
        </div>
        </div>
        <div className="flex mx-10 gap-8">
          <div class="cards-faq-section flex flex-col w-[70%] gap-10">
            <div className="cards-grid grid grid-cols-2 gap-4 ">
              <InfoBox
                logo={InfoBoxLogo}
                heading="Utkarsh Small Finance Bank"
                chips={["Highest Interest Rate", "RBI Insured"]}
                interestRate="9.10"
                primary="#520b8e"
                secondary="#f0dfff"
                tertiary="#f8f1ff"
              />
              <InfoBox
                logo={BajajFinserv}
                heading="Bajaj Finserv"
                chips={["Crisil AAA Rated", "No Video KYC reqiured"]}
                interestRate="8.80"
                primary="#0072bb"
                secondary="#d8e9f9"
                tertiary="#f0f6ff"
              />

              <InfoBox
                logo={ShriRamFIN}
                heading="Shriram Finance"
                chips={["Crisil AAA Rated", "No Video KYC reqiured"]}
                interestRate="8.80"
                primary="#010101"
                secondary="#dedede"
                tertiary="#f4f4f4"
              />
              <InfoBox
                logo={MahindraBankIcon}
                heading="Mahindra Finance"
                chips={["Crisil AAA Rated", "No Video KYC reqiured"]}
                interestRate="8.80"
                primary="#ff0000"
                secondary="#ffd8d7"
                tertiary="#ffeeef"
              />
            </div>
            <div className="faq-section flex flex-col gap-3">
              <h1>
                <h1 className="text-2xl font-medium">Get Answer</h1>
                <div className="flex justify-between font-medium">
                  <p>to all your questions</p>

                  <div class="btns-group flex gap-4">
                    <FaChevronLeft className="text-[#c6c6c8] text-3xl" />
                    <FaChevronRight className="text-3xl" />
                  </div>
                </div>
              </h1>
              <div className="flex gap-10">
                <FaqBox
                  title="How FDs are Taxed"
                  content="Lorem Ipsum is simply dummy Text of the printing and Text of the printing and"
                />
                <FaqBox
                  title="How FDs are Taxed"
                  content="Lorem Ipsum is simply dummy Text of the printing and Text of the printing and"
                />
                <FaqBox
                  title="How FDs are Taxed"
                  content="Lorem Ipsum is simply dummy Text of the printing and Text of the printing and"
                />
              </div>
            </div>
          </div>
          <div class="schedule-section border w-[30%] h-full">
            <ScheduleBox 
            title="Video Kyc" 
            scheduleType="Scheduled On"
            calanderDate="28"
            content="Utkarsh SF Bank FD plan 2"
            depositeAmt="Rs. 20,000"
            tennure="2 Years"
            interestRate="9.10"
            primaryButtonName="Complete Now"
            secondaryButtonName="Reschedule"
          />
          <hr/>
            <ScheduleBox 
            title="Pending Payment" 
            scheduleType="Pay By"
            calanderDate="30"
            content="Bajaj Finserv Corp FD 1"
            depositeAmt="Rs. 25,000"
            tennure="18 Months"
            interestRate="8.10"
            primaryButtonName="Pay Now"
            secondaryButtonName="Cancel Application"
          />
          <hr/>
            <ScheduleBox 
            title="Upcoming FD Maturity" 
            scheduleType="Renew By"
            calanderDate="30"
            content="Shriram Finance Corp FD 1"
            depositeAmt="Rs. 25,000"
            tennure="18 Months"
            interestRate="8.10"
            primaryButtonName="Renew Now"
            secondaryButtonName="Compare other FDs"
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
