
import fs from 'fs-extra';
import ps from 'path'

(async () => {
    const filePath = ps.join("..", "Test","protos", 'game_event.d.ts');
    const original = await fs.readFile(filePath, 'utf-8');
    await fs.writeFile(
        filePath,
        `declare global {\n ${original} \n} \n export {}`,
    );
})();
