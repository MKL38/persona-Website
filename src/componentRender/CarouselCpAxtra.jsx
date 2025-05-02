import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

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
      )
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
      <CarouselPrevious className="absolute left-2 z-10 h-full w-10  bg-white/50 hover:bg-white/80" />
      <CarouselContent className="flex gap-4 ">
        <CarouselItem className="flex lg:flex-row sm:flex-col items-center justify-center h-full w-[300px]   bg-slate-100  ">
          {/* Item 1 */}
          <div className="lg:flex lg:space-x-10 sm:space-y-10 "><img className="w-[300px] h-[400px] drop-shadow-lg sm:mx-auto  " src="src\img\cor1.jpg" alt="c-level-presentation" />
          <div className="flex items-center"><p className="w-[400px] text-start ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo mollitia illo
             placeat similique laboriosam animi dolorem totam facilis
             cum! Suscipit, voluptatibus doloribus! Vel in nisi porro suscipit. Incidunt, minus molestiae.</p></div>
          </div>
        </CarouselItem>
        <CarouselItem className="flex lg:flex-row sm:flex-col items-center justify-center h-full w-[300px]  bg-slate-100 ">
          {/* Item 2 */}
          <div className="lg:flex lg:space-x-10 sm:space-y-10 "><img className="w-[300px] h-[400px] drop-shadow-lg sm:mx-auto  " src="src\img\cor2.jpg" alt="c-level-presentation" />
          <div className="flex items-center"><p className="w-[400px] text-start ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo mollitia illo
             placeat similique laboriosam animi dolorem totam facilis
             cum! Suscipit, voluptatibus doloribus! Vel in nisi porro suscipit. Incidunt, minus molestiae.</p></div>
          </div>
        </CarouselItem>
        <CarouselItem className="flex lg:flex-row sm:flex-col items-center justify-center h-full w-[300px]  bg-slate-100 ">
          {/* Item 3 */}
          <div className="lg:flex lg:space-x-10 sm:space-y-10 "><img className="w-[300px] h-[400px] drop-shadow-lg sm:mx-auto  " src="src\img\cor3.jpg" alt="c-level-presentation" />
          <div className="flex items-center"><p className="w-[400px] text-start ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo mollitia illo
             placeat similique laboriosam animi dolorem totam facilis
             cum! Suscipit, voluptatibus doloribus! Vel in nisi porro suscipit. Incidunt, minus molestiae.</p></div>
          </div>
        </CarouselItem>
        <CarouselItem className="flex lg:flex-row sm:flex-col items-center justify-center h-full w-[300px]  bg-slate-100 ">
            {/* Item 4 */}
            <div className="lg:flex lg:space-x-10 sm:space-y-10 "><img className="lg:w-[470px] h-[400px] sm:w-[440px] drop-shadow-lg sm:mx-auto  " src="src\img\cor4.jpg" alt="c-level-presentation" />
          <div className="flex items-center"><p className="w-[400px] text-start ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo mollitia illo
             placeat similique laboriosam animi dolorem totam facilis
             cum! Suscipit, voluptatibus doloribus! Vel in nisi porro suscipit. Incidunt, minus molestiae.</p></div>
          </div>
        </CarouselItem>
        <CarouselItem className="flex lg:flex-row sm:flex-col items-center justify-center h-full w-[300px]  bg-slate-100 ">
            {/* Item 5 */}
            <div className="lg:flex lg:space-x-10 sm:space-y-10 "><img className="w-[300px] h-[400px] sm:w-[400px] drop-shadow-lg sm:mx-auto  " src="src\img\cor5.jpg" alt="c-level-presentation" />
          <div className="flex items-center"><p className="w-[400px] text-start ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo mollitia illo
             placeat similique laboriosam animi dolorem totam facilis
             cum! Suscipit, voluptatibus doloribus! Vel in nisi porro suscipit. Incidunt, minus molestiae.</p></div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselNext className="absolute right-2 z-10 h-full w-10  bg-white/50 hover:bg-white/80" />
    </Carousel>
  );
};

export default CarouselComponent;
