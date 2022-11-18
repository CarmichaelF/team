import styled from "styled-components";

export const Container = styled.section`
  margin: 60px 0;
`;

export const TestimonialsWrapper = styled.div`
  margin-top: 60px;

  /* the slides */
  .slick-slide > div {
    margin: 0 30px;
  }

  /* the parent */
  .slick-list {
    margin: 0 -30px;
  }

  .slick-prev,
  .slick-next {
    position: relative;
  }
`;

export const TestimonialCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 35px 15px;
  border-radius: 5px;
  background-color: #ffffff;
`;

export const StarsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

export const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 26px;
`;

export const ImageWrapper = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
`;

export const AuthorText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;

interface IArrowProps {
  transform?: string;
}

export const ArrowsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 30px;
  margin-top: 30px;
`;

export const Arrow = styled.button<IArrowProps>`
  transform: ${({ transform }) => transform && transform};
  display: flex;
  align-items: center;
  justify-content: center;
`;
