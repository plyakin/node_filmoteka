import { v4 as uuidv4 } from 'uuid';
import { readFile, writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

class Course {
    constructor(title, price, img) {
        this.title = title;
        this.price = price;
        this.img = img;
        this.id = uuidv4();
    }

    toJSON() {
        return {
            title: this.title,
            price: this.price,
            img: this.img,
            id: this.id,
        };
    }

    async save() {
        const courses = await Course.getAll();
        const res = JSON.parse(courses);
        res.push(this.toJSON());
        const txt = JSON.stringify(res);
        await Course.writeFile(txt);
    }

    static async getAll() {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);
        try {
            return await readFile(path.join(__dirname, '..', 'data', 'courses.json'), { encoding: 'utf8' });
        } catch (err) {
            console.log(err.message);
        }
    }

    static async writeFile(txt) {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);
        try {
            await writeFile(path.join(__dirname, '..', 'data', 'courses.json'), txt);
        } catch (err) {
            console.error(err);
        }
    }
}

export default Course;
