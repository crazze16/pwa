import styled from 'styled-components'

export const AdditionalInfo = styled.div`
  display: none;

`;

export const Wrapper = styled.div`
  width: 255px;
  display: flex;
  flex-direction: column;
  margin: 20px 5px;

  & img {
    display: block;
    height: 250px;
    background: #e3e3e3;
  }

  &:hover {
    
    ${AdditionalInfo} {
      display: block;
    }
  }
`;

export const Price = styled.div`
  margin-top: 8px;
  font-size: 20px;
  font-weight: 600;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
`;


export const Name = styled.p`
  padding-right: 10px;
  position: relative;
  font-size: 18px;

  &:after {
    content: '/';
    position: absolute;
    right: 2.5px;
  }
`;
export const Type = styled.p`
  color: #7d7d7d
`;