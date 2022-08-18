import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterUserDeleteUsername1660825196790
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("users", "username");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn("users");
  }
}
