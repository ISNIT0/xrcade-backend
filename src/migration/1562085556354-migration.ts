import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1562085556354 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "game" ALTER COLUMN "rating" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "game" ALTER COLUMN "rating" SET NOT NULL`);
    }

}
