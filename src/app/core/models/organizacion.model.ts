export class Organizacion {
    id?: number;
    logo: string;
    name: string;
    short_description: string;
    long_description: string;
    address: string;
    phone: string;
    cellphone: string;
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
    group_id?: string;
    facebook_url: string;
    linkedin_url: string;
    instagram_url: string;
    twitter_url: string;

    constructor() {
        this.logo = "",
        this.name = "",
        this.short_description = "",
        this.long_description = "",
        this.address = "",
        this.phone = "",
        this.cellphone = "",
        this.facebook_url = "",
        this.linkedin_url = "",
        this.instagram_url = "",
        this.twitter_url = ""
      }
}