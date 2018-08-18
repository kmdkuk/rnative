import CommentActionType from "./CommentActionType";
import { ICommentsRead } from "./CommentAction";

export function commentsRead(comments: string): ICommentsRead {
  return {
    type: CommentActionType.COMMENTS_READ,
    comments: comments
  }
}
