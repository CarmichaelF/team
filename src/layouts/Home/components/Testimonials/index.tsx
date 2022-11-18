import { useRef } from "react";
import Image from "next/image";
import { Text } from "../../../../components/Generic/Text";
import { Title } from "../../../../components/Generic/Title";
import { Wrapper } from "../../../../components/Wrapper";
import Star from "../../../../icons/Star";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  Arrow,
  ArrowsWrapper,
  AuthorText,
  AuthorWrapper,
  Container,
  ImageWrapper,
  StarsWrapper,
  TestimonialCard,
  TestimonialsWrapper,
} from "./style";
import ChevronRight from "../../../../icons/ChevronRight";
import { ITestimonialsData } from "../..";
import { getStrapiMedia } from "../../../../lib/media";

interface ITestimonialsProps {
  testimonials: ITestimonialsData[];
}

export default function Testimonials({ testimonials }: ITestimonialsProps) {
  const sliderRef = useRef<any>();

  return (
    <Container>
      <Wrapper>
        <Title
          as="h2"
          sx={{
            textAlign: "center",
          }}
        >
          Testimonials about our team
        </Title>
        <TestimonialsWrapper>
          <Slider
            {...{
              dots: false,
              infinite: true,
              slidesToShow: 3,
              slidesToScroll: 1,
              responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                  },
                },
              ],
            }}
            ref={sliderRef}
          >
            {testimonials.map(
              ({ id, author, avatar, paragraph, role, stars }) => (
                <TestimonialCard key={id}>
                  <StarsWrapper>
                    {Array.from({ length: stars }).map((_, index) => (
                      <Star width={20} height={20} key={index} />
                    ))}
                  </StarsWrapper>
                  <Text>{paragraph}</Text>
                  <AuthorWrapper>
                    <ImageWrapper>
                      <Image
                        layout="fill"
                        src={getStrapiMedia(avatar)}
                        alt={author}
                      />
                    </ImageWrapper>
                    <AuthorText>
                      <Text
                        as="span"
                      >
                        {author}
                      </Text>
                      <Text
                        as="span"
                        sx={{
                          fontWeight: "400",
                        }}
                      >
                        {role}
                      </Text>
                    </AuthorText>
                  </AuthorWrapper>
                </TestimonialCard>
              )
            )}
          </Slider>
        </TestimonialsWrapper>
        <ArrowsWrapper>
          <Arrow
            onClick={() => sliderRef.current.slickPrev()}
            transform="
                rotate(180deg)
              "
          >
            <ChevronRight fill="#21283B" width={40} height={40} />
          </Arrow>
          <Arrow onClick={() => sliderRef.current.slickNext()}>
            <ChevronRight fill="#21283B" width={40} height={40} />
          </Arrow>
        </ArrowsWrapper>
      </Wrapper>
    </Container>
  );
}
