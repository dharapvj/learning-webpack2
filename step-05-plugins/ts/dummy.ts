export interface Friend{
    name: string;
    location?: string;
    id: number;
}

export class FriendComponent {
    private friends: Friend[];
    constructor() {
        this.friends = [] as Friend[];
        this.friends.push({id:4, name:'Nishant', location:'Pune (loaded via Typescript)'});
    }
    getFriends() {
        return this.friends;
    }
}
