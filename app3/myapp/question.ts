import { Option } from "./option";

export class Question {

    public constructor(private statement : string, private options : Array<Option>) {

    }
}