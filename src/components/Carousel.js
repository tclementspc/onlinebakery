import { Carousel, CarouselCaption, CarouselControl, CarouselItem, CarouselIndicators } from "reactstrap";
import originalcinnamon from '../app/assets/images/originalcinnamon.jpg';
import oreothumbnail from '../app/assets/images/oreothumbnail.jpg';
import junredvelvet from '../app/assets/images/junredvelvet.jpg';
import goodcookiemonster from '../app/assets/images/goodcookiemonster.jpeg';
import junbirthday from '../app/assets/images/junbirthday.jpg';


export const Carousel = () => {

    return (

<Carousel
  activeIndex={0}
  next={function noRefCheck(){}}
  previous={function noRefCheck(){}}
>
  <CarouselIndicators
    activeIndex={0}
    items={[
      {
        altText: 'Slide 1',
        caption: 'Original Cinnamon Roll',
        key: 1,
        // src: '../app/assets/images/originalcinnamon.jpg',
        src: originalcinnamon,
      },
      {
        altText: 'Slide 2',
        caption: 'Oreo Cookie Roll',
        key: 2,
        // src: 'https://picsum.photos/id/456/1200/600'
        src: oreothumbnail,
      },
      {
        altText: 'Slide 3',
        caption: 'Red Velvet Roll',
        key: 3,
        // src: 'https://picsum.photos/id/678/1200/600'
        src: junredvelvet,
      },
      {
        altText: 'Slide 4',
        caption: 'Cookie Monster Roll',
        key: 4,
        // src: 'https://picsum.photos/id/678/1200/600'
        src: goodcookiemonster,
      },
      {
        altText: 'Slide 5',
        caption: 'Birthday Cake Roll',
        key: 5,
        // src: 'https://picsum.photos/id/678/1200/600'
        src: junbirthday,
      }

    ]}
    onClickHandler={function noRefCheck(){}}
  />
  <CarouselItem
    onExited={function noRefCheck(){}}
    onExiting={function noRefCheck(){}}
  >
    <img
      alt="Slide 1"
    //   src="https://picsum.photos/id/123/1200/600"
         src='originalcinnamon'
    />
    <CarouselCaption
      captionHeader="Original Cinnamon Roll"
      captionText="$30 per dozen"
    />
  </CarouselItem>
  <CarouselItem
    onExited={function noRefCheck(){}}
    onExiting={function noRefCheck(){}}
  >
    <img
      alt="Slide 2"
    //   src="https://picsum.photos/id/456/1200/600"
         src='oreothumbnail'
    />
    <CarouselCaption
      captionHeader="Oreo Cookie Roll"
      captionText="$33 per dozen"
    />
  </CarouselItem>
  <CarouselItem
    onExited={function noRefCheck(){}}
    onExiting={function noRefCheck(){}}
  >
    <img
      alt="Slide 3"
    //   src="https://picsum.photos/id/678/1200/600"
         src='junredvelvet'
    />
    <CarouselCaption
      captionHeader="Red Velvet Roll"
      captionText="$30 per dozen"
    />
  </CarouselItem>
  <CarouselItem
    onExited={function noRefCheck(){}}
    onExiting={function noRefCheck(){}}
  >
    <img
      alt="Slide 4"
    //   src="https://picsum.photos/id/678/1200/600"
         src='goodcookiemonster'
    />
    <CarouselCaption
      captionHeader="Cookie Monster Roll"
      captionText="$33 per dozen"
    />
  </CarouselItem>
  <CarouselItem
    onExited={function noRefCheck(){}}
    onExiting={function noRefCheck(){}}
  >
    <img
      alt="Slide 5"
    //   src="https://picsum.photos/id/678/1200/600"
         src='junbirthday'
    />
    <CarouselCaption
      captionHeader="Birthday Sprinkles Roll"
      captionText="$35 per dozen"
    />
  </CarouselItem>

  <CarouselControl
    direction="prev"
    directionText="Previous"
    onClickHandler={function noRefCheck(){}}
  />
  <CarouselControl
    direction="next"
    directionText="Next"
    onClickHandler={function noRefCheck(){}}
  />
</Carousel>
    );
};
