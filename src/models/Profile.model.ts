import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { IsEmail } from 'class-validator';

@Entity()
export class Profile extends BaseEntity {
    @PrimaryGeneratedColumn('uuid') public id: string;
    @CreateDateColumn() public createdAt: Date;
    @UpdateDateColumn() public updatedAt: Date;

    @Column({ unique: true }) public facebookId: string;
    @Column() public name: string;

    @Column({ nullable: true }) @IsEmail() public email: string;
}
