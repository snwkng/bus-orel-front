import type { goToSearch } from '@/features/mainBtnGroup/model/types';

export const useMainBtnGroupStore = defineStore('useMainBtnGroupStore', {
	state: () => ({
		searchSection: 'busTours' as goToSearch
	}),
	getters: {
		//
	},
	actions: {
		toggleSearch (val: goToSearch): void {
			this.searchSection = val;
		}
	}
})
