import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1562236009367 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "game" ALTER COLUMN "poster" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "game" ALTER COLUMN "poster" SET NOT NULL`);
    }

}
