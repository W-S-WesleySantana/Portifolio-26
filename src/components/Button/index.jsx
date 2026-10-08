
import { StyledButton } from './styles';

export function Button({ label, onClick, variant, bg, bghover,width, size}) {
  return (
    <StyledButton 
    variant={variant} 
    onClick={onClick} 
    bg={bg} 
    bghover={bghover}
     width={width} size={size} >
      
      {label}
    </StyledButton>
  );
}

export default Button
