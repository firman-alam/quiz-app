// locals
import styles from '@/styles/Home.module.css';
import { firstLetterCaps, handleShuffle, parseQuotes } from '@/utils/functions';

// components
import Navbar from '@/components/Navbar';
import TrueFalse from '@/components/TrueFalse';
import Multiple from '@/components/Multiple';

// library
import { Button, CircularProgress } from '@mui/material';
import { MouseEvent, useState } from 'react';
import { RootState } from '@/redux/store';
import { useGetQuizQuestionsQuery } from '@/redux/api/apiSlice';
import { setGame } from '@/redux/gameSlice';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/redux/hook';

const totalQuestions = 10;

const quiz = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);

  const quiz = useAppSelector((state) => state.quiz);
  const { isStart, isOver } = useAppSelector((state) => state.game);

  const { data, isLoading, isSuccess } = useGetQuizQuestionsQuery(quiz);

  // next question
  const nextQuest = (): void => {
    const nextQuestion = questionNumber + 1;
    if (totalQuestions === nextQuestion) {
      dispatch(setGame({ isOver: true, isStart: false, score: score }));
      router.push('/');
    }
    setQuestionNumber(nextQuestion);
  };
  // prev question
  const prevQuest = (): void => {
    const prevQuestion = questionNumber - 1;
    if (prevQuestion <= 0) return setQuestionNumber(0);
    setQuestionNumber(prevQuestion);
  };
  // check answer
  const checkAnswer = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    if (isOver) return;

    // checking answer
    const choosedAnswer = e.currentTarget.innerText; // user answer value
    console.log(choosedAnswer);
    let correct;
    if (quiz.type === 'multiple') {
      correct =
        isSuccess &&
        data[questionNumber]?.correct_answer.toUpperCase() === choosedAnswer; // checking
    } else if (quiz.type === 'boolean') {
      correct =
        isSuccess &&
        data[questionNumber]?.correct_answer === firstLetterCaps(choosedAnswer); // checking
    }

    // if answer is correct
    if (correct) {
      setScore((previous) => previous + 1);
      nextQuest();
    } else if (!correct) {
      nextQuest();
    }
  };

  let content;
  if (isLoading) {
    content = (
      <>
        <div className={styles.loading}>
          <CircularProgress />
        </div>
      </>
    );
  } else if (isSuccess) {
    content = (
      <>
        <main className={styles.main}>
          {/* score */}
          <div className={styles.info}>
            <h2>
              Score: {score} / {totalQuestions}
            </h2>
            <h3>Category: {data[questionNumber]?.category}</h3>
          </div>

          {/* next & prev question button */}
          <div className={styles.direction}>
            <Button variant='outlined' color='error' onClick={prevQuest}>
              Previous
            </Button>

            <Button variant='outlined' color='info' onClick={nextQuest}>
              Next
            </Button>
          </div>

          {/* question */}
          <div className={styles.question}>
            <h2>Question</h2>
            <p>
              {data[questionNumber]?.question
                .replace(/&quot;/g, '"')
                .replace(/&#039;/g, "'")
                .replace(/&amp;/g, '&')
                .replace(/&deg;/g, '°')
                .replace(/&eacute/g, 'é')}
            </p>
          </div>

          {/* answer button */}
          {quiz.type === 'boolean' && <TrueFalse callback={checkAnswer} />}
          {quiz.type === 'multiple' && (
            <Multiple
              callback={checkAnswer}
              correctAns={data[questionNumber]?.correct_answer}
              incorrectAns={data[questionNumber]?.incorrect_answers}
            />
          )}
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      {content}
    </>
  );
};

export default quiz;
