import { useTimer } from "react-timer-hook";

const Timer = ({ expiryTimestamp, onExpire }) => {
  const { seconds, minutes, start, pause, resume, restart } = useTimer({
    expiryTimestamp,
    onExpire,
  });

  useEffect(() => {
    start();
  }, [start]);

  return (
    <div>
      <div>
        {minutes}:{seconds}
      </div>
    </div>
  );
};

export default Timer;
