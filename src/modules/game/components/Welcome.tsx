type Props = {
  startGame: () => void;
};

export function Welcome(props: Props) {
  const { startGame } = props;

  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={() => startGame()}>Start</button>
    </div>
  );
}
