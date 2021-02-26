import { useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Formik } from 'formik';
import { Link as RouterLink } from 'react-router-dom';

import Copyright from '../../components/Copyright';
import { useStyles } from './styles';
import { routes } from '../../routes';
import { constants } from '../../constants';
import { register as registerSchema } from '../../yup-schemas/authSchema';

export default function SignUp() {
	const classes = useStyles();

	useEffect(() => {
		document.title = `Register | ${constants.title}`;
	}, []);

	return (
		<Container component='main' maxWidth='xs'>
			<div className={classes.appBarSpacer} />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Register
				</Typography>
				<Formik
					initialValues={{ name: '', phone: '', email: '', password: '' }}
					validationSchema={registerSchema}
					onSubmit={(values) => {
						console.log(JSON.stringify(values, null, 2));
					}}
				>
					{({
						values,
						errors,
						touched,
						handleChange,
						handleBlur,
						handleSubmit,
						isSubmitting,
					}) => (
						<form className={classes.form} onSubmit={handleSubmit} noValidate>
							<Grid container spacing={2}>
								<Grid item xs={12}>
									<TextField
										variant='outlined'
										required
										fullWidth
										id='name'
										label='Name'
										name='name'
										autoComplete='name'
										placeholder='e.g.: John Doe'
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.name}
										error={!!errors.name && touched.name}
										helperText={errors.name && touched.name && errors.name}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										variant='outlined'
										required
										fullWidth
										id='phone'
										label='Contact No.'
										name='phone'
										autoComplete='phone'
										placeholder='e.g.: 09223456789'
										type='tel'
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.phone}
										error={!!errors.phone && touched.phone}
										helperText={errors.phone && touched.phone && errors.phone}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										variant='outlined'
										required
										fullWidth
										id='email'
										label='Email Address'
										name='email'
										autoComplete='email'
										placeholder='e.g.: john.doe@gmail.com'
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.email}
										error={!!errors.email && touched.email}
										helperText={errors.email && touched.email && errors.email}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										variant='outlined'
										required
										fullWidth
										name='password'
										label='Password'
										type='password'
										id='password'
										autoComplete='current-password'
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.password}
										error={!!errors.password && touched.password}
										helperText={
											errors.password && touched.password && errors.password
										}
									/>
								</Grid>
							</Grid>
							<Button
								type='submit'
								fullWidth
								variant='contained'
								color='primary'
								className={classes.submit}
								disabled={isSubmitting}
							>
								Register
							</Button>
							<Grid container justify='flex-end'>
								<Grid item>
									<Link
										to={routes.login.path}
										variant='body2'
										component={RouterLink}
									>
										Already have an account? Login
									</Link>
								</Grid>
							</Grid>
						</form>
					)}
				</Formik>
			</div>
			<Copyright />
		</Container>
	);
}
