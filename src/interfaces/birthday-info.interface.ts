import { DobInterface } from "@interfaces/dob.interface";
import { CelebsInterface } from "@interfaces/celebs.interface";
import { EventsInterface } from "@interfaces/events.interface";


export interface BirthdayInfoInterface extends DobInterface,CelebsInterface,EventsInterface  {
  id: number
}
