import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class UserModel1558601892222 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: 'user',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'username',
                    type: 'varchar',
                    isUnique: true
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isUnique: true
                },
                {
                    name: 'bio',
                    type: 'text',
                    isNullable: true
                },
                {
                    name: 'password',
                    type: 'varchar'
                }
            ]
        }), true);
    }

    async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('user');
    }
}
