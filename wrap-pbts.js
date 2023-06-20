
import fs from 'fs-extra';
import ps from 'path'

(async () => {
    const file = ps.join("output", 'game_event.d.ts');
    const original = await fs.readFile(file, 'utf-8');
    await fs.writeFile(
        file,
        `declare global {\n ${original} \n} \n export {}`,
    );
})();
