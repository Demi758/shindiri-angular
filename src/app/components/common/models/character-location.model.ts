export class CharacterLocation {
    name: string;
    apiUrl: string;

    constructor(location: any) {
        this.name = location.name;
        this.apiUrl = location.url;
    }
}