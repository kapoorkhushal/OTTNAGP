import { User } from "../Models/user.interface";

export class Users{
    users: User[] = [];

    constructor() {
        this.users = [
            {"Id":1, "FullName": "Admin", "Email": "admin@gmail.com", "Password": "admin@123", "IsPrime": false, "IsAdmin": true, "Favourites":[], "WatchLater":[], "Watched": []},
            {"Id":2, "FullName": "User_2", "Email": "user2@gmail.com", "Password": "user2@123", "IsPrime": false, "IsAdmin": false, "Favourites":[], "WatchLater":[], "Watched": []},
            {"Id":3, "FullName": "User_3", "Email": "user3@gmail.com", "Password": "user3@123", "IsPrime": true, "IsAdmin": false, "Favourites":[], "WatchLater":[], "Watched": []},
            {"Id":4, "FullName": "User_4", "Email": "user4@gmail.com", "Password": "user4@123", "IsPrime": true, "IsAdmin": false, "Favourites":[], "WatchLater":[], "Watched": []},
            {"Id":5, "FullName": "User_5", "Email": "user5@gmail.com", "Password": "user5@123", "IsPrime": false, "IsAdmin": false, "Favourites":[], "WatchLater":[], "Watched": []},
        ];
    }
}