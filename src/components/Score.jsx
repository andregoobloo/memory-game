export default function Score({ score, highScore }) {
  return (
    <div className="text-3xl text-center">
      <p>Current score: {score}</p>
      <p>High score: {highScore}</p>
    </div>
  );
}
