import { defineStore } from 'pinia';

interface UserState {
    username: string;
}

export const useUserStore = defineStore('user', {
    state: (): UserState => ({
        username: '',
    }),
    actions: {
        login(username: string) {
            this.username = username;
        },
        logout() {
            this.username = '';
        },
    },
});
