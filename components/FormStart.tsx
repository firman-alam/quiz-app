import { MenuItem, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as yup from 'yup';

import styles from '@/styles/Home.module.css';
import { Categories } from '@/constant/Categories';
import { Difficulties } from '@/constant/Difficulties';
import { setQuiz } from '@/redux/quizSlice';
import { setGame } from '@/redux/gameSlice';

const validationSchema = yup.object({
  category: yup.string().required('Category is required'),
  difficulty: yup.string().required('Difficulty is required'),
  type: yup.string().required('Type is required'),
});

const FormStart = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      category: '',
      difficulty: '',
      type: '',
    },
    onSubmit: (values) => {
      dispatch(setQuiz(values));
      dispatch(setGame({ isStart: true }));
      router.push('/quiz');
    },
    validationSchema: validationSchema,
  });

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Welcome</h1>
        <h2>Let's start the quiz!</h2>
      </div>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <TextField
          label='Category'
          name='category'
          value={formik.values.category}
          onChange={formik.handleChange}
          error={formik.touched.category && Boolean(formik.errors.category)}
          helperText={formik.touched.category && formik.errors.category}
          fullWidth
          select
        >
          {Categories.map((category) => (
            <MenuItem key={category.category} value={category.value}>
              {category.category}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label='Difficulty'
          name='difficulty'
          value={formik.values.difficulty}
          onChange={formik.handleChange}
          error={formik.touched.difficulty && Boolean(formik.errors.difficulty)}
          helperText={formik.touched.difficulty && formik.errors.difficulty}
          select
          fullWidth
        >
          {Difficulties.map((difficulty) => (
            <MenuItem key={difficulty.level} value={difficulty.value}>
              {difficulty.level}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label='Type'
          name='type'
          value={formik.values.type}
          onChange={formik.handleChange}
          error={formik.touched.type && Boolean(formik.errors.type)}
          helperText={formik.touched.type && formik.errors.type}
          fullWidth
          select
        >
          <MenuItem value='boolean'>True / False</MenuItem>
          <MenuItem value='multiple'>Multiple Choices</MenuItem>
        </TextField>

        <Button type='submit' variant='contained' fullWidth>
          Start
        </Button>
      </form>
    </div>
  );
};

export default FormStart;
