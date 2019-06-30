import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, AfterInsert, AfterUpdate } from 'typeorm';
import { Game } from './Game.model';
import { Profile } from './Profile.model';

@Entity()
export class Rating extends BaseEntity {
    @PrimaryGeneratedColumn('uuid') public id: string;
    @CreateDateColumn() public createdAt: Date;
    @UpdateDateColumn() public updatedAt: Date;

    @ManyToOne((type) => Game, (g) => g.ratings) public game: Game;
    @ManyToOne((type) => Profile, { nullable: true }) public profile?: Profile;
    @Column() public ratingValue: number;
    @Column() public userAgent: string;

    @AfterInsert()
    async updateGameRating() {
        const game = await Game.findOne(this.game.id, { relations: ['ratings'] });
        const ratingVals = game.ratings.map((r) => r.ratingValue);
        const avgRating = ratingVals.reduce((acc, r) => acc + r, 0) / ratingVals.length;
        game.rating = Math.floor(avgRating * 10) / 10;
        await game.save();
    }
}
