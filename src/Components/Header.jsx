import React, { useContext } from 'react';
import styles from './Styles/Header.module.css';
import { BiCart } from 'react-icons/bi';
import { CartItems } from '../Pages/Home';

const Header = () => {
	return (
		<CartItems.Consumer>
			{(items) => {
				return (
					<div className={styles.MainWrapper}>
						<div className={styles.branding}>Title</div>
						<div className={styles.navbarContent}>
							<a href=''>Media</a>
							<a href=''>Press</a>
							<a href=''>Services</a>
							<a href=''>Contact</a>
							<a href=''>About Us</a>
						</div>
						<div className={styles.cartBtn}>
							<BiCart />
							<p>{items.length}</p>
						</div>
					</div>
				);
			}}
		</CartItems.Consumer>
	);
};

export default Header;
