import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1561754768680 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "profile" DROP CONSTRAINT "UQ_1e68703b93fb4c02a2cef6003ca"`);
        await queryRunner.query(`ALTER TABLE "profile" DROP COLUMN "phoneNumber"`);
        await queryRunner.query(`ALTER TABLE "profile" ALTER COLUMN "facebookId" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "profile" ALTER COLUMN "facebookId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "profile" ADD "phoneNumber" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "profile" ADD CONSTRAINT "UQ_1e68703b93fb4c02a2cef6003ca" UNIQUE ("phoneNumber")`);
    }

}
