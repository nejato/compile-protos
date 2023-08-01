import pbts from "protobufjs/cli/pbts.js";
import pbjs from "protobufjs/cli/pbjs.js";
import ps from "path";
import fs from "fs-extra";
import { argv } from "process";

(async () => {
    const file = ps.join(".", "fileConfig.json");
    const original = await fs.readFile(file, "utf-8");
    const data = JSON.parse(original);
    let sourcePath = data.source_path;
    // console.log(data)
    console.log("params ", argv[2]);
    let item = data.list.find((elm) => elm.name == argv[2]);
    if(!item){
        console.error("file dont exist");
    }
    let fileSourcePath = ps.join(sourcePath, item.name + ".proto");
    if (fs.existsSync(fileSourcePath)) {
        let dtsFilePath = ps.join(item.output, item.name + ".d.ts");
        if (!fs.existsSync(dtsFilePath)) {
            fs.writeFileSync(dtsFilePath, "");
        }
        let djsFilePath = ps.join(item.output, item.name + ".js");
        if (!fs.existsSync(djsFilePath)) {
            fs.writeFileSync(djsFilePath, "");
        }
        pbjs.main(
            ["--target", "static-module", "--wrap", "./wrap-pbjs-unglobal.js", "--out", djsFilePath, fileSourcePath],
            (err) => {
                if (!err) {
                    pbts.main(["--main", "--out", dtsFilePath, djsFilePath], (err1) => {
                        if (!err1) {
                            (async () => {
                                const filePath = dtsFilePath; // ps.join("..", "Test", "protos", item.name+ ".d.ts");
                                const original = await fs.readFile(filePath, "utf-8");
                                await fs.writeFile(filePath, `declare global {${original} \n} \n export {}`);
                            })();
                        } else {
                            console.log("Error in pbts command");
                        }
                    });
                } else {
                    console.log("Err : ", err);
                }
            }
        );
    } else {
        console.log("file ", fileSourcePath, " dont exist");
    }
})();
