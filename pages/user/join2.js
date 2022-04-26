import { yupResolver } from '@hookform/resolvers/yup';
import { styled, darken } from '@mui/material/styles';
import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion';
import { Controller, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import * as yup from 'yup';
import _ from '../@lodash';
import Image from 'next/image';
// import './style/UserLayout.scss'
// import "./style/UserRegister.scss"
// import { CheckList } from '..';
import { joinRequest } from '../../redux/reducers/userReducer';

/**
 * 생년월일/나이/핸드폰번호 추가하기. 
 * Form Validation Schema
 */
const schema = yup.object().shape({
  userid: yup.string().required('사용자 ID를 입력하시오'),
  name: yup.string().required('사용자 이름을 입력하시오'),
  email: yup.string().required('이메일을 이름을 입력하시오'),
  phone: yup.string().required('전화번호를 입력하시오'),
  password: yup
    .string()
    .required('비밀번호를 입력하시오')
    .min(8, '비밀번호가 너무 짧습니다. 최소 8자 이상 되어야 합니다'),
  passwordConfirm: yup.string().oneOf([yup.ref('password'), null], '비밀번호가 일치해야 합니다.'),

});

const defaultValues = {
  userid: '',
  password: '',
  email: '',
  name: '',
  phone: '',
  birth: '',
  address: ''
};

export default function Join() {
  const { control, formState, handleSubmit, reset } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch()

  const { isValid, dirtyFields, errors } = formState;

  function onSubmit() {
    reset(defaultValues);
  }

  return (
    <>
      <div className="User-container" style={{ width: "60vh" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Card
              square
            >
              <CardContent >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.2 } }}
                >
                  <div className="flex items-center mb-48">
                    <Image src={"/user/paper-pencil.jpg"}  alt="me" width="64" height="64" />
                    <div className="border-l-1 mr-4 w-1 h-40" />
                    <div>
                      <Typography className="text-24 font-semibold logo-text" color="inherit">
                      </Typography>
                      <Typography
                        className="text-16 tracking-widest -mt-8 font-700"
                        color="textSecondary"
                      >
                        회원가입
                      </Typography>
                    </div>
                  </div>
                </motion.div>
                <form
                  name="registerForm"
                  noValidate
                  className="flex flex-col justify-center w-full"  
                  onSubmit={handleSubmit(async (data) => { await dispatch(joinRequest({...data,}))})}                
                >
                  <Controller
                    name="userid"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        className="mb-16"
                        label="userid"
                        autoFocus
                        type="userid"
                        error={!!errors.userid}
                        helperText={errors?.userid?.message}
                        variant="outlined"
                        required
                        fullWidth
                      />
                    )}
                  />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                  <button onClick={() => dispatch(
                    exist(document.getElementById('email').value))}>중복체크</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                  <Controller
                    id='name'
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        className="mb-16"
                        label="Name"
                        type="name"
                        error={!!errors.name}
                        helperText={errors?.name?.message}
                        variant="outlined"
                        required
                        fullWidth
                      />
                    )}
                  />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        className="mb-16"
                        label="Phone"
                        type="text"
                        error={!!errors.phone}
                        helperText={errors?.phone?.message}
                        variant="outlined"
                        required
                        fullWidth
                      />
                    )}
                  />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        className="mb-16"
                        label="email"
                        type="text"
                        error={!!errors.email}
                        helperText={errors?.email?.message}
                        variant="outlined"
                        required
                        fullWidth
                      />
                    )}
                  />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                  <Controller
                    name="birth"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        className="mb-16"
                        label="Birth"
                        type="text"
                        error={!!errors.birth}
                        helperText={errors?.birth?.message}
                        variant="outlined"
                        required
                        fullWidth
                      />
                    )}
                  />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Controller
                    name="address"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        className="mb-16"
                        label="address"
                        type="address"
                        error={!!errors.address}
                        helperText={errors?.address?.message}
                        variant="outlined"
                        fullWidth
                      />
                    )}
                  />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        className="mb-16"
                        label="Password"
                        type="password"
                        error={!!errors.password}
                        helperText={errors?.password?.message}
                        variant="outlined"
                        required
                        fullWidth
                      />
                    )}
                  />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Controller
                    name="passwordConfirm"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        className="mb-16"
                        label="passwordConfirm"
                        type="passwordConfirm"
                        error={!!errors.password}
                        helperText={errors?.password?.message}
                        variant="outlined"
                        required
                        fullWidth
                      />
                    )}
                  />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    
                    <Button style={{'margin-top' : '60px'}}
                    variant="contained"
                    color="primary"
                    className="w-full mx-auto mt-16"
                    aria-label="Register"
                    disabled={_.isEmpty(dirtyFields) || !isValid}
                    type="submit"
                  >
                    Create an account
                  </Button>
                </form>
              </CardContent>



              <div className="flex flex-col items-center justify-center pb-32">
                <span className="font-normal">이미 회원이신가요?</span>
                <Link className="font-normal" href="/user/login">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  로그인하기
                </Link>
              
              </div>
              
            </Card>


            <div className="Register3-rightSection hidden md:flex flex-1 items-center justify-center p-64">
              <div className="max-w-320">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
                >
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.3 } }}
                >
                </motion.div>
                
              </div>
            </div>
          </motion.div>
        </div>
        {/* <div style={{marginTop: "-442px"}}>
        <CheckList/>
        </div> */}
    </>
  );
}