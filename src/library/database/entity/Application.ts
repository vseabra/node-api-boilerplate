import { Entity, Column, BaseEntity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Application extends BaseEntity {
    @ObjectIdColumn()
    public id: ObjectID;

    @Column({ unique: true })
    public key: string;

    @Column({ unique: true })
    public label: string;
}
