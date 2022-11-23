import { RichTextField } from "@prismicio/types";
import { IImageProps, ILinkProps } from "../../types";
import { Hero, ProductDisplay, Testimonials } from "./components";
import { Container } from "./style";

interface IProductDisplayProps {
  id: string;
  title: string;
  highlighted_word: string;
  paragraph: string;
  link: ILinkProps;
  desktop_image: IImageProps;
  mobile_image: IImageProps;
  highlight_color: string;
  offset: number;
  reversed: boolean;
}

export interface ITestimonialsData {
  id: string;
  stars: number;
  paragraph: string;
  avatar: IImageProps;
  author: string;
  role: string;
}

interface IHomeProps {
  homepage: {
    data: {
      hero: {
        title: string;
        paragraph: string;
        background_image: IImageProps;
      }[];
      product_display: IProductDisplayProps[];
      testimonials: ITestimonialsData[];
    };
  };
}

export default function Home({ homepage }: IHomeProps) {
  return (
    <Container>
      <Hero
        title={homepage.data.hero[0].title}
        paragraph={homepage.data.hero[0].paragraph}
        image={homepage.data.hero[0].background_image}
      />
      {homepage.data.product_display.map(
        (
          {
            desktop_image,
            link,
            title,
            highlighted_word,
            mobile_image,
            paragraph,
            highlight_color,
            offset,
            reversed,
          },
          index
        ) => (
          <ProductDisplay
            key={index}
            title={title}
            text={paragraph}
            image={{
              offset: {
                right: "-400px",
              },
              sizes: {
                mobile: mobile_image,
                desktop: desktop_image,
              },
            }}
            link={link}
            highlightColor={highlight_color}
            offset={offset}
            reversed={reversed}
            highlighted_word={highlighted_word}
          />
        )
      )}
      <Testimonials testimonials={homepage.data.testimonials} />
    </Container>
  );
}
