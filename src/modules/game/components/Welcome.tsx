import Button from 'react-bootstrap/Button';

type Props = {
  startGame: () => void;
};

export function Welcome(props: Props) {
  const { startGame } = props;

  return (
    <div className="text-center">
      <h1>Welcome to the Trivia Challenge</h1>

      <div className="my-4">
        <p className="m-0">
          You will be presented with 10 True or False questions.
        </p>
        <p>Can you score 100%?</p>
      </div>

      <Button size="lg" onClick={() => startGame()}>
        Start
      </Button>
    </div>
  );
}
