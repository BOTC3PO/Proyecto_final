import type { Block } from "./book.types";


export const makePageIdFromNumber = (pageNumber: number): string => {
  return `page-${pageNumber}`;
};

export const makeBlockId = (pageId: string, blockType: Block["type"], blockIndex: number): string => {
  return `${pageId}-${blockType}-${blockIndex}`;
};
