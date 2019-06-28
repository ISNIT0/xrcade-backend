import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1561754218636 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "profile" RENAME COLUMN "auth0Id" TO "facebookId"`);
        await queryRunner.query(`ALTER TABLE "profile" RENAME CONSTRAINT "UQ_401e15a38af1438fe84911d8daa" TO "UQ_70ef42b1f815a2e0f627d45aad2"`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "profile" RENAME CONSTRAINT "UQ_70ef42b1f815a2e0f627d45aad2" TO "UQ_401e15a38af1438fe84911d8daa"`);
        await queryRunner.query(`ALTER TABLE "profile" RENAME COLUMN "facebookId" TO "auth0Id"`);
    }

}
