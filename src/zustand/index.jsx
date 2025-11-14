import { create } from 'zustand';

export const useStore = create((set) => ({
  tableData: [],
  setTableData: (data) => set({ tableData: data }),
  allData: [],
  setAllData: (data) => set({ allData: data }),
}));




