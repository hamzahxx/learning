import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type the link: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    const qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qrs/qr-image.png"));
    fs.writeFile("url/url.txt", url, (err) => {
      if (err) throw err;
      console.log("suck");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
