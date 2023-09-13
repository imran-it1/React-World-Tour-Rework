import PropTypes from "prop-types";

const Header = () => {
	return (
		<div className="text-center bg-red-50 py-3 border border-red-200 shadow-md">
			<h1 className=" text-3xl font-medium leading-relaxed tracking-wide">
				React World Tour
			</h1>
		</div>
	);
};

Header.propTypes = {};

export default Header;
