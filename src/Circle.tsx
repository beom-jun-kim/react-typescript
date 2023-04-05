import styled from "styled-components";

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  background: ${(props) => props.bgColor};
  border: 5px solid ${(props) => props.borderColor};
`;

function Circle({ bgColor, borderColor, text }: CircleProps) {
  return (

    // Null 병합 연산자 : ?? 앞에 값이 null이거나 undefined이면 오른쪽 값을, 그렇지 않으면 왼쪽 값을 반환
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}

export default Circle;
