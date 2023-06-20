import pbts from "protobufjs/cli/pbts.js";
import pbjs from "protobufjs/cli/pbjs.js";
import ps from "path";
import fs from "fs-extra";

(async () => {
  const file = ps.join(".", "fileConfig.json");
  const original = await fs.readFile(file, "utf-8");
  const data = JSON.parse(original);
  let sourcePath = data.source_path;
  // console.log(data)
  for (let i = 0; i < data.list.length; i++) {
    let item = data.list[i];
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
        ["--target", "static-module", "--wrap", "./wrap-pbjs.js", "--out", djsFilePath, fileSourcePath],
        (err) => {
          if (!err) {
            pbts.main(["--main", "--out", dtsFilePath, djsFilePath]);
          }
        }
      );
    } else {
      console.log("file ", fileSourcePath, " dont exist");
      continue;
    }
  }
})();
