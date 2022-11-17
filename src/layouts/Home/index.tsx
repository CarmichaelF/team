import { IImageProps, ILinkProps } from "../../types";
import {Hero, ProductDisplay, Testimonials} from "./components";
import { Container } from "./style";

interface IProductDisplayProps {
  id: string;
  title: string;
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
      attributes: {
        hero: {
          title: string;
          paragraph: string;
          background_image: IImageProps;
        };
        product_display: IProductDisplayProps[];
        testimonials: ITestimonialsData[];
      };
    };
  };
}

export default function Home({ homepage }: IHomeProps) {
  return (
    <Container>
      <Hero
        title={homepage.data.attributes.hero.title}
        paragraph={homepage.data.attributes.hero.paragraph}
        image={homepage.data.attributes.hero.background_image}
      />
      {homepage.data.attributes.product_display.map(
        ({
          id,
          desktop_image,
          link,
          title,
          mobile_image,
          paragraph,
          highlight_color,
          offset,
          reversed,
        }) => (
          <ProductDisplay
            key={id}
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
          />
        )
      )}
      <Testimonials testimonials={homepage.data.attributes.testimonials} />
    </Container>
  );
}
