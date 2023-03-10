import styled from 'styled-components';

export const VideoSection = styled.section`
  width: 100%;
  height: 192px;
  overflow: hidden;
  margin-top: 25px;
  .swiper-wrapper {
    display: inline-flex;
    padding-left: 10px;
  }
  .swiper-container {
    width: 210px !important;
  }
  .swiper-slide {
    width: 120px !important;
  }
  &:first-of-type svg {
    margin-bottom: -1px;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 15px;
  font-weight: 600;
  margin-left: ${({ theme }) => theme.style.edge_padding};
  margin-bottom: 15px;
  span {
    margin-left: 3px;
  }
`;
