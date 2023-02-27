import { setGame } from '@/redux/gameSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import styles from '@/styles/Home.module.css';
import { Button } from '@mui/material';

const Result = () => {
  const dispatch = useAppDispatch();
  const { score } = useAppSelector((state) => state.game);

  const handleBackhome = () => {
    dispatch(setGame({ isStart: false, isOver: false, score: 0 }));
  };

  return (
    <div className={styles.container}>
      <h2>Results</h2>
      <h4>Your score is: {score}/10</h4>

      <Button variant='outlined' onClick={handleBackhome}>
        Back to home
      </Button>
    </div>
  );
};

export default Result;
