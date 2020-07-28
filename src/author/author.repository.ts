import { Repository, EntityRepository } from "typeorm";
import { Author } from "./author.entity";
import { CreateAuthorDto } from "./dto/create-author.dto";

@EntityRepository(Author)
export class AuthorRepository extends Repository<Author> {
    async getAllAuthors(): Promise<Author[]> {
        const query = this.createQueryBuilder('author');
        const authors = await query.getMany();
        return authors;
    }

    async getById(id: number): Promise<Author> {
        return await this.findOne(id);
    }

    async saveAuthor(createAuthorDto: CreateAuthorDto): Promise<Author> {
        const { name, lastName, age, nationality, birthdate } = createAuthorDto;

        const author = new Author();
        author.name = name;
        author.lastName = lastName;
        author.age = age;
        author.nacionality = nationality;
        author.birthdate = birthdate;

        await this.save(author);

        return author;
    }
}