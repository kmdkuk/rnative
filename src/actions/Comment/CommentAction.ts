import CommentActionType from "./CommentActionType";

export interface ICommentsRead {
  type: CommentActionType.COMMENTS_READ
  comments: string
}

export type CommentAction = ICommentsRead;
