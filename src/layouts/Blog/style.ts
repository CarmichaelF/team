import Link from "next/link";
import styled from "styled-components";
import { Wrapper } from "../../components/Wrapper";

export const Container = styled.div`
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  background-color: #f5f7fa;
`;

export const InnerContainer = styled(Wrapper)`
  display: flex;
  flex-direction: column;
`;

interface IFeaturedProps {
  bgImage: string;
}

export const Featured = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  min-height: 155px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.4) 50%
    ),
    url(${(props: IFeaturedProps) => props.bgImage});
  border-radius: 5px;
  padding: 10px 15px;

  @media (min-width: 768px) {
    min-height: 685px;
    padding: 60px 90px;
  }
`;

export const Articles = styled.section`
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-bottom: 60px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
  }
`;

export const ArticleCard = styled(Link)`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 5px;
  overflow: hidden;
`;

interface IArticleImageProps {
  bgImage: string;
}

export const ArticleImage = styled.div<IArticleImageProps>`
  position: relative;
  width: 100%;
  height: 168px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${({ bgImage }) => bgImage});
`;

export const ArticleText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 30px;
`;

export const AuthorSection = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

export const AvatarImageWrapper = styled.div`
  position: relative;
  width: 35px;
  height: 35px;
`;

export const AuthorText = styled.div`
  display: flex;
  flex-direction: column;
`;
