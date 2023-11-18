import { User } from "./user"

export class Activity {
    public activityID!:number
    public title!:string
    public photo!:string
    public participantNB!:number
    public finished!:boolean
    public participant!: User[]
    public likeusers!: User[]
    public comments!: Comment[]
    public date!: Date
    public category!: string
    constructor(){}
}
