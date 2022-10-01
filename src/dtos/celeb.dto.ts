import { IsEmail, IsString } from "class-validator";

export class CelebDto {

  public type: string

  public celeb_birthyear: number

  public celeb_description: string

  public celeb_bio: string

}
