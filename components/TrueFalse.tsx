import { MouseEvent } from 'react';
import { Button } from '@mui/material';

import styles from '@/styles/Home.module.css';

type QuestionProps = {
  callback: (e: MouseEvent<HTMLButtonElement>) => void;
};

const TrueFalse = ({ callback }: QuestionProps) => {
  return (
    <section className={styles.container}>
      {/* answer */}
      <div className={styles.choices}>
        <Button
          variant='contained'
          type='button'
          color='primary'
          onClick={callback}
        >
          True
        </Button>
        <Button
          variant='contained'
          type='button'
          color='error'
          onClick={callback}
        >
          False
        </Button>
      </div>
    </section>
  );
};

export default TrueFalse;
