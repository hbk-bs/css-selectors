const fs = require("fs");
const path = require("path");

const folders = [
	"element-selector",
	"class-selector",
	"id-selector",
	"attribute-selector",
	"pseudo-class-selector",
	"pseudo-element-selector",
	"child-selector",
	"descendant-selector",
	"adjacent-sibling-selector",
	"general-sibling-selector",
	"universal-selector",
];
const sectionStartMarker = "<!-- SNIPPETS START -->";
const sectionEndMarker = "<!-- SNIPPETS END -->";

const snippets = folders.map((folder) => {
	const filePath = path.resolve(process.cwd(), `${folder}/index.html`);
	if (fs.existsSync(filePath)) {
		const fileContent = fs.readFileSync(filePath, "utf-8");
		return `## ${folder.replace(
			"-",
			" ",
		)}:\n\`\`\`html\n \n\n${fileContent}\n\n\`\`\`\n`;
	} else {
		console.log(`File ${filePath} does not exist`);
	}
	return "";
});

const snippetsContent = snippets.join("");

fs.readFile("README.md", "utf-8", (err, data) => {
	if (err) throw err;

	const sectionStart = data.indexOf(sectionStartMarker);
	const sectionEnd = data.indexOf(sectionEndMarker, sectionStart);
	const newContent =
		data.slice(0, sectionStart) +
		sectionStartMarker +
		"\n\n" +
		snippetsContent +
		sectionEndMarker +
		data.slice(sectionEnd);

	fs.writeFile("README.md", newContent, "utf-8", (err) => {
		if (err) throw err;
		console.log("Snippets added to README.md");
	});
});
