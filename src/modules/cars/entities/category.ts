import { v4 as uuidv4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("categories")
class Category {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  descripition: string;

  @CreateDateColumn()
  create_at: Date;

  constructor() {
    //se não tiver um id ou for um novo objeto
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Category };
