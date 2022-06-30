import CommentIndex from './comment_index';
import { connect } from 'react-redux';
import { requestListComments, deleteListComment } from '../../actions/list_comment_actions';
// import { requestUsers } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger
  const { listId } = ownProps;
  const comments = Object.values(state.entities.listComments).filter(comment => comment.list_id === listId)

  return {
    comments
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestListComments: () => dispatch(requestListComments()),
  deleteListComment: (commentId) => dispatch(deleteListComment(commentId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);
