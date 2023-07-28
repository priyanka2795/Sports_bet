import React, {useState} from 'react';
import {ImArrowUp2} from 'react-icons/im';
import { Button } from './Styles';

const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	
	});
};

window.addEventListener('scroll', toggleVisible);

return (
	<Button className='scroll_btn'>
	<ImArrowUp2 onClick={scrollToTop}
	style={{display: visible ? 'inline' : 'none'}} className='bg-color' />
	</Button>
);
}

export default ScrollButton;