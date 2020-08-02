import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, JoinColumn, TreeChildren, TreeParent, Tree } from "typeorm";
import { CategoryStatus } from "./category-status.enum";

@Entity()
@Tree("nested-set")
export class NewsCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  sign: string;

  @Column()
  comment?: string;

  @Column({
    type: 'enum',
    enum: CategoryStatus,
    default: CategoryStatus.draft,
  })
  status?: CategoryStatus; 

  @TreeChildren()
  children: NewsCategory[];

  @TreeParent()
  parent: NewsCategory;
  // @OneToMany(
  //   type => NewsCategory, 
  //   parentCategory => parentCategory.id, 
  //   {
  //     eager: true,
  //   }
  // )
  // @JoinColumn(
  //   { name: "parent_id" }
  // )
  // parent?: NewsCategory;

  // @ManyToOne(
  //   type => NewsCategory,
  //   children => children.parent,
  //   {
  //     cascade: true,
  //   }
  // )
  // children?: NewsCategory[];

  @CreateDateColumn()
  createDate?: any;

  @UpdateDateColumn()
  updateData?: any;
}