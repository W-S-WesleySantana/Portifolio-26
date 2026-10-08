import styled from 'styled-components';


export const ButtonBox = styled.div`
  display: flex;
  gap: 15px;
`;


export const StyledButton = styled.button`
  padding: ${props => {
    if (props.size === 'xsmall') return '4px 10px'
    if (props.size === 'small') return '6px 12px';
    if (props.size === 'large') return '14px 28px';
    return '10px 20px'; 
  }};
  font-size: ${props => {
    if (props.size === 'xsmall') return '10px';
    if (props.size === 'small') return '14px';
    if (props.size === 'large') return '18px';
    return '16px'; 
  }};
  width: ${props => props.width || 'auto'};
  border-radius: 15px;
  border: none;
  cursor: pointer;
  color: #ffffff;
  font-weight: 500;

  background-color: ${props => props.bg || '#6C4AF5'};
  
  transform: scale(1);
  transition: 0.5s; 
  &:hover {
    background-color: ${props => props.bghover || 'rgb(45, 29, 115)'};
    transform: scale(0.9);
    -webkit-box-shadow: 
      0px 10px 13px -7px #000000, 
      9px 16px 50px 2px rgba(108,74,245,0.68); 

    box-shadow: 
      0px 10px 13px -7px #000000, 
      9px 16px 50px 2px rgba(108,74,245,0.68);
  }
`;
