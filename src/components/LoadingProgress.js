import React, { Component} from 'react';
import {connect} from 'react-redux';

class LoadingProgress extends Component {
	render() {
		const {currentCount, endCount} = this.props;
		const percentComplete = Math.round((currentCount / endCount) * 100) + '%'; 
		const thisStyle = {width: percentComplete};
		return (
			<div style={styles.loading} className="col-sm-8 col-sm-offset-2">
				<h3 className="text-center">Processing File {currentCount + 1} of {endCount}...</h3>
				<div className="progress">
					<div className="progress-bar progress-bar-primary" aria-valuemax="100" style={thisStyle} />
				</div>
			</div>	
		);	
	}	
}

function mapStateToProps({main}) {
	const {currentCount, endCount} = main;
	return { currentCount, endCount};
}

export default connect(mapStateToProps)(LoadingProgress);

const styles = {
	loading: {
		marginTop: 300	
	}
};
