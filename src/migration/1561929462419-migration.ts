import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1561929462419 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "profile" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "facebookId" character varying NOT NULL, "name" character varying NOT NULL, "email" character varying, CONSTRAINT "UQ_70ef42b1f815a2e0f627d45aad2" UNIQUE ("facebookId"), CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "rating" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "ratingValue" integer NOT NULL, "userAgent" character varying NOT NULL, "gameId" uuid, "profileId" uuid, CONSTRAINT "PK_ecda8ad32645327e4765b43649e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "game" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "friendlyId" character varying NOT NULL, "title" character varying NOT NULL, "url" character varying NOT NULL, "poster" character varying NOT NULL, "video" character varying NOT NULL, "description" character varying NOT NULL, "rating" double precision NOT NULL, CONSTRAINT "PK_352a30652cd352f552fef73dec5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "rating" ADD CONSTRAINT "FK_78a45f54bcd050be9097a0dba24" FOREIGN KEY ("gameId") REFERENCES "game"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rating" ADD CONSTRAINT "FK_6b8a3e3a56ccc4d95532ed22fdc" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "rating" DROP CONSTRAINT "FK_6b8a3e3a56ccc4d95532ed22fdc"`);
        await queryRunner.query(`ALTER TABLE "rating" DROP CONSTRAINT "FK_78a45f54bcd050be9097a0dba24"`);
        await queryRunner.query(`DROP TABLE "game"`);
        await queryRunner.query(`DROP TABLE "rating"`);
        await queryRunner.query(`DROP TABLE "profile"`);
    }

}
