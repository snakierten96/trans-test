export interface IItem {
  id: number,
  name: string
}

export interface IItemDetail {
  item: IItem,
  random: IItem[]
}