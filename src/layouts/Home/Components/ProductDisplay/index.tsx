import Image from "next/image";
import IsMobile from "../../../../components/IsMobile";
import {TextCopy} from "../../components";
import { Container, ContentWrapper, ImageContainer } from "./style";
import { IImageProps, ILinkProps } from "../../../../types";
import { getStrapiMedia } from "../../../../lib/media";

interface IProductDisplayProps {
  title: string;
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
  text,
  image,
  link,
  highlightColor,
  offset,
  reversed,
}: IProductDisplayProps) {
  return (
    <Container>
      <ContentWrapper direction={reversed ? "row-reverse" : "row"}>
        <TextCopy
          highlightColor={highlightColor}
          title={title}
          text={text}
          link={link}
        />
        <IsMobile
          mobile={
            <ImageContainer
              offsetLeft={reversed ? offset : 0}
              offsetRight={!reversed ? offset : 0}
            >
              <Image
                width={image.sizes.mobile.data.attributes.width}
                height={image.sizes.mobile.data.attributes.height}
                src={getStrapiMedia(image.sizes.mobile)}
                alt={image.sizes.mobile.data.attributes.alternativeText}
              />
            </ImageContainer>
          }
          desktop={
            <ImageContainer
              offsetLeft={reversed ? offset : 0}
              offsetRight={!reversed ? offset : 0}
            >
              <Image
                width={image.sizes.desktop.data.attributes.width}
                height={image.sizes.desktop.data.attributes.height}
                src={getStrapiMedia(image.sizes.desktop)}
                alt={image.sizes.desktop.data.attributes.alternativeText}
              />
            </ImageContainer>
          }
        />
      </ContentWrapper>
    </Container>
  );
}
