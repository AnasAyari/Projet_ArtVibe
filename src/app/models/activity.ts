import { User } from "./user"
import { Comment } from "./comment"
export class Activity {
    public id!:number
    public title!:string
    public photo!:string
    public description!:string
    public participantNB!:number
    public finished!:boolean 
    public participant!: User[]
    public likeusers!: User[]
    public comments!: Comment[]
    public requests!: any[]
    public likeNumber!:number
    public date!: Date
    public category!: string
    constructor(){}
}
