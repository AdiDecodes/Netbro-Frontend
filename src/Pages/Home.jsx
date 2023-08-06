import React, {
	createContext,
	useEffect,
	useState,
} from 'react';
import styles from '../Styles/Home.module.css';
const CartItems = createContext();
import Header from '../Components/Header';
import { BsCartPlusFill } from 'react-icons/bs';
import { AiFillCamera } from 'react-icons/ai';
import { FaRegHandshake } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import {
	BiCamera,
	BiStats,
} from 'react-icons/bi';
import moment from 'moment';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

const Home = () => {
	const [cartItems, setCartItems] = useState([
		{
			id: 1,
			title: 'hello',
		},
		{
			id: 1,
			title: 'hello',
		},
		{
			id: 1,
			title: 'hello',
		},
		{
			id: 1,
			title: 'hello',
		},
		{
			id: 1,
			title: 'hello',
		},
	]);

	const [serviceCards, setServiceCards] = useState(
		[
			{
				id: 0,
				title: 'Web Development',
				image: '',
				desc: 'Web development service',
			},
			{
				id: 1,
				title: 'Website Development + Handling',
				image: '',
				desc: 'Web development service',
			},
			{
				id: 2,
				title: 'Web Handling',
				image: '',
				desc: 'Web development service',
			},
		]
	);

	const [SliderData, setSliderData] = useState([
		{
			id: 0,
			title: '',
			desc: '',
			url: '',
			img: '',
		},
	]);

	const [testmonial, setTestimonial] = useState([
		{
			id: 0,
			title: '',
			description: '',
			name: '',
		},
		{
			id: 1,
			title: '',
			description: '',
			name: '',
		},
		{
			id: 2,
			title: '',
			description: '',
			name: '',
		},
		{
			id: 3,
			title: '',
			description: '',
			name: '',
		},
	]);

	const [services, setServices] = useState([
		{
			icon: <BiStats />,
			id: 0,
			title: 'Social Media Managing',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse suscipit sapiente provident.',
			url: '',
		},
		{
			id: 1,
			icon: <AiFillCamera />,
			title: 'Photography',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse suscipit sapiente provident.',
			url: '',
		},
		{
			id: 2,
			icon: <FaRegHandshake />,
			title: 'PR Agency',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse suscipit sapiente provident.',
			url: '',
		},
	]);

	const [checked, setChecked] = useState({
		coding: true,
		nonCoding: false,
	});
	const [totalPrice, setTotalPrice] =
		useState(2000);

	const [formData, setFormData] = useState({
		type: 'Website Development',
		id: 0,
		website: '',
		development: 'Coding',
		deadline: '',
		specialRequest: '',
		price: totalPrice,
	});

	const [selectedService, setSelectedService] =
		useState('');

	const [
		SpecialRequestData,
		setSpecialRequestData,
	] = useState('');

	const [startDate, setStartDate] = useState(
		new Date()
	);

	const [currentDate, setCurrentDate] = useState(
		new Date()
	);

	const [date, setDate] = useState('');

	const ServiceSelected = (item) => {
		setSelectedService(item.id);
	};

	const codingSelected = () => {
		setChecked((prev) => ({
			...prev,
			coding: true,
			nonCoding: false,
		}));

		setFormData((prev) => ({
			...prev,
			development: 'Coding',
		}));
	};

	const nonCodingSelected = () => {
		setChecked((prev) => ({
			...prev,
			coding: false,
			nonCoding: true,
		}));

		setFormData((prev) => ({
			...prev,
			development: 'Noncoding',
		}));
	};

	useEffect(() => {
		console.log(formData);
	}, [formData]);

	const formatDate = (date) => {
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'numeric',
			day: 'numeric',
		});
	};

	const SpecialRequest = (e) => {
		setFormData((prev) => ({
			...prev,
			specialRequest: e.target.value,
		}));
		setSpecialRequestData(e.target.value);
	};

	const DateSelected = (e) => {
		const dateselected = e.target.value;
		const setDateFormat = dateselected.split('-');
		const year = parseInt(setDateFormat[0]);
		const month = parseInt(setDateFormat[1]);
		const date = parseInt(setDateFormat[2]);

		const setCDateFormat =
			formatDate(currentDate).split('/');
		const Cyear = parseInt(setCDateFormat[2]);
		const Cmonth = parseInt(setCDateFormat[0]);
		const Cdate = parseInt(setCDateFormat[1]);
		if (
			date >= Cdate &&
			month >= Cmonth &&
			year >= Cyear
		) {
			setFormData((prev) => ({
				...prev,
				deadline: date + '/' + month + '/' + year,
			}));
			setStartDate(date + '/' + month + '/' + year);
			console.log('Done');
		} else {
			alert('Cannot select previous date');
			console.log('Date error');
		}
	};

	const Form1 = () => {
		return (
			<div className={styles.formWrapper}>
				<h4>Web Development Service</h4>
				<p className={styles.heading}>
					Select The Type of website
				</p>
				<select
					className={styles.dropdown}
					name='cars'
					id='cars'
					onChange={(event) => {
						setFormData((prevState) => ({
							...prevState,
							website: event.target.value,
						}));
					}}
					required
				>
					<option value='none'>Select</option>
					<option value='ecomm'>
						E-commerce Website
					</option>
					<option value='edu'>
						Educational Website
					</option>
					<option value='food'>
						Food Order Website
					</option>
					<option value='blog'>Blog Website</option>
					<option value='portfolio'>
						Portfolio Website
					</option>
					<option value='other'>
						Other Website Development
					</option>
				</select>
				{formData.website == 'other' && (
					<textarea
						placeholder='Which type of website you require?'
						name=''
						id=''
						cols='100'
						rows='5'
						className={styles.textarea}
					/>
				)}
				<p className={styles.heading}>
					Select The Development type
				</p>
				<div className={styles.chkboxWrapper}>
					<input
						type='checkbox'
						name='coding'
						checked={checked.coding}
						onChange={codingSelected}
					/>
					<label htmlFor='coding'>Coding</label>
					<input
						type='checkbox'
						name='noncoding'
						checked={checked.nonCoding}
						onChange={nonCodingSelected}
					/>
					<label htmlFor='noncoding'>Non-Coding</label>
				</div>
				<p className={styles.heading}>Deadline</p>
				{/* <DatePicker
					className={styles.DatePicker}
					selected={startDate}
					onChange={(date) => {
						console.log(date);
					}}
				/> */}
				<input
					className={styles.DatePicker}
					type='date'
					onChange={(e) => {
						DateSelected(e);
					}}
				/>
				<p className={styles.heading}>
					Special request (Optional)
				</p>
				<textarea
					placeholder='Modular Navbar, TailwindCSS, etc ...'
					name=''
					id=''
					cols='100'
					rows='5'
					className={styles.textarea}
					value={SpecialRequestData}
					onChange={(e) => {
						SpecialRequest(e);
					}}
				/>

				<p className={styles.heading2}>
					Expected Price: ₹{totalPrice}
				</p>
				<div className={styles.addToCart}>
					<BsCartPlusFill />
					<p>Add to Cart</p>
				</div>
			</div>
		);
	};

	const FormValidate = () => {};
	return (
		<CartItems.Provider value={cartItems}>
			<div className={styles.Container}>
				<Header />
				<div className={styles.mainWrapper}>
					<div className={styles.banner}>
						{/* {SliderData.map((item) => {
							return (
								<div
									key={item.id}
									className={styles.slide}
								>
									<img
										src={item.img}
										alt=''
									/>
								</div>
							);
						})} */}
					</div>
					<div className={styles.ServiceCardWrapper}>
						{serviceCards.map((item) => {
							return (
								<div
									key={item.id}
									className={styles.serviceCard}
								>
									<img
										src={item.image}
										alt=''
									/>
									<h3>{item.title}</h3>
									<p>{item.desc}</p>
									<div
										className={styles.proceed}
										onClick={() => ServiceSelected(item)}
									>
										Proceed
									</div>
								</div>
							);
						})}
					</div>
					<div className={styles.formMain}>
						{Form1()}
					</div>
					<h4 className={styles.heading3}>
						What our clients say
					</h4>
					<div className={styles.testimonial}></div>
					<div className={styles.heading3}>
						You may also like
					</div>
					<div className={styles.serviceWrapper}>
						{services.map((item) => {
							return (
								<div
									className={styles.OtherServiceCard}
									key={item.id}
								>
									{item.icon}
									<h3 className={styles.title}>
										{item.title}
									</h3>
									<div className={styles.viewLinkWrapper}>
										<h3>View</h3>
										<BsArrowRight />
									</div>
								</div>
							);
						})}
						<div className={styles.arrowMore}>
							<h3>View All</h3>
							<BsArrowRight />
						</div>
					</div>
				</div>
			</div>
		</CartItems.Provider>
	);
};

export default Home;
export { CartItems };
