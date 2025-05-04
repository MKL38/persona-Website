import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CarouselComponent = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      //   className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="h-[300px] w-full"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselPrevious className="absolute lg:top-48 sm:top-72 xl:left-48 left-2 z-10 h-[300px] w-10  bg-gray-50 hover:bg-gray-100" />
      <CarouselContent className="flex  gap-4 ">
        <CarouselItem className="flex lg:flex-row sm:flex-col items-center justify-center h-full w-[300px]   bg-slate  ">
          {/* Item 1 */}
          <div className="lg:flex lg:space-x-10 sm:space-y-10 ">
            <div className="flex items-center">
              <img
                className="w-[300px] h-[400px] drop-shadow-lg sm:mx-auto  "
                src="src\img\cor1.jpg"
                alt="c-level-presentation"
              />
            </div>
            <div className="flex ">
              <p className="w-[500px] text-start indent-12 ">
                Spearheaded strategic consultancy services for Makro in the
                HORECA business sector, formulating and implementing
                comprehensive client acquisition frameworks and revenue
                optimization protocols across metropolitan Bangkok and
                provincial markets. Orchestrated the development of data-driven
                presentations analyzing market penetration opportunities, profit
                and loss analysis, sales territory expansion initiatives, and
                customer relationship management strategies. Delivered
                actionable insights that enhanced operational efficiency,
                bolstered competitive positioning, and facilitated sustainable
                growth in both urban and rural market segments. Successfully
                identified key performance indicators for measuring success in
                customer development programs, resulting in measurable
                improvements in client retention rates and average transaction
                values within the hospitality, food service, and catering
                industries.
              </p>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="flex lg:flex-row sm:flex-col items-center justify-center h-full w-[300px]  bg-slate ">
          {/* Item 2 */}
          <div className="lg:flex lg:space-x-10 sm:space-y-10 ">
            <div className="flex items-center pt-0">
              <img
                className="w-[300px] h-[400px] drop-shadow-lg sm:mx-auto  "
                src="src\img\cor2.jpg"
                alt="c-level-presentation"
              />
            </div>
            <div className="flex items-start">
              <p className="w-[500px] text-start indent-12 ">
                Participated in comprehensive leadership development programs
                focused on enhancing self-leadership competencies, team coaching
                methodologies, and strategic mentorship capabilities for junior
                personnel, delivered through specialized training curricula
                conducted by industry-recognized facilitators within the retail
                and trade sectors. Engaged in exclusive knowledge-sharing
                sessions with C-suite executives from Charoen Pokphand Group,
                acquiring valuable insights into organizational leadership and
                strategic business management. Additionally, orchestrated
                cross-functional networking initiatives to identify and
                cultivate internal business synergy opportunities among diverse
                corporate business units, including CPF (Charoen Pokphand
                Foods), True Corporation, and CP All, resulting in enhanced
                operational collaboration and resource optimization across the
                conglomerate's ecosystem. These experiences significantly
                augmented interpersonal effectiveness and strategic business
                acumen within the organization's multifaceted enterprise
                structure.
              </p>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="flex lg:flex-row sm:flex-col items-center justify-center h-full w-[300px]  bg-slate ">
          {/* Item 3 */}
          <div className="lg:flex lg:space-x-10 sm:space-y-10 ">
            <div className="flex items-center pt-0">
              <img
                className="w-[300px] h-[400px] drop-shadow-lg sm:mx-auto  "
                src="src\img\cor3.jpg"
                alt="c-level-presentation"
              />
            </div>
            <div className="flex items-start">
              <p className="w-[500px] text-start indent-12 ">
                Attained formal certification as a Sponsor (Project Manager)
                from the CP Leadership Institute (CPLI), demonstrating mastery
                of project governance methodologies and cross-functional team
                leadership principles. This credential validates competency in
                strategic resource allocation, performance metric development,
                and operational excellence frameworks specifically tailored to
                the business-to-business environment. Leveraged this specialized
                expertise to drive transformative initiatives across CP Axtra's
                (Makro & Lotus's) wholesale operations, with particular emphasis
                on the HORECA sector. Successfully implemented systematic
                efficiency improvements in store operations, sales optimization,
                and client relationship management protocols, resulting in
                measurable enhancements to departmental key performance
                indicators and overall business unit profitability. This
                certification underscores a commitment to continuous
                professional development and application of management practices
                within the competitive wholesale distribution marketplace.
              </p>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="flex lg:flex-row sm:flex-col items-center justify-center h-full w-[300px]  bg-slate ">
          {/* Item 4 */}
          <div className="lg:flex lg:space-x-10 sm:space-y-10 ">
            <div className="flex items-center pt-0">
              <img
                className="lg:w-[470px] h-[400px] sm:w-[440px] drop-shadow-lg sm:mx-auto  "
                src="src\img\cor4.jpg"
                alt="c-level-presentation"
              />
            </div>
            <div className="flex items-start">
              <p className="w-[500px] text-start indent-12 ">
                Established and cultivated strategic business relationships
                across the entire B2B client spectrum for Makro (all
                segmentation from vendor to corporate segment). Encompassing
                diverse stakeholders from supplier partners to corporate
                enterprises. Functioned as the pivotal liaison between regional
                sales divisions and the central account executive team, running
                negotiations around product procurement, fulfillment logistics,
                pricing structures, margin preservation strategies, and
                customized product solutions.
              </p>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="flex lg:flex-row sm:flex-col items-center justify-center h-full w-[300px]  bg-slate ">
          {/* Item 5 */}
          <div className="lg:flex lg:space-x-10 sm:space-y-10 ">
            <div className="flex items-center pt-11">
              <img
                className="w-[300px] h-[400px] sm:w-[400px] drop-shadow-lg sm:mx-auto  "
                src="src\img\cor5.jpg"
                alt="c-level-presentation"
              />
            </div>
            <div className="flex items-start">
              <p className="w-[500px] text-start indent-12 ">
                Guided junior team members through B2B market fundamentals,
                business etiquette standards, and operational protocols. Managed
                team performance metrics focusing on P&L targets, employee
                turnover, and retention rates. Implemented monthly performance
                assessments for all team members, providing targeted coaching to
                develop essential skills and establish clear career progression
                paths for them. Executed recruitment responsibilities including
                candidate interviews and final hiring decisions. Evaluated
                candidates based on leadership potential and organizational fit
                to strengthen the company's talent pipeline.
              </p>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselNext className="absolute lg:top-48 sm:top-72 xl:right-48 right-2 z-10 h-[300px] w-10   bg-gray-50 hover:bg-gray-100" />
    </Carousel>
  );
};

export default CarouselComponent;
