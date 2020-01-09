import React from "react";

type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string; // ?를 붙이면 필수 props가 아니라는 뜻.
  onClick: (name: string) => void;
};

// props에 기본적으로 children이 들어가 있다.
// const Greetings: React.FC<GreetingsProps> = ({ name, mark }) => {} 이렇게 사용도 가능
// 해당 방법은 몇 가지 이슈가 있어서 사용하지 않는 것을 권장.
const Greetings = ({ name, mark, optional, onClick }: GreetingsProps) => {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
};

Greetings.defaultProps = {
  mark: "!"
};

export default Greetings;
