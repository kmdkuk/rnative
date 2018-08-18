import CommentState from "../../states/Comment/CommentState";

export interface CommentListOwnProps {
  users: any;
}
export interface CommentListConnectedProps {
  commentState: CommentState
}

export interface CommentListDispatchProps {

}

type CommentListProps = CommentListOwnProps & CommentListConnectedProps & CommentListDispatchProps;
export default CommentListProps;
