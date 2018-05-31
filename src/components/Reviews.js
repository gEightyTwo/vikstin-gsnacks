import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getReviews } from '../actions/reviews';
import { deleteReview } from '../actions/reviews';

import Review from './Review';

class Reviews extends React.Component {
  componentDidMount() {
    this.props.getReviews()
  };

  render () {
    const reviews = this.props.reviews;
    console.log(reviews)
    return (
      <div>
        {
          reviews.map(review => <Review key={review.id} review={review} deleteReview={deleteReview}/>)
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  reviews: state.reviews.reviews
});

const mapDispatchToProps = dispatch => ({getReviews: bindActionCreators(getReviews, dispatch), deleteReview: bindActionCreators(deleteReview, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
