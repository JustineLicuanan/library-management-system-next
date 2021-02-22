import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { useStyles } from '../components/App/styles';
import Copyright from '../components/Copyright';

interface Props {
	fixedHeightPaper: string;
}

const Home = ({ fixedHeightPaper }: Props) => {
	const classes = useStyles();

	return (
		<main className={classes.content}>
			<div className={classes.appBarSpacer} />
			<Container maxWidth='lg' className={classes.container}>
				<Grid container spacing={3}>
					{/* Chart */}
					<Grid item xs={12} md={8} lg={9}>
						<Paper className={fixedHeightPaper}>{/* <Chart /> */}</Paper>
					</Grid>
					{/* Recent Deposits */}
					<Grid item xs={12} md={4} lg={3}>
						<Paper className={fixedHeightPaper}>{/* <Deposits /> */}</Paper>
					</Grid>
					{/* Recent Orders */}
					<Grid item xs={12}>
						<Paper className={classes.paper}>{/* <Orders /> */}</Paper>
					</Grid>
				</Grid>
				<Box pt={4}>
					<Copyright />
				</Box>
			</Container>
		</main>
	);
};

export default Home;