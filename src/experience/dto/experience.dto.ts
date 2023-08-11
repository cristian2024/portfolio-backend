export class CreateExperienceDTO {
  readonly position: string;
  readonly experience: string;
  readonly start_date: Date;
  readonly end_date?: Date;
  readonly tasks: string[];
  readonly company_id?: string;
}
