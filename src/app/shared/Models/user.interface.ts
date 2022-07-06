
export interface User{
    Id: Number;
    FullName: string;
    Email: string;
    Password: string;
    IsSignedin?: Boolean;
    IsPrime: Boolean;
    IsAdmin: Boolean;
    SubscriptionDate?: Date;
    Favourites?: Number[];
    Watched?: Number[];
    WatchLater?: Number[];
}