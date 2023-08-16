import React from "react";
import ListMovie from "../../Components/ListMovie";
import CarouselComponet from "../../Components/Carousel";
import News from "../../Components/News";
function HomePage() {
  return (
    <div>
      <CarouselComponet />
      <ListMovie />
      <News />
    </div>
  );
}

export default HomePage;
