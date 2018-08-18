import CommentState from "../../states/Comment/CommentState";

export interface CommentListOwnProps {
}
export interface CommentListConnectedProps {
  commentState: CommentState
}

export interface CommentListDispatchProps {

}

type CommentListProps = CommentListOwnProps & CommentListConnectedProps & CommentListDispatchProps;
export default CommentListProps;
