import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1561751591700 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "profile" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "auth0Id" character varying, "name" character varying NOT NULL, "phoneNumber" character varying NOT NULL, "email" character varying, CONSTRAINT "UQ_401e15a38af1438fe84911d8daa" UNIQUE ("auth0Id"), CONSTRAINT "UQ_1e68703b93fb4c02a2cef6003ca" UNIQUE ("phoneNumber"), CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "profile"`);
    }

}
