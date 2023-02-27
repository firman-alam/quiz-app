import { setGame } from '@/redux/gameSlice';
import { setQuiz } from '@/redux/quizSlice';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useSession, signIn, signOut } from 'next-auth/react';
import styles from '@/styles/Home.module.css';

const Navbar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { data: session } = useSession();

  return (
    <nav className={styles.navbar}>
      <div className={styles.wrapper}>
        <h2
          style={{ cursor: 'pointer' }}
          onClick={() => {
            router.push('/');
            dispatch(setGame({ isOver: false, isStart: false }));
            dispatch(setQuiz({ category: '', difficulty: '', type: '' }));
          }}
        >
          Quiz App
        </h2>

        {session && session.user ? (
          <h2 onClick={() => signOut()} style={{ cursor: 'pointer' }}>
            Sign out
          </h2>
        ) : (
          <h2 onClick={() => signIn()} style={{ cursor: 'pointer' }}>
            Sign in
          </h2>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
