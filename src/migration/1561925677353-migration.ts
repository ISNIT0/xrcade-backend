import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1561925677353 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "game" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "friendlyId" character varying NOT NULL, "title" character varying NOT NULL, "url" character varying NOT NULL, "poster" character varying NOT NULL, "video" character varying NOT NULL, "description" character varying NOT NULL, "rating" integer NOT NULL, CONSTRAINT "PK_352a30652cd352f552fef73dec5" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "game"`);
    }

}
