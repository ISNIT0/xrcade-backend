import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1562252230233 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "game" ADD "showTitle" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "game" DROP COLUMN "showTitle"`);
    }

}
