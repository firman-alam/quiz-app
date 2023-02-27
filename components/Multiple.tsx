import { Button } from '@mui/material';
import styles from '@/styles/Home.module.css';
import { MouseEvent, useEffect, useState } from 'react';
import { handleShuffle } from '@/utils/functions';

type Answer = {
  correctAns?: string;
  incorrectAns?: string[];
  callback: (e: MouseEvent<HTMLButtonElement>) => void;
};

const Multiple = ({ correctAns, incorrectAns, callback }: Answer) => {
  const [options, setOptions] = useState<string[]>();

  useEffect(() => {
    setOptions(handleShuffle([correctAns!, ...incorrectAns!]));
  }, [correctAns, incorrectAns]);

  return (
    <section className={styles.container}>
      {/* answer */}
      <div className={styles.multiple}>
        {options &&
          options.map((option) => (
            <div key={option}>
              <Button variant='contained' fullWidth onClick={callback}>
                {option}
              </Button>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Multiple;
