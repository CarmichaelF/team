import Image from "next/image";
import IsMobile from "../../../../components/IsMobile";
import { TextCopy } from "../../components";
import { Container, ContentWrapper, ImageContainer } from "./style";
import { IImageProps, ILinkProps } from "../../../../types";

import { PrismicRichTextProps } from "@prismicio/react";
import { RichTextField } from "@prismicio/types";

interface IProductDisplayProps {
  title: string;
  highlighted_word: string;
  text: string;
  image: {
    offset?: {
      left?: string;
      right?: string;
    };
    sizes: {
      mobile: IImageProps;
      desktop: IImageProps;
    };
  };
  link: ILinkProps;
  highlightColor: string;
  offset: number;
  reversed: boolean;
}

export default function ProductDisplay({
  title,
  highlighted_word,
  text,
  image,
  link,
  highlightColor,
  offset,
  reversed,
}: IProductDisplayProps) {
  return (
    <Container className={`product-display${reversed ? "-reversed" : ""}`}>
      <ContentWrapper direction={reversed ? "row-reverse" : "row"}>
        <TextCopy
          highlightColor={highlightColor}
          highlighted_word={highlighted_word}
          title={title}
          text={text}
          link={link}
        />
        <IsMobile
          mobile={
            <ImageContainer
              offsetLeft={reversed ? -offset : 0}
              offsetRight={!reversed ? -offset : 0}
            >
              <Image
                width={image.sizes.mobile.dimensions.width}
                height={image.sizes.mobile.dimensions.height}
                src={image.sizes.mobile.url}
                alt={image.sizes.mobile.alt}
              />
            </ImageContainer>
          }
          desktop={
            <ImageContainer
              offsetLeft={reversed ? -offset : 0}
              offsetRight={!reversed ? -offset : 0}
            >
              <Image
                width={image.sizes.desktop.dimensions.width}
                height={image.sizes.desktop.dimensions.height}
                src={image.sizes.desktop.url}
                alt={image.sizes.desktop.alt}
              />
            </ImageContainer>
          }
        />
      </ContentWrapper>
    </Container>
  );
}
