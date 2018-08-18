export interface BoardLineOwnProps {
  active: boolean
  rowData: any
  onPress: (id: number) => void;
}

export interface BoardLineConnectedProps {
}

export interface BoardLineDispatchProps {
}

type BoardLineProps = BoardLineOwnProps & BoardLineConnectedProps & BoardLineDispatchProps
export default BoardLineProps;
