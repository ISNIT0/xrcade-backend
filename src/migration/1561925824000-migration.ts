import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1561925824000 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "game" DROP COLUMN "rating"`);
        await queryRunner.query(`ALTER TABLE "game" ADD "rating" double precision NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "game" DROP COLUMN "rating"`);
        await queryRunner.query(`ALTER TABLE "game" ADD "rating" integer NOT NULL`);
    }

}
