import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Rating } from './Rating.model';

@Entity()
export class Game extends BaseEntity {
    @PrimaryGeneratedColumn('uuid') public id: string;
    @CreateDateColumn() public createdAt: Date;
    @UpdateDateColumn() public updatedAt: Date;

    @Column() public friendlyId: string;
    @Column() public title: string;
    @Column() public url: string;
    @Column({ nullable: true }) public poster?: string;
    @Column() public video: string;
    @Column() public description: string;
    @Column('float', { nullable: true }) public rating?: number;
    @OneToMany((type) => Rating, (r) => r.game) public ratings: Rating[];
}
