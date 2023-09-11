export interface MemoryItem {
  id: string
  isClicked: boolean;
  isPaired: boolean;
  pairedValue: number;
  element: JSX.Element | number;
}
