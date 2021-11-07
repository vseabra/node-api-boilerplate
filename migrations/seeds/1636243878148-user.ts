// Modules
import { MigrationInterface, QueryRunner } from 'typeorm';

// Entities
import { User } from '../../src/library/database/entity';

export class user1636243878148 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        const newUser: User = queryRunner.manager.create(User, {
            name: 'Administrador'
        });

        await queryRunner.manager.save(User, newUser);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.delete(User, { name: 'Administrador' });
    }
}
